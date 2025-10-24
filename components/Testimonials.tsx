"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Vidya Kadiyala",
    image: null,
    text: "Turn everyday transactions into an AI-driven two-way conversation to drive higher customer engagement, across almost every function and industry imaginable.",
    initial: "V",
    color: "bg-[#4A90E2]",
    borderColor: "#9747ff",
    shadowColor: "shadow-[0_4px_0_#9747ff]",
  },
  {
    name: "Rajesh Kumar",
    image: null,
    text: "Tribly has transformed how we engage with our customers. The automation features save us hours every week while improving our retention rates significantly.",
    initial: "R",
    color: "bg-[#7B68EE]",
    borderColor: "#9747ff",
    shadowColor: "shadow-[0_4px_0_#9747ff]",
  },
  {
    name: "Priya Sharma",
    image: null,
    text: "The insights we get from Tribly are game-changing. We can now predict customer behavior and act proactively to prevent churn.",
    initial: "P",
    color: "bg-[#50C878]",
    borderColor: "#9747ff",
    shadowColor: "shadow-[0_4px_0_#9747ff]",
  },
  {
    name: "Amit Patel",
    image: null,
    text: "Best investment we made for our business. The ROI has been incredible, and our customer satisfaction scores have never been higher.",
    initial: "A",
    color: "bg-[#FFB347]",
    borderColor: "#9747ff",
    shadowColor: "shadow-[0_4px_0_#9747ff]",
  },
  {
    name: "Sneha Reddy",
    image: null,
    text: "The AI-powered campaigns are brilliant. They feel personal and relevant, which has dramatically improved our engagement rates.",
    initial: "S",
    color: "bg-[#FF69B4]",
    borderColor: "#9747ff",
    shadowColor: "shadow-[0_4px_0_#9747ff]",
  },
  {
    name: "Vikram Singh",
    image: null,
    text: "Tribly's WhatsApp integration is seamless. Our customers love the instant communication, and it has boosted our repeat purchase rate.",
    initial: "V",
    color: "bg-[#9370DB]",
    borderColor: "#9747ff",
    shadowColor: "shadow-[0_4px_0_#9747ff]",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center space-y-0 mb-16">
          <h2 className="text-[40px] font-semibold text-black">Loved by Businesses Like Yours</h2>
          <p className="text-[20px] text-black font-normal">See how real businesses use Tribly to grow smarter.</p>
        </div>

        {/* First Row */}
        <div className="mb-8 overflow-hidden pb-2">
          <motion.div
            className="flex gap-6"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((testimonial, index) => (
              <div
                key={index}
                className={`w-[480px] h-[160px] rounded-full border ${testimonial.shadowColor} bg-white p-2.5 flex items-center gap-5 flex-shrink-0`}
                style={{ borderColor: testimonial.borderColor }}
              >
                {/* Avatar */}
                <div className={`w-[144px] h-[144px] rounded-full ${testimonial.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-[70px] font-medium text-white">{testimonial.initial}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 pr-6">
                  <h4 className="text-[19px] font-medium text-black mb-2">{testimonial.name}</h4>
                  <p className="text-[13px] text-black font-light leading-normal">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="overflow-hidden pb-2">
          <motion.div
            className="flex gap-6"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials.slice(3, 6), ...testimonials.slice(3, 6)].map((testimonial, index) => (
              <div
                key={index}
                className={`w-[480px] h-[160px] rounded-full border ${testimonial.shadowColor} bg-white p-2.5 flex items-center gap-5 flex-shrink-0`}
                style={{ borderColor: testimonial.borderColor }}
              >
                {/* Avatar */}
                <div className={`w-[144px] h-[144px] rounded-full ${testimonial.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-[70px] font-medium text-white">{testimonial.initial}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 pr-6">
                  <h4 className="text-[19px] font-medium text-black mb-2">{testimonial.name}</h4>
                  <p className="text-[13px] text-black font-light leading-normal">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

