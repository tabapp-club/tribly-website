
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function TwoWheelerDealershipsPage() {
 const stats = [
 { number: "7x", label: "Lead Conversion" },
 { number: "90%", label: "Service Retention" },
 { number: "65%", label: "Accessory Sales Increase" },
 { number: "24/7", label: "Customer Support" }
 ];

 const whyTriblySections = [
 {
 title: "Why Two-Wheeler Dealerships Need Tribly",
 points: [
 {
 heading: "High Competition, Low Margins",
 description: "Two-wheeler market is highly competitive. Tribly helps you convert more leads faster through instant WhatsApp responses and follow-ups."
 },
 {
 heading: "Missed Service Opportunities",
 description: "Customers forget periodic services, leading to lost revenue. Tribly sends automated reminders based on km/months, increasing service bookings by 90%."
 },
 {
 heading: "Limited Accessory Penetration",
 description: "Customers don't know about available accessories. Tribly sends targeted campaigns for helmets, riding gear, and accessories, increasing sales by 65%."
 },
 {
 heading: "EMI & Finance Queries",
 description: "Customers have many questions about financing. Tribly's AI chatbot instantly provides EMI calculations and connects them to finance team."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "Instant Lead Response & Test Ride Booking",
 description: "Respond to all inquiries within seconds, share bike specifications, and let customers book test rides instantly through WhatsApp.",
 example: "\"Hi! Interested in the new Honda SP 125? Here's the brochure: [link] Test ride available today at 4 PM! EMI starts at ₹2,999/month. Book now: [link]\""
 },
 {
 title: "Service & Maintenance Reminders",
 description: "Automated reminders for first service, periodic maintenance, and seasonal check-ups based on purchase date and estimated km.",
 example: "\"Your Hero Splendor is due for 6-month service! Book now: 20% off + free bike wash. Free pickup & drop. Schedule: [link] Keep riding smooth!\""
 },
 {
 title: "Accessory & Riding Gear Campaigns",
 description: "Send personalized recommendations for helmets, riding jackets, phone mounts, and bike covers based on bike model purchased.",
 example: "\"Ride safe! Get ISI certified helmets for your new Pulsar: Full-face (₹1,999), Modular (₹2,499). 10% festive discount! Shop: [link]\""
 },
 {
 title: "Insurance & Extended Warranty Renewals",
 description: "Alert customers 30 days before insurance/warranty expiry with renewal options and no-claim bonus benefits.",
 example: "\"Your bike insurance expires in 30 days! Renew with zero hassle: Comprehensive coverage at ₹3,500. Instant policy on WhatsApp! Renew: [link]\""
 }
 ];

 const benefits = [
 {
 icon: "🏍️",
 title: "Fast Lead Conversion",
 description: "Instantly respond to all inquiries with bike details, EMI options, and test ride booking to convert 7x more leads."
 },
 {
 icon: "🔧",
 title: "Automated Service Booking",
 description: "Send km-based and time-based service reminders. Let customers book service slots directly through WhatsApp."
 },
 {
 icon: "💬",
 title: "AI Finance Assistant",
 description: "Provide instant EMI calculations, down payment options, and eligibility checks 24/7 without sales team."
 },
 {
 icon: "🛡️",
 title: "Lifecycle Revenue Maximization",
 description: "Generate revenue throughout ownership: services, accessories, insurance, and upgrades through automated campaigns."
 }
 ];

 const features = [
 {
 title: "EMI & Down Payment Calculator",
 description: "AI chatbot instantly calculates EMI, down payment options, and total interest for any bike model and tenure.",
 icon: "💳"
 },
 {
 title: "Test Ride Scheduling",
 description: "Let customers choose bike model, date, time, and location for test rides with automated confirmation and reminders.",
 icon: "🛵"
 },
 {
 title: "Model Comparison Tool",
 description: "Help customers compare bikes based on mileage, power, features, and price through conversational AI.",
 icon: "⚖️"
 },
 {
 title: "Service History Tracking",
 description: "Maintain digital service records for each customer's bike with automatic updates after each service visit.",
 icon: "📋"
 },
 {
 title: "Seasonal Campaign Automation",
 description: "Run festive offers, monsoon check-ups, and summer service campaigns automatically to boost bookings.",
 icon: "🎊"
 },
 {
 title: "Exchange & Upgrade Offers",
 description: "Target customers with 2-3 year old bikes for exchange offers on new launches and upgraded models.",
 icon: "🔄"
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
 <span className="text-[#9747ff] font-semibold text-sm">🏍️ TWO-WHEELER DEALERSHIPS</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Sales & Service
 <br />
 <span className="text-[#9747ff]">Convert 7x More Leads</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Increase lead conversion by 7x, boost service retention by 90%, and grow accessory sales by 65% with Tribly's WhatsApp automation for two-wheeler dealerships.
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
 How Tribly Helps Two-Wheeler Dealerships
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Convert more leads, maximize service revenue, and build lasting customer relationships effortlessly.
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
 Why Two-Wheeler Dealerships Need Tribly
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
 See how two-wheeler dealerships use Tribly to automate sales and increase revenue.
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
 Powerful Features for Two-Wheeler Dealers
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
 Ready to Transform Your Two-Wheeler Business?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading two-wheeler dealerships using Tribly to automate sales and maximize revenue.
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
