"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ExpertCallModal from "../ExpertCallModal";

// Local assets
const imgFrame = "/icons/arrow-right-purple.svg";
const imgEllipse31 = "/icons/ellipse-green.svg";
const imgImage = "/images/hero-image-1.png";

export default function HeroMobile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative bg-[#f7f1ff] w-full overflow-hidden min-h-screen pt-[168px]">
      {/* Hero Content Container */}
      <div className="relative h-[979px] w-[372px] mx-auto px-[20px]">
        {/* Headline with purple highlights */}
        <div className="absolute h-[157px] left-0 top-0 w-[372.333px]">
          {/* Purple highlight boxes */}
          <div className="absolute bg-[#862ef8] h-[43.038px] left-[103.72px] top-[59.38px] w-[198.971px]" />
          <div className="absolute bg-[#862ef8] h-[43.038px] left-[2.67px] top-[111.56px] w-[363.052px]" />
          
          {/* Text overlays */}
          <div className="absolute flex flex-col font-semibold justify-center leading-[0] left-0 not-italic text-[42.721px] text-black top-[53px] translate-y-[-50%] w-[363.129px]">
            <p className="leading-[normal]">Super charge your</p>
          </div>
          <div className="absolute flex flex-col font-semibold justify-center leading-[0] left-[115.88px] not-italic text-[42.721px] text-nowrap text-white top-[78.83px] translate-y-[-50%]">
            <p className="leading-[normal] whitespace-pre">business</p>
          </div>
          <div className="absolute flex flex-col font-semibold justify-center leading-[0] left-[8.01px] not-italic text-[42.721px] text-nowrap text-white top-[131.17px] translate-y-[-50%]">
            <p className="leading-[normal] whitespace-pre">growth with tribly</p>
          </div>
        </div>

        {/* Subtitle */}
        <div className="absolute flex flex-col font-normal justify-center leading-[0] left-0 not-italic text-[20px] text-black top-[218.5px] translate-y-[-50%] w-[353px]">
          <p className="leading-[normal]">Tribly helps you retain more customers, boost revenue, and run automated campaigns that actually work.</p>
        </div>

        {/* CTA Buttons */}
        <div className="absolute content-stretch flex flex-col gap-[16px] items-start justify-center left-0 top-[312px]">
          <a href="https://calendly.com/connect-tribly/new-meeting" target="_blank" rel="noopener noreferrer" className="w-full">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white border border-[#9747ff] border-solid box-border content-stretch flex gap-[16px] h-[72px] items-center justify-center px-[24px] py-[16px] relative rounded-[99px] shrink-0 shadow-[0px_6px_0px_0px_#9747FF] w-full"
            >
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9747ff] text-[20px] text-nowrap">
                <p className="leading-[26px] whitespace-pre">Book a demo</p>
              </div>
              <div className="relative shrink-0 size-[24px]">
                <Image alt="Arrow" className="block max-w-none size-full" src={imgFrame} width={24} height={24} />
              </div>
            </motion.button>
          </a>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-white border border-[#9747ff] border-solid box-border content-stretch flex gap-[16px] h-[72px] items-center justify-center px-[24px] py-[16px] relative rounded-[99px] shrink-0 shadow-[0px_6px_0px_0px_#9747FF] w-full"
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
              <Image alt="Arrow" className="block max-w-none size-full" src={imgFrame} width={24} height={24} />
            </div>
          </motion.button>
        </div>

        {/* Logo element with videos */}
        <div className="absolute content-stretch flex flex-col gap-[12.012px] h-[261.591px] items-start left-[17px] top-[608px] w-[339px]">
          {/* Row 1 */}
          <div className="content-stretch flex gap-[8.008px] items-center relative shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="h-[79.078px] relative shrink-0 w-[148.146px]"
            >
              <div className="absolute border-[#862ef8] border-[0.5px] border-solid h-[79.078px] left-0 rounded-[499.992px] top-0 w-[148.146px]" />
              <div className="absolute h-[71.07px] left-1/2 rounded-[666.656px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[140.138px] overflow-hidden">
                <video 
                  autoPlay 
                  className="absolute max-w-none object-cover rounded-[666.656px] size-full" 
                  controlsList="nodownload" 
                  loop 
                  playsInline 
                  muted
                >
                  <source src="/Videos/People.mp4" />
                </video>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative shrink-0 size-[79.078px]"
            >
              <div className="absolute border-[#862ef8] border-[0.5px] border-solid left-0 rounded-[499.992px] size-[79.078px] top-0" />
              <div className="absolute left-1/2 rounded-[499.992px] size-[71.07px] top-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden">
                <Image 
                  alt="Customer" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[499.992px] size-full" 
                  src={imgImage}
                  width={71}
                  height={71}
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
            className="border-[#862ef8] border-[0.5px] border-solid box-border content-stretch flex gap-[4.004px] h-[79.078px] items-center p-[4.004px] relative rounded-[499.992px] shrink-0 w-full"
          >
            <div className="relative rounded-[499.992px] shrink-0 size-[71.07px] overflow-hidden">
              <video 
                autoPlay 
                className="absolute max-w-none object-cover rounded-[499.992px] size-full" 
                controlsList="nodownload" 
                loop 
                playsInline 
                muted
              >
                <source src="/Videos/red-video.mp4" />
              </video>
            </div>
            <div className="h-[71.07px] relative rounded-[499.992px] shrink-0 w-[255.754px] overflow-hidden">
              <video 
                autoPlay 
                className="absolute max-w-none object-cover rounded-[499.992px] size-full" 
                controlsList="nodownload" 
                loop 
                playsInline 
                muted
              >
                <source src="/Videos/AI-video.mp4" />
              </video>
            </div>
          </motion.div>

          {/* Row 3 */}
          <div className="content-stretch flex gap-[8.008px] items-center justify-end relative shrink-0 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative shrink-0 size-[79.078px]"
            >
              <div className="absolute border-[#862ef8] border-[0.5px] border-solid left-0 rounded-[499.992px] size-[79.078px] top-0" />
              <div className="absolute left-1/2 rounded-[499.992px] size-[71.07px] top-1/2 translate-x-[-50%] translate-y-[-50%] overflow-hidden">
                <video 
                  autoPlay 
                  className="absolute max-w-none object-cover rounded-[499.992px] size-full" 
                  controlsList="nodownload" 
                  loop 
                  playsInline 
                  muted
                >
                  <source src="/Videos/anima.mp4" />
                </video>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="h-[79.078px] relative shrink-0 w-[148.146px]"
            >
              <div className="absolute border-[#862ef8] border-[0.5px] border-solid h-[79.078px] left-0 rounded-[499.992px] top-0 w-[148.146px]" />
              <div className="absolute h-[71.07px] left-1/2 rounded-[499.992px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[140.138px] overflow-hidden">
                <video 
                  autoPlay 
                  className="absolute max-w-none object-cover rounded-[499.992px] size-full" 
                  controlsList="nodownload" 
                  loop 
                  playsInline 
                  muted
                >
                  <source src="/Videos/game.mp4" />
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
