"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "98%", label: "Customer Retention" },
    { number: "5M+", label: "Messages Sent" },
    { number: "24/7", label: "Support Available" }
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-[900px] mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#9747ff]/20 rounded-full px-6 py-3 mb-8">
              <span className="text-[#9747ff] font-semibold text-sm">About Tribly</span>
            </div>

            <h1 className="text-[56px] md:text-[72px] font-semibold text-black leading-tight mb-6">
              Empowering Businesses with
              <span className="text-[#9747ff]"> Smart Customer Engagement</span>
            </h1>

            <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
              We're on a mission to help businesses build lasting relationships with their customers through intelligent automation and AI-powered insights.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://calendly.com/connect-tribly/new-meeting" target="_blank">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#9747ff] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2"
                >
                  Get Started Today
                  <Image alt="Arrow" src={imgFrame} width={20} height={20} className="invert" />
                </motion.button>
              </Link>

              <Link href="#our-story">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-[#9747ff] text-[#9747ff] px-8 py-4 rounded-full font-semibold text-lg transition-all"
                >
                  Our Story
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-[48px] md:text-[56px] font-semibold text-[#9747ff] mb-2">
                  {stat.number}
                </div>
                <div className="text-[16px] md:text-[18px] text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-[48px] font-semibold text-black mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[18px] text-gray-700 leading-relaxed">
                <p>
                  Tribly was born from a simple observation: businesses were losing customers not because of bad products, but because of poor engagement and follow-up.
                </p>
                <p>
                  We saw countless businesses struggling to maintain meaningful relationships with their customers. Manual follow-ups were time-consuming, inconsistent, and often missed entirely.
                </p>
                <p>
                  That's when we decided to build Tribly - an AI-powered platform that automates customer engagement while keeping it personal and relevant. Today, we help hundreds of businesses across industries retain more customers and grow their revenue.
                </p>
                <p className="font-semibold text-[#9747ff]">
                  Our journey is just beginning, and we're excited to have you as part of it.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Gradient border wrapper */}
              <div className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] rounded-[32px] p-[2px]">
                <div className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] rounded-[30px] p-12">
                  <div className="space-y-8">
                    <div>
                      <div className="text-[64px] font-semibold mb-2 text-[#9747ff]">2023</div>
                      <div className="text-[18px] text-gray-600">Company Founded</div>
                    </div>
                    <div className="h-px bg-[#9747ff]/10"></div>
                    <div>
                      <div className="text-[64px] font-semibold mb-2 text-[#9747ff]">500+</div>
                      <div className="text-[18px] text-gray-600">Businesses Transformed</div>
                    </div>
                    <div className="h-px bg-[#9747ff]/10"></div>
                    <div>
                      <div className="text-[64px] font-semibold mb-2 text-[#9747ff]">98%</div>
                      <div className="text-[18px] text-gray-600">Satisfaction Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[40px] relative overflow-hidden"
          >
            {/* Gradient border wrapper */}
            <div className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] rounded-[40px] p-[2px]">
              <div className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] rounded-[38px] p-12 md:p-16 text-center">
                <div>
                  <h2 className="text-[40px] md:text-[48px] font-semibold mb-6 text-black">
                    Ready to Transform Your Customer Engagement?
                  </h2>
                  <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
                    Join hundreds of businesses already using Tribly to retain more customers and grow their revenue.
                  </p>

                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link href="https://calendly.com/connect-tribly/new-meeting" target="_blank">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#9747ff] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2"
                      >
                        Book a Demo
                        <Image alt="Arrow" src={imgFrame} width={20} height={20} className="invert" />
                      </motion.button>
                    </Link>

                    <Link href="https://app.tribly.ai/login" target="_blank">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white border-2 border-[#9747ff] text-[#9747ff] px-8 py-4 rounded-full font-semibold text-lg transition-all"
                      >
                        Sign In
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

