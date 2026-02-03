import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Choose a Template",
    description: "Select from hundreds of professionally designed templates for menus, announcements, promotions, and more.",
    features: ["Industry-specific designs", "Fully customizable", "Regular updates"],
  },
  {
    number: "02",
    title: "Customize Your Content",
    description: "Use our drag-and-drop editor to add your branding, images, videos, and text. No design skills required.",
    features: ["Canva integration", "Media library", "Brand kit support"],
  },
  {
    number: "03",
    title: "Publish to Screens",
    description: "Send your content to all your displays with one click. Schedule updates and manage everything from the cloud.",
    features: ["Instant updates", "Smart scheduling", "Remote management"],
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Get Started in{" "}
            <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From signup to live screens in minutes. Our streamlined process makes 
            digital signage accessible to everyone.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}
              
              <div className="feature-card h-full">
                {/* Step Number */}
                <div className="text-5xl font-display font-bold gradient-text mb-4">
                  {step.number}
                </div>
                
                <h3 className="text-2xl font-display font-semibold mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {step.description}
                </p>
                
                <ul className="space-y-2">
                  {step.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
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
