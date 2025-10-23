
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function SweetsBakeriesPage() {
 const stats = [
 { number: "8x", label: "Order Frequency" },
 { number: "85%", label: "Repeat Customers" },
 { number: "70%", label: "Festive Sales Increase" },
 { number: "24/7", label: "Order System" }
 ];

 const whyTriblySections = [
 {
 title: "Why Sweets & Bakeries Need Tribly",
 points: [
 {
 heading: "Lost Festival & Occasion Sales",
 description: "Customers forget to pre-order for festivals and celebrations. Tribly sends automated reminders for Diwali, Rakhi, weddings, and birthdays, increasing festive sales by 70%."
 },
 {
 heading: "Manual Order Management",
 description: "Phone orders are chaotic and error-prone. Tribly enables instant WhatsApp ordering with menu browsing, customization, and payment in one flow."
 },
 {
 heading: "Limited Customer Retention",
 description: "One-time customers don't return. Tribly sends personalized offers, new product launches, and occasion reminders to drive repeat orders by 8x."
 },
 {
 heading: "Bulk Order Coordination",
 description: "Managing corporate and party orders is complex. Tribly automates bulk inquiry handling, quotations, and delivery coordination."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "Festival Pre-Order Campaigns",
 description: "Automatically remind customers to pre-order sweets and snacks 2-3 weeks before major festivals with early bird discounts.",
 example: "\"Diwali is in 3 weeks! 🪔 Pre-order your favorite sweets: Kaju Barfi, Gulab Jamun, Motichoor Ladoo. Book now & get 15% off + priority delivery! Order: [link]\""
 },
 {
 title: "WhatsApp Digital Menu & Ordering",
 description: "Share interactive menu with photos, prices, and customization options. Let customers place orders directly through WhatsApp.",
 example: "\"Welcome to Sweet Delights! 🍰 Browse our menu: 1️⃣ Indian Sweets 2️⃣ Cakes 3️⃣ Cookies 4️⃣ Snacks. Reply with number or view full catalog: [link]\""
 },
 {
 title: "Birthday & Anniversary Reminders",
 description: "Automatically wish customers on special occasions and offer personalized cake or sweet box discounts to drive celebratory orders.",
 example: "\"Happy Birthday Priya! 🎂 Celebrate with 20% off on cakes and sweet boxes. Valid today only! Order your favorite: [link] Make it special! ✨\""
 },
 {
 title: "Order Status & Delivery Tracking",
 description: "Send real-time updates from order confirmation, preparation, baking, quality check, to out for delivery with live tracking.",
 example: "\"Your chocolate truffle cake order is ready! 🎉 Our delivery partner will reach you by 6 PM. Track live: [link] Enjoy your celebration!\""
 }
 ];

 const benefits = [
 {
 icon: "🎂",
 title: "Smart Occasion Reminders",
 description: "Automatically remind customers about festivals, birthdays, and anniversaries with personalized sweet and cake recommendations."
 },
 {
 icon: "📱",
 title: "WhatsApp Menu & Ordering",
 description: "Share digital menu catalog with photos and prices. Enable one-click ordering directly through WhatsApp."
 },
 {
 icon: "💬",
 title: "AI Order Assistant",
 description: "Handle product inquiries, customization requests, and delivery queries 24/7 without staff intervention."
 },
 {
 icon: "🎁",
 title: "Loyalty & Repeat Orders",
 description: "Track purchase history, offer personalized discounts, and send reorder reminders for favorite items."
 }
 ];

 const features = [
 {
 title: "Custom Cake Order Management",
 description: "Collect cake customization details (flavor, size, design, message) through conversational flow and send confirmation with preview.",
 icon: "🍰"
 },
 {
 title: "Real-Time Stock Availability",
 description: "Update customers instantly about item availability and suggest alternatives for out-of-stock products.",
 icon: "📊"
 },
 {
 title: "Delivery Slot Booking",
 description: "Let customers choose preferred delivery date and time slots for fresh product delivery with automatic reminders.",
 icon: "🚚"
 },
 {
 title: "Bulk & Corporate Order System",
 description: "Handle large orders with automated quotations, advance payment collection, and delivery coordination.",
 icon: "📦"
 },
 {
 title: "Photo-Based Product Discovery",
 description: "Let customers send photos of cakes or sweets they like, and AI suggests similar products from your catalog.",
 icon: "📸"
 },
 {
 title: "Subscription Box Campaigns",
 description: "Promote weekly or monthly sweet boxes with automated reminders, customization options, and easy renewals.",
 icon: "🎁"
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
 <span className="text-[#9747ff] font-semibold text-sm">🍰 SWEETS & BAKERIES</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Orders & Celebrations
 <br />
 <span className="text-[#9747ff]">Increase Orders 8x</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Increase order frequency by 8x, grow repeat customers by 85%, and boost festive sales by 70% with Tribly's WhatsApp automation for sweets and bakeries.
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
 How Tribly Helps Sweets & Bakeries
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Automate orders, celebrate with customers, and grow your sweet business effortlessly.
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
 Why Sweets & Bakeries Need Tribly
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
 See how sweets and bakeries use Tribly to automate orders and increase revenue.
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
 Powerful Features for Sweet Businesses
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
 Ready to Transform Your Sweet Business?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading sweets and bakeries using Tribly to automate orders and celebrate with customers.
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
