"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ExpertCallModal from "./ExpertCallModal";

const imgFrame = "/icons/arrow-right-purple.svg";
const imgArrow1 = "/icons/arrow-pink.svg";
const imgArrow2 = "/icons/arrow-purple.svg";
const imgEllipse31 = "/icons/ellipse-green.svg";

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="py-20 px-6">
      <div className="max-w-[1240px] mx-auto">
        {/* Background gradient */}
        <div className="bg-gradient-to-b from-[#f7f1ff] to-[#ffffff] rounded-[40px] p-12">
          {/* Contact CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col xl:flex-row items-center justify-between gap-12"
          >
            <div className="flex-1 max-w-[564px]">
              <h3 className="text-[36px] font-clash text-black leading-normal">
                Our team of experts are ready to discuss your needs and tailor a solution that works for you.
              </h3>
            </div>
            
            <div className="flex-1 max-w-[508px] w-full">
              <div className="flex flex-col gap-6">
                {/* Top Row */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <a href="https://calendly.com/connect-tribly/new-meeting" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white border border-[#9747ff] flex items-center justify-center gap-4 h-[96px] px-6 py-4 rounded-[99px] w-full sm:w-auto min-w-[253px] cursor-pointer shadow-[0_6px_0_#9747FF]"
                    >
                      <span className="text-[20px] font-clash font-medium text-[#9747ff]">Book a demo</span>
                      <Image alt="" src={imgFrame} width={24} height={24} />
                    </motion.button>
                  </a>
                  
                  <div className="w-[118px] h-[118px] bg-white border border-[#9747ff] rounded-full flex items-center justify-center">
                    <div className="rotate-180">
                      <Image alt="" src={imgArrow1} width={52} height={28} />
                    </div>
                  </div>
                </div>
                
                {/* Video Row */}
                <div className="w-full h-[118px] border border-[#9747ff] rounded-[999px] p-1.5">
                  <div className="w-full h-full rounded-[999px] overflow-hidden">
                    <video autoPlay muted className="w-full h-full object-cover" controlsList="nodownload" loop playsInline>
                      <source src="/Videos/people.mp4" />
                    </video>
                  </div>
                </div>
                
                {/* Bottom Row */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-end">
                  <div className="w-[118px] h-[118px] bg-white border border-[#9747ff] rounded-full flex items-center justify-center">
                    <div className="rotate-180">
                      <Image alt="" src={imgArrow2} width={52} height={28} />
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white border border-[#9747ff] flex items-center gap-4 h-[96px] px-6 py-4 rounded-[99px] w-full sm:w-auto min-w-[267px] cursor-pointer shadow-[0_6px_0_#9747FF]"
                  >
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-1">
                        <Image alt="" src={imgEllipse31} width={8} height={8} />
                        <span className="text-[10px] font-clash font-medium text-[#13923d]">Available</span>
                      </div>
                      <span className="text-[20px] font-clash font-medium text-[#9747ff]">Quick call with expert</span>
                    </div>
                    <Image alt="" src={imgFrame} width={24} height={24} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Expert Call Modal */}
      <ExpertCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
