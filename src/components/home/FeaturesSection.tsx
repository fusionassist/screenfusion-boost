import { Zap, LayoutGrid, Cloud, Smartphone, BarChart3, Clock, Globe, Wifi, Users, MapPin, Layers, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Content Scheduling",
    description: "Scheduling your content has never been easier. Our playlist feature lets you create and manage multiple playlists to be played when it suits your business.",
  },
  {
    icon: LayoutGrid,
    title: "Customisable Templates",
    description: "Use our template library to select the content you want and edit it to your style, all within your dashboard.",
  },
  {
    icon: Zap,
    title: "Built-in Apps",
    description: "Choose from a variety of apps like Canva, YouTube, news, and more to reach full potential from your signage with ease.",
  },
  {
    icon: Cloud,
    title: "Quick Setup",
    description: "Screen Fusion is quick and simple to set up. You can get content on your screens in minutes so you can focus more on your business.",
  },
  {
    icon: RefreshCw,
    title: "Instant Updates",
    description: "Update your content with ease, on desktop or with our mobile app, to ensure your signage is always relevant.",
  },
  {
    icon: Globe,
    title: "Reliability",
    description: "Our platform prioritises the safety and accessibility of user data and content, offering you complete control.",
  },
  {
    icon: BarChart3,
    title: "AI Analytics",
    description: "Gain insights into customer behaviour, streamline operations, and enhance performance with AI-powered queue analysis and staff-customer engagement tracking.",
  },
  {
    icon: MapPin,
    title: "Geo-Location",
    description: "Automatically update content based on the device's location. Set geographic zones to personalise what plays where.",
  },
  {
    icon: Smartphone,
    title: "Multi-Platform Support",
    description: "Compatible with Android OS 5+, Amazon FireTV, WebOS Signage, Windows, Linux, Raspberry Pi, and web-based players.",
  },
  {
    icon: Layers,
    title: "Video Walls",
    description: "Create stunning multi-screen displays by syncing multiple screens to form one large, dynamic canvas.",
  },
  {
    icon: Wifi,
    title: "Offline Playback",
    description: "Content continues playing even without internet. Screens sync automatically when the connection is restored.",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Multiple account managers, team roles, and granular permissions. Let teams manage their own screens independently.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="chip mb-4">Features</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            All the Features You Want.{" "}
            <span className="text-primary">Simple to Manage.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Screen Fusion makes it easy to build and manage your digital signage. 
            From scheduling to AI analytics — everything is built in.
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

        <div className="text-center mt-10">
          <a
            href="https://app.screenfusion.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Try It Free
          </a>
        </div>
      </div>
    </section>
  );
};
