
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function EyeClinicsPage() {
 const stats = [
 { number: "65%", label: "Reduced No-shows" },
 { number: "3.5x", label: "Annual Check-up Rate" },
 { number: "92%", label: "Patient Satisfaction" },
 { number: "24/7", label: "Patient Support" }
 ];

 const whyTriblySections = [
 {
 title: "Why Eye Clinics Need Tribly",
 points: [
 {
 heading: "Missed Annual Eye Exams",
 description: "Patients forget their yearly eye check-ups. Tribly sends automated annual exam reminders, increasing preventive care visits by 3.5x."
 },
 {
 heading: "Post-Surgery Follow-ups",
 description: "LASIK and cataract surgery patients need careful monitoring. Tribly automates post-op reminders and care instructions for better outcomes."
 },
 {
 heading: "Contact Lens Reorder Reminders",
 description: "Patients run out of contact lenses without reordering. Tribly sends timely reorder reminders, increasing recurring revenue."
 },
 {
 heading: "Prescription Expiry Notifications",
 description: "Expired prescriptions delay orders. Tribly reminds patients to schedule renewal appointments before their prescription expires."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "Annual Eye Exam Reminders",
 description: "Automatically reach out to patients when it's time for their yearly eye check-up. Increase preventive care visits and early detection of eye conditions.",
 example: "\"Hi Michael, it's been 12 months since your last eye exam. Schedule your annual check-up today to keep your vision healthy! Book now: [link]\""
 },
 {
 title: "Contact Lens Reorder Campaigns",
 description: "Send automated reminders based on lens supply timeline. Ensure patients never run out and maintain consistent recurring revenue.",
 example: "\"Running low on contacts? It's been 3 months since your last order. Reorder your 90-day supply now with free shipping! Order: [link]\""
 },
 {
 title: "Post-LASIK Surgery Care",
 description: "Send detailed post-operative instructions and check-in messages after LASIK or PRK surgery to ensure proper healing.",
 example: "\"Day 3 post-LASIK: Remember to use your prescribed drops 4x daily. Avoid rubbing your eyes. Your follow-up is tomorrow at 10 AM. Questions? Reply here!\""
 },
 {
 title: "Children's Eye Care Reminders",
 description: "Send parents reminders for children's eye exams at critical developmental milestones: 6 months, 3 years, 5 years, and annually after.",
 example: "\"Emily is turning 5! Time for her comprehensive eye exam before starting kindergarten. Early detection ensures healthy vision development. Schedule: [link]\""
 }
 ];

 const benefits = [
 {
 icon: "👁️",
 title: "Annual Exam Automation",
 description: "Automatically track and remind patients when they're due for their annual eye examination, increasing preventive care visits."
 },
 {
 icon: "📅",
 title: "Smart Appointment Scheduling",
 description: "Let patients book eye exams, fittings, and consultations directly through WhatsApp with real-time availability."
 },
 {
 icon: "💬",
 title: "AI-Powered Support",
 description: "Answer questions about services, insurance coverage, and product availability instantly without staff intervention."
 },
 {
 icon: "🔄",
 title: "Automated Reorder System",
 description: "Track contact lens supply timelines and send automated reorder reminders to maintain recurring revenue."
 }
 ];

 const features = [
 {
 title: "Patient Education Campaigns",
 description: "Share tips on eye health, digital eye strain prevention, UV protection, and age-related eye care through automated WhatsApp campaigns.",
 icon: "📚"
 },
 {
 title: "Insurance Verification Assistance",
 description: "AI chatbot helps patients understand their vision insurance coverage, copays, and out-of-pocket costs before appointments.",
 icon: "💳"
 },
 {
 title: "Post-Surgery Monitoring",
 description: "Automated check-ins after LASIK, cataract, or other eye surgeries with care instructions and symptom monitoring.",
 icon: "🔬"
 },
 {
 title: "Eyewear Collection Notifications",
 description: "Send automated reminders when prescription glasses or sunglasses are ready for pickup at your optical shop.",
 icon: "👓"
 },
 {
 title: "Prescription Renewal Reminders",
 description: "Alert patients before their prescription expires so they can schedule a renewal exam without delays.",
 icon: "📋"
 },
 {
 title: "Pediatric Eye Care Tracking",
 description: "Track children's developmental milestones and send age-appropriate eye exam reminders to parents.",
 icon: "👶"
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
 <span className="text-[#9747ff] font-semibold text-sm">👁️ EYE CLINICS & OPTOMETRY</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Patient Care
 <br />
 <span className="text-[#9747ff]">Increase Annual Visits</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Reduce no-shows by 65%, increase annual eye exams by 3.5x, and automate contact lens reorders with Tribly's WhatsApp-powered patient engagement platform.
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
 How Tribly Helps Eye Clinics
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Increase patient retention, automate routine communications, and grow your optical practice effortlessly.
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
 Why Eye Clinics Need Tribly
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
 See how eye clinics use Tribly to automate patient communication and increase revenue.
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
 Powerful Features for Eye Care Practices
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
 Ready to Transform Your Eye Clinic?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading eye care practices using Tribly to automate patient communication and increase revenue.
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
