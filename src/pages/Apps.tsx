import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Cloud, 
  Image, 
  Video, 
  CalendarDays, 
  Rss, 
  BarChart3, 
  Clock, 
  Palette,
  Globe,
  MessageSquare,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { publicUrl } from "@/lib/utils";

const appIcons = [
  { name: "Canva", src: publicUrl("images/apps/canva.svg") },
  { name: "Twitter / X", src: publicUrl("images/apps/x-twitter.png") },
  { name: "Google Drive", src: publicUrl("images/apps/google-drive.png") },
  { name: "Google Calendar", src: publicUrl("images/apps/google-calendar.png") },
  { name: "Google Docs", src: publicUrl("images/apps/google-docs.png") },
  { name: "Google Sheets", src: publicUrl("images/apps/google-sheets.png") },
  { name: "Google Slides", src: publicUrl("images/apps/google-slides.png") },
  { name: "YouTube", src: publicUrl("images/apps/youtube.png") },
  { name: "TikTok", src: publicUrl("images/apps/tiktok.png") },
  { name: "RSS", src: publicUrl("images/apps/rss.png") },
  { name: "QR Code", src: publicUrl("images/apps/qr-code.png") },
  { name: "Google Looker", src: publicUrl("images/apps/google-looker.png") },
  { name: "Date & Time", src: publicUrl("images/apps/date-time.svg") },
  { name: "Pexels", src: publicUrl("images/apps/pexels.png") },
  { name: "PosterMyWall", src: publicUrl("images/apps/postermywall.png") },
  { name: "Tableau", src: publicUrl("images/apps/tableau.png") },
  { name: "HTML Embed", src: publicUrl("images/apps/html-embed.png") },
  { name: "Pixabay", src: publicUrl("images/apps/pixabay.png") },
  { name: "Unsplash", src: publicUrl("images/apps/unsplash.png") },
  { name: "Weather", src: publicUrl("images/apps/weather.png") },
  { name: "Website / URL", src: publicUrl("images/apps/website-url.png") },
  { name: "CNN", src: publicUrl("images/apps/cnn.png") },
  { name: "Power BI", src: publicUrl("images/apps/power-bi.png") },
];

const apps = [
  {
    icon: Palette,
    name: "Canva",
    description: "Access 250,000+ templates. Design in Canva, display on your screens. Real-time sync.",
    category: "Design",
    popular: true,
  },
  {
    icon: Cloud,
    name: "Weather",
    description: "Display current weather conditions, forecasts, and alerts for any location.",
    category: "Information",
    popular: true,
  },
  {
    icon: Rss,
    name: "Social Media",
    description: "Show live feeds from Twitter, Instagram, Facebook, and other social platforms.",
    category: "Social",
    popular: true,
  },
  {
    icon: Video,
    name: "YouTube",
    description: "Stream YouTube videos and playlists directly to your digital signage.",
    category: "Media",
    popular: false,
  },
  {
    icon: CalendarDays,
    name: "Google Calendar",
    description: "Display meeting room schedules, events, and appointments from Google Calendar.",
    category: "Productivity",
    popular: true,
  },
  {
    icon: BarChart3,
    name: "Google Sheets",
    description: "Show live data from Google Sheets. Perfect for KPIs, leaderboards, and metrics.",
    category: "Data",
    popular: false,
  },
  {
    icon: Image,
    name: "Google Slides",
    description: "Display presentations from Google Slides with automatic updates.",
    category: "Productivity",
    popular: false,
  },
  {
    icon: Clock,
    name: "Clock & Date",
    description: "Multiple clock styles with date display. World clocks for global teams.",
    category: "Widgets",
    popular: false,
  },
  {
    icon: Globe,
    name: "Web Page",
    description: "Embed any website or web application directly into your signage.",
    category: "Web",
    popular: true,
  },
  {
    icon: MessageSquare,
    name: "News & RSS",
    description: "Display news feeds from any RSS source. Stay updated with industry news.",
    category: "Information",
    popular: false,
  },
  {
    icon: Video,
    name: "Live Streaming",
    description: "Stream live video feeds from IP cameras, RTSP streams, or HLS sources.",
    category: "Media",
    popular: false,
  },
  {
    icon: BarChart3,
    name: "Power BI",
    description: "Display Power BI dashboards and reports for data visualization.",
    category: "Data",
    popular: false,
  },
];

const Apps = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-glow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Apps &{" "}
              <span className="gradient-text">Integrations</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Extend your digital signage with our growing library of apps and integrations. 
              Connect to the tools you already use.
            </p>
          </div>
        </div>
      </section>

      {/* App Icons Grid */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-medium text-muted-foreground text-center mb-8">
            Built-in apps to show content faster
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 max-w-5xl mx-auto">
            {appIcons.map((app) => (
              <div key={app.name} className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                <img src={app.src} alt={app.name} className="h-10 md:h-12 w-auto object-contain" />
                <span className="text-xs text-muted-foreground font-medium">{app.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
            All Apps
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apps.map((app) => (
              <div key={app.name} className="feature-card group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <app.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-semibold">{app.name}</h3>
                      {app.popular && (
                        <span className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{app.category}</span>
                    <p className="text-sm text-muted-foreground mt-2">
                      {app.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see what you need? We're always adding new apps.
            </p>
            <Button variant="outline" className="btn-ghost" asChild>
              <Link to="/contact/">
                Request an Integration
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apps;
