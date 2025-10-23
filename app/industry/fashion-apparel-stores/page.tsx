
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function FashionApparelStoresPage() {
 const stats = [
 { number: "10x", label: "Online Sales" },
 { number: "85%", label: "Cart Recovery" },
 { number: "70%", label: "Repeat Purchases" },
 { number: "24/7", label: "Shopping Experience" }
 ];

 const whyTriblySections = [
 {
 title: "Why Fashion & Apparel Stores Need Tribly",
 points: [
 {
 heading: "Lost Online Shopping Opportunities",
 description: "Customers prefer shopping through WhatsApp. Tribly enables catalog browsing, size checks, and ordering through WhatsApp, increasing online sales by 10x."
 },
 {
 heading: "High Cart Abandonment Rate",
 description: "Customers abandon carts without purchasing. Tribly sends automated follow-ups with personalized offers, recovering 85% of lost sales."
 },
 {
 heading: "Limited Personal Styling Support",
 description: "Customers need styling advice and outfit suggestions. Tribly's AI stylist provides personalized recommendations 24/7 through WhatsApp."
 },
 {
 heading: "Seasonal Collection Launch Challenges",
 description: "New collections don't reach existing customers effectively. Tribly sends automated launch campaigns with exclusive early access offers."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "WhatsApp Catalog Shopping",
 description: "Share complete product catalog with photos, sizes, colors, and prices. Let customers browse and order directly through WhatsApp.",
 example: "\"New Winter Collection is here! ❄️ Explore: 1️⃣ Jackets & Coats 2️⃣ Sweaters 3️⃣ Jeans 4️⃣ Accessories. Browse catalog: [link] Free shipping on ₹1,999+\""
 },
 {
 title: "AI Personal Stylist Assistant",
 description: "Recommend outfits based on occasion, body type, preferences, and budget through conversational AI styling assistant.",
 example: "\"Planning a wedding outfit? 👗 Tell me: Your style preference (Traditional/Modern), Budget, Event type. I'll suggest perfect looks from our collection!\""
 },
 {
 title: "Size & Fit Consultation",
 description: "Help customers find the right size with AI-powered fit recommendations based on measurements, previous purchases, and product specifications.",
 example: "\"Need help with sizing? Share: Height, Weight, Usual size. Based on your previous purchase (M-sized shirt), I recommend: Medium for regular fit, Large for loose fit.\""
 },
 {
 title: "Flash Sale & Exclusive Offers",
 description: "Send personalized flash sale notifications, loyalty rewards, and exclusive discounts to engaged customers through WhatsApp broadcasts.",
 example: "\"⚡ Flash Sale Alert! 50% OFF on your favorite brands for next 3 hours! Premium Jeans from ₹1,499, Designer Kurtas from ₹999. Shop: [link]\""
 }
 ];

 const benefits = [
 {
 icon: "👗",
 title: "WhatsApp Catalog Shopping",
 description: "Share entire product catalog with images, prices, and variants. Enable instant ordering through WhatsApp chat."
 },
 {
 icon: "🤖",
 title: "AI Styling Recommendations",
 description: "Provide personalized outfit suggestions based on occasion, preferences, and purchase history through AI assistant."
 },
 {
 icon: "📦",
 title: "Order & Delivery Tracking",
 description: "Send automated updates from order confirmation, dispatch, in-transit, to delivered with real-time tracking links."
 },
 {
 icon: "🔄",
 title: "Cart Recovery Automation",
 description: "Automatically follow up on abandoned carts with personalized reminders and limited-time discount offers."
 }
 ];

 const features = [
 {
 title: "Virtual Try-On Suggestions",
 description: "Let customers send their photos and receive AI-powered suggestions on how products will look based on similar body types and styling.",
 icon: "📸"
 },
 {
 title: "Size Exchange & Return Management",
 description: "Handle size exchange requests, return pickups, and refund queries seamlessly through WhatsApp automation.",
 icon: "🔄"
 },
 {
 title: "Occasion-Based Collections",
 description: "Automatically suggest relevant collections for festivals, weddings, parties, and seasons based on customer preferences.",
 icon: "🎉"
 },
 {
 title: "Loyalty Points & Rewards",
 description: "Track purchase points, tier benefits, and send exclusive member-only offers through automated loyalty program.",
 icon: "⭐"
 },
 {
 title: "Celebrity & Influencer Looks",
 description: "Send trending celebrity outfits and influencer-approved looks with direct shopping links for similar products.",
 icon: "✨"
 },
 {
 title: "Pre-Order & Waitlist Management",
 description: "Accept pre-orders for upcoming collections and notify waitlisted customers when out-of-stock items are back.",
 icon: "🔔"
 }
 ];

 return (
 <main className="min-h-screen bg-white">
 <Navbar />

 {/* Hero Section */}
 <section className="relative bg-gradient-to-br from-[#f7f1ff] via-[#f7f1ff] to-[#ffffff] pt-32 pb-20 overflow-hidden">
 {/* Decorative Elements */}
 <div className="absolute top-20 right-10 w-64 h-64 bg-[#9747ff]/10 rounded-full blur-3xl"></div>
 <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#862ef8]/10 rounded-full blur-3xl"></div>

 <div className="max-w-[1240px] mx-auto px-6 relative">
 <div
 className="text-center max-w-[1000px] mx-auto"
 >
 <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#9747ff]/20 rounded-full px-6 py-3 mb-8">
 <span className="text-[#9747ff] font-semibold text-sm">👗 FASHION & APPAREL</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Shopping Experience
 <br />
 <span className="text-[#9747ff]">Increase Sales 10x</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Increase online sales by 10x, recover 85% of abandoned carts, and grow repeat purchases by 70% with Tribly's WhatsApp automation for fashion stores.
 </p>

 <div className="flex flex-wrap gap-4 justify-center">
 <Link href="https://calendly.com/connect-tribly/new-meeting" target="_blank">
 <button
 className="bg-[#9747ff] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2"
 >
 Book a Free Demo
 <Image alt="Arrow" src="/icons/arrow-right-white.svg" width={20} height={20} />
 </button>
 </Link>

 <Link href="#benefits">
 <button
 className="bg-white border-2 border-[#9747ff] text-[#9747ff] px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2"
 >
 See How It Works
 <Image alt="Arrow" src={imgFrame} width={20} height={20} />
 </button>
 </Link>
 </div>
 </div>
 </div>
 </section>

 {/* Stats Section */}
 <section className="py-16 bg-gradient-to-b from-white to-[#f7f1ff]">
 <div className="max-w-[1400px] mx-auto px-6">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
 {stats.map((stat, index) => (
 <div
 key={index}
 className="text-center"
 >
 <h3 className="text-[48px] md:text-[64px] font-semibold text-[#9747ff] mb-2">
 {stat.number}
 </h3>
 <p className="text-[16px] md:text-[18px] text-gray-700">{stat.label}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Benefits Section */}
 <section id="benefits" className="py-20">
 <div className="max-w-[1400px] mx-auto px-6">
 <div
 className="text-center mb-16"
 >
 <h2 className="text-[48px] font-semibold text-black mb-6">
 How Tribly Helps Fashion & Apparel Stores
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Deliver personalized shopping experiences, increase conversions, and build loyal customer base effortlessly.
 </p>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
 {benefits.map((benefit, index) => (
 <div
 key={index}
 className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] rounded-[24px] p-8 border-2 border-[#9747ff]/10 hover:border-[#9747ff]/30 transition-all"
 >
 <div className="text-[48px] mb-4">{benefit.icon}</div>
 <h3 className="text-[24px] font-semibold text-black mb-3">{benefit.title}</h3>
 <p className="text-[16px] text-gray-700 leading-relaxed">{benefit.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Why Tribly Section */}
 <section className="py-20 bg-white">
 <div className="max-w-[1400px] mx-auto px-6">
 <div
 className="mb-12"
 >
 <h2 className="text-[48px] font-semibold text-black mb-6 text-center">
 Why Fashion & Apparel Stores Need Tribly
 </h2>
 </div>

 <div className="grid md:grid-cols-2 gap-8">
 {whyTriblySections[0].points.map((point, index) => (
 <div
 key={index}
 className="bg-white rounded-[24px] p-8 border-2 border-[#9747ff]/10 shadow-[0_6px_0_#9747ff]"
 >
 <h3 className="text-[24px] font-semibold text-[#9747ff] mb-4">{point.heading}</h3>
 <p className="text-[16px] text-gray-700 leading-relaxed">{point.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Use Cases Section */}
 <section className="py-20">
 <div className="max-w-[1400px] mx-auto px-6">
 <div
 className="text-center mb-16"
 >
 <h2 className="text-[48px] font-semibold text-black mb-6">
 Real-World Use Cases
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 See how fashion stores use Tribly to automate shopping and increase revenue.
 </p>
 </div>

 <div className="grid md:grid-cols-2 gap-8">
 {useCases.map((useCase, index) => (
 <div
 key={index}
 >
 {/* Gradient border wrapper */}
 <div className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] rounded-[24px] p-[2px]">
 <div className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] rounded-[22px] p-8">
 <h3 className="text-[24px] font-semibold text-black mb-3">{useCase.title}</h3>
 <p className="text-[16px] text-gray-700 leading-relaxed mb-4">{useCase.description}</p>
 <div className="bg-white/80 border-l-4 border-[#9747ff] p-4 rounded-lg">
 <p className="text-[14px] text-gray-600 italic">{useCase.example}</p>
 </div>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Features Section */}
 <section className="py-20 bg-gradient-to-b from-white to-[#f7f1ff]">
 <div className="max-w-[1400px] mx-auto px-6">
 <div
 className="text-center mb-16"
 >
 <h2 className="text-[48px] font-semibold text-black mb-6">
 Powerful Features for Fashion Retail
 </h2>
 </div>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {features.map((feature, index) => (
 <div
 key={index}
 className="bg-white rounded-[24px] p-8 border-2 border-[#9747ff]/10 hover:border-[#9747ff]/30 transition-all"
 >
 <div className="text-[48px] mb-4">{feature.icon}</div>
 <h3 className="text-[24px] font-semibold text-black mb-3">{feature.title}</h3>
 <p className="text-[16px] text-gray-700 leading-relaxed">{feature.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-20">
 <div className="max-w-[1400px] mx-auto px-6">
 <div
 >
 {/* Gradient border wrapper */}
 <div className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] rounded-[40px] p-[2px]">
 <div className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] rounded-[38px] p-12 md:p-16 text-center">
 <div>
 <h2 className="text-[40px] md:text-[48px] font-semibold mb-6 text-black">
 Ready to Transform Your Fashion Store?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading fashion brands using Tribly to automate shopping and increase sales.
 </p>

 <div className="flex flex-wrap gap-4 justify-center">
 <Link href="https://calendly.com/connect-tribly/new-meeting" target="_blank">
 <button
 className="bg-[#9747ff] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2"
 >
 Start Free Trial
 <Image alt="Arrow" src="/icons/arrow-right-white.svg" width={20} height={20} />
 </button>
 </Link>

 <Link href="https://app.tribly.ai/login" target="_blank">
 <button
 className="bg-white border-2 border-[#9747ff] text-[#9747ff] px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2"
 >
 Sign In
 <Image alt="Arrow" src={imgFrame} width={20} height={20} />
 </button>
 </Link>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        <Footer />
      </div>

      {/* Mobile Footer */}
      <div className="block md:hidden">
        <FooterMobile />
      </div>
    </main>
 );
}
