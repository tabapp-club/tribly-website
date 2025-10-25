"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function FAQPage() {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          q: "What is Tribly and how does it help businesses?",
          a: "Tribly is India's leading AI-powered customer engagement and retention platform. We help businesses automate WhatsApp marketing, improve customer retention, and grow revenue through intelligent automation and personalized campaigns."
        },
        {
          q: "Which cities and states does Tribly serve?",
          a: "Tribly serves businesses across India, with a strong presence in Andhra Pradesh (Vijayawada, Visakhapatnam, Guntur), Telangana (Hyderabad, Warangal), Bengaluru, and other major Indian cities. We provide localized support and understand regional business needs."
        },
        {
          q: "How is Tribly different from other customer engagement platforms?",
          a: "Tribly combines AI-powered automation with deep understanding of Indian business culture. We offer WhatsApp automation, multi-channel engagement, and personalized campaigns specifically designed for Indian businesses across various industries."
        }
      ]
    },
    {
      category: "Features & Services",
      questions: [
        {
          q: "What WhatsApp automation features does Tribly offer?",
          a: "Tribly offers comprehensive WhatsApp automation including automated messages, broadcast campaigns, customer segmentation, automated follow-ups, appointment reminders, and personalized customer journeys. All features are designed to comply with WhatsApp Business API guidelines."
        },
        {
          q: "Can Tribly help with customer retention strategies?",
          a: "Yes! Tribly specializes in customer retention through AI-powered insights, automated re-engagement campaigns, loyalty programs, personalized communication, and data-driven retention strategies. We help businesses reduce churn and increase customer lifetime value."
        },
        {
          q: "What industries does Tribly serve?",
          a: "Tribly serves diverse industries including healthcare (dental clinics, dermatology, pediatrics), automotive (service centers, dealerships), retail (fashion, electronics, furniture), hospitality (hotels, restaurants), and many more across India."
        }
      ]
    },
    {
      category: "Pricing & Plans",
      questions: [
        {
          q: "How does Tribly's pricing work?",
          a: "Tribly offers transparent, usage-based pricing starting at ₹2,999 per month base fee plus ₹8 per active customer. No hidden costs, no long-term contracts. You only pay for what you use, making it affordable for businesses of all sizes."
        },
        {
          q: "Are there any setup fees or hidden costs?",
          a: "No setup fees, no hidden costs. Our pricing is completely transparent - just the monthly platform fee of ₹2,999 plus ₹8 per active customer. We believe in honest, straightforward pricing."
        },
        {
          q: "Do you offer discounts for larger businesses?",
          a: "Yes! For businesses with over 5,000 customers, we offer custom enterprise pricing with volume discounts. Contact our team to discuss enterprise solutions tailored for your business needs."
        }
      ]
    },
    {
      category: "Technical & Support",
      questions: [
        {
          q: "How quickly can I get started with Tribly?",
          a: "You can get started with Tribly within 24-48 hours. Our onboarding process is simple and our team provides dedicated support to help you set up your first campaigns quickly and effectively."
        },
        {
          q: "What kind of support does Tribly provide?",
          a: "Tribly provides comprehensive support including setup assistance, campaign optimization, training sessions, and 24/7 technical support. Our team understands Indian business needs and provides localized support."
        },
        {
          q: "Is my customer data secure with Tribly?",
          a: "Absolutely. We use enterprise-grade security measures, data encryption, and comply with Indian data protection regulations. Your customer data is completely secure and never shared with third parties."
        }
      ]
    },
    {
      category: "Integration & Setup",
      questions: [
        {
          q: "How does Tribly integrate with existing business systems?",
          a: "Tribly integrates seamlessly with popular CRM systems, POS systems, and business tools. We provide APIs and webhooks for easy integration with your existing workflow and data management systems."
        },
        {
          q: "Do I need technical expertise to use Tribly?",
          a: "No technical expertise required! Tribly is designed for business users with an intuitive interface. Our team provides training and support to help you get the most out of the platform."
        },
        {
          q: "Can I customize campaigns for my specific business needs?",
          a: "Yes! Tribly offers extensive customization options including personalized messaging, industry-specific templates, custom automation workflows, and targeted campaigns based on your business requirements."
        }
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(category => 
      category.questions.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    )
  };

  return (
    <main className="min-h-screen bg-white">
      <StructuredData />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#f7f1ff] via-[#f7f1ff] to-[#ffffff] pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#9747ff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#862ef8]/10 rounded-full blur-3xl"></div>

        <div className="max-w-[1240px] mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-[900px] mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#9747ff]/20 rounded-full px-6 py-3 mb-8">
              <span className="text-[#9747ff] font-semibold text-sm">Frequently Asked Questions</span>
            </div>

            <h1 className="text-[56px] md:text-[72px] font-semibold text-black leading-tight mb-6">
              Everything You Need to Know About
              <span className="text-[#9747ff]"> Tribly</span>
            </h1>

            <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
              Get answers to common questions about our AI-powered customer engagement platform, pricing, features, and how we help businesses across India grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="max-w-[1240px] mx-auto px-6">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-16"
            >
              <h2 className="text-[40px] font-semibold text-[#9747ff] mb-8 text-center">
                {category.category}
              </h2>
              
              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <motion.div
                    key={faqIndex}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (faqIndex * 0.05) }}
                    className="bg-white rounded-[24px] p-8 border border-[#9747ff]/20 shadow-sm"
                  >
                    <h3 className="text-[20px] font-semibold text-black mb-4">
                      {faq.q}
                    </h3>
                    <p className="text-[16px] text-gray-700 leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f7f1ff]">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[40px] md:text-[48px] font-semibold mb-6 text-black">
              Still Have Questions?
            </h2>
            <p className="text-[20px] md:text-[24px] mb-10 text-gray-700">
              Our team is here to help. Get in touch for personalized assistance and expert guidance.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://calendly.com/connect-tribly/new-meeting" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#9747ff] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
                >
                  Book a Demo
                </motion.button>
              </a>
              
              <a href="mailto:support@tribly.ai">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-[#9747ff] text-[#9747ff] px-8 py-4 rounded-full font-semibold text-lg transition-all"
                >
                  Contact Support
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
