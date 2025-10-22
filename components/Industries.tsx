"use client";

import { motion } from "framer-motion";

const industries = [
  {
    name: "Healthcare & Wellness",
    color: "border-[#023e8a]",
    shadow: "shadow-[0_6px_0_#023e8a]",
    gradient: "from-blue-50 to-blue-100",
    icon: "🏥",
  },
  {
    name: "Automobile & Mobility",
    color: "border-[#9381ff]",
    shadow: "shadow-[0_6px_0_#9381ff]",
    gradient: "from-purple-50 to-purple-100",
    icon: "🚗",
  },
  {
    name: "Retail & Lifestyle",
    color: "border-[#8cb369]",
    shadow: "shadow-[0_6px_0_#8cb369]",
    gradient: "from-green-50 to-green-100",
    icon: "🛍️",
  },
  {
    name: "Food & Hospitality",
    color: "border-[#90323d]",
    shadow: "shadow-[0_6px_0_#90323d]",
    gradient: "from-red-50 to-red-100",
    icon: "🍽️",
  },
];

export default function Industries() {
  return (
    <section className="py-20 px-6 bg-[#f0f5ff]">
      <div className="max-w-[1440px] mx-auto">
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
                className={`absolute bottom-6 left-6 right-6 h-[271px] rounded-[29px] bg-gradient-to-br ${industry.gradient} flex items-center justify-center overflow-hidden`}
              >
                <span className="text-[108px] opacity-20">{industry.icon}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

