import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Utensils, 
  Store, 
  Building2, 
  Heart, 
  Hotel,
  Megaphone,
  BarChart3,
  Target,
  ArrowRight
} from "lucide-react";

const solutions = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Digital signage solutions for schools, colleges, and universities. Share announcements, schedules, and emergency alerts across campus.",
    href: "/solutions/digital-signage-education/",
    features: ["Campus announcements", "Event schedules", "Wayfinding", "Emergency alerts"],
  },
  {
    icon: Utensils,
    title: "Restaurants & Cafes",
    description: "Dynamic digital menu boards and promotional displays. Update prices and specials in real-time to boost sales.",
    href: "/solutions/digital-signage-restaurants-cafes/",
    features: ["Digital menus", "Price updates", "Promotions", "Queue management"],
  },
  {
    icon: Store,
    title: "Retail",
    description: "Transform retail spaces with eye-catching displays that showcase products and drive customer engagement.",
    href: "/solutions/digital-signage-retail/",
    features: ["Product showcases", "In-store ads", "Price displays", "Brand content"],
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Showcase properties with stunning digital displays. Sync with top CRMs for automatic listing updates.",
    href: "/solutions/digital-signage-real-estate/",
    features: ["Property listings", "Virtual tours", "CRM integration", "Window displays"],
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Enhance communication in hospitals and clinics with displays that inform patients, staff, and visitors.",
    href: "/solutions/digital-signage-healthcare/",
    features: ["Patient info", "Wayfinding", "Health content", "Queue displays"],
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description: "Elevate guest experiences with digital directories, event displays, and concierge information.",
    href: "/solutions/digital-signage-hospitality/",
    features: ["Guest directories", "Event info", "Amenities", "Local guides"],
  },
  {
    icon: Megaphone,
    title: "Advertising (DOOH)",
    description: "Digital out-of-home advertising solutions with programmatic capabilities and audience targeting.",
    href: "/solutions/digital-signage-advertisers/",
    features: ["Programmatic ads", "Audience data", "Campaign management", "Revenue tracking"],
  },
  {
    icon: BarChart3,
    title: "AI Analytics",
    description: "Leverage AI-powered analytics to understand your audience and optimize content performance.",
    href: "/solutions/ai-digital-signage-analytics/",
    features: ["Audience insights", "Performance data", "A/B testing", "Optimization"],
  },
  {
    icon: Target,
    title: "Audience Targeting",
    description: "Display the right content to the right audience at the right time with intelligent targeting.",
    href: "/solutions/ai-digital-signage-audience-targeting/",
    features: ["Demographics", "Time-based", "Weather-based", "Context-aware"],
  },
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-glow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Digital Signage{" "}
              <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              ScreenFusion adapts to your industry with specialized features, templates, 
              and integrations designed to maximize engagement and ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                to={solution.href}
                className="feature-card group h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <solution.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-display font-semibold mb-2 flex items-center gap-2">
                  {solution.title}
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {solution.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 text-xs bg-secondary/50 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
