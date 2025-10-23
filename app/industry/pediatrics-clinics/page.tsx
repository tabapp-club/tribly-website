
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function PediatricsClinicsPage() {
 const stats = [
 { number: "75%", label: "Reduced No-shows" },
 { number: "4x", label: "Vaccination Compliance" },
 { number: "95%", label: "Parent Satisfaction" },
 { number: "24/7", label: "Parent Support" }
 ];

 const whyTriblySections = [
 {
 title: "Why Pediatrics Clinics Need Tribly",
 points: [
 {
 heading: "Missed Vaccination Schedules",
 description: "Parents forget vaccination appointments. Tribly sends automated reminders based on child's age and vaccine schedule, increasing compliance by 4x."
 },
 {
 heading: "After-Hours Parent Anxiety",
 description: "Parents panic about symptoms after hours. Tribly's AI chatbot provides instant guidance on common childhood illnesses, reducing unnecessary ER visits."
 },
 {
 heading: "Well-Child Visit Reminders",
 description: "Tracking developmental milestones and scheduling age-appropriate check-ups is complex. Tribly automates reminders for all well-child visits."
 },
 {
 heading: "Parent Communication Overload",
 description: "Answering repetitive questions about fever, feeding, and development takes staff time. Tribly handles FAQs automatically, freeing up your team."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "Vaccination Schedule Automation",
 description: "Automatically send reminders for each vaccine in the CDC schedule based on child's birth date. Never miss a critical immunization window.",
 example: "\"Emma's 4-month vaccines are due! She needs DTaP, Hib, Polio, PCV, and Rotavirus. Schedule her well-baby visit today: [link] Let's keep her protected! 💉\""
 },
 {
 title: "Sick Visit Symptom Checker",
 description: "AI chatbot asks parents about symptoms and provides guidance on whether to book an appointment, visit urgent care, or try home remedies.",
 example: "\"I understand your child has a fever. Let me help you assess the situation. How old is your child? What's the current temperature? Any other symptoms?\""
 },
 {
 title: "Developmental Milestone Tracking",
 description: "Send parents age-appropriate developmental milestone information and reminders to discuss progress at well-child visits.",
 example: "\"Oliver is 18 months old! At his next visit, we'll check if he's: walking independently, saying 10+ words, and using a spoon. Book his check-up: [link]\""
 },
 {
 title: "New Parent Education Series",
 description: "Automated educational content for new parents covering feeding, sleep, safety, and development in the first year.",
 example: "\"Week 8 with Baby! Tummy time tips: Start with 3-5 minutes, 3x daily. Builds neck & shoulder strength. Watch demo: [link] Questions? Reply anytime!\""
 }
 ];

 const benefits = [
 {
 icon: "👶",
 title: "Age-Based Care Automation",
 description: "Automatically track each child's age and send appropriate well-visit reminders, vaccination schedules, and developmental guidance."
 },
 {
 icon: "💉",
 title: "Vaccination Compliance Tracking",
 description: "Monitor each child's immunization status and send timely reminders based on CDC's recommended vaccine schedule."
 },
 {
 icon: "💬",
 title: "24/7 AI Parent Support",
 description: "AI chatbot answers common questions about symptoms, fever management, feeding, and sleep patterns, reducing after-hours calls."
 },
 {
 icon: "👨‍👩‍👧",
 title: "Multi-Child Family Management",
 description: "Track appointments and reminders for all children in a family, sending consolidated updates to parents for convenience."
 }
 ];

 const features = [
 {
 title: "CDC Vaccine Schedule Integration",
 description: "Automatically track and send reminders for all childhood vaccines based on CDC guidelines and child's birth date.",
 icon: "📅"
 },
 {
 title: "Growth Chart Milestone Alerts",
 description: "Remind parents about age-appropriate developmental milestones and what to expect at each well-child visit.",
 icon: "📊"
 },
 {
 title: "Fever & Symptom Guidance",
 description: "AI provides immediate guidance on common symptoms like fever, rashes, cough, and vomiting with age-specific advice.",
 icon: "🌡️"
 },
 {
 title: "School Forms & Documentation",
 description: "Send parents reminders to request school physical forms, sports clearances, and immunization records before deadlines.",
 icon: "📝"
 },
 {
 title: "Seasonal Illness Alerts",
 description: "Proactively notify parents about flu season, RSV outbreaks, and hand-foot-mouth disease circulating in the community.",
 icon: "⚠️"
 },
 {
 title: "Feeding & Sleep Guidance",
 description: "Provide age-appropriate guidance on nutrition, feeding schedules, and sleep training based on child's current age.",
 icon: "🍼"
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
 <span className="text-[#9747ff] font-semibold text-sm">👶 PEDIATRICS CLINICS</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Parent Communication
 <br />
 <span className="text-[#9747ff]">Support Every Child's Journey</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Reduce no-shows by 75%, increase vaccination compliance by 4x, and provide 24/7 parent support with Tribly's WhatsApp-powered pediatric care platform.
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
 How Tribly Helps Pediatrics Clinics
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Support parents, track vaccinations, and automate care from newborn to adolescence.
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
 Why Pediatrics Clinics Need Tribly
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
 See how pediatric clinics use Tribly to provide exceptional care and support parents.
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
 Powerful Features for Pediatric Care
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
 Ready to Transform Your Pediatric Practice?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading pediatric clinics using Tribly to support parents and automate routine care.
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
