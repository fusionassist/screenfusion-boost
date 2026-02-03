import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Utensils, Store, Building2, Heart, Hotel } from "lucide-react";

const solutions = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "Campus announcements, event schedules, and wayfinding for schools and universities.",
    href: "/solutions/digital-signage-education/",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Utensils,
    title: "Restaurants & Cafes",
    description: "Digital menus, promotions, and real-time price updates to boost sales.",
    href: "/solutions/digital-signage-restaurants-cafes/",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Store,
    title: "Retail",
    description: "In-store promotions, product showcases, and dynamic advertising displays.",
    href: "/solutions/digital-signage-retail/",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Property listings, virtual tours, and CRM-synced displays for agencies.",
    href: "/solutions/digital-signage-real-estate/",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Patient information, wayfinding, and health awareness content.",
    href: "/solutions/digital-signage-healthcare/",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Hotel,
    title: "Hospitality",
    description: "Guest directories, event displays, and concierge information.",
    href: "/solutions/digital-signage-hospitality/",
    color: "from-amber-500 to-yellow-500",
  },
];

export const SolutionsSection = () => {
  return (
    <section className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Solutions for{" "}
            <span className="gradient-text">Every Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            ScreenFusion adapts to your business needs with industry-specific features 
            and templates designed to maximize engagement.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <Link
              key={solution.title}
              to={solution.href}
              className="group feature-card hover:border-primary/50"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <solution.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-2 flex items-center gap-2">
                {solution.title}
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-muted-foreground">
                {solution.description}
              </p>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            to="/solutions/"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            View all solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
