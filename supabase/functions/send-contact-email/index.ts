import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

async function getAccessToken(): Promise<string> {
  const tenantId = Deno.env.get('AZURE_TENANT_ID');
  const clientId = Deno.env.get('AZURE_CLIENT_ID');
  const clientSecret = Deno.env.get('AZURE_CLIENT_SECRET');

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error('Azure credentials not configured');
  }

  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials',
  });

  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(`Token request failed [${response.status}]: ${JSON.stringify(data)}`);
  }

  return data.access_token;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { formType, firstName, lastName, email, company, subject, message, program, website, country, screens } = await req.json();

    // Build email body based on form type
    let emailSubject: string;
    let emailBody: string;

    if (formType === 'contact') {
      emailSubject = `Contact Form: ${subject || 'New Enquiry'}`;
      emailBody = `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          ${company ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${company}</td></tr>` : ''}
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Subject</td><td style="padding:8px;border-bottom:1px solid #eee;">${subject}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Message</td><td style="padding:8px;border-bottom:1px solid #eee;">${message}</td></tr>
        </table>
      `;
    } else if (formType === 'reseller') {
      emailSubject = `Partner Application: ${program === 'white-label' ? 'White Label' : 'Standard Reseller'} — ${company}`;
      emailBody = `
        <h2>New Partner Application</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Program</td><td style="padding:8px;border-bottom:1px solid #eee;">${program === 'white-label' ? 'White Label Partner' : 'Standard Reseller'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${firstName} ${lastName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${company}</td></tr>
          ${website ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Website</td><td style="padding:8px;border-bottom:1px solid #eee;">${website}</td></tr>` : ''}
          ${country ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Country</td><td style="padding:8px;border-bottom:1px solid #eee;">${country}</td></tr>` : ''}
          ${screens ? `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Expected Screens (Year 1)</td><td style="padding:8px;border-bottom:1px solid #eee;">${screens}</td></tr>` : ''}
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">About Business</td><td style="padding:8px;border-bottom:1px solid #eee;">${message}</td></tr>
        </table>
      `;
    } else {
      throw new Error('Invalid form type');
    }

    const accessToken = await getAccessToken();

    // Send email via Microsoft Graph API
    const graphResponse = await fetch('https://graph.microsoft.com/v1.0/users/sales@screenfusion.ai/sendMail', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: {
          subject: emailSubject,
          body: {
            contentType: 'HTML',
            content: emailBody,
          },
          toRecipients: [
            { emailAddress: { address: 'sales@screenfusion.ai' } },
          ],
          replyTo: [
            { emailAddress: { address: email, name: `${firstName} ${lastName}` } },
          ],
        },
      }),
    });

    if (!graphResponse.ok) {
      const errorData = await graphResponse.text();
      throw new Error(`Graph API failed [${graphResponse.status}]: ${errorData}`);
    } else {
      await graphResponse.text();
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
