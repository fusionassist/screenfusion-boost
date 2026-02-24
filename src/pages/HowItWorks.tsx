import { Layout } from "@/components/layout/Layout";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Sign Up for Free",
    description: "Create your free ScreenFusion account in seconds. No credit card required. Get access to all features with a free 14-day trial.",
    details: [
      "Instant account creation",
      "No credit card needed",
      "14-day free trial",
      "Full feature access",
    ],
  },
  {
    number: "02",
    title: "Choose Your Content",
    description: "Select from hundreds of templates or create your own. Use our drag-and-drop editor, upload media, or connect apps like Canva.",
    details: [
      "500+ ready-made templates",
      "Drag-and-drop editor",
      "Media library upload",
      "App integrations",
    ],
  },
  {
    number: "03",
    title: "Connect Your Screens",
    description: "Install the ScreenFusion app on your device, enter your screen code, and your content appears instantly. It's that simple.",
    details: [
      "Works on Android, Windows, Linux",
      "Web browser option",
      "One-click pairing",
      "Remote setup possible",
    ],
  },
  {
    number: "04",
    title: "Manage from Anywhere",
    description: "Update content, schedule changes, and monitor all your screens from our cloud dashboard. Make changes from any device.",
    details: [
      "Cloud-based management",
      "Real-time updates",
      "Schedule content in advance",
      "Monitor screen status",
    ],
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-glow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              How It{" "}
              <span className="gradient-text">Works</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Get your digital signage up and running in minutes. 
              No technical expertise required.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent" />
                )}
                
                <div className="flex gap-8 mb-16">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                      <span className="text-xl font-display font-bold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 feature-card">
                    <h3 className="text-2xl font-display font-bold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {step.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using ScreenFusion. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="btn-hero" asChild>
              <a href="https://app.screenfusion.ai" target="_blank" rel="noopener noreferrer">
                Start Free Trial
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" className="btn-ghost" asChild>
              <a href="/contact/">
                Talk to Sales
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
