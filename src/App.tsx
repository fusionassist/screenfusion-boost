import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import SolutionDetail from "./pages/SolutionDetail";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Reseller from "./pages/Reseller";
import Apps from "./pages/Apps";
import Hardware from "./pages/Hardware";
import HowItWorks from "./pages/HowItWorks";
import AIAnalytics from "./pages/AIAnalytics";
import AudienceTargeting from "./pages/AudienceTargeting";
import DigitalSignageForRetail from "./pages/DigitalSignageForRetail";
import DigitalSignageForHospitality from "./pages/DigitalSignageForHospitality";
import CanvaDigitalSignageIntegration from "./pages/CanvaDigitalSignageIntegration";
import TouchscreenSignageCMS from "./pages/TouchscreenSignageCMS";
import AIDemographicDigitalSignage from "./pages/AIDemographicDigitalSignage";
import DynamicPricingDigitalSignage from "./pages/DynamicPricingDigitalSignage";
import ComparisonPage from "./pages/ComparisonPage";
import NotFound from "./pages/NotFound";

// Lazy load pages that use Supabase client
const Shop = lazy(() => import("./pages/Shop"));
const ShopSuccess = lazy(() => import("./pages/ShopSuccess"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/solutions/" element={<Solutions />} />
          <Route path="/solutions/:solutionId/" element={<SolutionDetail />} />
          <Route path="/digital-signage-features/" element={<Features />} />
          <Route path="/digital-signage-features/:featureId/" element={<Features />} />
          <Route path="/pricing/" element={<Pricing />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/digital-signage-software-partner-white-label/" element={<Reseller />} />
          <Route path="/apps/" element={<Apps />} />
          <Route path="/digital-signage-player/" element={<Hardware />} />
          <Route path="/how-it-works/" element={<HowItWorks />} />
          <Route path="/solutions/ai-digital-signage-analytics/" element={<AIAnalytics />} />
          <Route path="/solutions/ai-digital-signage-audience-targeting/" element={<AudienceTargeting />} />
          <Route path="/digital-signage-for-retail/" element={<DigitalSignageForRetail />} />
          <Route path="/digital-signage-for-hospitality/" element={<DigitalSignageForHospitality />} />
          <Route path="/canva-digital-signage-integration/" element={<CanvaDigitalSignageIntegration />} />
          <Route path="/touchscreen-signage-cms/" element={<TouchscreenSignageCMS />} />
          <Route path="/ai-demographic-digital-signage/" element={<AIDemographicDigitalSignage />} />
          <Route path="/dynamic-pricing-digital-signage/" element={<DynamicPricingDigitalSignage />} />
          <Route path="/compare-digital-signage-software/" element={<ComparisonPage />} />
          <Route path="/shop/" element={<Suspense fallback={<div />}><Shop /></Suspense>} />
          <Route path="/shop/success" element={<Suspense fallback={<div />}><ShopSuccess /></Suspense>} />
          
          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
