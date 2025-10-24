"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Local assets
const imgBgBorder = "/images/how-it-works-1.png";
const imgBgBorder1 = "/images/how-it-works-2.png";
const imgBgBorder2 = "/images/how-it-works-3.png";
const imgBgBorder3 = "/images/how-it-works-4.png";

const steps = [
  {
    title: "More customers",
    percentage: "92%",
    description: "says With Tribly, we're capturing more customer data than ever before. It's helping us reach new audiences and convert them into loyal customers",
    bg: imgBgBorder
  },
  {
    title: "Strong customer relationship",
    percentage: "88%",
    description: "Tribly keeps us connected with our customers in a way that feels personal. The reminders and insights make it easier to nurture stronger relationships and earn trust",
    bg: imgBgBorder1
  },
  {
    title: "More revenue",
    percentage: "64%",
    description: "noticed a real difference in revenue since using Tribly. The platform helps us engage better, reduce drop-offs, and drive repeat sales",
    bg: imgBgBorder2
  },
  {
    title: "Automate operations",
    percentage: "90%",
    description: "Says tribly takes care of the routine tasks we used to spend hours on. Automating operations has freed up our team to focus on strategy and growth.",
    bg: imgBgBorder3
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-0 mb-20"
        >
          <h2 className="text-[40px] font-semibold text-black">How it works</h2>
          <p className="text-[20px] text-black font-normal">See how real businesses use Tribly to grow smarter.</p>
        </motion.div>

        {/* Stacking Cards Container */}
        <div className="relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="sticky mb-8 last:mb-0"
              style={{ 
                top: `calc(50vh - 150px + ${index * 20}px)`,
                zIndex: index + 1
              }}
            >
              <div className="max-w-[942px] mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="h-[300px] rounded-full border-[0.75px] border-[#9747ff] bg-white p-2 flex items-center overflow-hidden"
                  style={{ boxShadow: '0 10px 40px 0 #F7F5FF' }}
                >
                  {/* Image/Visual Section */}
                  <div className="w-[380px] h-[288px] rounded-full border-[0.75px] border-[#9747ff] overflow-hidden flex-shrink-0">
                    <Image
                      src={step.bg}
                      alt={step.title}
                      width={380}
                      height={288}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 px-8 space-y-3">
                    <h3 className="text-[48px] font-semibold text-black leading-normal">{step.title}</h3>
                    <div className="flex items-start gap-4">
                      <span className="text-[48px] font-semibold text-black">{step.percentage}</span>
                      <p className="text-[18px] text-black leading-normal max-w-[360px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
          {/* Spacer to allow last card to scroll properly */}
          <div className="h-[50vh]" />
        </div>
      </div>
    </section>
  );
}

