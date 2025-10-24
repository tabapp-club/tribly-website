"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
  {
    name: "Healthcare & Wellness",
    color: "border-[#9747ff]",
    shadow: "shadow-[0_6px_0_#9747ff]",
    image: "/images/industry-healthcare.png",
  },
  {
    name: "Automobile & Mobility",
    color: "border-[#9747ff]",
    shadow: "shadow-[0_6px_0_#9747ff]",
    image: "/images/industry-auto.png",
  },
  {
    name: "Retail & Lifestyle",
    color: "border-[#9747ff]",
    shadow: "shadow-[0_6px_0_#9747ff]",
    image: "/images/industry-retail.png",
  },
  {
    name: "Food & Hospitality",
    color: "border-[#9747ff]",
    shadow: "shadow-[0_6px_0_#9747ff]",
    image: "/images/industry-food.png",
  },
];

export default function Industries() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-[#f7f1ff] via-[#f7f1ff] to-[#ffffff] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#9747ff]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#862ef8]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1440px] mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-0 mb-16"
        >
          <h2 className="text-[40px] font-semibold text-[#061026]">Industries We Serve</h2>
          <p className="text-[16px] text-[#061026] font-normal">Built for Every Business That Wants to Grow</p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1224px] mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative h-[400px] rounded-[36px] border-[0.5px] ${industry.color} ${industry.shadow} bg-white overflow-hidden`}
            >
              {/* Title */}
              <div className="absolute top-8 left-0 right-0 text-center px-6">
                <h3 className="text-[24px] font-medium text-black leading-[26px]">
                  {industry.name}
                </h3>
              </div>

              {/* Image/Visual Area */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-6 left-6 right-6 h-[271px] rounded-[29px] overflow-hidden"
              >
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

