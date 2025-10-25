
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";
import StructuredData from "@/components/StructuredData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WhatsApp Automation for Auto Service Centers | Tribly India",
  description: "Boost auto service center bookings by 80% with Tribly's WhatsApp automation. Increase repeat customers 5x, reduce no-shows 70%. Serving Andhra Pradesh, Telangana, Bengaluru.",
  keywords: [
    "auto service center automation",
    "WhatsApp booking system",
    "automobile workshop automation",
    "service center management",
    "customer retention auto industry",
    "automotive marketing automation",
    "service booking automation India",
    "auto service center software",
    "automobile workshop management",
    "car service automation",
    "auto repair booking system",
    "service center WhatsApp automation",
    "automotive customer engagement",
    "auto service center India",
    "car workshop automation",
    "service center booking system",
    "automotive business automation",
    "auto service marketing",
    "car service management",
    "automobile workshop software"
  ],
  openGraph: {
    title: "WhatsApp Automation for Auto Service Centers | Tribly India",
    description: "Boost auto service center bookings by 80% with Tribly's WhatsApp automation. Increase repeat customers 5x, reduce no-shows 70%.",
    type: "website",
    locale: "en_IN",
  },
};

const imgFrame = "/icons/arrow-right-purple.svg";

export default function AutomobileServiceCentersWorkshopsPage() {
 const stats = [
 { number: "80%", label: "Booking Rate Increase" },
 { number: "5x", label: "Repeat Customers" },
 { number: "70%", label: "Reduced No-shows" },
 { number: "24/7", label: "Customer Support" }
 ];

 const whyTriblySections = [
 {
 title: "Why Auto Service Centers & Workshops Need Tribly",
 points: [
 {
 heading: "Lost Customers & No Follow-ups",
 description: "Customers forget to return for services. Tribly sends automated reminders based on service history, increasing repeat visits by 5x."
 },
 {
 heading: "Manual Appointment Scheduling",
 description: "Phone calls for booking are time-consuming. Tribly lets customers book service slots instantly through WhatsApp with real-time availability."
 },
 {
 heading: "Poor Customer Communication",
 description: "Customers want updates on service status. Tribly automatically sends work-in-progress updates, part approvals, and completion notifications."
 },
 {
 heading: "Limited Upsell Opportunities",
 description: "Missing chances to recommend additional services. Tribly sends personalized recommendations for repairs, upgrades, and preventive maintenance."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "Automated Service Reminders",
 description: "Send reminders based on last service date, mileage, or seasonal needs (monsoon check-ups, AC servicing, etc.) to bring customers back.",
 example: "\"Hi Rahul! Your Maruti Alto is due for service after 6 months. Book now: 20% off + free car wash. Check available slots: [link] Keep your car healthy!\""
 },
 {
 title: "Real-Time Service Status Updates",
 description: "Keep customers informed with automated updates at each stage: vehicle received, diagnostics complete, work-in-progress, ready for pickup.",
 example: "\"Your Honda City service update: ✅ Oil change complete ✅ Brake check done 🔄 Tire rotation in progress. Your car will be ready by 5 PM!\""
 },
 {
 title: "Instant WhatsApp Booking System",
 description: "Let customers check available slots and book services directly through WhatsApp without calling. Confirm bookings automatically.",
 example: "\"Select your service: 1️⃣ General Service 2️⃣ Oil Change 3️⃣ AC Service 4️⃣ Brake Repair. Choose a slot: Tomorrow 10 AM / 2 PM / 4 PM\""
 },
 {
 title: "Approval Requests & Estimates",
 description: "Send photo/video of identified issues with cost estimates. Get customer approval instantly before proceeding with additional repairs.",
 example: "\"⚠️ Found worn brake pads on your car [photo]. Replacement needed: ₹2,500 (parts + labor). Reply YES to approve or CALL to discuss.\""
 }
 ];

 const benefits = [
 {
 icon: "🔧",
 title: "Smart Booking Management",
 description: "Let customers book service slots through WhatsApp with real-time availability, reducing phone calls and improving efficiency."
 },
 {
 icon: "📅",
 title: "Automated Service Reminders",
 description: "Track service history and send timely reminders based on months, mileage, or seasonal needs to increase repeat business."
 },
 {
 icon: "💬",
 title: "Real-Time Status Updates",
 description: "Keep customers informed with automatic updates at each service stage, reducing status inquiry calls by 80%."
 },
 {
 icon: "🔔",
 title: "AI-Powered Customer Support",
 description: "Answer common questions about services, pricing, and wait times 24/7 without staff intervention."
 }
 ];

 const features = [
 {
 title: "Service History Tracking",
 description: "Maintain complete digital service records for each vehicle with automatic reminders for next service based on history.",
 icon: "📋"
 },
 {
 title: "Photo/Video Sharing for Approvals",
 description: "Send photos/videos of vehicle issues directly through WhatsApp for transparent communication and faster approvals.",
 icon: "📸"
 },
 {
 title: "Parts Availability Notifications",
 description: "Automatically notify customers when ordered parts arrive, with booking links to schedule installation.",
 icon: "📦"
 },
 {
 title: "Seasonal Campaign Automation",
 description: "Run monsoon check-ups, winter maintenance, or AC servicing campaigns automatically to boost bookings.",
 icon: "🌦️"
 },
 {
 title: "Feedback & Review Collection",
 description: "Automatically request feedback after service completion and encourage satisfied customers to leave Google reviews.",
 icon: "⭐"
 },
 {
 title: "Loyalty Program Management",
 description: "Track service points, send milestone rewards, and notify customers about available discounts and offers.",
 icon: "🎁"
 }
 ];

 return (
 <main className="min-h-screen bg-white">
 <StructuredData />
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
 <span className="text-[#9747ff] font-semibold text-sm">🔧 AUTO SERVICE CENTERS</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Service Bookings
 <br />
 <span className="text-[#9747ff]">Increase Repeat Customers 5x</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Increase booking rates by 80%, grow repeat customers by 5x, and reduce no-shows by 70% with Tribly's WhatsApp automation for auto service centers.
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
 How Tribly Helps Auto Service Centers
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Streamline bookings, increase repeat visits, and provide exceptional customer experience effortlessly.
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
 Why Auto Service Centers & Workshops Need Tribly
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
 See how service centers use Tribly to automate operations and increase revenue.
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
 Powerful Features for Service Centers
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
 Ready to Transform Your Service Center?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading auto service centers using Tribly to automate operations and increase revenue.
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
