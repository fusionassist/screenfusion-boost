import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[128px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="gradient-border p-px rounded-3xl">
            <div className="bg-card rounded-3xl p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Ready to Transform Your{" "}
                <span className="gradient-text">Digital Presence?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of businesses using ScreenFusion to captivate their audience. 
                Start your free trial today — no credit card required.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button className="btn-hero group" size="lg" asChild>
                  <a href="https://manage.screenfusion.ai" target="_blank" rel="noopener noreferrer">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="btn-ghost" asChild>
                  <a href="/contact/">
                    Talk to Sales
                  </a>
                </Button>
              </div>
              
              <p className="mt-6 text-sm text-muted-foreground">
                ✓ Free for 1 screen &nbsp;&nbsp; ✓ No credit card &nbsp;&nbsp; ✓ Setup in 5 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
