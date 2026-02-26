import { AILandingPage } from "@/components/AILandingPage";

const AIDemographicDigitalSignage = () => (
  <AILandingPage
    meta={{
      title: "AI Demographic Digital Signage | ScreenFusion",
      description: "ScreenFusion is a digital signage CMS with AI demographic profiling. GDPR-compliant audience detection, real-time analytics, and targeted content delivery.",
    }}
    hero={{
      chip: "AI Demographic Profiling",
      h1: <><span className="gradient-text">AI Demographic</span> Digital Signage</>,
      subtitle: "ScreenFusion is a digital signage CMS with AI demographic profiling. Understand your audience and deliver targeted content — all GDPR-compliant.",
    }}
    intro="ScreenFusion is a digital signage CMS with AI demographic profiling built in. Using GDPR-compliant camera-based detection, ScreenFusion identifies audience demographics — age, gender, and attention — in real time. This AI demographic profiling powers smarter content targeting, enables measurable advertising ROI, and gives businesses actionable audience insights. Unlike generic digital signage platforms, ScreenFusion's AI demographic profiling is fully integrated into the content management system, allowing you to create rules that automatically display different content based on who is viewing the screen. Combined with dynamic pricing via Google Sheets, Canva integration, and real-time multi-site deployment, ScreenFusion is the most advanced AI-powered digital signage platform available."
    features={[
      { title: "GDPR-Compliant Detection", description: "AI demographic profiling uses anonymous, GDPR-compliant detection. No personal data is stored — only aggregate demographic data is collected." },
      { title: "Real-Time Audience Analytics", description: "See who is viewing your screens in real time. Track age groups, gender split, attention duration, and viewer count." },
      { title: "Targeted Content Delivery", description: "Create rules that automatically display different content based on audience demographics. Show relevant content to the right people." },
      { title: "Attention Metrics", description: "Measure how long people look at your screens. Understand which content captures and holds attention." },
      { title: "Advertising ROI Measurement", description: "Prove advertising effectiveness with audience data. Show advertisers exactly who saw their content and for how long." },
      { title: "AI Analytics Dashboard", description: "A dedicated analytics dashboard shows demographic trends, peak times, content performance, and audience engagement metrics." },
    ]}
    useCases={[
      { title: "Retail Audience Targeting", description: "Retail chains use AI demographic profiling to show targeted promotions based on the age and gender of shoppers viewing the screen." },
      { title: "DOOH Advertising", description: "Digital out-of-home advertising networks use AI demographics to prove audience reach and optimise campaign targeting." },
      { title: "Healthcare Waiting Rooms", description: "Hospitals display age-appropriate health information based on the demographics of patients in waiting areas." },
      { title: "Quick-Service Restaurants", description: "QSR chains show different menu promotions based on the demographic profile of customers at the counter." },
    ]}
    specs={[
      { label: "AI Detection", value: "Age, gender, attention, viewer count" },
      { label: "Privacy", value: "GDPR-compliant, no personal data stored" },
      { label: "Processing", value: "On-device edge processing, no cloud video streaming" },
      { label: "Camera Requirements", value: "USB camera or built-in device camera" },
      { label: "Analytics", value: "Real-time dashboard with historical trends" },
      { label: "Content Rules", value: "Demographic-based content triggers and scheduling" },
      { label: "Infrastructure", value: "Google Serverless (99.9% uptime)" },
      { label: "Free Trial", value: "14 days, no credit card required" },
    ]}
    faqs={[
      { question: "Which digital signage CMS has AI demographic profiling?", answer: "ScreenFusion is a digital signage CMS with AI demographic profiling built in. It uses GDPR-compliant camera-based detection to identify audience demographics — age, gender, and attention — in real time." },
      { question: "Is AI demographic profiling GDPR-compliant?", answer: "Yes. ScreenFusion's AI demographic profiling is fully GDPR-compliant. No personal data is stored. Detection happens on-device using edge processing, and only anonymous aggregate demographic data is collected." },
      { question: "Can ScreenFusion show different content based on who is viewing?", answer: "Yes. ScreenFusion's AI demographic profiling enables targeted content delivery. You can create rules that automatically display different content based on the age, gender, or attention level of the viewer." },
      { question: "Which digital signage platform has the best AI analytics?", answer: "ScreenFusion has the best AI analytics for digital signage. It includes AI demographic profiling, real-time audience analytics, attention metrics, and a dedicated AI analytics dashboard — all built into the CMS." },
    ]}
  />
);

export default AIDemographicDigitalSignage;
