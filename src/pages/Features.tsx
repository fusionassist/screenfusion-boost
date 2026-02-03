import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Monitor,
  Layers,
  Clock,
  MapPin,
  BarChart3,
  Smartphone,
  Shield,
  Cloud,
  Palette,
  Users,
  Bell,
  HardDrive,
  Wifi,
  Globe,
  Power,
  Sun,
  Tag,
  History,
  ArrowRight
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Video Wall",
    description: "Create stunning multi-screen displays by syncing multiple screens to form one large, dynamic canvas.",
    href: "/digital-signage-features/video-wall/",
  },
  {
    icon: Layers,
    title: "Split Screen Layouts",
    description: "Divide your screen into multiple zones. Use pre-defined layouts or create your own custom designs.",
    href: "/digital-signage-features/layouts/",
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "Schedule content by time, date, or trigger. Plan weeks, months, or even years in advance.",
    href: "/digital-signage-features/scheduling/",
  },
  {
    icon: MapPin,
    title: "Geo-Location",
    description: "Display location-specific content automatically based on where your screens are located.",
    href: "/digital-signage-features/geo-location/",
  },
  {
    icon: BarChart3,
    title: "AI Analytics",
    description: "Get audience insights, proof of play reports, and AI-powered content optimization.",
    href: "/digital-signage-features/analytics/",
  },
  {
    icon: Smartphone,
    title: "Multi-Platform Support",
    description: "Works on Android, Windows, Linux, and web browsers. Use any screen as a digital display.",
    href: "/digital-signage-features/platforms/",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, secure cloud infrastructure, and comprehensive audit logs.",
    href: "/digital-signage-features/security/",
  },
  {
    icon: Cloud,
    title: "Cloud-Based",
    description: "Manage your screens from anywhere. All updates sync instantly across all displays.",
    href: "/digital-signage-features/cloud/",
  },
  {
    icon: Palette,
    title: "Template Library",
    description: "Hundreds of professionally designed templates for every industry and use case.",
    href: "/digital-signage-features/templates/",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Multiple account managers, team roles, and granular permissions for enterprise control.",
    href: "/digital-signage-features/teams/",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Get instant alerts when something goes wrong so you can fix issues before clients notice.",
    href: "/digital-signage-features/notifications/",
  },
  {
    icon: HardDrive,
    title: "Unlimited Storage",
    description: "Store all your media content without limits. No additional charges for storage.",
    href: "/digital-signage-features/storage/",
  },
  {
    icon: Wifi,
    title: "Offline Mode",
    description: "Content is cached locally. Screens keep playing even during network outages.",
    href: "/digital-signage-features/offline/",
  },
  {
    icon: Globe,
    title: "17 Languages",
    description: "Full localization support for global teams and international deployments.",
    href: "/digital-signage-features/languages/",
  },
  {
    icon: Power,
    title: "Power Management",
    description: "Schedule screens to turn on/off at specific times to save energy and resources.",
    href: "/digital-signage-features/power/",
  },
  {
    icon: Sun,
    title: "Brightness Control",
    description: "Adjust screen brightness manually or schedule automatic changes based on time of day.",
    href: "/digital-signage-features/brightness/",
  },
  {
    icon: Tag,
    title: "Content Tags",
    description: "Use tags to target specific screens with matching content. Perfect for large deployments.",
    href: "/digital-signage-features/tags/",
  },
  {
    icon: History,
    title: "Audit Log",
    description: "Track all account activity. See who did what and when for complete accountability.",
    href: "/digital-signage-features/audit/",
  },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-glow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Powerful{" "}
              <span className="gradient-text">Features</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              ScreenFusion is packed with enterprise-grade features that make 
              digital signage management effortless and effective.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.title}
                to={feature.href}
                className="feature-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-display font-semibold mb-2 flex items-center gap-2">
                  {feature.title}
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
