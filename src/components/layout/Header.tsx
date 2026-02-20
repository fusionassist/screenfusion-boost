import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import logoHorizontal from "@/assets/logo-horizontal.png";

const solutions = [
  { title: "Education", href: "/solutions/digital-signage-education/", description: "Campus announcements & schedules" },
  { title: "Restaurants & Cafes", href: "/solutions/digital-signage-restaurants-cafes/", description: "Digital menus & promotions" },
  { title: "Retail", href: "/solutions/digital-signage-retail/", description: "Dynamic ads & in-store displays" },
  { title: "Real Estate", href: "/solutions/digital-signage-real-estate/", description: "Property listings & showcases" },
  { title: "Healthcare", href: "/solutions/digital-signage-healthcare/", description: "Patient info & wayfinding" },
  { title: "Hospitality", href: "/solutions/digital-signage-hospitality/", description: "Guest services & directories" },
  { title: "Corporate", href: "/solutions/digital-signage-corporate/", description: "Internal comms & dashboards" },
  { title: "Gym & Fitness", href: "/solutions/digital-signage-gym/", description: "Class schedules & promotions" },
];

const featuresNav = [
  { title: "Content Designer", href: "/digital-signage-features/designer/", description: "Drag & drop canvas editor" },
  { title: "Scheduling", href: "/digital-signage-features/scheduling/", description: "Plan content weeks in advance" },
  { title: "Templates", href: "/digital-signage-features/templates/", description: "500+ professional templates" },
  { title: "Video Wall", href: "/digital-signage-features/video-wall/", description: "Multi-screen displays" },
  { title: "Analytics", href: "/digital-signage-features/analytics/", description: "Proof of play & insights" },
  { title: "All Features →", href: "/digital-signage-features/", description: "" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white",
        isScrolled ? "shadow-sm border-b border-border" : "border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={logoHorizontal} alt="ScreenFusion" className="h-8 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("solutions")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/75 hover:text-primary transition-colors rounded-md hover:bg-secondary">
                Solutions <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {openDropdown === "solutions" && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl border border-border shadow-hover p-2 animate-fade-in">
                  <div className="grid grid-cols-2 gap-1">
                    {solutions.map((s) => (
                      <Link
                        key={s.title}
                        to={s.href}
                        className="block px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <div className="text-sm font-medium text-foreground">{s.title}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{s.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("features")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/75 hover:text-primary transition-colors rounded-md hover:bg-secondary">
                Features <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {openDropdown === "features" && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl border border-border shadow-hover p-2 animate-fade-in">
                  {featuresNav.map((f) => (
                    <Link
                      key={f.title}
                      to={f.href}
                      className="block px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <div className="text-sm font-medium text-foreground">{f.title}</div>
                      {f.description && <div className="text-xs text-muted-foreground mt-0.5">{f.description}</div>}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/how-it-works/" className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-primary transition-colors rounded-md hover:bg-secondary">
              How It Works
            </Link>
            <Link to="/pricing/" className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-primary transition-colors rounded-md hover:bg-secondary">
              Pricing
            </Link>
            <Link to="/apps/" className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-primary transition-colors rounded-md hover:bg-secondary">
              Apps
            </Link>
            <Link to="/digital-signage-player/" className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-primary transition-colors rounded-md hover:bg-secondary">
              Hardware
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://manage.screenfusion.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Log In
            </a>
            <a
              href="https://manage.screenfusion.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Try For Free
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-secondary transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide pt-2 pb-1">Solutions</p>
            {solutions.map((s) => (
              <Link key={s.title} to={s.href} className="px-3 py-2 rounded-lg text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                {s.title}
              </Link>
            ))}
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide pt-3 pb-1">Features</p>
            {featuresNav.map((f) => (
              <Link key={f.title} to={f.href} className="px-3 py-2 rounded-lg text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors">
                {f.title}
              </Link>
            ))}
            <div className="border-t border-border mt-2 pt-3 flex flex-col gap-2">
              <Link to="/pricing/" className="px-3 py-2 rounded-lg text-sm text-foreground hover:bg-secondary transition-colors">Pricing</Link>
              <Link to="/apps/" className="px-3 py-2 rounded-lg text-sm text-foreground hover:bg-secondary transition-colors">Apps</Link>
              <Link to="/digital-signage-player/" className="px-3 py-2 rounded-lg text-sm text-foreground hover:bg-secondary transition-colors">Hardware</Link>
              <Link to="/how-it-works/" className="px-3 py-2 rounded-lg text-sm text-foreground hover:bg-secondary transition-colors">How It Works</Link>
            </div>
            <div className="border-t border-border mt-2 pt-3 flex flex-col gap-2">
              <a href="https://manage.screenfusion.ai" target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-center rounded-lg border border-border text-sm font-semibold text-foreground hover:bg-secondary transition-colors">
                Log In
              </a>
              <a href="https://manage.screenfusion.ai" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm text-center">
                Try For Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
