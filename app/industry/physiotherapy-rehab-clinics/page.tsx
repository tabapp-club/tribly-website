
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function PhysiotherapyRehabClinicsPage() {
 const stats = [
 { number: "80%", label: "Session Completion Rate" },
 { number: "4x", label: "Exercise Adherence" },
 { number: "75%", label: "Reduced No-shows" },
 { number: "24/7", label: "Patient Support" }
 ];

 const whyTriblySections = [
 {
 title: "Why Physiotherapy & Rehab Clinics Need Tribly",
 points: [
 {
 heading: "Incomplete Treatment Programs",
 description: "Patients often stop therapy before completing their treatment plan. Tribly sends motivational messages and progress reminders to ensure completion."
 },
 {
 heading: "Poor Home Exercise Compliance",
 description: "Patients forget or skip home exercises between sessions. Tribly sends daily exercise reminders with video links, improving adherence by 4x."
 },
 {
 heading: "Multi-Session Scheduling Challenges",
 description: "Booking multiple sessions in advance is time-consuming. Tribly automates series bookings and sends reminders for each upcoming session."
 },
 {
 heading: "Limited Patient Education",
 description: "Patients need guidance on injury prevention and self-care. Tribly delivers educational content automatically based on their condition."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "Daily Home Exercise Reminders",
 description: "Send personalized exercise reminders with video demonstrations and completion tracking. Ensure patients stay committed to their recovery plan.",
 example: "\"Morning John! Time for your shoulder exercises: 3 sets of 10 reps each. Watch the video: [link] Mark as done when you complete them. You've got this! 💪\""
 },
 {
 title: "Multi-Session Appointment Management",
 description: "Automatically schedule and remind patients about their treatment series. Reduce no-shows with timely WhatsApp notifications.",
 example: "\"Hi Sarah, this is session 5 of 10 for your knee rehab tomorrow at 3 PM. Reply YES to confirm or RESCHEDULE to pick a new time.\""
 },
 {
 title: "Progress Tracking & Motivation",
 description: "Send weekly progress updates and motivational messages to keep patients engaged throughout their recovery journey.",
 example: "\"Week 4 complete! You've attended 8 out of 8 sessions and completed 85% of home exercises. Your dedication is paying off - keep going! 🌟\""
 },
 {
 title: "Post-Treatment Care Instructions",
 description: "Share recovery tips, ice/heat protocols, and activity modifications after each session for optimal healing.",
 example: "\"After today's session: Apply ice for 15 mins every 3 hours. Avoid lifting over 10 lbs. Your next session is Tuesday. Questions? Reply anytime!\""
 }
 ];

 const benefits = [
 {
 icon: "💪",
 title: "Exercise Compliance Tracking",
 description: "Automated daily exercise reminders with video demonstrations and completion tracking to improve home exercise adherence."
 },
 {
 icon: "📅",
 title: "Series Appointment Management",
 description: "Book multiple sessions in advance and send automated reminders for each appointment in the treatment series."
 },
 {
 icon: "📊",
 title: "Progress Monitoring",
 description: "Track patient progress with automated check-ins and send motivational messages based on their recovery milestones."
 },
 {
 icon: "💬",
 title: "AI Symptom Assessment",
 description: "AI chatbot helps patients assess pain levels and symptoms between sessions, alerting therapists to concerns."
 }
 ];

 const features = [
 {
 title: "Personalized Exercise Programs",
 description: "Send customized exercise routines with video links, rep counts, and frequency based on each patient's condition and progress.",
 icon: "🏋️"
 },
 {
 title: "Pain & Symptom Tracking",
 description: "Automated daily check-ins asking patients to rate pain and symptoms, creating a log for therapists to review.",
 icon: "📈"
 },
 {
 title: "Insurance & Payment Reminders",
 description: "Send reminders about copays, outstanding balances, and insurance authorization renewals to reduce billing issues.",
 icon: "💳"
 },
 {
 title: "Injury Prevention Education",
 description: "Share tips on workplace ergonomics, proper lifting techniques, and injury prevention based on patient's condition.",
 icon: "🛡️"
 },
 {
 title: "Post-Discharge Follow-ups",
 description: "Check in with patients 1, 4, and 12 weeks after discharge to ensure continued progress and offer support.",
 icon: "🔄"
 },
 {
 title: "Referral Management",
 description: "Automate communication with referring physicians, sending progress reports and discharge summaries via WhatsApp.",
 icon: "👨‍⚕️"
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
 <span className="text-[#9747ff] font-semibold text-sm">💪 PHYSIOTHERAPY & REHAB</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Patient Recovery
 <br />
 <span className="text-[#9747ff]">Increase Treatment Adherence</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Increase exercise adherence by 4x, complete 80% more treatment programs, and automate daily patient communication with Tribly's WhatsApp platform for physiotherapy clinics.
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
 How Tribly Helps Physiotherapy Clinics
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Improve treatment outcomes, increase patient adherence, and automate routine communications effortlessly.
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
 Why Physiotherapy & Rehab Clinics Need Tribly
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
 See how physiotherapy clinics use Tribly to improve patient outcomes and increase revenue.
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
 Powerful Features for Rehab Practices
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
 Ready to Transform Your Rehab Clinic?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading physiotherapy clinics using Tribly to automate patient care and improve outcomes.
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
