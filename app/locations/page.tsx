"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const imgFrame = "/icons/arrow-right-purple.svg";

export default function LocationsPage() {
  const locations = [
    {
      name: "Andhra Pradesh",
      cities: ["Vijayawada", "Visakhapatnam", "Guntur", "Nellore", "Tirupati"],
      description: "Serving businesses across Andhra Pradesh with AI-powered customer engagement and WhatsApp automation solutions.",
      industries: ["Healthcare", "Automotive", "Retail", "Hospitality", "Education"]
    },
    {
      name: "Telangana", 
      cities: ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar"],
      description: "Empowering Telangana businesses with smart customer retention and automated marketing campaigns.",
      industries: ["IT Services", "Healthcare", "Manufacturing", "Retail", "Real Estate"]
    },
    {
      name: "Bengaluru",
      cities: ["Bengaluru", "Mysuru", "Hubli", "Mangalore", "Belgaum"],
      description: "Leading customer engagement platform for Bengaluru's thriving business ecosystem.",
      industries: ["Technology", "Startups", "Healthcare", "Education", "E-commerce"]
    }
  ];

  const services = [
    "WhatsApp Marketing Automation",
    "Customer Retention Strategies", 
    "AI-Powered Engagement",
    "Marketing Campaign Management",
    "Customer Data Analytics",
    "Multi-Channel Communication"
  ];

  return (
    <main className="min-h-screen bg-white">
      <StructuredData />
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
              <span className="text-[#9747ff] font-semibold text-sm">Serving India</span>
            </div>

            <h1 className="text-[56px] md:text-[72px] font-semibold text-black leading-tight mb-6">
              Tribly Services Across
              <span className="text-[#9747ff]"> India</span>
            </h1>

            <p className="text-[20px] md:text-[24px] text-gray-700 leading-relaxed mb-10">
              From Andhra Pradesh to Telangana, Bengaluru to Hyderabad - we're helping businesses across India boost customer retention and automate their marketing with AI-powered solutions.
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[48px] font-semibold text-black mb-4">
              Serving Businesses Across India
            </h2>
            <p className="text-[20px] text-gray-700">
              Local expertise, global technology - helping Indian businesses grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-[32px] p-8 border border-[#9747ff]/20 shadow-lg"
              >
                <h3 className="text-[28px] font-semibold text-[#9747ff] mb-4">
                  {location.name}
                </h3>
                <p className="text-[16px] text-gray-600 mb-6 leading-relaxed">
                  {location.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-[18px] font-semibold text-black mb-3">Major Cities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.cities.map((city, cityIndex) => (
                      <span key={cityIndex} className="bg-[#f7f1ff] text-[#9747ff] px-3 py-1 rounded-full text-sm">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[18px] font-semibold text-black mb-3">Key Industries:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.industries.map((industry, industryIndex) => (
                      <span key={industryIndex} className="bg-[#9747ff]/10 text-[#9747ff] px-3 py-1 rounded-full text-sm">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#f7f1ff]">
        <div className="max-w-[1240px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[48px] font-semibold text-black mb-4">
              Our Services
            </h2>
            <p className="text-[20px] text-gray-700">
              Comprehensive customer engagement solutions for Indian businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[24px] p-6 border border-[#9747ff]/20"
              >
                <h3 className="text-[20px] font-semibold text-black mb-3">
                  {service}
                </h3>
                <p className="text-[16px] text-gray-600">
                  Tailored solutions for businesses across India
                </p>
              </motion.div>
            ))}
          </div>
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
            <div className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] rounded-[40px] p-[2px]">
              <div className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] rounded-[38px] p-12 md:p-16 text-center">
                <div>
                  <h2 className="text-[40px] md:text-[48px] font-semibold mb-6 text-black">
                    Ready to Grow Your Business in India?
                  </h2>
                  <p className="text-[20px] md:text-[24px] mb-10 text-gray-700 max-w-[700px] mx-auto">
                    Join hundreds of businesses across Andhra Pradesh, Telangana, Bengaluru, and beyond using Tribly to retain more customers and grow their revenue.
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
