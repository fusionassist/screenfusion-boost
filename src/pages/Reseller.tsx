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
  Shield,
  Tag,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

const whitelabelFeatures = [
  { icon: Palette, text: "Your brand, logo, colors & custom domain" },
  { icon: Settings, text: "Full admin portal to manage client accounts" },
  { icon: Users, text: "Create unlimited sub-accounts for your clients" },
  { icon: Server, text: "Enterprise infrastructure on Google Cloud" },
  { icon: HeadphonesIcon, text: "Dedicated partner success manager" },
  { icon: Shield, text: "SLA guarantee & priority support" },
  { icon: RefreshCw, text: "Free software updates & new features" },
  { icon: BarChart3, text: "Revenue & deployment analytics" },
];

const resellerFeatures = [
  { icon: DollarSign, text: "Significant volume discounts on licenses" },
  { icon: Tag, text: "Sell ScreenFusion-branded at your own price" },
  { icon: Users, text: "Manage your clients from a partner dashboard" },
  { icon: HeadphonesIcon, text: "Priority technical support" },
  { icon: RefreshCw, text: "Free software updates for all clients" },
  { icon: Layers, text: "API access for custom integrations" },
  { icon: BarChart3, text: "Track deployments & commissions" },
  { icon: Shield, text: "No minimum commitment required" },
];

const Reseller = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [program, setProgram] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        "Application submitted! Our partnerships team will contact you within 48 hours."
      );
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
              Grow Your Business with{" "}
              <span className="gradient-text">ScreenFusion</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Our partner programs are exclusively available to trade clients
              operating in the digital signage industry — AV integrators,
              managed service providers, IT resellers and signage companies.
            </p>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Choose the program that fits your business: fully brand
              our platform as your own, or resell ScreenFusion at
              discounted volume pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Two Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* White Label */}
            <div className="feature-card relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-sf-purple" />
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
                  White Label
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                  Your Brand, Our Technology
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Launch your own digital signage platform under your brand.
                  Custom domain, logo, colors — your clients will never know
                  it's powered by ScreenFusion.
                </p>
              </div>

              <div className="bg-secondary/50 rounded-xl p-4 mb-6 text-center">
                <div className="text-4xl font-display font-bold gradient-text mb-1">
                  Custom Pricing
                </div>
                <p className="text-sm text-muted-foreground">
                  Minimum 50 licences
                </p>
              </div>

              <ul className="space-y-3">
                {whitelabelFeatures.map((f) => (
                  <li
                    key={f.text}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <f.icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {f.text}
                  </li>
                ))}
              </ul>

              <a
                href="#apply"
                onClick={() => setProgram("white-label")}
                className="btn-primary mt-8 w-full flex items-center justify-center gap-2 text-sm"
              >
                Apply for White Label <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Standard Reseller */}
            <div className="feature-card relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-sf-blue-light" />
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4">
                  Standard Reseller
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                  Resell ScreenFusion As-Is
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Recommend and resell ScreenFusion to your clients at your own
                  pricing. No rebranding needed — leverage our established brand
                  and get volume discounts.
                </p>
              </div>

              <div className="bg-secondary/50 rounded-xl p-4 mb-6 text-center">
                <div className="text-4xl font-display font-bold text-primary mb-1">
                  Volume Pricing
                </div>
                <p className="text-sm text-muted-foreground">
                  Minimum 25 licences
                </p>
              </div>

              <ul className="space-y-3">
                {resellerFeatures.map((f) => (
                  <li
                    key={f.text}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <f.icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {f.text}
                  </li>
                ))}
              </ul>

              <a
                href="#apply"
                onClick={() => setProgram("standard-reseller")}
                className="btn-primary mt-8 w-full flex items-center justify-center gap-2 text-sm"
              >
                Apply as Reseller <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shared benefits */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="gradient-border p-1 rounded-3xl">
              <div className="bg-card rounded-3xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">
                  Both Programs Include
                </h2>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  {[
                    "No minimum commitment",
                    "Volume bonuses available",
                    "Flexible billing options",
                    "Priority partner support",
                    "Free onboarding & training",
                    "Co-marketing support",
                  ].map((item) => (
                    <span
                      key={item}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16" id="apply">
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
                {/* Program Selection */}
                <div className="space-y-2">
                  <Label htmlFor="program">Program Type *</Label>
                  <Select
                    value={program}
                    onValueChange={setProgram}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="white-label">
                        White Label Partner
                      </SelectItem>
                      <SelectItem value="standard-reseller">
                        Standard Reseller
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

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
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@yourcompany.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://yourcompany.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country *</Label>
                    <Input id="country" placeholder="e.g., Ireland" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="screens">
                    Expected Number of Screens (First Year)
                  </Label>
                  <Input id="screens" type="number" placeholder="e.g., 50" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Tell us about your business *
                  </Label>
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
