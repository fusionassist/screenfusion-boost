import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-screens.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-glow pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center stagger-children">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Trusted by 10,000+ screens worldwide
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6">
            Transform Any Screen Into a{" "}
            <span className="gradient-text">Powerful Display</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Professional cloud-based digital signage software that enables you to design, 
            schedule, and send content to any screen. Easy setup, powerful results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Button className="btn-hero group" size="lg" asChild>
              <a href="https://manage.screenfusion.ai" target="_blank" rel="noopener noreferrer">
                Start for FREE
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="btn-ghost" asChild>
              <a href="#demo">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            No credit card required. FREE for 1 screen!
          </p>
        </div>

        {/* Hero Image */}
        <div className="mt-16 relative animate-float">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <div className="gradient-border p-1">
            <img
              src={heroImage}
              alt="ScreenFusion Digital Signage Control Center"
              className="rounded-2xl w-full shadow-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
