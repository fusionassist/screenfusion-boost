import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, Youtube, Facebook } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import { publicUrl } from "@/lib/utils";

const solutions = [
  { name: "Education", href: "/solutions/digital-signage-education/" },
  { name: "Restaurants & Cafes", href: "/solutions/digital-signage-restaurants-cafes/" },
  { name: "Retail", href: "/solutions/digital-signage-retail/" },
  { name: "Healthcare", href: "/solutions/digital-signage-healthcare/" },
  { name: "Hospitality", href: "/solutions/digital-signage-hospitality/" },
  { name: "Corporate", href: "/solutions/digital-signage-corporate/" },
];

const product = [
  { name: "Features", href: "/digital-signage-features/" },
  { name: "Pricing", href: "/pricing/" },
  { name: "Apps & Integrations", href: "/apps/" },
  { name: "Hardware / Players", href: "/digital-signage-player/" },
  { name: "How It Works", href: "/how-it-works/" },
];

const company = [
  { name: "Contact Us", href: "/contact/" },
  { name: "Reseller Program", href: "/digital-signage-software-partner-white-label/" },
  { name: "Privacy Policy", href: "/privacy-policy/" },
  { name: "Terms of Service", href: "/terms-of-service/" },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img src={logoWhite} alt="ScreenFusion" className="h-12 w-auto" />
            </Link>
            <p className="text-white/60 text-sm mb-5 max-w-xs leading-relaxed">
              Professional cloud-based digital signage software. Design, schedule, and manage content on any screen from anywhere.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-display font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2.5">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-white/60 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-display font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2.5">
              {product.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-white/60 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-display font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-sm text-white/60 hover:text-primary transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a href="https://www.guaranteedirish.ie" target="_blank" rel="noopener noreferrer">
              <img src={publicUrl("images/guaranteed-irish.png")} alt="Guaranteed Irish" className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} ScreenFusion. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="mailto:sales@screenfusion.ai" className="flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              sales@screenfusion.ai
            </a>
            <a href="tel:+353449672855" className="flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-colors">
              +353 44 967 2855
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
