import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SCREENFUSION_PLAYER_PRICE_ID = "price_1T48UYDvS0aU2lsJnlkEy3IC";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { quantity = 1 } = await req.json();

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    const origin = req.headers.get("origin") || "https://screenfusion-boost.lovable.app";

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: SCREENFUSION_PLAYER_PRICE_ID,
          quantity: Math.max(1, Math.min(quantity, 100)),
        },
      ],
      mode: "payment",
      success_url: `${origin}/shop/success`,
      cancel_url: `${origin}/shop/`,
      shipping_address_collection: {
        allowed_countries: [
          "IE", "GB", "US", "DE", "FR", "ES", "IT", "NL", "BE", "AT", "PT",
          "PL", "SE", "DK", "FI", "NO", "CH", "AU", "CA", "JP", "BR", "TR",
          "GR", "HR", "HU",
        ],
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error creating checkout session:", errorMessage);
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
