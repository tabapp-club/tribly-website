
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function SparesAccessoriesPage() {
 const stats = [
 { number: "90%", label: "Response Rate" },
 { number: "6x", label: "Repeat Orders" },
 { number: "75%", label: "Faster Delivery Updates" },
 { number: "24/7", label: "Catalog Access" }
 ];

 const whyTriblySections = [
 {
 title: "Why Spares & Accessories Businesses Need Tribly",
 points: [
 {
 heading: "Slow Response to Inquiries",
 description: "Customers need instant part availability and pricing. Tribly's AI chatbot provides 24/7 responses with stock status and quotes, increasing conversions by 90%."
 },
 {
 heading: "Lost Sales Due to Manual Follow-ups",
 description: "Cart abandonment and inquiry drop-offs are high. Tribly automatically follows up with reminders and offers, recovering 6x more sales."
 },
 {
 heading: "Poor Order Tracking Communication",
 description: "Customers constantly call for order status. Tribly sends automatic updates from order confirmation to delivery, reducing support calls by 75%."
 },
 {
 heading: "Limited Customer Retention",
 description: "One-time buyers don't return. Tribly sends personalized maintenance reminders and new product launches to drive repeat purchases."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "Instant Part Availability & Pricing",
 description: "AI chatbot answers part inquiries instantly with availability, pricing, compatibility checks, and alternative options 24/7.",
 example: "\"Need brake pads for Honda City 2019? In stock! ₹2,499 (Genuine) or ₹1,799 (Aftermarket). Free installation available. Order: [link]\""
 },
 {
 title: "Automated Order Status Updates",
 description: "Send real-time updates from order placed, payment confirmed, dispatched, out for delivery, to delivered with tracking links.",
 example: "\"Your order #12345 has been dispatched! 📦 Expected delivery: Tomorrow by 6 PM. Track: [link] Questions? Reply here!\""
 },
 {
 title: "Cart Recovery & Follow-up Campaigns",
 description: "Automatically follow up on inquiries, abandoned carts, and quotes with personalized reminders and limited-time offers.",
 example: "\"Still thinking about the LED headlights for your Swift? 💡 Get 10% off if you order today! Valid for 24 hours only. Order: [link]\""
 },
 {
 title: "Bulk Order & Fleet Management",
 description: "Handle bulk inquiries from fleet operators, workshops, and dealerships with automated quotations and dedicated support.",
 example: "\"Need 50 oil filters + 50 air filters? Bulk pricing: ₹8,500 total (save ₹2,000). GST invoice included. Delivery in 2 days. Confirm: [link]\""
 }
 ];

 const benefits = [
 {
 icon: "🛒",
 title: "AI Catalog Assistant",
 description: "Instantly provide part details, compatibility, pricing, and alternatives through AI-powered WhatsApp chatbot 24/7."
 },
 {
 icon: "📦",
 title: "Order Tracking Automation",
 description: "Automatically send order status updates from confirmation to delivery, eliminating tracking inquiries."
 },
 {
 icon: "💬",
 title: "Smart Quote Generation",
 description: "Generate and send price quotes instantly for single parts or bulk orders with payment links included."
 },
 {
 icon: "🔄",
 title: "Repeat Purchase Campaigns",
 description: "Remind customers about consumable parts (oil filters, batteries, wiper blades) based on purchase history."
 }
 ];

 const features = [
 {
 title: "Part Compatibility Checker",
 description: "AI verifies part compatibility with customer's vehicle make, model, and year to ensure correct purchases.",
 icon: "✅"
 },
 {
 title: "Stock Availability Alerts",
 description: "Notify customers instantly when out-of-stock parts become available with direct purchase links.",
 icon: "🔔"
 },
 {
 title: "Installation Service Booking",
 description: "Offer installation services during checkout and let customers book service slots directly through WhatsApp.",
 icon: "🔧"
 },
 {
 title: "Warranty & Return Management",
 description: "Automate warranty registration, send expiry reminders, and handle return requests through WhatsApp.",
 icon: "🛡️"
 },
 {
 title: "Seasonal & Promotional Campaigns",
 description: "Run automated campaigns for festival sales, clearance offers, and new product launches to existing customers.",
 icon: "🎉"
 },
 {
 title: "B2B & Fleet Customer Management",
 description: "Maintain separate catalog pricing, bulk discounts, and credit terms for workshops and fleet customers.",
 icon: "🏢"
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
 <span className="text-[#9747ff] font-semibold text-sm">🛒 SPARES & ACCESSORIES</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Sales & Support
 <br />
 <span className="text-[#9747ff]">Convert 6x More Orders</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Respond instantly to 90% of inquiries, increase repeat orders by 6x, and automate delivery updates with Tribly's WhatsApp automation for auto parts businesses.
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
 How Tribly Helps Spares & Accessories Businesses
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Respond faster, sell more, and provide exceptional customer experience with automated WhatsApp communication.
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
 Why Spares & Accessories Businesses Need Tribly
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
 See how auto parts businesses use Tribly to automate sales and increase revenue.
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
 Powerful Features for Auto Parts Business
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
 Ready to Transform Your Auto Parts Business?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading auto parts dealers using Tribly to automate sales and increase revenue.
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
