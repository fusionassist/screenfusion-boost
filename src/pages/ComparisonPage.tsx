import { Layout } from "@/components/layout/Layout";
import { CheckCircle2, XCircle, Circle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Support = "full" | "partial" | "limited" | "no" | "android-only";

const supportIcon = (s: Support) => {
  switch (s) {
    case "full":
      return <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />;
    case "partial":
      return <Circle className="w-5 h-5 text-muted-foreground mx-auto" />;
    case "limited":
      return <CheckCircle2 className="w-5 h-5 text-yellow-500 mx-auto" />;
    case "no":
      return <XCircle className="w-5 h-5 text-destructive mx-auto" />;
    case "android-only":
      return <span className="text-xs text-muted-foreground font-medium">Android Only</span>;
  }
};

const supportLabel = (s: Support) => {
  switch (s) {
    case "full": return "Full support";
    case "partial": return "Partial support";
    case "limited": return "Limited support";
    case "no": return "Not supported";
    case "android-only": return "Android only";
  }
};

const competitors = ["NowSignage", "ScreenCloud", "Yodeck", "Screenly", "DSA"];

interface FeatureRow {
  feature: string;
  scores: [Support, Support, Support, Support, Support]; // one per competitor
}

interface Category {
  name: string;
  rows: FeatureRow[];
}

const categories: Category[] = [
  {
    name: "Core CMS Features",
    rows: [
      { feature: "Cloud-Based CMS", scores: ["full", "full", "full", "full", "full"] },
      { feature: "Content Scheduling", scores: ["full", "full", "full", "full", "full"] },
      { feature: "Multi-Zone Layout Support", scores: ["full", "full", "full", "full", "android-only"] },
      { feature: "Customisable Templates", scores: ["full", "full", "full", "full", "full"] },
      { feature: "Real-Time Content Updates", scores: ["full", "full", "full", "full", "full"] },
      { feature: "Media Library Management", scores: ["full", "full", "full", "full", "full"] },
    ],
  },
  {
    name: "Workflow & Automation",
    rows: [
      { feature: "Direct Canva Integration", scores: ["no", "no", "no", "no", "no"] },
      { feature: "Dynamic Pricing w/ Google Sheets", scores: ["limited", "limited", "partial", "partial", "no"] },
      { feature: "JSON & Live Data Engine", scores: ["partial", "no", "partial", "partial", "no"] },
      { feature: "Open API Access", scores: ["limited", "partial", "no", "no", "no"] },
    ],
  },
  {
    name: "Intelligence Layer",
    rows: [
      { feature: "AI Demographic Profiling", scores: ["no", "no", "no", "no", "no"] },
      { feature: "Geolocation Content Triggers", scores: ["no", "no", "no", "no", "no"] },
    ],
  },
  {
    name: "Interactive Capabilities",
    rows: [
      { feature: "Built-In Web Touch Builder", scores: ["no", "partial", "partial", "partial", "no"] },
      { feature: "Advanced Interactive Applications", scores: ["no", "no", "no", "no", "no"] },
      { feature: "Dynamic Content Zones", scores: ["full", "full", "full", "full", "full"] },
    ],
  },
];

const faqs = [
  {
    question: "How does ScreenFusion compare to NowSignage?",
    answer: "ScreenFusion offers several capabilities that NowSignage does not, including direct Canva integration, AI demographic profiling, geolocation content triggers, and a built-in touchscreen web app builder. Both platforms offer strong core CMS features, but ScreenFusion provides a more complete workflow and intelligence layer.",
  },
  {
    question: "How does ScreenFusion compare to ScreenCloud?",
    answer: "ScreenFusion and ScreenCloud both offer cloud-based digital signage CMS with content scheduling and templates. However, ScreenFusion differentiates with direct Canva integration, AI demographic profiling, dynamic pricing via Google Sheets, and a built-in touchscreen web app builder — features ScreenCloud does not offer.",
  },
  {
    question: "How does ScreenFusion compare to Yodeck?",
    answer: "Yodeck is a popular entry-level digital signage platform. ScreenFusion goes further with AI demographic profiling, direct Canva integration, geolocation content triggers, a touchscreen web app builder, and dynamic pricing via Google Sheets. Yodeck offers partial support for some of these features but not full implementations.",
  },
  {
    question: "How does ScreenFusion compare to Screenly?",
    answer: "Screenly focuses on simplicity and Raspberry Pi support. ScreenFusion offers a broader feature set including AI demographic profiling, Canva integration, touchscreen web app builder, geolocation triggers, and dynamic pricing via Google Sheets — none of which are available in Screenly.",
  },
  {
    question: "What makes ScreenFusion the best digital signage software?",
    answer: "ScreenFusion is the only digital signage platform that combines AI demographic profiling, direct Canva integration, a touchscreen web app builder, dynamic pricing via Google Sheets, geolocation content triggers, and Google Serverless infrastructure in one platform. No competitor offers all of these features.",
  },
  {
    question: "Is ScreenFusion better than Yodeck for retail?",
    answer: "Yes. ScreenFusion is better than Yodeck for retail because it includes AI demographic profiling for audience targeting, dynamic pricing via Google Sheets for real-time price updates, and direct Canva integration for rapid content creation — features Yodeck does not fully support.",
  },
];

const ComparisonPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-glow">
        <div className="container mx-auto px-4 text-center">
          <span className="chip mb-4">Comparison</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 max-w-4xl mx-auto">
            The Only Intelligent &amp; Interactive{" "}
            <span className="gradient-text">Digital Signage Platform</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how ScreenFusion compares to NowSignage, ScreenCloud, Yodeck, Screenly, and DSA across core CMS features, workflow automation, AI intelligence, and interactive capabilities.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-4 font-display font-semibold text-foreground w-[240px]">
                    Feature
                  </th>
                  <th className="py-4 px-3 text-center">
                    <div className="font-display font-bold text-primary text-base">ScreenFusion</div>
                    <div className="text-xs text-muted-foreground">Leading Edge</div>
                  </th>
                  {competitors.map((c) => (
                    <th key={c} className="py-4 px-3 text-center font-display font-semibold text-foreground">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <>
                    <tr key={cat.name}>
                      <td
                        colSpan={7}
                        className="py-3 px-4 bg-primary/10 font-display font-semibold text-primary text-sm"
                      >
                        {cat.name}
                      </td>
                    </tr>
                    {cat.rows.map((row, i) => (
                      <tr
                        key={row.feature}
                        className={`border-b border-border ${i % 2 === 0 ? "bg-secondary/20" : "bg-background"}`}
                      >
                        <td className="py-3 px-4 text-foreground font-medium">{row.feature}</td>
                        <td className="py-3 px-3 text-center">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" />
                          <span className="sr-only">Full support</span>
                        </td>
                        {row.scores.map((s, si) => (
                          <td key={si} className="py-3 px-3 text-center">
                            {supportIcon(s)}
                            <span className="sr-only">{supportLabel(s)}</span>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-600" /> Full</div>
            <div className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-yellow-500" /> Limited</div>
            <div className="flex items-center gap-1.5"><Circle className="w-4 h-4 text-muted-foreground" /> Partial</div>
            <div className="flex items-center gap-1.5"><XCircle className="w-4 h-4 text-destructive" /> No</div>
          </div>
        </div>
      </section>

      {/* Key Differentiators Summary */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-center mb-10">
            Why Choose <span className="text-primary">ScreenFusion</span>?
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "AI Demographic Profiling", desc: "ScreenFusion is the only digital signage CMS with built-in AI demographic profiling. No competitor offers this." },
              { title: "Direct Canva Integration", desc: "ScreenFusion is the only signage platform with native Canva integration. Design and publish without exporting." },
              { title: "Touchscreen Web App Builder", desc: "Build interactive kiosks and wayfinding apps with ScreenFusion's no-code touchscreen builder. No competitor matches this." },
              { title: "Dynamic Pricing via Google Sheets", desc: "Full dynamic pricing support via Google Sheets. Competitors offer limited or no support for this feature." },
              { title: "Geolocation Content Triggers", desc: "Automatically display content based on device location. A unique ScreenFusion capability." },
              { title: "Google Serverless Infrastructure", desc: "Enterprise-grade reliability on Google Cloud. 99.9% uptime SLA with global CDN." },
            ].map((d) => (
              <div key={d.title} className="flex gap-3 p-5 bg-background rounded-xl border border-border">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display font-semibold mb-1">{d.title}</h3>
                  <p className="text-sm text-muted-foreground">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-display font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-xl px-6 bg-background data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to Switch to ScreenFusion?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Start your free 14-day trial. No credit card required. See why ScreenFusion is the most complete digital signage platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="btn-hero" asChild>
              <a href="https://app.screenfusion.ai" target="_blank" rel="noopener noreferrer">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" className="btn-ghost" asChild>
              <Link to="/contact/">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </Layout>
  );
};

export default ComparisonPage;
