
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function FertilityIVFCentersPage() {
 const stats = [
 { number: "85%", label: "Treatment Adherence" },
 { number: "5x", label: "Patient Engagement" },
 { number: "95%", label: "Appointment Confirmations" },
 { number: "24/7", label: "Patient Support" }
 ];

 const whyTriblySections = [
 {
 title: "Why Fertility & IVF Centers Need Tribly",
 points: [
 {
 heading: "Complex Treatment Protocol Tracking",
 description: "IVF cycles require precise timing and medication schedules. Tribly sends automated reminders for injections, tests, and appointments, ensuring patients stay on track."
 },
 {
 heading: "Emotional Support & Communication",
 description: "Fertility treatments are emotionally challenging. Tribly provides 24/7 automated support, answering common questions and providing reassurance between appointments."
 },
 {
 heading: "Multi-stage Treatment Coordination",
 description: "Coordinating tests, procedures, and follow-ups across multiple stages is complex. Tribly automates the entire journey, reducing administrative burden."
 },
 {
 heading: "Sensitive Information Handling",
 description: "Patients need privacy and discretion. Tribly ensures secure, personalized communication through WhatsApp, maintaining confidentiality throughout their journey."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "Medication & Injection Reminders",
 description: "Send timely reminders for hormone injections, medications, and supplements. Ensure patients follow their treatment protocol precisely for optimal outcomes.",
 example: "\"Hi Sarah, reminder to take your Gonal-F injection at 8 PM tonight. Day 5 of your cycle. Any questions? We're here to help! 💙\""
 },
 {
 title: "Appointment & Procedure Notifications",
 description: "Automated reminders for ultrasounds, blood tests, egg retrieval, and embryo transfer appointments with prep instructions.",
 example: "\"Your egg retrieval is scheduled for tomorrow at 9 AM. Remember: No food or water after midnight. Your partner should accompany you. See you soon!\""
 },
 {
 title: "Cycle Day Tracking & Updates",
 description: "Keep patients informed about their cycle progress with personalized updates and next steps after each monitoring appointment.",
 example: "\"Great news! Your follicles are growing well. 3 at 16mm, 4 at 14mm. Continue current dose. Next scan in 2 days. Stay positive! 🌟\""
 },
 {
 title: "Post-Transfer Care & Beta Wait Support",
 description: "Provide daily support messages during the two-week wait, with care instructions and emotional encouragement.",
 example: "\"Day 5 post-transfer. Remember to rest, stay hydrated, and avoid stress. Your beta test is in 9 days. We're here if you need anything! 💜\""
 }
 ];

 const benefits = [
 {
 icon: "💊",
 title: "Protocol Compliance",
 description: "Automated medication and injection reminders ensure patients follow their treatment protocol precisely, improving success rates."
 },
 {
 icon: "📅",
 title: "Smart Scheduling",
 description: "Coordinate complex appointment sequences across multiple stages of treatment with intelligent scheduling and reminders."
 },
 {
 icon: "💬",
 title: "24/7 Patient Support",
 description: "AI-powered chatbot answers common questions about procedures, side effects, and next steps, providing reassurance anytime."
 },
 {
 icon: "🔒",
 title: "Secure Communication",
 description: "HIPAA-compliant WhatsApp communication ensures patient privacy and confidentiality throughout their fertility journey."
 }
 ];

 const features = [
 {
 title: "Treatment Protocol Automation",
 description: "Automatically send medication schedules, injection reminders, and dosage instructions based on patient's current cycle day and protocol.",
 icon: "💉"
 },
 {
 title: "Cycle Monitoring Updates",
 description: "Send personalized updates after each monitoring appointment with follicle measurements, hormone levels, and next steps.",
 icon: "📊"
 },
 {
 title: "Embryology Lab Updates",
 description: "Automated updates on fertilization results, embryo development, and grading throughout the laboratory phase.",
 icon: "🧬"
 },
 {
 title: "Emotional Support Messages",
 description: "Send encouraging messages during challenging phases like the two-week wait, providing hope and support.",
 icon: "💙"
 },
 {
 title: "Partner Coordination",
 description: "Send reminders and instructions to partners for semen collection, presence requirements, and important dates.",
 icon: "👥"
 },
 {
 title: "Financial & Insurance Queries",
 description: "AI chatbot handles questions about treatment costs, insurance coverage, and payment plans instantly.",
 icon: "💳"
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
 <span className="text-[#9747ff] font-semibold text-sm">💜 FERTILITY & IVF CENTERS</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Patient Care Throughout
 <br />
 <span className="text-[#9747ff]">Their Fertility Journey</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Improve treatment adherence by 85%, increase patient engagement by 5x, and provide 24/7 support with Tribly's automated WhatsApp communication for fertility clinics.
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
 How Tribly Helps Fertility & IVF Centers
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Support patients through every step of their fertility journey with automated, compassionate communication.
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
 Why Fertility & IVF Centers Need Tribly
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
 See how fertility centers use Tribly to support patients throughout their treatment journey.
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
 Powerful Features for Fertility Care
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
 Ready to Transform Your Fertility Center?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading fertility clinics using Tribly to provide compassionate, automated patient care.
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
