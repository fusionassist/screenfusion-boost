import { Layout } from "@/components/layout/Layout";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { publicUrl } from "@/lib/utils";

// Solution data - this would typically come from a CMS or API
const solutionsData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  heroVideo?: string;
  features: string[];
  useCases: { title: string; description: string }[];
}> = {
  "digital-signage-education": {
    title: "Education",
    subtitle: "Digital Signage for Schools & Universities",
    heroVideo: "videos/digital-signage-education.mp4",
    description: "Transform campus communication with dynamic digital displays that keep students, staff, and visitors informed and engaged.",
    features: [
      "Campus-wide announcements",
      "Event calendars and schedules",
      "Emergency alert system",
      "Wayfinding and maps",
      "Cafeteria menus",
      "Sports scores and updates",
      "Student achievements",
      "Social media feeds",
    ],
    useCases: [
      {
        title: "Student Communications",
        description: "Keep students informed about events, deadlines, and campus news with eye-catching digital displays.",
      },
      {
        title: "Emergency Alerts",
        description: "Instantly broadcast emergency messages to all screens across campus for safety.",
      },
      {
        title: "Wayfinding",
        description: "Help visitors navigate campus with interactive maps and directional signage.",
      },
    ],
  },
  "digital-signage-restaurants-cafes": {
    title: "Restaurants & Cafes",
    subtitle: "Digital Menu Boards & Promotions",
    heroVideo: "videos/digital-signage-restaurants.mp4",
    description: "Boost sales and streamline operations with dynamic digital menu boards that update in real-time.",
    features: [
      "Digital menu boards",
      "Real-time price updates",
      "Daily specials & promotions",
      "Nutrition information",
      "Queue management",
      "Social media integration",
      "Dayparting (breakfast/lunch/dinner)",
      "Multi-location management",
    ],
    useCases: [
      {
        title: "Dynamic Pricing",
        description: "Update prices across all locations instantly. Run happy hour specials or promotions with ease.",
      },
      {
        title: "Upselling",
        description: "Promote high-margin items and combos with eye-catching visuals that drive impulse purchases.",
      },
      {
        title: "Order Status",
        description: "Display order numbers and status to reduce wait anxiety and improve customer experience.",
      },
    ],
  },
  "digital-signage-retail": {
    title: "Retail",
    subtitle: "In-Store Digital Displays",
    heroVideo: "videos/digital-signage-retail.mp4",
    description: "Create immersive shopping experiences with dynamic displays that showcase products and drive sales.",
    features: [
      "Product showcases",
      "Promotional displays",
      "Price updates",
      "Brand storytelling",
      "Social proof (reviews)",
      "Inventory alerts",
      "Cross-selling displays",
      "Window displays",
    ],
    useCases: [
      {
        title: "Product Launches",
        description: "Create buzz for new products with stunning visual displays that capture attention.",
      },
      {
        title: "Flash Sales",
        description: "Deploy time-sensitive promotions instantly across all store locations.",
      },
      {
        title: "Brand Experience",
        description: "Immerse customers in your brand story with compelling video content.",
      },
    ],
  },
  "digital-signage-real-estate": {
    title: "Real Estate",
    subtitle: "Property Listings & Showcases",
    heroVideo: "videos/digital-signage-real-estate.mp4",
    description: "Attract buyers and showcase properties with stunning digital displays that integrate with your CRM.",
    features: [
      "Property listings",
      "Virtual tours",
      "CRM integration",
      "Window displays",
      "Agent spotlights",
      "Market updates",
      "Open house info",
      "Neighborhood guides",
    ],
    useCases: [
      {
        title: "Window Displays",
        description: "Attract walk-by traffic with dynamic property listings that update automatically.",
      },
      {
        title: "Virtual Tours",
        description: "Let prospects explore properties virtually right in your office or storefront.",
      },
      {
        title: "CRM Sync",
        description: "Automatically display listings from your CRM without manual updates.",
      },
    ],
  },
  "digital-signage-healthcare": {
    title: "Healthcare",
    subtitle: "Patient Communication & Wayfinding",
    heroVideo: "videos/digital-signage-healthcare.mp4",
    description: "Improve patient experience and streamline communication in hospitals, clinics, and medical offices.",
    features: [
      "Wayfinding & directories",
      "Wait time displays",
      "Health education content",
      "Staff directories",
      "Emergency alerts",
      "Visitor information",
      "Appointment reminders",
      "Compliance notices",
    ],
    useCases: [
      {
        title: "Reduce Anxiety",
        description: "Display wait times and queue status to improve patient experience.",
      },
      {
        title: "Health Education",
        description: "Share important health information and seasonal reminders in waiting areas.",
      },
      {
        title: "Wayfinding",
        description: "Help visitors navigate complex facilities with clear directional signage.",
      },
    ],
  },
  "digital-signage-hospitality": {
    title: "Hospitality",
    subtitle: "Guest Services & Information",
    heroVideo: "videos/digital-signage-hospitality.mp4",
    description: "Elevate guest experiences with digital displays that inform, guide, and delight.",
    features: [
      "Guest directories",
      "Event schedules",
      "Concierge info",
      "Local attractions",
      "Restaurant menus",
      "Weather updates",
      "Transportation info",
      "Promotional displays",
    ],
    useCases: [
      {
        title: "Lobby Displays",
        description: "Welcome guests with dynamic displays showing events, weather, and local info.",
      },
      {
        title: "Conference Centers",
        description: "Display meeting schedules and wayfinding for conferences and events.",
      },
      {
        title: "Dining Areas",
        description: "Showcase restaurant menus and daily specials to drive on-site dining.",
      },
    ],
  },
  "digital-signage-advertisers": {
    title: "DOOH Advertising",
    subtitle: "Digital Out-of-Home Advertising",
    heroVideo: "videos/digital-signage-advertisers.mp4",
    description: "Monetize your screens with programmatic advertising and audience-targeted campaigns.",
    features: [
      "Programmatic advertising",
      "Audience targeting",
      "Campaign management",
      "Revenue tracking",
      "Proof of play",
      "Network management",
      "Rate cards",
      "Advertiser portal",
    ],
    useCases: [
      {
        title: "Programmatic Sales",
        description: "Connect to programmatic networks and sell inventory automatically.",
      },
      {
        title: "Direct Sales",
        description: "Manage direct advertiser relationships with campaign scheduling tools.",
      },
      {
        title: "Performance Reporting",
        description: "Provide advertisers with detailed proof of play and audience metrics.",
      },
    ],
  },
  "ai-digital-signage-analytics": {
    title: "AI Analytics",
    subtitle: "Audience Insights & Optimization",
    description: "Leverage AI-powered analytics to understand your audience and optimize content performance.",
    features: [
      "Audience demographics",
      "Attention metrics",
      "Content performance",
      "A/B testing",
      "Heat maps",
      "Dwell time analysis",
      "Conversion tracking",
      "Optimization recommendations",
    ],
    useCases: [
      {
        title: "Audience Understanding",
        description: "Know who's viewing your content with anonymous demographic analysis.",
      },
      {
        title: "Content Optimization",
        description: "Identify top-performing content and optimize for engagement.",
      },
      {
        title: "ROI Measurement",
        description: "Track the impact of your digital signage on business outcomes.",
      },
    ],
  },
  "ai-digital-signage-audience-targeting": {
    title: "Audience Targeting",
    subtitle: "Right Content, Right Audience, Right Time",
    description: "Display contextually relevant content based on audience demographics, time, weather, and more.",
    features: [
      "Demographic targeting",
      "Time-based content",
      "Weather triggers",
      "Event triggers",
      "Location targeting",
      "Behavioral targeting",
      "Real-time optimization",
      "Rule-based automation",
    ],
    useCases: [
      {
        title: "Personalized Content",
        description: "Show relevant content based on who's currently viewing the screen.",
      },
      {
        title: "Contextual Triggers",
        description: "Automatically change content based on weather, time of day, or events.",
      },
      {
        title: "Campaign Optimization",
        description: "Maximize engagement by showing the right message at the right moment.",
      },
    ],
  },
};

const SolutionDetail = () => {
  const { solutionId } = useParams();
  const solution = solutionsData[solutionId || ""];

  if (!solution) {
    return (
      <Layout>
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Solution Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The solution you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/solutions/">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Solutions
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-glow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              to="/solutions/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              All Solutions
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              Digital Signage for{" "}
              <span className="gradient-text">{solution.title}</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {solution.description}
            </p>
          </div>

          {solution.heroVideo && (
            <div className="max-w-4xl mx-auto mt-12">
              <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                <video
                  src={publicUrl(solution.heroVideo)}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
              Key Features
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {solution.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
              Use Cases
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {solution.useCases.map((useCase) => (
                <div key={useCase.title} className="feature-card">
                  <h3 className="text-xl font-display font-semibold mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start your free trial today and see how ScreenFusion can transform 
              your {solution.title.toLowerCase()} digital signage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button className="btn-hero" asChild>
                <a href="https://app.screenfusion.ai" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" className="btn-ghost" asChild>
                <Link to="/contact/">
                  Talk to Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionDetail;
