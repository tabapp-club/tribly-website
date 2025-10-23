"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ExpertCallModal from "./ExpertCallModal";

// Local assets
const imgImage = "/images/hero-image-1.png";
const imgFrame2 = "/icons/arrow-right-purple.svg";
const imgEllipse31 = "/icons/ellipse-green.svg";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative bg-[#f7f1ff] h-screen w-full overflow-hidden">
      {/* Purple highlight boxes - matching Figma exact positions */}
      <div className="absolute bg-[#862ef8] h-[80.593px] left-[calc(16.667%+49.218px)] top-[288.2px] w-[372.595px]" />
      <div className="absolute bg-[#862ef8] h-[80.593px] left-[100px] top-[385.91px] w-[679.855px]" />

      <div className="max-w-[1440px] mx-auto relative h-full">
        {/* Main Heading - Exactly positioned as in Figma */}
        <div className="absolute flex flex-col font-semibold justify-center leading-[0] left-[95px] not-italic text-[80px] text-black top-[275px] translate-y-[-50%] w-[680px]">
          <p className="leading-[normal]">Super charge your</p>
        </div>

        <div className="absolute flex flex-col font-semibold justify-center leading-[0] left-[calc(16.667%+72px)] not-italic text-[80px] text-nowrap text-white top-[324px] translate-y-[-50%]">
          <p className="leading-[normal] whitespace-pre">business</p>
        </div>

        <div className="absolute flex flex-col font-semibold justify-center leading-[0] left-[110px] not-italic text-[80px] text-nowrap text-white top-[422px] translate-y-[-50%]">
          <p className="leading-[normal] whitespace-pre">growth with tribly</p>
        </div>

        {/* Subtitle */}
        <div className="absolute flex flex-col justify-center leading-[0] left-[106px] not-italic text-[24px] text-black top-[525px] translate-y-[-50%] w-[652px]">
          <p className="leading-[normal]">
            Tribly helps you retain more customers, boost revenue, and run automated campaigns that actually work.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="absolute content-stretch flex gap-[16px] items-center left-[106px] top-[579px]">
          <a href="https://calendly.com/connect-tribly/new-meeting" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-[#9747ff] border-solid box-border content-stretch flex gap-[16px] h-[72px] items-center justify-center px-[24px] py-[16px] relative rounded-[99px] shrink-0 cursor-pointer shadow-[0_6px_0_#9747FF]"
            >
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9747ff] text-[20px] text-nowrap">
                <p className="leading-[26px] whitespace-pre">Book a demo</p>
              </div>
              <div className="relative shrink-0 size-[24px]">
                <Image alt="Arrow" className="block max-w-none size-full" src={imgFrame2} width={24} height={24} />
              </div>
            </motion.div>
          </a>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-white border border-[#9747ff] border-solid box-border content-stretch flex gap-[16px] h-[72px] items-center justify-center px-[24px] py-[16px] relative rounded-[99px] shrink-0 cursor-pointer shadow-[0_6px_0_#9747FF]"
          >
            <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[8px]">
                  <Image alt="Available" className="block max-w-none size-full" src={imgEllipse31} width={8} height={8} />
                </div>
                <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#13923d] text-[10px] text-nowrap">
                  <p className="leading-[normal] whitespace-pre">Available</p>
                </div>
              </div>
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9747ff] text-[20px] text-nowrap">
                <p className="leading-[26px] whitespace-pre">Quick call with expert</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[24px]">
              <Image alt="Arrow" className="block max-w-none size-full" src={imgFrame2} width={24} height={24} />
            </div>
          </motion.div>
        </div>

        {/* Logo Element - Right side with videos/images */}
        <div className="absolute content-stretch flex flex-col gap-[18px] h-[392px] items-start left-[calc(58.333%-8px)] top-[177px] w-[508px]">
          {/* Row 1 */}
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="h-[118.5px] relative shrink-0 w-[222px]"
            >
              <div className="absolute border-[#862ef8] border-[0.75px] border-solid h-[118.5px] left-0 rounded-[749.25px] top-0 w-[222px]" />
              <div className="absolute h-[106.5px] left-1/2 rounded-[999px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[210px] overflow-hidden">
                <video 
                  autoPlay 
                  className="absolute max-w-none object-cover rounded-[999px] size-full" 
                  controlsList="nodownload" 
                  loop 
                  playsInline 
                  muted
                >
                  <source src="/_videos/v1/31cb4578928cbbffe532058e6f9bbd610888f1bf" />
                </video>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative shrink-0 size-[118.5px]"
            >
              <div className="absolute border-[#862ef8] border-[0.75px] border-solid left-0 rounded-[749.25px] size-[118.5px] top-0" />
              <div className="absolute left-1/2 rounded-[749.25px] size-[106.5px] top-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden">
                <Image 
                  alt="Customer" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[749.25px] size-full" 
                  src={imgImage}
                  width={106}
                  height={106}
                />
              </div>
            </motion.div>
          </div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="border-[#862ef8] border-[0.75px] border-solid box-border content-stretch flex gap-[6px] h-[118.5px] items-center p-[6px] relative rounded-[749.25px] shrink-0 w-full"
          >
            <div className="relative rounded-[749.25px] shrink-0 size-[106.5px] overflow-hidden">
              <video 
                autoPlay 
                className="absolute max-w-none object-cover rounded-[749.25px] size-full" 
                controlsList="nodownload" 
                loop 
                playsInline 
                muted
              >
                <source src="/_videos/v1/f29d3e60f967987fcba1eeb4e3423f46e02f217e" />
              </video>
            </div>
            <div className="h-[106.5px] relative rounded-[749.25px] shrink-0 w-[383.254px] overflow-hidden">
              <video 
                autoPlay 
                className="absolute max-w-none object-cover rounded-[749.25px] size-full" 
                controlsList="nodownload" 
                loop 
                playsInline 
                muted
              >
                <source src="/_videos/v1/228c14168d61d16c2cafe23f87188a55d2c25245" />
              </video>
            </div>
          </motion.div>

          {/* Row 3 */}
          <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative shrink-0 size-[118.5px]"
            >
              <div className="absolute border-[#862ef8] border-[0.75px] border-solid left-0 rounded-[749.25px] size-[118.5px] top-0" />
              <div className="absolute left-1/2 rounded-[749.25px] size-[106.5px] top-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden">
                <video 
                  autoPlay 
                  className="absolute max-w-none object-cover rounded-[749.25px] size-full" 
                  controlsList="nodownload" 
                  loop 
                  playsInline 
                  muted
                >
                  <source src="/_videos/v1/4dfb7e2664243a72c824eb4effa1d0d47bedbf05" />
                </video>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="h-[118.5px] relative shrink-0 w-[222px]"
            >
              <div className="absolute border-[#862ef8] border-[0.75px] border-solid h-[118.5px] left-0 rounded-[749.25px] top-0 w-[222px]" />
              <div className="absolute h-[106.5px] left-1/2 rounded-[749.25px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[210px] overflow-hidden">
                <video 
                  autoPlay 
                  className="absolute max-w-none object-cover rounded-[749.25px] size-full" 
                  controlsList="nodownload" 
                  loop 
                  playsInline 
                  muted
                >
                  <source src="/_videos/v1/84a0e5c0faf62f19a3aa552015573940ff58fac1" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Expert Call Modal */}
      <ExpertCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
