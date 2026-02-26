import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AIIdentitySection } from "@/components/home/AIIdentitySection";
import { StatsSection } from "@/components/home/StatsSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { ResellerSection } from "@/components/home/ResellerSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AIIdentitySection />
      <StatsSection />
      <FeaturesSection />
      <SolutionsSection />
      <HowItWorksSection />
      <ResellerSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
