import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  "Significant volume discounts on screen licenses",
  "White-label with your own brand, URL & logo",
  "Full admin portal to manage all client accounts",
  "Priority technical support & onboarding assistance",
  "Free software updates for all your clients",
  "Dedicated partner success manager",
  "API access for custom integrations",
  "Co-marketing and sales material support",
];

export const ResellerSection = () => {
  return (
    <section className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left visual */}
          <div className="relative order-2 lg:order-1">
            <div className="bg-white rounded-2xl border border-border shadow-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <div className="font-display font-bold text-foreground">Partner Program</div>
                  <div className="text-sm text-muted-foreground">White-label digital signage</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <div className="text-3xl font-display font-bold text-primary mb-1">∞</div>
                  <div className="text-xs text-muted-foreground">Client Accounts</div>
                </div>
                <div className="bg-secondary rounded-xl p-4 text-center">
                  <div className="text-3xl font-display font-bold text-primary mb-1">100%</div>
                  <div className="text-xs text-muted-foreground">Your Branding</div>
                </div>
              </div>

              <ul className="space-y-2.5">
                {["Your brand, your clients", "Full admin portal access", "No technical overhead", "Dedicated support team"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                to="/digital-signage-software-partner-white-label/"
                className="btn-primary mt-6 w-full flex items-center justify-center gap-2 text-sm"
              >
                Apply to Become a Partner <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right text */}
          <div className="order-1 lg:order-2">
            <span className="chip mb-5">Reseller Program</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5">
              Grow Your Business with{" "}
              <span className="text-primary">White-Label Digital Signage</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-7 leading-relaxed">
              Offer enterprise-grade digital signage under your own brand. 
              We handle the technology and infrastructure — you focus on winning clients and growing revenue.
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
