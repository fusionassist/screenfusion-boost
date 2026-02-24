import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ShoppingCart, Check, Minus, Plus, ArrowRight, Shield, Truck, RefreshCw } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { publicUrl } from "@/lib/utils";

const PLAYER_PRICE_EUR = 99;

const features = [
  "Quad-core processor",
  "4K UHD output",
  "Wi-Fi & Ethernet",
  "HDMI 2.0 output",
  "USB 3.0 ports",
  "Silent fanless design",
  "Auto-start on power",
  "Remote management",
  "Pre-installed ScreenFusion",
  "Plug & play setup",
];

const Shop = () => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-hardware-checkout", {
        body: { quantity },
      });
      if (error) throw error;
      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Something went wrong. Please try again or contact us.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="chip mb-4">Shop</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              ScreenFusion{" "}
              <span className="text-primary">Player</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Purpose-built digital signage hardware. Plug it in, connect to your account, and you're live.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            {/* Product Image */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-hover">
              <img
                src={publicUrl("images/hardware/screenfusion-player.jpg")}
                alt="ScreenFusion Player - Digital Signage Media Player"
                className="w-full h-auto"
              />
            </div>

            {/* Product Info */}
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                ScreenFusion Player
              </h2>
              <p className="text-sm text-muted-foreground mb-4">Recommended Hardware</p>

              <div className="mb-6">
                <span className="text-4xl font-display font-bold text-foreground">€{PLAYER_PRICE_EUR}</span>
                <span className="text-muted-foreground ml-2">per unit</span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                The ScreenFusion Player is our recommended media player for digital signage. 
                It comes pre-installed with the ScreenFusion app and is ready to use out of the box. 
                Simply connect to a display via HDMI, power on, and pair with your ScreenFusion account.
              </p>

              {/* Features */}
              <ul className="grid grid-cols-2 gap-2 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-foreground">Quantity:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-secondary transition-colors rounded-l-lg"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-sm font-semibold min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(100, quantity + 1))}
                    className="p-2 hover:bg-secondary transition-colors rounded-r-lg"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-sm text-muted-foreground">
                  Total: <strong className="text-foreground">€{(PLAYER_PRICE_EUR * quantity).toLocaleString()}</strong>
                </span>
              </div>

              {/* Buy Button */}
              <button
                onClick={handleCheckout}
                disabled={loading}
                className="btn-primary w-full inline-flex items-center justify-center gap-2 py-4 text-base disabled:opacity-50"
              >
                {loading ? (
                  "Processing..."
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Buy Now — €{(PLAYER_PRICE_EUR * quantity).toLocaleString()}
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground mt-3 text-center">
                +VAT where applicable · Secure checkout via Stripe
              </p>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                <div className="text-center">
                  <Shield className="w-6 h-6 text-primary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Secure Payment</p>
                </div>
                <div className="text-center">
                  <Truck className="w-6 h-6 text-primary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Worldwide Shipping</p>
                </div>
                <div className="text-center">
                  <RefreshCw className="w-6 h-6 text-primary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">1 Year Warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volume info */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-display font-bold text-foreground mb-3">
            Need bulk orders?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Ordering 10+ players? Contact us for volume pricing and custom configuration options.
          </p>
          <a href="/contact/" className="btn-outline inline-flex items-center gap-2">
            Contact Sales <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
