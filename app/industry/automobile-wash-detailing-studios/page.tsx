
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function AutomobileWashDetailingStudiosPage() {
 const stats = [
 { number: "85%", label: "Booking Increase" },
 { number: "5x", label: "Monthly Pass Sales" },
 { number: "72%", label: "Customer Retention" },
 { number: "24/7", label: "Booking System" }
 ];

 const whyTriblySections = [
 {
 title: "Why Automobile Wash & Detailing Studios Need Tribly",
 points: [
 {
 heading: "Low Repeat Customer Rate",
 description: "Customers wash their cars elsewhere after first visit. Tribly sends automated reminders and offers, increasing repeat visits by 5x."
 },
 {
 heading: "Manual Booking & Scheduling",
 description: "Phone-based bookings are time-consuming and lead to no-shows. Tribly enables instant WhatsApp booking with slot availability and reminders."
 },
 {
 heading: "Limited Package Upselling",
 description: "Customers stick to basic washes. Tribly automatically suggests premium packages, ceramic coating, and detailing services, increasing average ticket size."
 },
 {
 heading: "Poor Customer Engagement",
 description: "No communication between visits. Tribly maintains engagement with car care tips, seasonal offers, and membership benefits."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "Instant Slot Booking System",
 description: "Let customers check real-time availability and book wash/detailing slots directly through WhatsApp with instant confirmation.",
 example: "\"Select service: 1️⃣ Express Wash (₹299, 20 mins) 2️⃣ Premium Wash (₹599, 45 mins) 3️⃣ Interior Detailing (₹1,999, 3 hrs). Available slots today: 2 PM / 4 PM / 6 PM\""
 },
 {
 title: "Monthly Pass & Membership Campaigns",
 description: "Promote subscription plans and monthly wash passes with automated reminders about usage and renewal offers.",
 example: "\"Wash your car unlimited times! Monthly Pass: ₹1,999 (save 40%). Valid for 30 days. Free vacuum included. Subscribe: [link] 🚗✨\""
 },
 {
 title: "Service Upsell During Visit",
 description: "While customers wait, send messages about add-on services like wax coating, underbody cleaning, or interior shampooing with real-time pricing.",
 example: "\"Your wash is in progress! Want to add: ✨ Teflon Coating (₹999) 🛡️ Underbody Wash (₹299) 💺 Interior Shampooing (₹799). Reply with number to add.\""
 },
 {
 title: "Re-engagement & Win-back Campaigns",
 description: "Automatically reach out to customers who haven't visited in 30/60/90 days with special comeback offers and reminders.",
 example: "\"We miss your car! 😊 Been 2 months since your last visit. Get 30% off on your next service. Valid for 7 days. Book now: [link]\""
 }
 ];

 const benefits = [
 {
 icon: "🚗",
 title: "Real-Time Slot Booking",
 description: "Let customers book wash and detailing services instantly through WhatsApp with live availability and automatic confirmations."
 },
 {
 icon: "📅",
 title: "Automated Visit Reminders",
 description: "Send wash reminders based on weather, seasons, and previous visit history to drive repeat business."
 },
 {
 icon: "💬",
 title: "AI Service Recommendations",
 description: "Suggest appropriate services based on car type, age, and previous services taken through intelligent chatbot."
 },
 {
 icon: "💳",
 title: "Subscription Management",
 description: "Promote and manage monthly passes, loyalty points, and membership benefits through automated campaigns."
 }
 ];

 const features = [
 {
 title: "Before/After Photo Sharing",
 description: "Automatically send before and after photos of the vehicle to customers via WhatsApp, showcasing service quality.",
 icon: "📸"
 },
 {
 title: "Service Duration Tracking",
 description: "Send estimated completion time and real-time updates while service is in progress to keep customers informed.",
 icon: "⏱️"
 },
 {
 title: "Package Comparison Assistant",
 description: "Help customers choose between express wash, premium wash, detailing packages through conversational AI.",
 icon: "⚖️"
 },
 {
 title: "Seasonal Campaign Automation",
 description: "Run monsoon prep, summer cooling, festival shine, and winter care campaigns automatically to boost bookings.",
 icon: "🌦️"
 },
 {
 title: "Feedback & Review Collection",
 description: "Automatically request reviews after service and incentivize customers to share Google and social media reviews.",
 icon: "⭐"
 },
 {
 title: "Referral & Loyalty Programs",
 description: "Track referrals, reward customers with free washes or discounts, and manage tier-based loyalty benefits.",
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
 <span className="text-[#9747ff] font-semibold text-sm">✨ CAR WASH & DETAILING</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Bookings & Engagement
 <br />
 <span className="text-[#9747ff]">Increase Repeat Visits 5x</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Increase bookings by 85%, grow monthly pass sales by 5x, and improve customer retention by 72% with Tribly's WhatsApp automation for car wash businesses.
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
 How Tribly Helps Car Wash & Detailing Studios
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Increase bookings, drive repeat business, and maximize revenue with automated customer engagement.
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
 Why Automobile Wash & Detailing Studios Need Tribly
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
 See how car wash businesses use Tribly to automate operations and increase revenue.
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
 Powerful Features for Car Wash Business
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
 Ready to Transform Your Car Wash Business?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading car wash studios using Tribly to automate bookings and increase revenue.
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
