import { Layout } from "@/components/layout/Layout";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Free",
    description: "Perfect for trying out ScreenFusion",
    price: "$0",
    period: "forever",
    screens: "1 screen",
    features: [
      "1 screen included",
      "Basic templates",
      "Cloud-based management",
      "Standard support",
      "10GB storage",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing businesses",
    price: "$10",
    period: "per screen/month",
    screens: "2-50 screens",
    features: [
      "Everything in Free",
      "Advanced scheduling",
      "All templates & apps",
      "Priority support",
      "Unlimited storage",
      "Analytics dashboard",
      "Team collaboration",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    period: "contact us",
    screens: "50+ screens",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
      "White-label options",
      "On-premise deployment",
      "Advanced security",
      "API access",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "How does the free plan work?",
    answer: "Our free plan gives you access to 1 screen forever with basic features. No credit card required. It's perfect for testing ScreenFusion before scaling up.",
  },
  {
    question: "Can I change plans at any time?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged a prorated amount. When downgrading, you'll receive credit for future billing.",
  },
  {
    question: "What hardware do I need?",
    answer: "ScreenFusion works with most Android devices (5.0+), Windows PCs, Linux systems, and any device with a modern web browser. We also offer dedicated hardware players.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No long-term contracts required. Our plans are billed monthly or annually. Annual plans receive a discount. Cancel anytime.",
  },
  {
    question: "Do you offer volume discounts?",
    answer: "Yes! We offer significant discounts for larger deployments. Contact our sales team for custom pricing on 50+ screens.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "Free plans include email support. Professional plans include priority email and chat support. Enterprise plans include dedicated account managers and phone support.",
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-glow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Simple, Transparent{" "}
              <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Start free, scale as you grow. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative feature-card ${
                  plan.popular ? "border-primary" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-semibold bg-gradient-primary text-primary-foreground rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-4xl font-display font-bold">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.screens}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={plan.popular ? "btn-hero w-full" : "btn-ghost w-full"}
                  asChild
                >
                  <a href="https://manage.screenfusion.ai" target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Teaser */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Not sure which plan is right for you?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our team can help you find the perfect solution for your needs and budget.
            </p>
            <Button className="btn-ghost" asChild>
              <a href="/contact/">
                Talk to Sales
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <span className="flex items-center gap-3 text-left">
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
    </Layout>
  );
};

export default Pricing;
