
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function RestaurantsCafesPage() {
 const stats = [
 { number: "9x", label: "Online Orders" },
 { number: "88%", label: "Table Occupancy" },
 { number: "75%", label: "Repeat Customers" },
 { number: "24/7", label: "Ordering System" }
 ];

 const whyTriblySections = [
 {
 title: "Why Restaurants & Cafés Need Tribly",
 points: [
 {
 heading: "Lost Online Order Opportunities",
 description: "Customers prefer WhatsApp for ordering. Tribly enables instant menu browsing and ordering through WhatsApp, increasing online orders by 9x."
 },
 {
 heading: "Manual Table Reservation Management",
 description: "Phone-based reservations are time-consuming. Tribly automates table booking with real-time availability, reminders, and confirmations."
 },
 {
 heading: "Low Customer Retention",
 description: "First-time visitors don't return. Tribly sends personalized offers, birthday wishes, and new menu launches to drive repeat visits by 75%."
 },
 {
 heading: "Poor Peak Hour Management",
 description: "Managing wait times and customer expectations during rush hours is challenging. Tribly sends live wait time updates and offers pre-ordering."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "WhatsApp Digital Menu & Ordering",
 description: "Share interactive menu with photos, descriptions, and prices. Let customers place orders directly through WhatsApp for dine-in, takeaway, or delivery.",
 example: "\"Welcome to Spice Kitchen! 🍽️ Browse our menu: 1️⃣ Starters 2️⃣ Main Course 3️⃣ Desserts 4️⃣ Beverages. View full menu: [link] Ready to order?\""
 },
 {
 title: "Smart Table Reservation System",
 description: "Automatically show available time slots, accept reservations, send confirmations and reminders, and handle special requests.",
 example: "\"Table for 4 on Saturday 8 PM? ✅ Available! We have: Window seat, Garden area, Private cabin. Select your preference. Confirm booking: [link]\""
 },
 {
 title: "Real-Time Order Status Updates",
 description: "Send automated updates from order received, preparing, ready for pickup/delivery, to delivered with estimated time at each stage.",
 example: "\"Your order is being prepared! 👨‍🍳 Paneer Tikka Masala + Naan + Mango Lassi. Ready in 25 minutes. We'll notify you for pickup! 🔥\""
 },
 {
 title: "Loyalty & Special Occasion Campaigns",
 description: "Send birthday wishes with special discounts, anniversary offers, and exclusive deals to loyal customers automatically.",
 example: "\"Happy Birthday Rahul! 🎂 Celebrate with us: Get FREE dessert + 20% off your entire bill. Valid today only! Book your table: [link]\""
 }
 ];

 const benefits = [
 {
 icon: "📱",
 title: "WhatsApp Menu & Ordering",
 description: "Share digital menu with photos and enable instant ordering for dine-in, takeaway, and delivery through WhatsApp."
 },
 {
 icon: "📅",
 title: "Automated Table Booking",
 description: "Let customers check availability and book tables instantly with automatic confirmations and reminder notifications."
 },
 {
 icon: "💬",
 title: "AI Food Recommendations",
 description: "Suggest dishes based on preferences, dietary restrictions, and popular items through intelligent chatbot conversations."
 },
 {
 icon: "🎁",
 title: "Customer Loyalty Programs",
 description: "Track visits, reward points, send personalized offers, and drive repeat business through automated campaigns."
 }
 ];

 const features = [
 {
 title: "Peak Hour Wait Time Management",
 description: "Send live wait time updates to customers, offer pre-ordering while they wait, and notify when table is ready.",
 icon: "⏱️"
 },
 {
 title: "Dietary Preference Filtering",
 description: "Let customers filter menu by vegetarian, vegan, gluten-free, or other dietary requirements through AI chatbot.",
 icon: "🥗"
 },
 {
 title: "Upselling & Cross-selling",
 description: "Automatically suggest appetizers, drinks, desserts, and combo meals based on items in cart to increase average order value.",
 icon: "💰"
 },
 {
 title: "Feedback & Review Collection",
 description: "Request feedback after dining experience and encourage satisfied customers to share Google and social media reviews.",
 icon: "⭐"
 },
 {
 title: "Special Event Notifications",
 description: "Promote live music, chef's specials, happy hours, and themed nights to existing customers through WhatsApp broadcasts.",
 icon: "🎉"
 },
 {
 title: "Kitchen Order Management",
 description: "Automatically route WhatsApp orders to kitchen display system with timing coordination and preparation updates.",
 icon: "👨‍🍳"
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
 <span className="text-[#9747ff] font-semibold text-sm">🍽️ RESTAURANTS & CAFÉS</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Orders & Reservations
 <br />
 <span className="text-[#9747ff]">Increase Orders 9x</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Increase online orders by 9x, achieve 88% table occupancy, and grow repeat customers by 75% with Tribly's WhatsApp automation for restaurants and cafés.
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
 How Tribly Helps Restaurants & Cafés
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Increase orders, optimize table occupancy, and build lasting customer relationships effortlessly.
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
 Why Restaurants & Cafés Need Tribly
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
 See how restaurants and cafés use Tribly to automate operations and increase revenue.
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
 Powerful Features for Food Business
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
 Ready to Transform Your Restaurant?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading restaurants and cafés using Tribly to automate operations and increase revenue.
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
