"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const imgBg = "http://localhost:3845/assets/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";

export default function AutomationAnalytics() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-center gap-[40px]">
          {/* Automation Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[602px] w-[482px]"
          >
            {/* Background gradient */}
            <div className="absolute bg-gradient-to-b border border-[#b9bbff] border-solid from-[#ffffff] from-[14.904%] h-[602.76px] left-1/2 rounded-[32px] to-[#b9bbff] top-[-0.31px] translate-x-[-50%] w-[482px]" />
            
            {/* Inner background with image */}
            <div className="absolute h-[455.996px] left-[calc(50%+0.017px)] rounded-[26px] top-[calc(50%+63.66px)] translate-x-[-50%] translate-y-[-50%] w-[463.233px] overflow-hidden">
              <Image alt="" className="absolute inset-0 object-cover rounded-[26px] size-full" src={imgBg} width={463} height={456} />
            </div>
            
            {/* Content */}
            <div className="absolute content-stretch flex flex-col font-medium gap-[6px] items-start leading-[0] left-[32px] not-italic text-black top-[26px] w-[403px] z-10">
              <div className="flex flex-col justify-center relative shrink-0 text-[32px] text-nowrap">
                <p className="leading-[normal] whitespace-pre">Automation</p>
              </div>
              <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[16px] w-[min-content]">
                <p className="leading-[1.4] font-normal">Acquiring new customers is 5x more expensive than retaining existing ones.</p>
              </div>
            </div>
          </motion.div>

          {/* Analytics Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[602px] w-[482px]"
          >
            {/* Background gradient */}
            <div className="absolute bg-gradient-to-b border border-[#feb9ff] border-solid from-[#ffffff] from-[14.904%] h-[602.76px] left-1/2 rounded-[32px] to-[#ffb9ba] top-[-0.31px] translate-x-[-50%] w-[482px]" />
            
            {/* Inner background with image */}
            <div className="absolute h-[455.996px] left-[calc(50%+0.017px)] rounded-[26px] top-[calc(50%+63.66px)] translate-x-[-50%] translate-y-[-50%] w-[463.233px] overflow-hidden">
              <Image alt="" className="absolute inset-0 object-cover rounded-[26px] size-full" src={imgBg} width={463} height={456} />
            </div>
            
            {/* Content */}
            <div className="absolute content-stretch flex flex-col font-medium gap-[6px] items-start leading-[0] left-[32px] not-italic text-black top-[26px] w-[403px] z-10">
              <div className="flex flex-col justify-center relative shrink-0 text-[32px] text-nowrap">
                <p className="leading-[normal] whitespace-pre">Analytics</p>
              </div>
              <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[16px] w-[min-content]">
                <p className="leading-[1.4] font-normal">Acquiring new customers is 5x more expensive than retaining existing ones.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}