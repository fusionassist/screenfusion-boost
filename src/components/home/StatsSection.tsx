const stats = [
  { value: "10,000+", label: "Screens Powered" },
  { value: "50+", label: "Countries" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "5 min", label: "Average Setup" },
];

export const StatsSection = () => {
  return (
    <section className="py-16 section-alt border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
