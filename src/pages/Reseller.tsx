import { Layout } from "@/components/layout/Layout";
import { 
  CheckCircle2, 
  DollarSign, 
  Palette, 
  Settings, 
  Users, 
  RefreshCw, 
  Server,
  ArrowRight,
  HeadphonesIcon,
  BarChart3,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

const benefits = [
  {
    icon: DollarSign,
    title: "Significant Discounts",
    description: "Enjoy up to 50%+ off standard pricing, helping you stay competitive in your market while maintaining healthy margins.",
  },
  {
    icon: Palette,
    title: "Full White Labeling",
    description: "Brand ScreenFusion completely under your own name with custom URLs, logos, colors, and branding throughout.",
  },
  {
    icon: Settings,
    title: "Partner Admin Portal",
    description: "Dedicated dashboard to manage all your client accounts, licenses, billing, and support tickets in one place.",
  },
  {
    icon: Users,
    title: "Client Management",
    description: "Create and manage sub-accounts for your clients. Control permissions, allocate screens, and monitor usage.",
  },
  {
    icon: HeadphonesIcon,
    title: "Priority Support",
    description: "Get dedicated partner support with faster response times and direct access to our technical team.",
  },
  {
    icon: RefreshCw,
    title: "Free Software Updates",
    description: "All platform updates, new features, and security patches are included at no additional cost.",
  },
  {
    icon: BarChart3,
    title: "Revenue Tracking",
    description: "Track your client deployments, revenue, and growth with detailed analytics and reporting.",
  },
  {
    icon: Server,
    title: "Enterprise Infrastructure",
    description: "Powered by Google Cloud Platform, ensuring reliability, scalability, and global availability.",
  },
  {
    icon: Shield,
    title: "SLA Guarantee",
    description: "Enterprise-grade uptime guarantees with compensation if service levels aren't met.",
  },
];

const Reseller = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Application submitted! Our partnerships team will contact you within 48 hours.");
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-glow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Partner Program
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Become a ScreenFusion{" "}
              <span className="gradient-text">Partner</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join our reseller program and offer enterprise-grade digital signage 
              to your clients. We handle the technology, you grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Why Partner with ScreenFusion?
            </h2>
            <p className="text-muted-foreground">
              Our partner program is designed to help you succeed with competitive pricing, 
              dedicated support, and powerful tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="feature-card">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Box */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="gradient-border p-1 rounded-3xl">
              <div className="bg-card rounded-3xl p-8 md:p-12 text-center">
                <div className="text-6xl md:text-7xl font-display font-bold gradient-text mb-4">
                  50%+
                </div>
                <p className="text-xl text-muted-foreground mb-6">
                  Partner Discount on All Plans
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    No minimum commitment
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Volume bonuses available
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Flexible billing options
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Apply to Become a Partner
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and our partnerships team will reach out 
                within 48 hours to discuss your application.
              </p>
            </div>
            
            <div className="feature-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Business Email *</Label>
                  <Input id="email" type="email" placeholder="john@yourcompany.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input id="company" placeholder="Your company name" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" type="url" placeholder="https://yourcompany.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="screens">Expected Number of Screens (First Year)</Label>
                  <Input id="screens" type="number" placeholder="e.g., 50" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your business *</Label>
                  <Textarea
                    id="message"
                    placeholder="What industry do you serve? What's your current digital signage experience?"
                    className="min-h-[120px]"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="btn-hero w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reseller;
