"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Vidya Kadiyala",
    text: "Turn everyday transactions into an AI-driven two-way conversation to drive higher customer engagement, across almost every function and industry imaginable.",
    initial: "V",
    color: "bg-[#4A90E2]",
    borderColor: "#4A90E2",
    shadowColor: "shadow-[0_6px_0_#4A90E2]",
  },
  {
    name: "Rajesh Kumar",
    text: "Tribly has transformed how we engage with our customers. The automation features save us hours every week while improving our retention rates significantly.",
    initial: "R",
    color: "bg-[#7B68EE]",
    borderColor: "#7B68EE",
    shadowColor: "shadow-[0_6px_0_#7B68EE]",
  },
  {
    name: "Priya Sharma",
    text: "The insights we get from Tribly are game-changing. We can now predict customer behavior and act proactively to prevent churn.",
    initial: "P",
    color: "bg-[#50C878]",
    borderColor: "#50C878",
    shadowColor: "shadow-[0_6px_0_#50C878]",
  },
  {
    name: "Amit Patel",
    text: "Best investment we made for our business. The ROI has been incredible, and our customer satisfaction scores have never been higher.",
    initial: "A",
    color: "bg-[#FFB347]",
    borderColor: "#FFB347",
    shadowColor: "shadow-[0_6px_0_#FFB347]",
  },
  {
    name: "Sneha Reddy",
    text: "The AI-powered campaigns are brilliant. They feel personal and relevant, which has dramatically improved our engagement rates.",
    initial: "S",
    color: "bg-[#FF69B4]",
    borderColor: "#FF69B4",
    shadowColor: "shadow-[0_6px_0_#FF69B4]",
  },
  {
    name: "Vikram Singh",
    text: "Tribly's WhatsApp integration is seamless. Our customers love the instant communication, and it has boosted our repeat purchase rate.",
    initial: "V",
    color: "bg-[#9370DB]",
    borderColor: "#9370DB",
    shadowColor: "shadow-[0_6px_0_#9370DB]",
  },
];

export default function TestimonialsMobile() {
  return (
    <section className="relative w-full py-[87px] overflow-hidden">
      <div className="max-w-[412px] mx-auto px-[28.875px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center text-black mb-[62px]">
          <div className="flex flex-col font-semibold justify-center text-[32px]">
            <p className="leading-[normal]">Loved by Businesses Like Yours</p>
          </div>
          <div className="flex flex-col font-normal justify-center text-[20px]">
            <p className="leading-[normal]">See how real businesses use Tribly to grow smarter.</p>
          </div>
        </div>

        {/* First Row */}
        <div className="mb-[12px] overflow-hidden pb-2">
          <motion.div
            className="flex gap-[12px]"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((testimonial, index) => (
              <div
                key={index}
                className={`w-[320px] h-[106.5px] rounded-[999px] border ${testimonial.shadowColor} bg-white p-[6px] flex items-center gap-[13.35px] flex-shrink-0`}
                style={{ borderColor: testimonial.borderColor }}
              >
                {/* Avatar */}
                <div className={`w-[96px] h-[96px] rounded-full ${testimonial.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-[46px] font-medium text-white">{testimonial.initial}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 pr-4">
                  <h4 className="text-[12.67px] font-medium text-black mb-1.5">{testimonial.name}</h4>
                  <p className="text-[8.67px] text-black font-light leading-normal line-clamp-4">
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
            className="flex gap-[12px]"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials.slice(3, 6), ...testimonials.slice(3, 6)].map((testimonial, index) => (
              <div
                key={index}
                className={`w-[320px] h-[106.5px] rounded-[999px] border ${testimonial.shadowColor} bg-white p-[6px] flex items-center gap-[13.35px] flex-shrink-0`}
                style={{ borderColor: testimonial.borderColor }}
              >
                {/* Avatar */}
                <div className={`w-[96px] h-[96px] rounded-full ${testimonial.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-[46px] font-medium text-white">{testimonial.initial}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 pr-4">
                  <h4 className="text-[12.67px] font-medium text-black mb-1.5">{testimonial.name}</h4>
                  <p className="text-[8.67px] text-black font-light leading-normal line-clamp-4">
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
