import { 
  CheckCircle2, 
  Users, 
  Palette, 
  DollarSign, 
  Settings, 
  RefreshCw, 
  Server,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Significant volume discounts to stay competitive in your market.",
  },
  {
    icon: Palette,
    title: "White Labelling",
    description: "Brand ScreenFusion under your name with your URL and logo.",
  },
  {
    icon: Settings,
    title: "Admin Portal",
    description: "Manage client accounts, provide support, and control licenses.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Priority technical support and training for your team.",
  },
  {
    icon: RefreshCw,
    title: "Free Updates",
    description: "All software updates and new features included at no extra cost.",
  },
  {
    icon: Server,
    title: "Enterprise Infrastructure",
    description: "Powered by Google Cloud Platform for reliability and scale.",
  },
];

export const ResellerSection = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Become a{" "}
              <span className="gradient-text">ScreenFusion Partner</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Join our reseller program and offer enterprise-grade digital signage 
              to your clients. We handle the technology, you grow your business.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button className="btn-hero group" asChild>
              <Link to="/digital-signage-software-partner-white-label/">
                Become a Reseller
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="gradient-border p-1 rounded-3xl">
              <div className="bg-card rounded-3xl p-8 md:p-12">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-display font-bold gradient-text mb-4">
                    50%+
                  </div>
                  <p className="text-xl text-muted-foreground mb-6">
                    Partner Discount Available
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 justify-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Fully managed cloud service
                    </div>
                    <div className="flex items-center gap-2 justify-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Your branding, your clients
                    </div>
                    <div className="flex items-center gap-2 justify-center text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      No technical overhead
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
