import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  Target,
  ShieldCheck,
  Cpu,
  WifiOff,
  BarChart3,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Smart Ad Targeting",
  "Face Detection & Demographics",
  "Personalized Campaigns",
  "GDPR-Compliant",
  "Higher ROI",
];

const whyCards = [
  {
    iconSrc: "/images/icons/maximise-ad.svg",
    title: "Maximise Ad Impact",
    description:
      "Target the right audience with dynamic, customised content. Use precise audience segmentation to deliver ads that resonate with each group and maximise campaign performance.",
  },
  {
    iconSrc: "/images/icons/user-exp.svg",
    title: "Personalised Campaigns",
    description:
      "Show personalised content that resonates with your audience and keeps them interested. Our solution analyses audience data to show ads that are relevant and targeted for each viewer.",
  },
  {
    iconSrc: "/images/icons/affordable-pricing.svg",
    title: "Cost-Effective Targeting",
    description:
      "Use powerful audience targeting without breaking the budget. Our solution uses smart data insights to maximise ROI for all businesses of all sizes.",
  },
];

const features = [
  {
    icon: Target,
    title: "Targeted Content",
    description:
      "Show content that resonates with your audience. Adjust displays based on demographic information to boost engagement.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy First",
    description:
      "All audience data is anonymous and securely processed, ensuring privacy and full GDPR-compliance.",
  },
  {
    icon: Cpu,
    title: "Edge AI Processing",
    description:
      "Our AI analyzes audience data directly on the device for quick, secure insights without extra infrastructure.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Marketing",
    description:
      "Use audience insights to improve campaigns and product placement. Identify which content draws attention and engages viewers.",
  },
  {
    icon: Eye,
    title: "Track Your Audience",
    description:
      "Monitor how many people view your digital signage, how long they watch, and which content captures their attention.",
  },
  {
    icon: WifiOff,
    title: "Works Offline",
    description:
      "Audience targeting keeps running even if the internet goes down, so you never lose data.",
  },
];

const AudienceTargeting = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 section-glow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="chip mb-4">AI Audience Targeting</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              AI{" "}
              <span className="gradient-text">Audience Targeting</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Reach the right audience with smart targeted ads. Increase
              engagement, get better results, and run personalized campaigns
              with precision targeting.
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

          {/* Hero Video */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="rounded-xl overflow-hidden border border-border shadow-lg">
              <video
                src="/videos/audience-target-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Audience Targeting */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-4">
            Why Audience Targeting?
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Audience Targeting improves ad performance by reaching the right
            people with the right ads at the right time. Use data-driven
            insights to deliver personalized campaigns based on demographics and
            behaviour that increase engagement and ROI.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyCards.map((card) => (
              <div key={card.title} className="feature-card text-center">
                <div className="w-14 h-14 rounded-xl bg-secondary/60 flex items-center justify-center mx-auto mb-4">
                  <img src={card.iconSrc} alt={card.title} className="w-8 h-8" />
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

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-4">
            Audience Targeting Features
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            ScreenFusion makes audience targeting simple. Our Audience Analytics
            provides detailed insights into who engages with your content,
            enabling smarter decisions to improve your campaigns.
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
              How Audience Targeting Works
            </h2>
            <p className="text-muted-foreground text-center">
              ScreenFusion Audience Targeting uses AI and machine learning to
              identify viewer demographics, such as age and gender, when someone
              looks at your digital signage screen. Based on these insights, the
              system automatically displays content and ads tailored to that
              specific audience, ensuring messages are more relevant.
            </p>
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-4">
            See Audience Targeting in Action
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Watch how ScreenFusion identifies viewer demographics and delivers targeted content in real time.
          </p>
          <div className="rounded-xl overflow-hidden border border-border shadow-lg">
            <video
              src="/videos/digital-signage-audience-target.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Deep Dive Sections */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 space-y-20 max-w-4xl">
          {/* Audience Targeting */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-bold mb-4">
              Show the Right Ads to the Right People
            </h2>
            <p className="text-muted-foreground mb-4">
              ScreenFusion Audience Targeting ensures your ads reach the most
              relevant viewers. Using a connected camera and AI insights, the
              system identifies audience demographics like age, gender, and
              emotions, from a distance up to 6 meters away.
            </p>
            <p className="text-sm text-muted-foreground">
              When someone looks at your digital signage, it analyses their
              profile and displays personalised ads that align with them. All
              you need to do in the ScreenFusion CMS is enable audience
              targeting for the specific media, assign an age range, and choose
              a targeted gender; the system takes care of the rest, showing the
              right content to the targeted people. This boosts viewer
              engagement and increases the effectiveness of your advertising
              campaigns, making them feel more personal. As a result, you'll
              maximize your return on investment (ROI).
            </p>
          </div>

          {/* GDPR */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-bold mb-4">
              GDPR Data Privacy and Security
            </h2>
            <p className="text-muted-foreground mb-4">
              ScreenFusion Audience Targeting is built with privacy as a top
              priority. It does not collect personal identifiable information
              (PII); instead, all data is anonymised and processed in real time
              without being stored.
            </p>
            <p className="text-sm text-muted-foreground">
              This ensures full compliance with GDPR and data protection laws.
              Advertisers can deliver highly targeted ads and content while
              gaining valuable insights and keeping audience privacy safe and
              secure.
            </p>
            <p className="text-xs text-muted-foreground italic mt-3">
              ScreenFusion AI analytics are privacy-first and use
              non-identifiable, aggregated data.
            </p>
          </div>

          {/* Edge AI */}
          <div>
            <h2 className="text-xl md:text-2xl font-display font-bold mb-4">
              Edge AI Processing – Smarter Targeting Without Extra Hardware
            </h2>
            <p className="text-muted-foreground mb-4">
              The Audience Targeting solution operates directly on your device,
              with no additional equipment or complicated setup needed. All data
              is processed locally in real time, ensuring faster responses and
              reducing costs.
            </p>
            <p className="text-sm text-muted-foreground">
              Even if the internet connection fails, the system continues to
              detect faces, analyse demographics, and match content to the right
              audience on screen. This guarantees your ads stay relevant, your
              campaigns remain effective, and you never miss a chance to engage
              the right viewers at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Ready to target your audience?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Start using ScreenFusion Audience Targeting today and deliver the
            right content to the right people at the right time.
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

export default AudienceTargeting;
