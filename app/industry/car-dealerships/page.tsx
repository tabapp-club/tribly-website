
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function CarDealershipsPage() {
 const stats = [
 { number: "6x", label: "Lead Conversion" },
 { number: "85%", label: "Service Retention" },
 { number: "70%", label: "Referral Increase" },
 { number: "24/7", label: "Customer Support" }
 ];

 const whyTriblySections = [
 {
 title: "Why Car Dealerships Need Tribly",
 points: [
 {
 heading: "Lost Leads & Follow-ups",
 description: "Sales leads go cold without timely follow-ups. Tribly automates lead nurturing through WhatsApp, converting 6x more prospects into buyers."
 },
 {
 heading: "Poor Service Department Utilization",
 description: "Customers forget scheduled maintenance. Tribly sends automated service reminders based on mileage and time, increasing service revenue by 85%."
 },
 {
 heading: "Limited Customer Engagement",
 description: "After purchase, customers disengage until next purchase cycle. Tribly maintains relationships through automated check-ins and exclusive offers."
 },
 {
 heading: "Manual Test Drive Scheduling",
 description: "Coordinating test drives via phone calls is inefficient. Tribly lets prospects book test drives instantly through WhatsApp with real-time availability."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "Automated Lead Nurturing Campaigns",
 description: "Follow up with sales inquiries instantly, send vehicle information, financing options, and special offers automatically to convert more leads.",
 example: "\"Hi Raj! Thanks for your interest in the Honda City. Here's the brochure: [link] Special offer: Zero down payment + free insurance! Book a test drive: [link]\""
 },
 {
 title: "Service Reminder Automation",
 description: "Send automated service reminders based on purchase date, mileage, or time interval. Increase service department revenue with timely bookings.",
 example: "\"Your Maruti Swift is due for its 10,000 km service! Book now and get 20% off on engine oil. Free pickup & drop available. Schedule: [link]\""
 },
 {
 title: "Trade-in & Upgrade Campaigns",
 description: "Reach out to customers whose vehicles are 3-5 years old with trade-in offers and new model launches to generate upgrade opportunities.",
 example: "\"Your 2020 Hyundai Creta is a perfect trade-in! Get up to ₹2.5L + special exchange bonus on the new 2024 model. Get valuation: [link]\""
 },
 {
 title: "Post-Purchase Engagement",
 description: "Send congratulatory messages, vehicle care tips, insurance renewal reminders, and exclusive customer events to build loyalty.",
 example: "\"Congratulations on your new Tata Nexon! 🎉 Here's your digital owner's manual: [link] Download our service app for easy bookings & tracking!\""
 }
 ];

 const benefits = [
 {
 icon: "🚗",
 title: "Smart Lead Management",
 description: "Automatically capture, qualify, and nurture leads through WhatsApp with instant responses and personalized vehicle recommendations."
 },
 {
 icon: "📅",
 title: "Automated Service Scheduling",
 description: "Send mileage-based and time-based service reminders. Let customers book service appointments directly through WhatsApp."
 },
 {
 icon: "💬",
 title: "AI-Powered Sales Assistant",
 description: "Answer questions about models, features, pricing, EMI options, and availability 24/7 without sales team intervention."
 },
 {
 icon: "🔄",
 title: "Customer Lifecycle Management",
 description: "Engage customers throughout ownership: service reminders, insurance renewals, accessories, and upgrade opportunities."
 }
 ];

 const features = [
 {
 title: "Test Drive Booking System",
 description: "Let prospects book test drives directly through WhatsApp with available time slots, vehicle choice, and location preferences.",
 icon: "🏎️"
 },
 {
 title: "Finance & EMI Calculator",
 description: "AI chatbot provides instant EMI calculations, down payment options, and connects customers with finance team for approvals.",
 icon: "💳"
 },
 {
 title: "Vehicle Comparison Assistant",
 description: "Help customers compare models, features, and pricing through automated conversations with detailed specifications.",
 icon: "⚖️"
 },
 {
 title: "Service History Tracking",
 description: "Automatically log service visits and send customers their vehicle's complete service history via WhatsApp.",
 icon: "📋"
 },
 {
 title: "Insurance Renewal Reminders",
 description: "Alert customers 30 days before insurance expiry with renewal options and competitive quotes from partners.",
 icon: "🛡️"
 },
 {
 title: "Referral Program Automation",
 description: "Encourage and track customer referrals with automated reward messages for successful referrals.",
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
 <span className="text-[#9747ff] font-semibold text-sm">🚗 CAR DEALERSHIPS</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Sales & Service
 <br />
 <span className="text-[#9747ff]">Convert 6x More Leads</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Increase lead conversion by 6x, boost service retention by 85%, and automate customer engagement with Tribly's WhatsApp-powered dealership platform.
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
 How Tribly Helps Car Dealerships
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Convert more leads, increase service revenue, and build lasting customer relationships effortlessly.
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
 Why Car Dealerships Need Tribly
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
 See how car dealerships use Tribly to automate sales and increase revenue.
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
 Powerful Features for Dealerships
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
 Ready to Transform Your Dealership?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading car dealerships using Tribly to automate sales and increase revenue.
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
