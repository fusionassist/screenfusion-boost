import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Check, ArrowRight, HelpCircle, Download } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type CurrencyCode = "EUR" | "USD" | "GBP" | "AUD" | "CAD" | "CHF" | "SEK" | "PLN" | "BRL" | "TRY" | "JPY";

interface CurrencyInfo {
  symbol: string;
  label: string;
  rate: number;
  decimals: number;
}

const currencies: Record<CurrencyCode, CurrencyInfo> = {
  EUR: { symbol: "€", label: "Euro (€)", rate: 1, decimals: 2 },
  USD: { symbol: "$", label: "US Dollar ($)", rate: 1.08, decimals: 2 },
  GBP: { symbol: "£", label: "British Pound (£)", rate: 0.86, decimals: 2 },
  AUD: { symbol: "A$", label: "Australian Dollar (A$)", rate: 1.67, decimals: 2 },
  CAD: { symbol: "C$", label: "Canadian Dollar (C$)", rate: 1.48, decimals: 2 },
  CHF: { symbol: "CHF", label: "Swiss Franc (CHF)", rate: 0.96, decimals: 2 },
  SEK: { symbol: "kr", label: "Swedish Krona (kr)", rate: 11.2, decimals: 0 },
  PLN: { symbol: "zł", label: "Polish Złoty (zł)", rate: 4.32, decimals: 2 },
  BRL: { symbol: "R$", label: "Brazilian Real (R$)", rate: 5.45, decimals: 2 },
  TRY: { symbol: "₺", label: "Turkish Lira (₺)", rate: 34.5, decimals: 0 },
  JPY: { symbol: "¥", label: "Japanese Yen (¥)", rate: 163, decimals: 0 },
};

const basePrices = { pro: 13.99, business: 168 };

const formatPrice = (eurAmount: number, curr: CurrencyCode): string => {
  const c = currencies[curr];
  const converted = eurAmount * c.rate;
  const rounded = Math.round(converted * 2) / 2; // round to nearest .50
  if (c.decimals === 0) {
    return `${c.symbol}${Math.round(rounded)}`;
  }
  return `${c.symbol}${rounded.toFixed(2)}`;
};

const getPlans = (currency: CurrencyCode) => [
  {
    name: "Trial",
    description: "14 day trial — try all features free",
    price: "Free",
    period: "14 days",
    badge: null,
    features: [
      "All features of Pro",
      "No customer support",
      "No training provided",
    ],
    cta: "Get Started",
    href: "https://app.screenfusion.ai",
    popular: false,
  },
  {
    name: "Pro",
    description: "Full access — everything you need",
    price: formatPrice(basePrices.pro, currency),
    period: "per screen / month",
    badge: "Most Popular",
    features: [
      "Unlimited cloud storage",
      "Team management",
      "Unlimited playlists",
      "Display statistics",
      "All media formats",
      "Customer support",
      "Training provided",
    ],
    cta: "Get Started",
    href: "https://app.screenfusion.ai",
    popular: true,
  },
  {
    name: "Business",
    description: "Annual plan — best value",
    price: formatPrice(basePrices.business, currency),
    period: "per screen / annually",
    badge: "1 Month Free",
    features: [
      "1 month free vs monthly",
      "All features of Pro",
      "Customer support",
      "Training provided",
    ],
    cta: "Get Started",
    href: "https://app.screenfusion.ai",
    popular: false,
  },
];

const faqs = [
  {
    question: "How many screens are supported?",
    answer: "Screen Fusion supports as many screens as you need under a single account. We provide mass management of multiple monitors, along with tag-based searches.",
  },
  {
    question: "Is it really unlimited cloud storage?",
    answer: "We give all paid screen accounts a standard allocation of 10GB. If you require more storage space, we can offer an extension. Please note that we expect the storage capacity to be used exclusively for digital signage content.",
  },
  {
    question: "What hardware do I need?",
    answer: "Our platform is compatible with a wide array of devices including Android-based displays/players (Android OS 5+), Amazon FireTV devices, WebOS Signage, Windows-based players, Linux-based players, Raspberry Pi, and web-based players.",
  },
  {
    question: "Does it cost extra for apps?",
    answer: "Our paid membership offers all applications at no extra cost, allowing immediate use of our digital signage services. Let us know if you have any questions or concerns.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! We offer a free 14-day trial for new customers with full access to all Pro features. No credit card required to get started.",
  },
  {
    question: "Can I cancel at any time?",
    answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts. Annual plans are billed once per year and are non-refundable after the trial period.",
  },
];

