
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function GynecologyWomensHealthClinicsPage() {
 const stats = [
 { number: "68%", label: "Reduced No-shows" },
 { number: "3x", label: "Annual Exam Rate" },
 { number: "90%", label: "Screening Compliance" },
 { number: "24/7", label: "Patient Support" }
 ];

 const whyTriblySections = [
 {
 title: "Why Gynecology & Women's Health Clinics Need Tribly",
 points: [
 {
 heading: "Missed Annual Exams",
 description: "Women often postpone their annual well-woman exams. Tribly sends automated reminders, increasing annual visit rates by 3x."
 },
 {
 heading: "Sensitive Communication Needs",
 description: "Women's health requires private, empathetic communication. Tribly provides secure WhatsApp messaging for sensitive topics and test results."
 },
 {
 heading: "Prenatal Care Coordination",
 description: "Managing multiple prenatal appointments is complex. Tribly automates the entire pregnancy journey with timely reminders and educational content."
 },
 {
 heading: "Screening Follow-up Challenges",
 description: "Patients need reminders for mammograms, Pap smears, and bone density scans. Tribly ensures screening compliance with automated campaigns."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "Annual Well-Woman Exam Reminders",
 description: "Send automated reminders when patients are due for their annual gynecological exam, Pap smear, and breast examination.",
 example: "\"Hi Jennifer, it's been 12 months since your last well-woman exam. Schedule your annual check-up today for comprehensive women's health care. Book: [link]\""
 },
 {
 title: "Prenatal Care Journey Automation",
 description: "Guide expectant mothers through their pregnancy with week-by-week educational content and automated appointment reminders.",
 example: "\"Week 28! Baby is the size of an eggplant 🍆 Your glucose screening is scheduled for next Tuesday at 9 AM. Remember to fast 8 hours before. See you soon!\""
 },
 {
 title: "Menopause Management Support",
 description: "Provide ongoing support and education for women experiencing menopause with symptom tracking and treatment follow-ups.",
 example: "\"How are you feeling on the new HRT? Reply with your symptom rating (1-10). Your follow-up appointment is in 2 weeks. We're here to support you! 💜\""
 },
 {
 title: "Screening & Prevention Campaigns",
 description: "Send age-appropriate reminders for mammograms, Pap smears, bone density scans, and STI screenings based on patient age and history.",
 example: "\"You're turning 40 this year! Time for your baseline mammogram. Early detection saves lives. Schedule today: [link] We'll make it comfortable!\""
 }
 ];

 const benefits = [
 {
 icon: "🩺",
 title: "Lifecycle Care Management",
 description: "Automate care for every life stage: adolescence, reproductive years, pregnancy, menopause, and beyond with tailored communications."
 },
 {
 icon: "📅",
 title: "Smart Prenatal Scheduling",
 description: "Coordinate complex prenatal appointment sequences with automated reminders for ultrasounds, tests, and check-ups throughout pregnancy."
 },
 {
 icon: "🔒",
 title: "Private & Secure Messaging",
 description: "HIPAA-compliant WhatsApp communication ensures patient privacy for sensitive topics like STIs, pregnancy, and reproductive health."
 },
 {
 icon: "💬",
 title: "24/7 Patient Support",
 description: "AI chatbot answers common questions about symptoms, procedures, and birth control options anytime, reducing after-hours calls."
 }
 ];

 const features = [
 {
 title: "Age-Based Screening Reminders",
 description: "Automatically send mammogram, Pap smear, and bone density scan reminders based on patient age and screening guidelines.",
 icon: "📋"
 },
 {
 title: "Pregnancy Week-by-Week Updates",
 description: "Send personalized pregnancy updates with fetal development info, symptom guidance, and appointment reminders throughout all trimesters.",
 icon: "🤰"
 },
 {
 title: "Birth Control Refill Reminders",
 description: "Automated reminders for birth control prescription refills and annual exams required for renewals.",
 icon: "💊"
 },
 {
 title: "Postpartum Care Follow-ups",
 description: "Check in with new mothers at key milestones: 1 week, 2 weeks, and 6 weeks postpartum with care instructions and support.",
 icon: "👶"
 },
 {
 title: "Abnormal Result Notifications",
 description: "Securely notify patients about test results and follow-up requirements with compassionate, clear messaging.",
 icon: "📊"
 },
 {
 title: "Fertility Tracking Support",
 description: "Provide guidance for patients trying to conceive with cycle tracking tips and preconception care recommendations.",
 icon: "🌸"
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
 <span className="text-[#9747ff] font-semibold text-sm">💜 GYNECOLOGY & WOMEN'S HEALTH</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Women's Healthcare
 <br />
 <span className="text-[#9747ff]">Throughout Every Life Stage</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Increase annual exam rates by 3x, improve screening compliance by 90%, and provide compassionate 24/7 support with Tribly's automated WhatsApp communication.
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
 How Tribly Helps Women's Health Clinics
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Provide compassionate, automated care throughout every stage of women's health journey.
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
 Why Gynecology & Women's Health Clinics Need Tribly
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
 See how women's health clinics use Tribly to provide exceptional patient care.
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
 Powerful Features for Women's Health
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
 Ready to Transform Your Women's Health Practice?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading women's health clinics using Tribly to provide exceptional, automated patient care.
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
