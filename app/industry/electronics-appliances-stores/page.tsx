
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function ElectronicsAppliancesStoresPage() {
 const stats = [
 { number: "8x", label: "Online Conversions" },
 { number: "90%", label: "Query Response Rate" },
 { number: "75%", label: "Warranty Registrations" },
 { number: "24/7", label: "Product Support" }
 ];

 const whyTriblySections = [
 {
 title: "Why Electronics & Appliances Stores Need Tribly",
 points: [
 {
 heading: "Complex Product Inquiries",
 description: "Customers have detailed questions about specifications, compatibility, and features. Tribly's AI provides instant technical answers 24/7, increasing conversions by 8x."
 },
 {
 heading: "Lost EMI & Financing Leads",
 description: "Customers abandon purchases due to pricing confusion. Tribly instantly calculates EMI options and connects them to financing, recovering 90% of queries."
 },
 {
 heading: "Poor Post-Purchase Support",
 description: "Installation, warranty registration, and service requests are manual. Tribly automates the entire post-purchase journey through WhatsApp."
 },
 {
 heading: "Limited Product Comparison Support",
 description: "Customers struggle to compare models. Tribly's AI provides side-by-side comparisons with recommendations based on needs and budget."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "Instant Product Specification & Availability",
 description: "AI chatbot answers detailed queries about specifications, features, stock availability, and delivery timelines 24/7.",
 example: "\"Need a 43\" 4K Smart TV under ₹35,000? Available options: Samsung TU7000 (₹33,999), LG UP7500 (₹34,999), Sony X80J (₹37,999). Compare: [link]\""
 },
 {
 title: "EMI & Finance Calculator",
 description: "Instantly calculate EMI options for any product with multiple tenure choices and bank offers, with direct approval links.",
 example: "\"Samsung 192L Fridge at ₹18,999. EMI options: ₹1,899/month (12M), ₹1,084/month (18M), ₹792/month (24M). Apply for instant approval: [link]\""
 },
 {
 title: "Installation & Demo Scheduling",
 description: "Automatically schedule product installation, setup assistance, and demo sessions after purchase with technician availability.",
 example: "\"Your washing machine is delivered! Schedule free installation: Tomorrow 10 AM-2 PM / 3 PM-6 PM. Also book free demo session. Select slot: [link]\""
 },
 {
 title: "Warranty Registration & Service Reminders",
 description: "Auto-register warranties, send service reminders, and handle AMC renewals through WhatsApp to ensure continued protection.",
 example: "\"Register your AC warranty in 2 clicks: [link] Get extended warranty: +2 years at ₹2,499 (save 40%). Also, schedule free service call!\""
 }
 ];

 const benefits = [
 {
 icon: "📱",
 title: "AI Product Consultant",
 description: "Answer specification queries, suggest products based on requirements, and provide technical comparisons 24/7 through AI chatbot."
 },
 {
 icon: "💳",
 title: "Smart EMI Calculator",
 description: "Instantly calculate EMI options for any product with bank offers, zero-cost EMI, and direct financing approvals."
 },
 {
 icon: "🔧",
 title: "Post-Purchase Automation",
 description: "Automate installation scheduling, warranty registration, usage tips, and service reminders throughout product lifecycle."
 },
 {
 icon: "🔄",
 title: "Exchange & Trade-in Offers",
 description: "Provide instant valuations for old products and promote exchange offers with automated quotation system."
 }
 ];

 const features = [
 {
 title: "Product Comparison Engine",
 description: "AI compares multiple products side-by-side based on specifications, features, price, and customer reviews to help decision-making.",
 icon: "⚖️"
 },
 {
 title: "Compatibility Checker",
 description: "Verify compatibility of accessories, peripherals, and add-ons with customer's existing products before purchase.",
 icon: "✅"
 },
 {
 title: "Live Stock & Delivery Updates",
 description: "Provide real-time stock status across stores, delivery timelines, and alternate options for out-of-stock products.",
 icon: "📦"
 },
 {
 title: "Extended Warranty & AMC Promotions",
 description: "Promote extended warranties and annual maintenance contracts during and after purchase with automated reminders.",
 icon: "🛡️"
 },
 {
 title: "Usage Tips & Tutorials",
 description: "Send product usage tutorials, maintenance tips, and troubleshooting guides via WhatsApp to enhance customer experience.",
 icon: "📚"
 },
 {
 title: "Trade-in Valuation System",
 description: "Automatically assess old product condition and provide instant exchange value for seamless upgrade purchases.",
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
 <span className="text-[#9747ff] font-semibold text-sm">📱 ELECTRONICS & APPLIANCES</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Sales & Support
 <br />
 <span className="text-[#9747ff]">Convert 8x More Customers</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Increase online conversions by 8x, respond to 90% of queries instantly, and automate 75% of warranty registrations with Tribly's WhatsApp platform for electronics stores.
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
 How Tribly Helps Electronics & Appliances Stores
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Answer technical queries instantly, automate financing, and provide exceptional post-purchase support effortlessly.
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
 Why Electronics & Appliances Stores Need Tribly
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
 See how electronics stores use Tribly to automate sales and increase revenue.
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
 Powerful Features for Electronics Retail
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
 Ready to Transform Your Electronics Store?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading electronics retailers using Tribly to automate sales and increase revenue.
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
