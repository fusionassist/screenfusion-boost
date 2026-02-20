import { ArrowRight, CheckCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="pt-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-64px)] py-16">
          {/* Left: Text */}
          <div className="stagger">
            <div className="chip mb-5">
              ⚡ Cloud Based Digital Signage
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              Manage Your Content{" "}
              <span className="text-primary">With Ease</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Screen Fusion is a cloud based signage software solution. Transform any screen into a dynamic digital display — manage everything remotely from your desktop or mobile app.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a
                href="https://app.screenfusion.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Try It Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/how-it-works/"
                className="btn-outline inline-flex items-center justify-center gap-2"
              >
                How It Works
              </a>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Free <span className="text-primary font-semibold">14-day trial</span> for new customers. No credit card required.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4">
              {[
                "Easy Setup",
                "Cloud Included",
                "Cancel anytime",
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product mockup */}
          <div className="relative lg:pl-8 animate-fade-in">
            {/* Teal glow blob */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/8 rounded-full blur-2xl" />

            {/* Main screen mockup */}
            <div className="relative z-10 bg-foreground rounded-2xl shadow-hover overflow-hidden">
              {/* Screen chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-foreground">
                <div className="w-3 h-3 rounded-full opacity-70" style={{ background: 'hsl(0 80% 65%)' }} />
                <div className="w-3 h-3 rounded-full opacity-70" style={{ background: 'hsl(45 90% 60%)' }} />
                <div className="w-3 h-3 rounded-full opacity-70" style={{ background: 'hsl(120 50% 55%)' }} />
                <div className="flex-1 mx-4 h-5 bg-white/10 rounded-md" />
              </div>
              {/* Dashboard preview */}
              <div className="bg-secondary p-4 space-y-3">
                {/* Top bar */}
                <div className="bg-white rounded-lg p-3 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/15 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-primary rounded-sm" />
                    </div>
                    <div>
                      <div className="h-3 w-28 bg-foreground/15 rounded mb-1.5" />
                      <div className="h-2 w-20 bg-foreground/8 rounded" />
                    </div>
                  </div>
                  <div className="h-7 w-20 bg-primary rounded-md" />
                </div>
                {/* Content grid */}
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-white rounded-lg p-3 shadow-sm aspect-video flex flex-col justify-between">
                      <div className={`h-2 w-3/4 rounded ${i % 3 === 0 ? 'bg-primary/40' : 'bg-foreground/10'}`} />
                      <div className="space-y-1">
                        <div className="h-1.5 w-full bg-foreground/8 rounded" />
                        <div className="h-1.5 w-2/3 bg-foreground/8 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
                {/* App icons row */}
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="h-2 w-24 bg-foreground/10 rounded mb-3" />
                  <div className="flex gap-2">
                    {[
                      'hsl(210 80% 60%)', 'hsl(25 90% 60%)', 'hsl(162 60% 45%)',
                      'hsl(270 60% 60%)', 'hsl(0 70% 60%)', 'hsl(45 85% 55%)'
                    ].map((color, i) => (
                      <div key={i} className="w-8 h-8 rounded-lg opacity-80" style={{ background: color }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats cards */}
            <div className="absolute -left-6 top-1/3 bg-white rounded-xl shadow-hover p-3 border border-border z-20">
              <div className="text-xs text-muted-foreground mb-1">Screens Online</div>
              <div className="text-2xl font-display font-bold text-foreground">2,847</div>
              <div className="text-xs text-primary font-medium">↑ 12% this week</div>
            </div>
            <div className="absolute -right-4 bottom-1/4 bg-white rounded-xl shadow-hover p-3 border border-border z-20">
              <div className="text-xs text-muted-foreground mb-1">Uptime</div>
              <div className="text-2xl font-display font-bold text-primary">99.9%</div>
              <div className="text-xs text-muted-foreground">Last 30 days</div>
            </div>
          </div>
        </div>
      </div>

      {/* Logos bar */}
      <div className="border-t border-border bg-white py-10">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-8 font-medium">
            Compatible with all major platforms & devices
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-50">
            {["LG", "Google", "Android", "Amazon Fire TV", "Windows", "Raspberry Pi"].map((brand) => (
              <span key={brand} className="text-sm font-display font-bold text-foreground tracking-tight uppercase px-3 py-1.5 border border-border rounded-md">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
