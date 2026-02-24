# Deploying ScreenFusion to Plesk (www.screenfusion.ai)

## Live URL

**https://www.screenfusion.ai/**

The **2026** folder is set as the document root (hosting home) in Plesk, so the app is served from the domain root.

## One-command deploy (PowerShell)

Requires **Posh-SSH** (`Install-Module Posh-SSH`) and Node.js.

```powershell
# Option A: set password in env (this session only), then run
$env:DEPLOY_PASSWORD = 'your-ssh-password'
.\deploy.ps1

# Option B: run and type password when prompted
.\deploy.ps1
```

The script builds the site, then SCPs the contents of `dist/` to **httpdocs/2026** on **78.153.200.34** (the 2026 folder, which is the document root).

## Manual build and upload

1. **Build:** `npm run build` (output in `dist/`).
2. **Upload** everything inside `dist/` into the server folder **httpdocs/2026** (document root). Ensure **`.htaccess`** is uploaded.

## After deploy

- Open **https://www.screenfusion.ai/** and click through main pages.
- Test a direct link, e.g. **https://www.screenfusion.ai/pricing/**.
- Check **https://www.screenfusion.ai/robots.txt** and **https://www.screenfusion.ai/sitemap.xml**.

## Bot and SEO

- **robots.txt** allows all crawlers and points to **https://www.screenfusion.ai/sitemap.xml**.
- **index.html** has `<meta name="robots" content="index, follow">` and canonical/OG URLs for the domain root.

---

**Quick reference**

| Item        | Value |
|------------|--------|
| URL        | https://www.screenfusion.ai/ |
| Server     | 78.153.200.34 |
| SSH user   | screenfusion.ai_cursor |
| Remote path| httpdocs/2026 (document root) |
| Build      | `npm run build` |
| Deploy     | `.\deploy.ps1` (with `$env:DEPLOY_PASSWORD` set or when prompted) |