const Pricing = () => {
  const [currency, setCurrency] = useState<CurrencyCode>("EUR");
  const currentPlans = getPlans(currency);

  useEffect(() => {
    document.title = "Digital Signage Pricing | ScreenFusion";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "ScreenFusion digital signage pricing starts at €13.99/screen/month. Free 14-day trial, no credit card required. Compare Pro and Business plans for AI-powered digital signage CMS.");
  }, []);

  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ScreenFusion Digital Signage CMS",
    "description": "AI-powered, multi-site digital signage CMS with Canva integration, AI demographic profiling, touchscreen web app builder, and dynamic pricing via Google Sheets.",
    "brand": { "@type": "Brand", "name": "ScreenFusion" },
    "offers": [
      {
        "@type": "Offer",
        "name": "Free Trial",
        "price": "0",
        "priceCurrency": "EUR",
        "description": "14-day free trial with full Pro features. No credit card required.",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Pro Plan",
        "price": "13.99",
        "priceCurrency": "EUR",
        "unitText": "per screen per month",
        "description": "Full access to all features including unlimited cloud storage, team management, and customer support.",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Business Plan",
        "price": "168",
        "priceCurrency": "EUR",
        "unitText": "per screen per year",
        "description": "Annual plan — 1 month free compared to monthly billing. All Pro features included.",
        "availability": "https://schema.org/InStock"
      }
    ]
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="chip mb-4">Pricing</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Choose the Right{" "}
              <span className="text-primary">Plan for Your Signage</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We offer competitive plans for small and large businesses with a free 14-day trial for new customers.
            </p>
          </div>
        </div>
      </section>

      {/* Currency Selector */}
      <section className="pt-12 pb-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <span className="text-sm font-medium text-muted-foreground">Currency:</span>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
                className="px-3 py-2 text-sm rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                {(Object.keys(currencies) as CurrencyCode[]).map((code) => (
                  <option key={code} value={code}>{currencies[code].label}</option>
                ))}
              </select>
            </div>
            {currency !== "EUR" && (
              <p className="text-xs text-muted-foreground">
                Approximate conversion · Base price in EUR ·{" "}
                <a
                  href="https://www.xe.com/currencyconverter/convert/?From=EUR&To=${currency}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  View live rates →
                </a>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {currentPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative feature-card flex flex-col ${
                  plan.popular ? "border-primary ring-1 ring-primary" : ""
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-semibold bg-primary text-white rounded-full whitespace-nowrap">
                      {plan.badge}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-1">
                    <span className="text-4xl font-display font-bold text-foreground">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.period}</p>
                  {plan.price !== "Free" && (
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      +VAT 23% (Ireland) · 0% EU/UK/Rest of World with valid VAT/Tax ID
                    </p>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold text-sm transition-all ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "border border-border text-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Not sure which plan is right for you?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team can help you find the perfect solution for your needs and budget.
            </p>
            <a
              href="/contact/"
              className="btn-outline inline-flex items-center gap-2"
            >
              Ask a Question
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Download App */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Download the App
            </h2>
            <p className="text-muted-foreground mb-6">
              Get the ScreenFusion Android app to turn any Android device into a digital signage player.
            </p>
            <a
              href="/downloads/Screenfusion_244.apk"
              download
              className="btn-hero inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Android App (.apk)
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 text-center">
              Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-secondary/50 border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <span className="flex items-center gap-3 text-left font-semibold text-foreground">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }} />
    </Layout>
  );
};

export default Pricing;
