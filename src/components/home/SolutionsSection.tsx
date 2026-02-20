import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    emoji: "🎓",
    title: "Education",
    description: "Campus announcements, event schedules, cafeteria menus, and emergency alerts for schools and universities.",
    href: "/solutions/digital-signage-education/",
  },
  {
    emoji: "🍽️",
    title: "Restaurants & Cafes",
    description: "Digital menu boards, daily specials, promotions, and queue management systems to boost sales.",
    href: "/solutions/digital-signage-restaurants-cafes/",
  },
  {
    emoji: "🛍️",
    title: "Retail",
    description: "In-store promotions, product showcases, and dynamic advertising to drive foot traffic and conversions.",
    href: "/solutions/digital-signage-retail/",
  },
  {
    emoji: "🏢",
    title: "Corporate",
    description: "Internal communications, KPI dashboards, meeting room signage, and visitor management.",
    href: "/solutions/digital-signage-corporate/",
  },
  {
    emoji: "🏥",
    title: "Healthcare",
    description: "Patient information, wayfinding, appointment queues, and health awareness content.",
    href: "/solutions/digital-signage-healthcare/",
  },
  {
    emoji: "🏨",
    title: "Hospitality",
    description: "Guest directories, event schedules, restaurant menus, and concierge information.",
    href: "/solutions/digital-signage-hospitality/",
  },
];

export const SolutionsSection = () => {
  return (
    <section className="py-20 section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="chip mb-4">Use Cases</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Built for{" "}
            <span className="text-primary">Every Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            ScreenFusion adapts to your business needs with industry-specific features 
            and templates designed to maximise engagement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((solution) => (
            <Link
              key={solution.title}
              to={solution.href}
              className="feature-card group bg-white hover:border-primary/30"
            >
              <div className="text-3xl mb-4">{solution.emoji}</div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2 flex items-center gap-2">
                {solution.title}
                <ArrowRight className="w-4 h-4 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/solutions/"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            View all solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
