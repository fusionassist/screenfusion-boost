# Deploy ScreenFusion to Plesk (httpdocs/2026)
# Usage: $env:DEPLOY_PASSWORD = 'your-ssh-password'; .\deploy.ps1
# Or run and type password when prompted (if Posh-SSH prompts).

$ErrorActionPreference = 'Stop'
$server = '78.153.200.34'
$user = 'screenfusion.ai_cursor'
$remotePath = 'httpdocs'
$deployDir = '2026'

# Load DEPLOY_PASSWORD from .env if present (optional; .env should be in .gitignore)
$envPath = Join-Path $PSScriptRoot '.env'
if (Test-Path $envPath) {
    Get-Content $envPath | ForEach-Object {
        if ($_ -match '^\s*DEPLOY_PASSWORD\s*=\s*["'']?(.+?)["'']?\s*$') {
            $env:DEPLOY_PASSWORD = $matches[1].Trim()
        }
    }
}

# Get password from env or prompt (never commit the password)
$passPlain = $env:DEPLOY_PASSWORD
if (-not $passPlain) {
    $sec = Read-Host -AsSecureString 'SSH password for screenfusion.ai_cursor'
    $bstr = [System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($sec)
    $passPlain = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto($bstr)
    [System.Runtime.InteropServices.Marshal]::ZeroFreeBSTR($bstr)
}
$cred = New-Object System.Management.Automation.PSCredential($user, (ConvertTo-SecureString $passPlain -AsPlainText -Force))

Write-Host 'Building...' -ForegroundColor Cyan
Push-Location $PSScriptRoot
npm run build
if ($LASTEXITCODE -ne 0) { Pop-Location; exit 1 }

$tempDir = Join-Path $env:TEMP "deploy_2026"
if (Test-Path $tempDir) { Remove-Item $tempDir -Recurse -Force }
New-Item -ItemType Directory -Path $tempDir -Force | Out-Null
Copy-Item -Path ".\dist\*" -Destination $tempDir -Recurse -Force

# Upload folder "2026" so it appears as httpdocs/2026 on server
$parent = Split-Path $env:TEMP
$targetDir = Join-Path $parent "2026"
if (Test-Path $targetDir) { Remove-Item $targetDir -Recurse -Force }
New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
Copy-Item -Path "$tempDir\*" -Destination $targetDir -Recurse -Force
Remove-Item $tempDir -Recurse -Force

Write-Host "Uploading to $server`:httpdocs/2026 ..." -ForegroundColor Cyan
Set-SCPItem -ComputerName $server -Credential $cred -Path $targetDir -Destination $remotePath -AcceptKey -Force -OperationTimeout 180
Remove-Item $targetDir -Recurse -Force
Pop-Location
Write-Host 'Done. Site: https://www.screenfusion.ai/2026/' -ForegroundColor Green
