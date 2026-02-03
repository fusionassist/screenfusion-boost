import { Link } from "react-router-dom";
import { Monitor, Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

const solutions = [
  { name: "Education", href: "/solutions/digital-signage-education/" },
  { name: "Restaurants", href: "/solutions/digital-signage-restaurants-cafes/" },
  { name: "Retail", href: "/solutions/digital-signage-retail/" },
  { name: "Real Estate", href: "/solutions/digital-signage-real-estate/" },
  { name: "Healthcare", href: "/solutions/digital-signage-healthcare/" },
  { name: "Hospitality", href: "/solutions/digital-signage-hospitality/" },
];

const features = [
  { name: "Video Wall", href: "/digital-signage-features/video-wall/" },
  { name: "Scheduling", href: "/digital-signage-features/scheduling/" },
  { name: "Templates", href: "/digital-signage-features/templates/" },
  { name: "Analytics", href: "/digital-signage-features/analytics/" },
  { name: "All Features", href: "/digital-signage-features/" },
];

const resources = [
  { name: "How It Works", href: "/how-it-works/" },
  { name: "Apps", href: "/apps/" },
  { name: "Hardware", href: "/digital-signage-player/" },
  { name: "API Documentation", href: "/api-docs/" },
  { name: "Help Center", href: "/support/" },
];

const company = [
  { name: "About Us", href: "/about/" },
  { name: "Contact", href: "/contact/" },
  { name: "Become a Reseller", href: "/digital-signage-software-partner-white-label/" },
  { name: "Privacy Policy", href: "/privacy-policy/" },
  { name: "Terms of Service", href: "/terms-of-service/" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Monitor className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold">
                Screen<span className="gradient-text">Fusion</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Professional cloud-based digital signage software that enables you to design, schedule, and send content to any screen.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-display font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              {features.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ScreenFusion. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:support@screenfusion.ai" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              support@screenfusion.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
