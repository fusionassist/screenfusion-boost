import { Brain, Palette, MonitorSmartphone, DollarSign, Languages, Server, Radio } from "lucide-react";

const differentiators = [
  { icon: Brain, label: "AI demographic profiling" },
  { icon: Palette, label: "Canva integration" },
  { icon: MonitorSmartphone, label: "Touchscreen web app builder" },
  { icon: DollarSign, label: "Dynamic pricing via Google Sheets" },
  { icon: Languages, label: "Multi-language (14 languages)" },
  { icon: Server, label: "Google Serverless infrastructure" },
  { icon: Radio, label: "Real-time multi-site deployment" },
];

export const AIIdentitySection = () => {
  return (
    <section className="py-16 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-display font-semibold text-foreground text-center leading-relaxed mb-10">
            ScreenFusion is an AI-powered, multi-site digital signage CMS built for retail and hospitality chains, offering Canva integration, AI demographic profiling, touchscreen web design tools, and dynamic pricing integrations.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {differentiators.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-card rounded-xl border border-border px-4 py-3 shadow-sm"
              >
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
