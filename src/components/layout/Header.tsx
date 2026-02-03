import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const solutions = [
  { title: "Education", href: "/solutions/digital-signage-education/", description: "Campus announcements & schedules" },
  { title: "Restaurants & Cafes", href: "/solutions/digital-signage-restaurants-cafes/", description: "Digital menus & promotions" },
  { title: "Retail", href: "/solutions/digital-signage-retail/", description: "Dynamic ads & in-store displays" },
  { title: "Real Estate", href: "/solutions/digital-signage-real-estate/", description: "Property listings & showcases" },
  { title: "Healthcare", href: "/solutions/digital-signage-healthcare/", description: "Patient info & wayfinding" },
  { title: "Hospitality", href: "/solutions/digital-signage-hospitality/", description: "Guest services & directories" },
];

const features = [
  { title: "Video Wall", href: "/digital-signage-features/video-wall/", description: "Create stunning multi-screen displays" },
  { title: "Scheduling", href: "/digital-signage-features/scheduling/", description: "Plan content weeks in advance" },
  { title: "Templates", href: "/digital-signage-features/templates/", description: "Professional ready-made designs" },
  { title: "Analytics", href: "/digital-signage-features/analytics/", description: "AI-powered audience insights" },
  { title: "All Features", href: "/digital-signage-features/", description: "Explore all capabilities" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
              <Monitor className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-display font-bold">
              Screen<span className="gradient-text">Fusion</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-secondary/50">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-2 p-4 md:grid-cols-2">
                      {solutions.map((solution) => (
                        <li key={solution.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={solution.href}
                              className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50"
                            >
                              <div className="text-sm font-medium leading-none">{solution.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                {solution.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-secondary/50">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-4">
                      {features.map((feature) => (
                        <li key={feature.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={feature.href}
                              className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/50"
                            >
                              <div className="text-sm font-medium leading-none">{feature.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                {feature.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/pricing/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/50"
                  >
                    Pricing
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/digital-signage-software-partner-white-label/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/50"
                  >
                    Reseller
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    to="/contact/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary/50"
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <a href="https://manage.screenfusion.ai" target="_blank" rel="noopener noreferrer">
                Sign In
              </a>
            </Button>
            <Button className="btn-hero" asChild>
              <a href="https://manage.screenfusion.ai" target="_blank" rel="noopener noreferrer">
                Start Free Trial
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Solutions</p>
                {solutions.map((solution) => (
                  <Link
                    key={solution.title}
                    to={solution.href}
                    className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    {solution.title}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Features</p>
                {features.map((feature) => (
                  <Link
                    key={feature.title}
                    to={feature.href}
                    className="block px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    {feature.title}
                  </Link>
                ))}
              </div>
              <Link to="/pricing/" className="px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors">
                Pricing
              </Link>
              <Link to="/digital-signage-software-partner-white-label/" className="px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors">
                Reseller
              </Link>
              <Link to="/contact/" className="px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors">
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" asChild>
                  <a href="https://manage.screenfusion.ai" target="_blank" rel="noopener noreferrer">
                    Sign In
                  </a>
                </Button>
                <Button className="btn-hero" asChild>
                  <a href="https://manage.screenfusion.ai" target="_blank" rel="noopener noreferrer">
                    Start Free Trial
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
