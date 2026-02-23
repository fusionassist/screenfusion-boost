import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Eye,
  ShieldCheck,
  Cpu,
  WifiOff,
  Users,
  Camera,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Advanced AI Technology",
  "Face Detection & Demographics",
  "Edge AI Processing",
  "GDPR-Compliant",
  "Stand-Alone Capability",
  "Data-Driven Insights",
];

const features = [
  {
    icon: Camera,
    title: "Face Detection & Demographics",
    description:
      "ScreenFusion AI accurately captures audience data like age, gender, and emotions from a distance of up to 6 meters, providing real-time insights.",
  },
  {
    icon: Users,
    title: "Stand-Alone Capability",
    description:
      "Whether paired with digital signage or operating solo, our AI collects valuable audience insights for footfall analysis, demographics, and audience engagement.",
  },
  {
    icon: LayoutDashboard,
    title: "AI Data & Dashboard",
    description:
      "Share detailed reports to showcase ad performance and success. See who views your content, which displays get the most attention, and which campaigns perform best.",
  },
  {
    icon: ShieldCheck,
    title: "GDPR Compliance",
    description:
      "All data is anonymised for secure processing without collecting personal information, and is processed in real-time to ensure security and compliance.",
  },
  {
    icon: Cpu,
    title: "Edge AI Processing",
    description:
      "Our advanced edge AI processes data directly on the device, eliminating the need for costly external APIs or infrastructure while ensuring fast and secure insights.",
  },
  {
    icon: WifiOff,
    title: "Offline Operation",
    description:
      "Our AI solution operates offline and continues to collect and process data even during network disruptions.",
  },
];

const whyCards = [
  {
    icon: BarChart3,
    title: "Audience Analytics",
    description:
      "Gain valuable analytics on your audience to make every campaign smarter. Track engagement and see which demographics respond best to your ads.",
  },
  {
    icon: Eye,
    title: "Viewers Count",
    description:
      "See who's viewing your displays, track how many people notice your content, measure how long they watch, and find out what grabs the most attention.",
  },
  {
    icon: ShieldCheck,
    title: "Affordable Pricing",
    description:
      "Our subscription plans make industry-leading AI affordable for all businesses. No expensive hardware, just powerful AI features at a fraction of the price.",
  },
];

const AIAnalytics = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-glow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="chip mb-4">AI Analytics</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              ScreenFusion{" "}
              <span className="gradient-text">AI Analytics</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              ScreenFusion is your all-in-one, cloud-based SaaS for digital
              signage that provides an affordable, scalable AI solution for
              businesses of all sizes. With ScreenFusion AI Viewer Analytics,
              you gain valuable audience insights effortlessly.
            </p>
            <ul className="flex flex-wrap justify-center gap-3 mb-8">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground bg-secondary/60 px-3 py-1.5 rounded-full"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button className="btn-hero" asChild>
              <a
                href="https://app.screenfusion.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why ScreenFusion AI */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-4">
            Why ScreenFusion AI?
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            ScreenFusion AI is an affordable and easy-to-use tool for all
            industries. It provides real-time insights into who is viewing your
            content and how many people engage, helping businesses improve
            marketing and audience targeting.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyCards.map((card) => (
              <div key={card.title} className="feature-card text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <card.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Powerful Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-4">
            Powerful ScreenFusion AI Features
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            At ScreenFusion, we handle the hard work for you. With ScreenFusion
            AI, receive detailed reports and access raw data to make strategic,
            data-driven decisions easily.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-6">
              How ScreenFusion AI Works
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              ScreenFusion AI uses artificial intelligence and machine learning
              to track audience engagement instantly. It captures insights as
              soon as someone interacts with a digital signage screen or can
              operate independently via a camera connected to an AI device,
              collecting audience data without digital screens.
            </p>
          </div>
        </div>
      </section>

      {/* Deep Dive Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 space-y-20 max-w-4xl">
          {/* Face Detection */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-bold mb-4">
              Advanced Face Detection & Demographics
            </h2>
            <p className="text-muted-foreground mb-4">
              ScreenFusion AI accurately detects faces and key audience
              attributes like age, gender, and emotions, from a distance of up
              to 6 meters away. This delivers real-time insights that help
              businesses to understand audience behavior, personalise messaging,
              and create more relevant content for better engagement.
            </p>
            <p className="text-sm text-muted-foreground">
              Media and crowd analytics collected by ScreenFusion AI: visitors
              count, media count, dwell time of viewers, visitor insights (age
              and gender), and emotion analysis (happy, neutral, serious,
              surprised).
            </p>
          </div>

          {/* Stand-Alone */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-bold mb-4">
              Stand-Alone Capability
            </h2>
            <p className="text-muted-foreground mb-4">
              ScreenFusion AI is a flexible solution that works with or without
              digital signage. Even without using digital displays, simply
              connect a camera to an AI device to capture real-time audience
              insights. With ScreenFusion AI, businesses can track foot traffic,
              analyse demographics, and measure engagement—no matter the setup.
            </p>
            <p className="text-sm text-muted-foreground">
              Whether used in retail, advertising, real estate, events, or
              public spaces, this smart AI technology helps businesses deliver
              highly targeted messaging and optimise audience interactions with
              ease.
            </p>
          </div>

          {/* GDPR */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-bold mb-4">
              Privacy-Focused & GDPR-Compliant
            </h2>
            <p className="text-muted-foreground mb-4">
              It is fully GDPR-compliant and ensures data privacy by not
              collecting any personally identifiable information (PII). All data
              is anonymised for secure and ethical processing, with real-time
              analysis that does not store or retain information. This
              privacy-first approach allows businesses across all industries to
              gain valuable audience insights while maintaining full compliance
              with data protection laws.
            </p>
            <p className="text-xs text-muted-foreground italic">
              ScreenFusion AI analytics are privacy-first and use
              non-identifiable, aggregated data.
            </p>
          </div>

          {/* Edge AI */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-bold mb-4">
              Edge AI Processing
            </h2>
            <p className="text-muted-foreground mb-4">
              ScreenFusion AI requires no complex setup or extra infrastructure,
              as everything operates directly on the device. This allows
              businesses to access powerful data-driven features without
              depending on costly third-party services or additional
              configurations. With edge AI processing, data is managed locally,
              which reduces costs, delivering faster insights, and eliminates
              the need for external APIs or cloud services.
            </p>
            <p className="text-sm text-muted-foreground">
              ScreenFusion AI functions offline, maintaining its capabilities to
              detect faces, analyse engagement, and perform machine learning
              even during network failures. Data is securely stored in a local
              database and cached on the device.
            </p>
          </div>

          {/* Dashboard */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-bold mb-4">
              AI Dashboard for Performance Tracking
            </h2>
            <p className="text-muted-foreground">
              The AI-powered dashboard delivers detailed reports and insights,
              helping businesses track engagement, identify peak activity times,
              measure content performance, and refine strategies to maximise
              ROI. Easily update displays and promotions to connect with the
              right audience at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to unlock audience insights?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Start using ScreenFusion AI Analytics today and make data-driven
            decisions to improve your digital signage performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="btn-hero" asChild>
              <a
                href="https://app.screenfusion.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" className="btn-ghost" asChild>
              <Link to="/contact/">
                Contact Sales
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AIAnalytics;
