import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  CheckCircle2,
  ArrowRight,
  Star,
  Download,
  Tv
} from "lucide-react";
import { Button } from "@/components/ui/button";

const players = [
  {
    name: "ScreenFusion Player",
    type: "Dedicated Hardware",
    description: "Our recommended Android-based media player. Pre-configured and ready to use out of the box.",
    features: [
      "4K UHD output",
      "Android 12",
      "Wi-Fi & Ethernet",
      "Remote management",
      "Auto-updates",
      "Fanless design",
    ],
    recommended: true,
  },
  {
    name: "Android Devices",
    type: "Android 5.0+",
    description: "Use any Android device as a digital signage player. TV boxes, tablets, or commercial displays.",
    features: [
      "Android TV boxes",
      "Android tablets",
      "Commercial displays",
      "Fire TV Stick",
      "Chromecast",
      "Most Android devices",
    ],
    recommended: false,
    downloadUrl: "/downloads/Screenfusion_244.apk",
  },
  {
    name: "Windows PC",
    type: "Windows 10/11",
    description: "Run ScreenFusion on any Windows PC. Perfect for existing hardware or kiosk setups.",
    features: [
      "Any Windows PC",
      "Intel NUCs",
      "Mini PCs",
      "All-in-one displays",
      "Native app",
      "Hardware acceleration",
    ],
    recommended: false,
  },
  {
    name: "Web Browser",
    type: "Chrome, Firefox, Edge",
    description: "No installation required. Run ScreenFusion directly in any modern web browser.",
    features: [
      "No installation",
      "Smart TVs",
      "Any device with browser",
      "Quick testing",
      "Chrome recommended",
      "Full features",
    ],
    recommended: false,
  },
  {
    name: "Linux",
    type: "Ubuntu, Debian",
    description: "Enterprise-grade Linux support for Raspberry Pi, Ubuntu, and other distributions.",
    features: [
      "Raspberry Pi 4/5",
      "Ubuntu 20.04+",
      "Debian 10+",
      "Low power usage",
      "Cost-effective",
      "Open source friendly",
    ],
    recommended: false,
  },
  {
    name: "Commercial Displays",
    type: "System on Chip (SoC)",
    description: "Many commercial displays with built-in Android support work natively with ScreenFusion.",
    features: [
      "Samsung SMART Signage",
      "LG webOS",
      "BrightSign",
      "No external player needed",
      "Integrated solution",
      "Enterprise grade",
    ],
    recommended: false,
  },
];

const Hardware = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-glow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Supported{" "}
              <span className="gradient-text">Hardware</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Multiple players, one powerful signage solution. Use your existing hardware 
              or choose our recommended players.
            </p>
          </div>
        </div>
      </section>

      {/* Supported Hardware Logos */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-medium text-muted-foreground text-center mb-8">
            Compatible with all major platforms
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
            {[
              { name: "Android", src: "/images/hardware/android.jpg" },
              { name: "Windows", src: "/images/hardware/windows.png" },
              { name: "Raspberry Pi", src: "/images/hardware/raspberry-pi.jpg" },
              { name: "Chrome OS", src: "/images/hardware/chrome-os.jpg" },
              { name: "Samsung", src: "/images/hardware/samsung.jpg" },
              { name: "LG", src: "/images/hardware/lg.jpg" },
              { name: "BrightSign", src: "/images/hardware/brightsign.jpg" },
              { name: "Fire TV", src: "/images/hardware/fire-tv.jpg" },
              { name: "Google TV", src: "/images/hardware/google-tv.jpg" },
              { name: "Philips", src: "/images/hardware/philips.jpg" },
              { name: "Vestel", src: "/images/hardware/vestel.jpg" },
              { name: "Moytronix", src: "/images/hardware/moytronix.png" },
              { name: "ScreenFusion Player", src: "/images/hardware/screenfusion-player.jpg" },
            ].map((platform) => (
              <div key={platform.name} className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <img src={platform.src} alt={platform.name} className="h-10 md:h-12 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Players */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
            All Supported Platforms
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map((player) => (
              <div
                key={player.name}
                className={`feature-card ${player.recommended ? "border-primary" : ""}`}
              >
                {player.recommended && (
                  <div className="flex items-center gap-1 text-sm text-primary mb-4">
                    <Star className="w-4 h-4 fill-primary" />
                    Recommended
                  </div>
                )}
                
                <h3 className="text-xl font-display font-semibold mb-1">
                  {player.name}
                </h3>
                <span className="text-sm text-muted-foreground">{player.type}</span>
                
                <p className="text-muted-foreground my-4">
                  {player.description}
                </p>
                
                <ul className="space-y-2">
                  {player.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {player.downloadUrl && (
                  <a
                    href={player.downloadUrl}
                    download
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Android App
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Player */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="gradient-border p-1 rounded-3xl">
              <div className="bg-card rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Tv className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm text-yellow-500 font-medium">Recommended</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                      ScreenFusion Player
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Our purpose-built media player delivers 4K content reliably with enterprise features. 
                      Pre-configured and ready to connect — just plug in and start displaying.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                      {["4K UHD", "Android 12", "Fanless", "Remote Update"].map((tag) => (
                        <span key={tag} className="px-3 py-1 text-sm bg-secondary/50 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button className="btn-hero" asChild>
                      <Link to="/contact/">
                        Get Pricing
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Not sure which player to choose?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team can help you select the right hardware for your needs and budget. 
            We also offer bulk pricing for large deployments.
          </p>
          <Button className="btn-hero" asChild>
            <Link to="/contact/">
              Get Hardware Recommendations
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Hardware;
