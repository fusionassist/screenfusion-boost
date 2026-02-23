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
import Shop from "./pages/Shop";
import ShopSuccess from "./pages/ShopSuccess";
import NotFound from "./pages/NotFound";

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
          <Route path="/shop/" element={<Shop />} />
          <Route path="/shop/success" element={<ShopSuccess />} />
          
          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
