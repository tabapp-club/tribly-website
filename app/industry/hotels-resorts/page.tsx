
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function HotelsResortsPage() {
 const stats = [
 { number: "92%", label: "Guest Satisfaction" },
 { number: "6x", label: "Booking Confirmations" },
 { number: "80%", label: "Automated Responses" },
 { number: "24/7", label: "Guest Support" }
 ];

 const whyTriblySections = [
 {
 title: "Why Hotels & Resorts Need Tribly",
 points: [
 {
 heading: "Slow Booking Inquiry Response",
 description: "Delayed responses lose bookings to competitors. Tribly answers availability and pricing queries instantly on WhatsApp, converting 6x more inquiries."
 },
 {
 heading: "Poor Pre-Arrival Communication",
 description: "Guests have many questions before check-in. Tribly automates pre-arrival information, directions, check-in procedures, and special requests."
 },
 {
 heading: "Manual Guest Service Requests",
 description: "Room service, housekeeping, and concierge requests flood front desk. Tribly handles requests via WhatsApp, routing them to appropriate departments."
 },
 {
 heading: "Limited Post-Stay Engagement",
 description: "Guests don't return after checkout. Tribly sends personalized thank you messages, review requests, and special occasion offers for repeat bookings."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "Instant Booking & Availability Queries",
 description: "AI chatbot provides real-time room availability, rates, amenities, and booking links 24/7 without front desk intervention.",
 example: "\"Checking availability for Dec 25-27... ✅ Deluxe Room available at ₹6,999/night (breakfast included). Premium Suite at ₹12,999/night. Book now: [link]\""
 },
 {
 title: "Pre-Arrival Information & Check-in",
 description: "Send automated booking confirmation, property information, directions, check-in instructions, and collect special requests before arrival.",
 example: "\"Welcome to Grand Resort! Your booking is confirmed. Check-in: Dec 25, 2 PM. Need early check-in? Airport pickup? Special occasion celebration? Reply here! 🏨\""
 },
 {
 title: "In-Stay Guest Services via WhatsApp",
 description: "Let guests request room service, housekeeping, wake-up calls, spa bookings, and concierge services directly through WhatsApp.",
 example: "\"Hello from Room 305! I need: 🍽️ Room Service 🧹 Housekeeping 💆 Spa Booking 🚗 Cab Service 🏊 Pool Towels. Select your need and we'll assist immediately!\""
 },
 {
 title: "Post-Stay Feedback & Remarketing",
 description: "Send thank you messages, request reviews, and share personalized return offers based on their stay preferences and special dates.",
 example: "\"Thank you for staying with us, Mr. Sharma! 💙 Share your experience: [review link] Planning your anniversary next year? Book now & get 20% off!\""
 }
 ];

 const benefits = [
 {
 icon: "🏨",
 title: "24/7 Booking Assistant",
 description: "Answer availability queries, share room details and rates, and send booking links instantly via WhatsApp chatbot."
 },
 {
 icon: "📱",
 title: "Guest Service Portal",
 description: "Handle all guest requests - room service, housekeeping, amenities - through WhatsApp without calling front desk."
 },
 {
 icon: "💬",
 title: "Automated Guest Journey",
 description: "Send booking confirmations, pre-arrival info, check-in reminders, in-stay updates, and post-checkout feedback requests automatically."
 },
 {
 icon: "🔄",
 title: "Repeat Guest Campaigns",
 description: "Track guest preferences, send birthday wishes, anniversary offers, and seasonal packages to drive repeat bookings."
 }
 ];

 const features = [
 {
 title: "Room Upgrade Offers",
 description: "Automatically offer room upgrades at discounted rates via WhatsApp before check-in or during stay based on availability.",
 icon: "⬆️"
 },
 {
 title: "Upsell Services & Amenities",
 description: "Promote spa services, dining experiences, activity bookings, and special packages to guests during their stay.",
 icon: "💎"
 },
 {
 title: "Event & Wedding Booking",
 description: "Handle venue inquiry, capacity, catering, and decoration queries for events and weddings with automated quotations.",
 icon: "💒"
 },
 {
 title: "Local Recommendations",
 description: "Share personalized recommendations for sightseeing, restaurants, shopping, and activities based on guest preferences.",
 icon: "🗺️"
 },
 {
 title: "Multi-Language Support",
 description: "Communicate with international guests in their preferred language through AI-powered translation on WhatsApp.",
 icon: "🌐"
 },
 {
 title: "Loyalty Program Management",
 description: "Track guest stays, reward points, tier benefits, and send exclusive offers to loyal guests automatically.",
 icon: "⭐"
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
 <span className="text-[#9747ff] font-semibold text-sm">🏨 HOTELS & RESORTS</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Guest Experience
 <br />
 <span className="text-[#9747ff]">Increase Bookings 6x</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Achieve 92% guest satisfaction, confirm 6x more bookings, and automate 80% of responses with Tribly's WhatsApp-powered hospitality platform.
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
 How Tribly Helps Hotels & Resorts
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Convert more bookings, enhance guest experience, and build lasting relationships effortlessly.
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
 Why Hotels & Resorts Need Tribly
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
 See how hotels and resorts use Tribly to enhance guest experience and increase revenue.
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
 Powerful Features for Hospitality
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
 Ready to Transform Your Hotel?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading hotels and resorts using Tribly to enhance guest experience and increase revenue.
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
