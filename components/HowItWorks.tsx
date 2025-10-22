"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "More customers",
    percentage: "92%",
    description: "says With Tribly, we're capturing more customer data than ever before. It's helping us reach new audiences and convert them into loyal customers",
  },
  {
    title: "Strong customer relationship",
    percentage: "88%",
    description: "Tribly keeps us connected with our customers in a way that feels personal. The reminders and insights make it easier to nurture stronger relationships and earn trust",
  },
  {
    title: "More revenue",
    percentage: "64%",
    description: "noticed a real difference in revenue since using Tribly. The platform helps us engage better, reduce drop-offs, and drive repeat sales",
  },
  {
    title: "Automate operations",
    percentage: "90%",
    description: "Says tribly takes care of the routine tasks we used to spend hours on. Automating operations has freed up our team to focus on strategy and growth.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6">
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

        {/* Steps */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              <div className="max-w-[942px] mx-auto">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="h-[300px] rounded-full border-[0.75px] border-black bg-white p-2 flex items-center overflow-hidden"
                >
                  {/* Image/Visual Section */}
                  <div className="w-[380px] h-[288px] rounded-full border-[0.75px] border-black bg-gradient-to-br from-primary/20 to-primary/40 flex-shrink-0" />
                  
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

