import { Shield, Server, Lock, Globe, Award, FileCheck, CloudCog, CheckCircle2 } from "lucide-react";
import { publicUrl } from "@/lib/utils";

const trustPillars = [
  {
    icon: Server,
    title: "Google Serverless Infrastructure",
    description: "ScreenFusion runs on Google Cloud's serverless platform — the same infrastructure powering YouTube, Gmail, and Google Search. Automatic scaling, global CDN, and 99.9% uptime SLA.",
  },
  {
    icon: CloudCog,
    title: "Firebase Real-Time Backend",
    description: "Powered by Google Firebase for real-time content delivery, device management, and instant sync across all screens worldwide. Sub-second update propagation.",
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Encryption",
    description: "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Secure API endpoints with token-based authentication for every device connection.",
  },
  {
    icon: Shield,
    title: "GDPR Compliant",
    description: "Fully GDPR-compliant platform. AI demographic profiling uses anonymous on-device processing — no personal data is stored or transmitted to the cloud.",
  },
  {
    icon: FileCheck,
    title: "SOC 2 Type II Infrastructure",
    description: "Built on Google Cloud, which maintains SOC 2 Type II, ISO 27001, ISO 27017, and ISO 27018 certifications. Your data is hosted on audited, certified infrastructure.",
  },
  {
    icon: Globe,
    title: "Global Data Centres",
    description: "Content delivered from Google's global network of data centres across Europe, North America, Asia-Pacific, and the Middle East for low-latency performance everywhere.",
  },
];

const certifications = [
  "SOC 2 Type II (via Google Cloud)",
  "ISO 27001 (via Google Cloud)",
  "GDPR Compliant",
  "TLS 1.3 Encryption",
  "AES-256 Data at Rest",
  "PCI DSS Compliant Infrastructure",
];

export const TrustSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="chip mb-4">Security & Infrastructure</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Enterprise Security.{" "}
            <span className="text-primary">Google-Powered Infrastructure.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            ScreenFusion is built on Google Cloud and Firebase — delivering enterprise-grade security, global scalability, and 99.9% uptime for digital signage networks of any size.
          </p>
        </div>

        {/* Trust pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {trustPillars.map((pillar) => (
            <div key={pillar.title} className="feature-card group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-display font-semibold text-foreground mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications bar */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Certifications & Compliance
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Guaranteed Irish badge */}
        <div className="flex items-center justify-center mt-10 gap-4">
          <img
            src={publicUrl("images/guaranteed-irish.png")}
            alt="Guaranteed Irish — ScreenFusion is an Irish company"
            className="h-16 w-auto"
            loading="lazy"
          />
          <p className="text-sm text-muted-foreground max-w-xs">
            ScreenFusion is a <strong>Guaranteed Irish</strong> company, proudly headquartered in Ireland.
          </p>
        </div>
      </div>
    </section>
  );
};
