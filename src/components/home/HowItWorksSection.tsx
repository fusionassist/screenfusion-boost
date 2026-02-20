import { CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Sign Up & Connect Your Screen",
    description: "Create a free account and install the ScreenFusion app on your device — Android TV, Fire Stick, Windows PC, or any browser. Done in under 5 minutes.",
    features: ["Android, Windows & Linux", "No hardware required", "Instant pairing via PIN code"],
  },
  {
    step: "02",
    title: "Design Your Content",
    description: "Use our drag-and-drop editor or choose from 500+ professional templates. Integrate Canva, Google Slides, YouTube, social feeds, and more.",
    features: ["Drag & drop canvas", "500+ templates", "Canva & Google integration"],
  },
  {
    step: "03",
    title: "Publish & Manage Remotely",
    description: "Push content to all your screens with one click. Schedule by day, time, or location. Monitor screens remotely from any device, anywhere.",
    features: ["One-click publishing", "Smart scheduling", "Real-time monitoring"],
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="chip mb-4">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Up and Running in{" "}
            <span className="text-primary">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            No technical expertise needed. Go from signup to live screens in minutes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%_-_16px)] w-8 h-px bg-border z-10" />
              )}
              <div className="feature-card h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-10 h-10 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {step.step}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
