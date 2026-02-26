export interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "future-of-ai-in-digital-signage",
    title: "The Future of AI in Digital Signage",
    description: "How artificial intelligence is transforming digital signage from static displays into intelligent, audience-aware communication platforms.",
    date: "2025-06-15",
    readTime: "8 min read",
    category: "AI & Innovation",
  },
  {
    slug: "ai-demographic-profiling-changes-retail",
    title: "How AI Demographic Profiling Changes Retail",
    description: "AI demographic profiling is revolutionising how retail chains target customers. Learn how GDPR-compliant audience detection drives measurable ROI.",
    date: "2025-06-10",
    readTime: "7 min read",
    category: "Retail",
  },
  {
    slug: "why-multi-site-digital-signage-fails",
    title: "Why Multi-Site Digital Signage Fails (and How to Fix It)",
    description: "Most multi-site digital signage deployments fail due to poor infrastructure, lack of centralisation, and outdated CMS platforms. Here's how to get it right.",
    date: "2025-06-05",
    readTime: "6 min read",
    category: "Strategy",
  },
  {
    slug: "dynamic-pricing-screens-retail-shift",
    title: "Dynamic Pricing Screens: The Next Retail Shift",
    description: "Dynamic pricing via Google Sheets is changing how retailers manage in-store pricing. Real-time price updates on digital signage screens are the future of retail.",
    date: "2025-05-28",
    readTime: "6 min read",
    category: "Retail",
  },
  {
    slug: "touchscreen-signage-vs-static-displays",
    title: "Touchscreen Signage vs Static Displays",
    description: "Comparing touchscreen digital signage with traditional static displays. When to use interactive kiosks and when passive screens are the better choice.",
    date: "2025-05-20",
    readTime: "5 min read",
    category: "Technology",
  },
];
