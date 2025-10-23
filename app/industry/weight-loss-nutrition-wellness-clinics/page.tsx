
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function WeightLossNutritionWellnessClinicsPage() {
 const stats = [
 { number: "5x", label: "Program Completion" },
 { number: "85%", label: "Diet Adherence" },
 { number: "72%", label: "Reduced No-shows" },
 { number: "24/7", label: "Client Support" }
 ];

 const whyTriblySections = [
 {
 title: "Why Weight-loss, Nutrition & Wellness Clinics Need Tribly",
 points: [
 {
 heading: "Low Program Completion Rates",
 description: "Clients lose motivation midway through programs. Tribly sends daily motivational messages and progress updates, increasing completion by 5x."
 },
 {
 heading: "Poor Diet & Exercise Adherence",
 description: "Clients struggle to follow meal plans and workout schedules. Tribly sends automated reminders and tips, improving adherence by 85%."
 },
 {
 heading: "Limited Progress Tracking",
 description: "Tracking weight, measurements, and habits manually is time-consuming. Tribly automates daily check-ins and progress reports."
 },
 {
 heading: "Lack of Ongoing Support",
 description: "Clients need encouragement between appointments. Tribly provides 24/7 automated support and accountability through WhatsApp."
 }
 ]
 }
 ];

 const useCases = [
 {
 title: "Daily Habit & Meal Reminders",
 description: "Send personalized reminders for meals, water intake, supplements, and exercise based on each client's program and schedule.",
 example: "\"Good morning Sarah! ☀️ Remember: 2 glasses of water before breakfast. Today's meals: Protein shake (8 AM), Grilled chicken salad (1 PM), Salmon & veggies (7 PM). You've got this!\""
 },
 {
 title: "Progress Tracking & Motivation",
 description: "Automated check-ins asking clients to log weight, measurements, and mood. Send motivational messages celebrating milestones.",
 example: "\"Amazing progress! You've lost 12 lbs in 4 weeks! That's exactly on track. Remember: sustainable weight loss = lasting results. Keep going! 🌟\""
 },
 {
 title: "Weekly Meal Plan Distribution",
 description: "Automatically send personalized meal plans, grocery lists, and recipes every Sunday for the upcoming week.",
 example: "\"Your Week 5 meal plan is here! 🍽️ Download your personalized menu & grocery list: [link] Prep tip: Grill chicken breasts in bulk on Sunday!\""
 },
 {
 title: "Community & Group Challenges",
 description: "Create group challenges with daily updates, leaderboards, and peer motivation to increase engagement and accountability.",
 example: "\"Week 2 of our Step Challenge! Current leaders: Tom (85,000 steps), Lisa (82,000), You (78,000). Weekend catchup time! Let's move! 👟\""
 }
 ];

 const benefits = [
 {
 icon: "🎯",
 title: "Personalized Program Automation",
 description: "Automatically deliver customized meal plans, exercise schedules, and habit reminders based on each client's goals and progress."
 },
 {
 icon: "📊",
 title: "Progress Tracking Dashboard",
 description: "Collect daily check-ins on weight, measurements, food intake, and exercise. View client progress in real-time analytics."
 },
 {
 icon: "💬",
 title: "24/7 Accountability & Support",
 description: "AI chatbot provides instant answers about nutrition, recipes, and motivation, keeping clients engaged between appointments."
 },
 {
 icon: "🏆",
 title: "Gamification & Challenges",
 description: "Run group challenges, track milestones, and celebrate achievements to keep clients motivated throughout their journey."
 }
 ];

 const features = [
 {
 title: "Meal Plan & Recipe Delivery",
 description: "Automatically send weekly meal plans, grocery lists, and healthy recipes tailored to each client's dietary preferences and goals.",
 icon: "🍽️"
 },
 {
 title: "Hydration & Supplement Reminders",
 description: "Send timely reminders for water intake, vitamins, and supplements throughout the day to support optimal results.",
 icon: "💧"
 },
 {
 title: "Exercise & Activity Tracking",
 description: "Remind clients about scheduled workouts, send exercise videos, and track completion rates for accountability.",
 icon: "🏋️"
 },
 {
 title: "Behavioral Coaching Messages",
 description: "Deliver evidence-based tips on emotional eating, stress management, and mindful eating habits for sustainable weight loss.",
 icon: "🧠"
 },
 {
 title: "Before/After Milestone Celebrations",
 description: "Automatically celebrate weight loss milestones, program completion, and maintenance achievements to boost motivation.",
 icon: "🎉"
 },
 {
 title: "Referral & Testimonial Collection",
 description: "Request success stories and referrals from satisfied clients at optimal times in their journey.",
 icon: "⭐"
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
 <span className="text-[#9747ff] font-semibold text-sm">🌟 WEIGHT-LOSS & WELLNESS</span>
 </div>

 <h1 className="text-[56px] md:text-[72px] font-semibold text-black mb-6 leading-tight">
 Automate Client Coaching
 <br />
 <span className="text-[#9747ff]">Achieve 5x Better Results</span>
 </h1>

 <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
 Increase program completion by 5x, improve diet adherence by 85%, and provide 24/7 support with Tribly's automated WhatsApp coaching platform for wellness clinics.
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
 How Tribly Helps Weight-loss & Wellness Clinics
 </h2>
 <p className="text-[20px] text-gray-700 max-w-[800px] mx-auto">
 Increase program completion, improve client adherence, and scale your coaching effortlessly.
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
 Why Weight-loss, Nutrition & Wellness Clinics Need Tribly
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
 See how wellness clinics use Tribly to transform client outcomes and increase revenue.
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
 Powerful Features for Wellness Coaching
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
 Ready to Transform Your Wellness Business?
 </h2>

 <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
 Join leading wellness clinics using Tribly to automate coaching and achieve exceptional results.
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
