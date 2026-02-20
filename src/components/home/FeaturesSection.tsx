import { Zap, LayoutGrid, Shield, Cloud, Smartphone, BarChart3, Clock, Globe, Layers, Palette, Wifi, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast & Easy Setup",
    description: "Get your screens running in minutes. Our intuitive interface makes content management effortless for anyone.",
  },
  {
    icon: LayoutGrid,
    title: "500+ Templates",
    description: "Industry-specific templates for restaurants, retail, healthcare, and more. Fully customizable to match your brand.",
  },
  {
    icon: Palette,
    title: "Drag & Drop Designer",
    description: "Build stunning content with our no-code canvas editor. Native Canva integration for even more design power.",
  },
  {
    icon: Cloud,
    title: "100% Cloud-Based",
    description: "Manage all your screens from anywhere in the world. No hardware required beyond your display devices.",
  },
  {
    icon: Smartphone,
    title: "Works on Any Device",
    description: "Android, Windows, Linux, Raspberry Pi, and web browsers. Turn any screen into a professional display.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Proof of play reports, audience insights, and content performance data to optimise your strategy.",
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "Schedule content by time, date, or location. Automate campaigns and never manually update screens again.",
  },
  {
    icon: Globe,
    title: "Multi-Location",
    description: "Manage hundreds of screens across multiple sites from a single dashboard with role-based access.",
  },
  {
    icon: Layers,
    title: "Video Walls",
    description: "Create stunning multi-screen displays. Sync content perfectly across 2, 4, 9 or more panels.",
  },
  {
    icon: Wifi,
    title: "Offline Playback",
    description: "Content continues playing even without internet. Screens sync automatically when connection is restored.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Multiple user accounts with granular permissions. Let teams manage their own screens without IT overhead.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant with bank-level encryption. Google Cloud Platform infrastructure for reliability and scale.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="chip mb-4">Features</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Everything You Need to{" "}
            <span className="text-primary">Power Your Screens</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From quick setup to advanced analytics, ScreenFusion gives you all the tools to create 
            engaging digital signage experiences at any scale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
