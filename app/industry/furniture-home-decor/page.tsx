
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function FurnitureHomeDecorPage() {
 const stats = [
 { number: "7x", label: "Online Inquiries" },
 { number: "85%", label: "Consultation Bookings" },
 { number: "72%", label: "Custom Order Rate" },
 { number: "24/7", label: "Design Support" }
 ];

 const whyTriblySections = [
 {
 title: "Why Furniture & Home Décor Stores Need Tribly",
 points: [
 {
 heading: "Lost High-Value Inquiries",
 description: "Furniture purchases are high-consideration. Tribly responds instantly to inquiries with product details, pricing, and customization options, converting 7x more leads."
 },
 {
 heading: "Complex Customization Requirements",
 description: "Custom furniture orders need multiple discussions. Tribly collects specifications, shares design previews, and manages approvals through WhatsApp."
 },
 {
 heading: "Delivery & Installation Coordination",
 description: "Scheduling delivery and installation is time-consuming. Tribly automates booking, sends reminders, and provides live tracking updates."
 },
 {
 heading: "Limited Interior Design Support",
 description: "Customers need design guidance. Tribly's AI suggests furniture combinations, color palettes, and space planning ideas based on room photos."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "WhatsApp Catalog & Virtual Showroom",
 description: "Share complete furniture catalog with 360° views, dimensions, material details, and pricing. Let customers browse and inquire directly through WhatsApp.",
 example: "\"Welcome to Urban Living! 🛋️ Explore: 1️⃣ Living Room 2️⃣ Bedroom 3️⃣ Dining 4️⃣ Office. Browse 3D catalog: [link] Free design consultation included!\""
 },
 {
 title: "Custom Furniture Design & Quotes",
 description: "Collect customization requirements (size, material, color, finish) through conversational flow and provide instant quotations with design previews.",
 example: "\"Custom sofa specifications: Size: 7ft x 3ft, Fabric: Premium velvet, Color: Navy blue, Legs: Wooden. Quote: ₹42,999. Preview: [3D image] Confirm order?\""
 },
 {
 title: "AI Interior Design Consultation",
 description: "Customers send room photos, and AI suggests furniture placement, color schemes, and product recommendations tailored to their space and style.",
 example: "\"Share your living room photo! Based on your 12x15 ft space, I recommend: L-shaped sofa (₹45k), Coffee table (₹8k), TV unit (₹18k). See layout: [link]\""
 },
 {
 title: "Delivery & Installation Scheduling",
 description: "Automatically schedule delivery slots, send confirmation, track shipment, and book professional installation with real-time updates.",
 example: "\"Your dining set is ready! Select delivery: Friday 10 AM-2 PM / Saturday 3 PM-6 PM. Free installation included. Track order: [link] Questions? Reply!\""
 }
 ];

 const benefits = [
 {
 icon: "🛋️",
 title: "3D Catalog Experience",
 description: "Share immersive 3D product catalogs with dimensions, materials, and customization options directly through WhatsApp."
 },
 {
 icon: "✏️",
 title: "Custom Order Management",
 description: "Collect specifications, generate quotes, share design previews, and manage approvals for custom furniture orders seamlessly."
 },
 {
 icon: "🎨",
 title: "AI Design Recommendations",
 description: "Suggest furniture combinations, color palettes, and space layouts based on customer's room photos and preferences."
 },
 {
 icon: "🚚",
 title: "Delivery & Installation Automation",
 description: "Automate delivery scheduling, send live tracking updates, and coordinate professional installation appointments."
 }
 ];

 const features = [
 {
 title: "Room Visualization Tool",
 description: "Let customers visualize how furniture will look in their space using AI-powered room visualization from photos.",
 icon: "📸"
 },
 {
 title: "Material & Finish Samples",
 description: "Share detailed material swatches, wood finishes, fabric textures with zoom-in photos before customers make decisions.",
 icon: "🎨"
 },
 {
 title: "EMI & Financing Options",
 description: "Calculate EMI for large purchases, share flexible payment plans, and connect customers to financing partners instantly.",
 icon: "💳"
 },
 {
 title: "Maintenance & Care Guides",
 description: "Send product care instructions, cleaning tips, and maintenance reminders to ensure furniture longevity.",
 icon: "🧹"
 },
 {
 title: "Warranty & Service Support",
 description: "Register warranties automatically, send service reminders, and handle damage repair requests through WhatsApp.",
 icon: "🛡️"
 },
 {
 title: "Seasonal Collection Launches",
 description: "Promote new collections, festive offers, and clearance sales to existing customers with exclusive previews.",
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
 <span className="text-[#9747ff] font-semibold text-sm">🛋️ FURNITURE & HOME DÉCOR</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Sales & Design
 <br />
 <span className="text-[#9747ff]">Convert 7x More Inquiries</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Increase online inquiries by 7x, book 85% more consultations, and achieve 72% custom order rate with Tribly's WhatsApp automation for furniture and décor stores.
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
 How Tribly Helps Furniture & Home Décor Stores
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Showcase products beautifully, provide design guidance, and manage custom orders effortlessly through WhatsApp.
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
 Why Furniture & Home Décor Stores Need Tribly
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
 See how furniture stores use Tribly to automate sales and provide exceptional customer experience.
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
 Powerful Features for Furniture Business
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
 Ready to Transform Your Furniture Business?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading furniture stores using Tribly to automate sales and provide exceptional design experiences.
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
