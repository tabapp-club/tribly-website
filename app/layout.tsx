import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

// Using Google Fonts as alternatives to Clash Grotesk and Manrope
// Outfit is similar to Clash Grotesk
// Inter is similar to Manrope
const outfit = Inter({
  subsets: ["latin"],
  variable: "--font-clash",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Tribly - #1 Customer Engagement & Retention Platform | WhatsApp Automation India",
  description: "Tribly is India's leading AI-powered customer engagement platform. Boost customer retention, automate WhatsApp marketing, and grow your business in Andhra Pradesh, Telangana, Bengaluru. Trusted by 20+ businesses.",
  keywords: [
    // Core Brand Keywords
    "tribly", "tribly ai", "tribly platform", "tribly automation", "tribly customer engagement",
    
    // Primary Service Keywords
    "customer engagement", "customer retention", "customer loyalty", "customer satisfaction",
    "customer experience", "customer relationship management", "customer lifecycle",
    "customer acquisition", "customer lifetime value", "customer churn reduction",
    
    // WhatsApp & Communication Keywords
    "WhatsApp automation", "WhatsApp marketing", "WhatsApp business", "WhatsApp campaigns",
    "WhatsApp customer service", "WhatsApp notifications", "WhatsApp messaging",
    "WhatsApp broadcast", "WhatsApp chatbot", "WhatsApp integration",
    "WhatsApp API", "WhatsApp Business API", "WhatsApp automation India",
    
    // Marketing & Automation Keywords
    "marketing automation", "automated marketing", "marketing campaigns", "digital marketing",
    "email marketing", "SMS marketing", "social media marketing", "content marketing",
    "lead generation", "lead nurturing", "sales automation", "marketing automation platform",
    "automated campaigns", "campaign management", "marketing automation software",
    
    // AI & Technology Keywords
    "AI customer engagement", "AI automation", "artificial intelligence", "machine learning",
    "AI marketing", "AI customer service", "AI chatbot", "AI insights", "AI analytics",
    "smart automation", "intelligent automation", "AI-powered platform", "AI customer retention",
    "AI marketing automation", "AI customer experience", "AI business automation",
    
    // Platform & Software Keywords
    "customer engagement platform", "customer retention platform", "engagement platform",
    "retention platform", "marketing platform", "automation platform", "business platform",
    "customer management system", "CRM automation", "customer data platform",
    "engagement software", "retention software", "marketing software", "automation software",
    
    // Business Growth Keywords
    "business growth", "business automation", "business efficiency", "business optimization",
    "revenue growth", "sales growth", "customer growth", "business development",
    "business transformation", "digital transformation", "business intelligence",
    "business analytics", "business insights", "business performance",
    
    // Industry-Specific Keywords
    "healthcare marketing", "healthcare automation", "clinic automation", "hospital automation",
    "dental clinic automation", "dermatology marketing", "pediatrics marketing",
    "auto service automation", "automotive marketing", "car service automation",
    "restaurant marketing", "hotel marketing", "retail marketing", "ecommerce marketing",
    "fashion marketing", "electronics marketing", "furniture marketing",
    "beauty salon marketing", "spa marketing", "wellness marketing",
    
    // Location-Based Keywords
    "India", "Indian business", "India marketing", "India automation",
    "Andhra Pradesh", "Telangana", "Karnataka", "Bengaluru", "Bangalore", "Hyderabad",
    "Vijayawada", "Visakhapatnam", "Guntur", "Nellore", "Tirupati", "Warangal",
    "Nizamabad", "Khammam", "Karimnagar", "Mysuru", "Hubli", "Mangalore",
    "customer engagement India", "WhatsApp automation India", "marketing automation India",
    "business automation India", "customer retention India", "AI automation India",
    "Andhra Pradesh business", "Telangana marketing", "Bengaluru business",
    "Hyderabad business", "customer engagement Andhra Pradesh", "WhatsApp automation Telangana",
    "marketing automation Bengaluru", "business automation Hyderabad",
    
    // Service-Specific Keywords
    "customer communication", "customer support", "customer service", "customer care",
    "customer onboarding", "customer follow-up", "customer feedback", "customer surveys",
    "customer segmentation", "customer targeting", "customer personalization",
    "customer journey", "customer touchpoints", "customer interactions",
    "multi-channel marketing", "omnichannel marketing", "cross-channel marketing",
    
    // Technical Keywords
    "API integration", "webhook automation", "data synchronization", "real-time automation",
    "cloud automation", "SaaS platform", "software as a service", "cloud-based platform",
    "mobile automation", "web automation", "API automation", "integration platform",
    
    // Business Process Keywords
    "appointment booking", "booking automation", "scheduling automation", "reminder automation",
    "notification automation", "alert automation", "workflow automation", "process automation",
    "business process automation", "operational automation", "administrative automation",
    
    // Analytics & Reporting Keywords
    "customer analytics", "engagement analytics", "retention analytics", "marketing analytics",
    "business analytics", "performance analytics", "ROI analytics", "conversion analytics",
    "campaign analytics", "customer insights", "business insights", "data insights",
    "reporting dashboard", "analytics dashboard", "performance dashboard",
    
    // Competitive Keywords
    "customer engagement tools", "retention tools", "marketing tools", "automation tools",
    "WhatsApp tools", "business tools", "customer tools", "engagement solutions",
    "retention solutions", "marketing solutions", "automation solutions", "business solutions",
    "customer solutions", "WhatsApp solutions", "engagement services", "retention services",
    "marketing services", "automation services", "business services", "customer services",
    
    // Long-Tail Keywords
    "WhatsApp automation for businesses", "customer retention strategies", "marketing automation platform",
    "AI-powered customer engagement", "automated customer communication", "customer engagement software",
    "WhatsApp marketing automation", "customer retention platform", "marketing automation tools",
    "business automation platform", "customer engagement solutions", "retention marketing platform",
    "WhatsApp business automation", "customer engagement platform India", "marketing automation India",
    "customer retention software", "engagement automation platform", "retention automation tools",
    "WhatsApp customer engagement", "automated marketing campaigns", "customer engagement automation",
    "retention marketing automation", "business engagement platform", "customer automation platform",
    "marketing engagement platform", "WhatsApp engagement automation", "customer retention automation",
    "engagement marketing platform", "retention engagement platform", "automation engagement platform",
    "customer marketing automation", "engagement retention platform", "marketing retention automation",
    "WhatsApp retention automation", "customer marketing platform", "business retention platform",
    "automation customer platform", "engagement customer platform", "retention customer platform",
    "marketing customer platform", "WhatsApp customer platform", "business customer platform",
    "platform customer engagement", "platform customer retention", "platform marketing automation",
    "platform WhatsApp automation", "platform business automation", "platform customer automation",
    "automation platform customer", "automation platform engagement", "automation platform retention",
    "automation platform marketing", "automation platform WhatsApp", "automation platform business",
    "customer platform automation", "engagement platform automation", "retention platform automation",
    "marketing platform automation", "WhatsApp platform automation", "business platform automation",
    "platform automation customer", "platform automation engagement", "platform automation retention",
    "platform automation marketing", "platform automation WhatsApp", "platform automation business"
  ],
  authors: [{ name: "Tribly Team" }],
  creator: "Tribly",
  publisher: "Tribly",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Tribly - #1 Customer Engagement & Retention Platform | WhatsApp Automation India",
    description: "India's leading AI-powered customer engagement platform. Boost retention, automate WhatsApp marketing, and grow your business in Andhra Pradesh, Telangana, Bengaluru.",
    type: "website",
    locale: "en_IN",
    siteName: "Tribly",
    url: "https://tribly.ai",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tribly - AI-Powered Customer Engagement Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tribly - #1 Customer Engagement & Retention Platform",
    description: "India's leading AI-powered customer engagement platform. Boost retention, automate WhatsApp marketing.",
    images: ["/images/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://tribly.ai",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="antialiased bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

