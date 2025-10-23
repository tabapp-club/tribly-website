import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/mobile/FooterMobile";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function DermatologyAestheticClinicsPage() {
  const benefits = [
    {
      icon: "📅",
      title: "Automated Appointment Reminders",
      description: "Reduce no-shows by 60% with automated WhatsApp reminders for consultations, treatments, and follow-ups."
    },
    {
      icon: "💬",
      title: "Instant Patient Communication",
      description: "Answer patient queries instantly with AI-powered chatbots available 24/7 on WhatsApp."
    },
    {
      icon: "📊",
      title: "Treatment Follow-ups",
      description: "Send personalized post-treatment care instructions and check-ins automatically."
    },
    {
      icon: "🎯",
      title: "Targeted Campaign Management",
      description: "Launch seasonal promotions for treatments like Botox, fillers, laser therapy with high engagement rates."
    },
    {
      icon: "💳",
      title: "Payment & Billing Made Easy",
      description: "Send payment reminders, invoices, and collect payments directly through WhatsApp."
    },
    {
      icon: "⭐",
      title: "Feedback & Reviews",
      description: "Collect patient feedback automatically and build your online reputation effortlessly."
    }
  ];

  const useCases = [
    {
      title: "Appointment Management",
      description: "Patients can book, reschedule, or cancel appointments directly via WhatsApp. Automated confirmations and reminders reduce no-shows significantly.",
      metric: "60% fewer no-shows",
      color: "from-[#9747ff] to-[#7b38cc]"
    },
    {
      title: "Treatment Reminders",
      description: "Send automated reminders for follow-up treatments, skincare routines, or seasonal procedures like chemical peels and laser treatments.",
      metric: "3x higher retention",
      color: "from-[#9747ff] to-[#7b38cc]"
    },
    {
      title: "Patient Engagement",
      description: "Share skincare tips, treatment updates, and before-after galleries to keep patients engaged and informed about your services.",
      metric: "85% open rates",
      color: "from-[#9747ff] to-[#7b38cc]"
    },
    {
      title: "Promotional Campaigns",
      description: "Run targeted campaigns for special offers on Botox, dermal fillers, acne treatments, or seasonal skincare packages with personalized messaging.",
      metric: "40% conversion rate",
      color: "from-[#9747ff] to-[#7b38cc]"
    }
  ];

  const stats = [
    { number: "60%", label: "Reduction in No-Shows" },
    { number: "3x", label: "Patient Retention" },
    { number: "85%", label: "Message Open Rate" },
    { number: "24/7", label: "Patient Support" }
  ];

  const whyTriblySections = [
    {
      title: "Why Dermatology Clinics Need Tribly",
      points: [
        {
          heading: "High Patient Drop-off",
          description: "Many patients book consultations but don't show up. Tribly's automated reminders ensure they never forget their appointments."
        },
        {
          heading: "Manual Follow-ups Are Time-Consuming",
          description: "Following up with patients for post-treatment care, reviews, or repeat visits takes hours. Tribly automates this entirely."
        },
        {
          heading: "Low Treatment Package Uptake",
          description: "Patients often forget about seasonal treatments or offers. Tribly sends personalized reminders at the right time to drive conversions."
        },
        {
          heading: "Limited Patient Engagement",
          description: "Staying top-of-mind with patients between visits is challenging. Tribly keeps you connected with valuable skincare tips and updates."
        }
      ]
    }
  ];

  const features = [
    {
      title: "AI-Powered Chatbots",
      description: "Handle common queries about treatments, pricing, and availability instantly without staff intervention.",
      icon: "🤖"
    },
    {
      title: "Smart Appointment Scheduling",
      description: "Let patients book, reschedule, or cancel appointments directly through WhatsApp with automated slot management.",
      icon: "📅"
    },
    {
      title: "Personalized Campaigns",
      description: "Send targeted offers for Botox, fillers, laser treatments, and skincare packages based on patient history and preferences.",
      icon: "🎯"
    },
    {
      title: "Treatment Journey Automation",
      description: "Automate the entire patient journey from booking confirmation to post-treatment care and feedback collection.",
      icon: "🔄"
    },
    {
      title: "Patient Database Management",
      description: "Store patient preferences, treatment history, and communication logs in one centralized place for personalized care.",
      icon: "📊"
    },
    {
      title: "Analytics & Insights",
      description: "Track appointment rates, campaign performance, and patient engagement metrics to optimize your clinic's operations.",
      icon: "📈"
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
          <div className="text-center max-w-[1000px] mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#9747ff]/20 rounded-full px-6 py-3 mb-8">
              <span className="text-[#9747ff] font-semibold text-sm">Healthcare & Wellness</span>
            </div>

            <h1 className="text-[56px] md:text-[72px] font-semibold text-black leading-tight mb-6">
              WhatsApp Automation for
              <span className="text-[#9747ff]"> Dermatology & Aesthetic Clinics</span>
            </h1>

            <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
              Grow your clinic with automated appointment reminders, instant patient engagement, and personalized treatment campaigns on WhatsApp. Reduce no-shows by 60% and increase patient retention by 3x.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://calendly.com/connect-tribly/new-meeting" target="_blank">
                <button className="bg-[#9747ff] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2">
                  Book a Free Demo
                  <Image alt="Arrow" src="/icons/arrow-right-white.svg" width={20} height={20} />
                </button>
              </Link>

              <Link href="#benefits">
                <button className="bg-white border-2 border-[#9747ff] text-[#9747ff] px-8 py-4 rounded-full font-semibold text-lg transition-all">
                  See How It Works
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-[48px] md:text-[56px] font-semibold text-[#9747ff] mb-2">
                  {stat.number}
                </div>
                <div className="text-[16px] md:text-[18px] text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-semibold text-black mb-4">
              How Tribly Helps Your Clinic Grow
            </h2>
            <p className="text-[20px] text-gray-600 max-w-[800px] mx-auto">
              Automate patient communication, reduce operational costs, and focus on what matters most—providing excellent care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] rounded-[24px] p-8 border-2 border-[#9747ff]/10 hover:border-[#9747ff]/30 transition-all"
              >
                <div className="text-[48px] mb-4">{benefit.icon}</div>
                <h3 className="text-[22px] font-semibold text-black mb-3">{benefit.title}</h3>
                <p className="text-[16px] text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tribly Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#f7f1ff]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-[48px] font-semibold text-black mb-6 text-center">
              Why Dermatology Clinics Need Tribly
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
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-semibold text-black mb-4">
              Real-World Use Cases
            </h2>
            <p className="text-[20px] text-gray-600 max-w-[800px] mx-auto">
              See how leading dermatology clinics use Tribly to automate operations and grow their business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="rounded-[24px] overflow-hidden"
              >
                {/* Gradient border wrapper */}
                <div className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] rounded-[24px] p-[2px]">
                  <div className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] rounded-[22px] p-8">
                    <h3 className="text-[24px] font-semibold text-black mb-3">{useCase.title}</h3>
                    <p className="text-[16px] text-gray-700 leading-relaxed mb-4">{useCase.description}</p>
                    <div className="inline-flex items-center gap-2 bg-[#9747ff]/10 rounded-full px-4 py-2">
                      <span className="text-[#9747ff] font-semibold text-sm">{useCase.metric}</span>
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
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-semibold text-black mb-4">
              Powerful Features Built for Clinics
            </h2>
            <p className="text-[20px] text-gray-600 max-w-[800px] mx-auto">
              Everything you need to automate patient communication and grow your practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-[24px] p-8 border-2 border-[#9747ff]/10 hover:border-[#9747ff]/30 transition-all"
              >
                <div className="text-[48px] mb-4">{feature.icon}</div>
                <h3 className="text-[20px] font-semibold text-black mb-3">{feature.title}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="rounded-[40px] relative overflow-hidden">
            {/* Gradient border wrapper */}
            <div className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] rounded-[40px] p-[2px]">
              <div className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] rounded-[38px] p-12 md:p-16 text-center">
                <div>
                  <h2 className="text-[40px] md:text-[48px] font-semibold mb-6 text-black">
                    Ready to Grow Your Dermatology Clinic?
                  </h2>
                  <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
                    Join 500+ healthcare providers using Tribly to automate patient communication and increase revenue.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link href="https://calendly.com/connect-tribly/new-meeting" target="_blank">
                      <button className="bg-[#9747ff] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2">
                        Start Free Trial
                        <Image alt="Arrow" src="/icons/arrow-right-white.svg" width={20} height={20} />
                      </button>
                    </Link>

                    <Link href="https://app.tribly.ai/login" target="_blank">
                      <button className="bg-white border-2 border-[#9747ff] text-[#9747ff] px-8 py-4 rounded-full font-semibold text-lg transition-all">
                        Sign In
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
