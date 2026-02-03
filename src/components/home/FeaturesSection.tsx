import { 
  Zap, 
  Shield, 
  LayoutGrid, 
  Cloud, 
  Smartphone, 
  BarChart3,
  Clock,
  Globe,
  Layers
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast & Easy Setup",
    description: "Get your screens running in minutes. Our intuitive interface makes content management effortless.",
  },
  {
    icon: LayoutGrid,
    title: "50+ Ready Apps",
    description: "Weather, social feeds, news, and more. Integrate seamlessly with Canva, Google, and popular tools.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and secure cloud infrastructure powered by Google Cloud Platform.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based",
    description: "Manage your screens from anywhere. All updates sync instantly across all your displays.",
  },
  {
    icon: Smartphone,
    title: "Any Device",
    description: "Works on Android, Windows, Linux, and web browsers. Use any screen as a digital display.",
  },
  {
    icon: BarChart3,
    title: "AI Analytics",
    description: "Get audience insights, proof of play reports, and data-driven content optimization.",
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "Schedule content by time, date, or location. Automate your digital signage strategy.",
  },
  {
    icon: Globe,
    title: "Geo-Targeting",
    description: "Display location-specific content automatically based on where your screens are located.",
  },
  {
    icon: Layers,
    title: "Video Walls",
    description: "Create stunning multi-screen displays. Sync content across multiple screens seamlessly.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Power Your Screens</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From quick setup to advanced analytics, ScreenFusion provides all the tools 
            you need to create engaging digital signage experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
