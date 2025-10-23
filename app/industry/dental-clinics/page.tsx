
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function DentalClinicsPage() {
 const stats = [
 { number: "70%", label: "Reduction in No-shows" },
 { number: "4x", label: "Increased Recall Visits" },
 { number: "90%", label: "Automated Follow-ups" },
 { number: "24/7", label: "Patient Support" }
 ];

 const whyTriblySections = [
 {
 title: "Why Dental Clinics Need Tribly",
 points: [
 {
 heading: "Missed Recall Appointments",
 description: "Patients forget to schedule regular check-ups and cleanings. Tribly sends automated reminders for 6-month recalls, increasing visit frequency by 4x."
 },
 {
 heading: "High No-Show Rates",
 description: "Dental appointments have one of the highest no-show rates. Tribly's automated reminders reduce no-shows by 70% with timely WhatsApp notifications."
 },
 {
 heading: "Treatment Plan Follow-ups",
 description: "Following up on incomplete treatment plans is time-consuming. Tribly automates follow-ups to ensure patients complete their dental care journey."
 },
 {
 heading: "Limited Patient Education",
 description: "Patients need guidance on oral hygiene and post-treatment care. Tribly sends educational content automatically to improve patient outcomes."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "Appointment Reminders & Confirmations",
 description: "Send automated reminders 48 hours and 24 hours before appointments. Reduce no-shows and last-minute cancellations with instant WhatsApp confirmations.",
 example: "\"Hi Sarah, this is a reminder about your teeth cleaning appointment tomorrow at 3 PM with Dr. Smith. Reply YES to confirm or RESCHEDULE to pick a new time.\""
 },
 {
 title: "6-Month Recall Campaigns",
 description: "Automatically reach out to patients who haven't visited in 6 months. Send personalized recall messages to increase preventive care visits.",
 example: "\"It's been 6 months since your last dental check-up! Schedule your appointment today to maintain optimal oral health. Book now: [link]\""
 },
 {
 title: "Treatment Follow-up Messages",
 description: "Send post-treatment care instructions and check-ins. Ensure patients follow aftercare guidelines for better recovery and satisfaction.",
 example: "\"Hi John, how are you feeling after your root canal? Remember to avoid hard foods for 24 hours. Any concerns? Reply here anytime!\""
 },
 {
 title: "Birthday & Special Occasion Wishes",
 description: "Build stronger relationships with personalized birthday messages and special offers. Increase patient loyalty with thoughtful gestures.",
 example: "\"Happy Birthday, Emma! 🎂 Celebrate with 20% off teeth whitening this month. Book your brighter smile today!\""
 }
 ];

 const benefits = [
 {
 icon: "📅",
 title: "Smart Appointment Management",
 description: "Let patients book, reschedule, or cancel appointments directly through WhatsApp with real-time availability updates."
 },
 {
 icon: "🔔",
 title: "Automated Recall System",
 description: "Never lose track of patients. Automated 6-month recall messages increase preventive care visits and practice revenue."
 },
 {
 icon: "💬",
 title: "AI-Powered Chat Support",
 description: "Answer common questions about services, pricing, and insurance instantly without staff intervention."
 },
 {
 icon: "📊",
 title: "Patient Analytics Dashboard",
 description: "Track appointment trends, patient retention rates, and campaign performance with real-time analytics."
 }
 ];

 const features = [
 {
 title: "AI Chatbots for Dental Queries",
 description: "Handle questions about procedures, pricing, insurance coverage, and appointment availability 24/7 without human intervention.",
 icon: "🤖"
 },
 {
 title: "WhatsApp Appointment Booking",
 description: "Let patients book appointments directly through WhatsApp with smart slot suggestions based on availability and patient history.",
 icon: "📱"
 },
 {
 title: "Treatment Plan Reminders",
 description: "Send automated reminders for multi-visit treatment plans to ensure patients complete their dental care journey.",
 icon: "🦷"
 },
 {
 title: "Patient Education Campaigns",
 description: "Share oral hygiene tips, seasonal dental care advice, and preventive care information to educate and engage patients.",
 icon: "📚"
 },
 {
 title: "Feedback & Review Collection",
 description: "Automatically request reviews from satisfied patients and collect feedback to improve service quality.",
 icon: "⭐"
 },
 {
 title: "Emergency Contact Support",
 description: "Provide patients with instant access to emergency contact information and after-hours support through automated responses.",
 icon: "🚨"
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
 <span className="text-[#9747ff] font-semibold text-sm">🦷 DENTAL CLINICS</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Patient Communication
 <br />
 <span className="text-[#9747ff]">Grow Your Dental Practice</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Reduce no-shows by 70%, increase recall visits by 4x, and automate appointment reminders with Tribly's WhatsApp-powered patient engagement platform.
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
 How Tribly Helps Dental Clinics
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Streamline operations, increase patient retention, and grow your practice with automated WhatsApp communication.
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
 Why Dental Clinics Need Tribly
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
 See how dental clinics use Tribly to automate patient communication and increase revenue.
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
 Powerful Features for Dental Practices
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
 Ready to Transform Your Dental Practice?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join 500+ dental clinics using Tribly to automate patient communication and increase revenue.
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
