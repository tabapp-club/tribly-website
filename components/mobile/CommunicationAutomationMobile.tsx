"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Local assets
const imgEllipse35 = "/images/comm-logo-bg.png";
const imgAvatarImage64 = "/images/comm-avatar-3.png";
const imgAvatarImage65 = "/images/comm-avatar-4.png";
const imgAvatarImage66 = "/images/comm-avatar-5.png";
const imgAvatarImage67 = "/images/comm-avatar-1.png";
const imgAvatarImage68 = "/images/comm-avatar-2.png";
const imgAvatarImage69 = "/images/comm-avatar-9.png";
const imgAvatarImage70 = "/images/comm-avatar-16.png";
const imgAvatarImage71 = "/images/comm-avatar-17.png";
const imgAvatarImage72 = "/images/comm-avatar-18.png";
const imgVector1 = "/icons/comm-line-mobile-1.svg";
const imgEllipse34 = "/icons/comm-ellipse-ring.svg";
const imgEllipse36 = "/icons/comm-avatar-ring.svg";
const imgVector11 = "/icons/comm-line-mobile-2.svg";
const imgVector14 = "/icons/comm-line-mobile-3.svg";
const imgVector15 = "/icons/comm-line-mobile-4.svg";

export default function CommunicationAutomationMobile() {
  const [isAutomationOn, setIsAutomationOn] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [hasAutoActivated, setHasAutoActivated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || hasAutoActivated) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      
      // Calculate progress: 0 when entering viewport, 1 when centered, continues after
      const progress = Math.max(0, Math.min(1, 1 - (cardCenter - viewportCenter) / (viewportHeight / 2)));
      
      // Turn on automation when card is at least 50% visible/centered (only once automatically)
      if (progress >= 0.5 && !hasAutoActivated) {
        setIsAutomationOn(true);
        setHasAutoActivated(true);
      }
    };

    // Use requestAnimationFrame for smooth scroll detection
    let rafId: number;
    const scrollListener = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', scrollListener);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [hasAutoActivated]);

  return (
    <section ref={sectionRef} className="relative w-full py-8 px-4 bg-gradient-to-b from-[#f4f1ff] to-[#ffffff]">
      <div className="relative h-[733px] w-full max-w-[412px] mx-auto overflow-hidden">
        <div 
          className={`absolute h-[635px] left-[4px] right-[4px] rounded-[32px] top-[49px] transition-all duration-500 p-[1px] ${
            isAutomationOn 
              ? 'bg-gradient-to-b from-[#9747ff] to-[#ffffff]' 
              : 'bg-gradient-to-b from-gray-300 to-[#ffffff]'
          }`}
        >
          <div className="bg-white h-full w-full rounded-[31px]">
          {/* Title - Always visible */}
          <div className="absolute flex flex-col gap-[8px] items-start left-[15px] right-[15px] top-[33px] z-20">
            <div className="flex flex-col font-semibold justify-center text-[24px] text-black">
              <p className="leading-[normal]">Communication Automation</p>
            </div>
            <div className="flex flex-col font-normal justify-center text-[#999999] text-[16px] max-w-[313px]">
              <p className="leading-[1.4]">Retain customers 5x cheaper than acquiring new ones.</p>
            </div>
          </div>

          <div 
            className={`h-[635px] overflow-clip relative rounded-[inherit] w-full transition-all duration-500 ${
              isAutomationOn ? '' : 'grayscale opacity-50'
            }`}
          >

            {/* Logo section */}
            <div className="absolute contents left-[-64px] top-[184px]">
              <div className="absolute h-0 left-[-64px] top-[224px] w-[354px]">
                <div className="absolute bottom-[-3px] left-0 right-0 top-[-3px]">
                  <Image alt="" className="block max-w-none size-full" src={imgVector1} width={354} height={6} />
                  {/* Passing light effect */}
                  {isAutomationOn && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
                      animate={{
                        x: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{ mixBlendMode: 'overlay' }}
                    />
                  )}
                </div>
              </div>
              <div className="absolute left-[calc(50%+117.5px)] size-[84px] top-[calc(50%-91.5px)] translate-x-[-50%] translate-y-[-50%]">
                <div className="absolute left-0 size-[84px] top-0">
                  <Image alt="" className="block max-w-none size-full" src={imgEllipse34} width={84} height={84} />
                </div>
                <div className="absolute left-1/2 size-[72px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <Image alt="" className="block max-w-none size-full" height={72} src={imgEllipse35} width={72} />
                </div>
              </div>
              <motion.button
                onClick={() => setIsAutomationOn(!isAutomationOn)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bg-[#f7f5ff] border-[#c5b4fe] border-[0.843px] border-solid box-border flex gap-[4px] items-center justify-center left-[40px] p-[12px] rounded-[80px] top-[203px] cursor-pointer z-20 transition-all duration-300 active:shadow-lg"
              >
                <div className="flex items-center gap-[6px]">
                  <span className="font-normal text-[#9747ff] text-[13.487px] leading-[1.4]">
                    tribly automation
                  </span>
                  <span className={`font-semibold text-[11px] leading-[1.4] transition-colors duration-300 ${
                    isAutomationOn ? 'text-[#5abb80]' : 'text-gray-400'
                  }`}>
                    {isAutomationOn ? 'ON' : 'OFF'}
                  </span>
                </div>
                <motion.div 
                  className={`border-[1.686px] border-solid box-border flex h-[20px] items-center px-[3.372px] py-[1.686px] rounded-[99px] w-[34px] transition-all duration-300 ${
                    isAutomationOn 
                      ? 'bg-[#5abb80] border-[#5abb80] justify-end' 
                      : 'bg-gray-300 border-gray-300 justify-start'
                  }`}
                  animate={{
                    backgroundColor: isAutomationOn ? '#5abb80' : '#d1d5db',
                    borderColor: isAutomationOn ? '#5abb80' : '#d1d5db',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="bg-[#ffffff] rounded-[99px] size-[13.487px]"
                    layout
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                </motion.div>
              </motion.button>
            </div>

            {/* Branch 1: Follow-up sent */}
            <div className="absolute contents left-[3px] top-[266.5px]">
              <div className="absolute box-border flex items-center left-[3px] pl-0 pr-[24px] py-0 top-[357px]">
                <div className="mr-[-24px] relative shrink-0 size-[72px]">
                  <div className="absolute left-0 size-[72px] top-0">
                    <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                  </div>
                  <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage64} width={64} height={64} />
                  </div>
                </div>
                <div className="mr-[-24px] relative shrink-0 size-[72px]">
                  <div className="absolute left-0 size-[72px] top-0">
                    <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                  </div>
                  <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage65} width={64} height={64} />
                  </div>
                </div>
                <div className="mr-[-24px] relative shrink-0 size-[72px]">
                  <div className="absolute left-0 size-[72px] top-0">
                    <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                  </div>
                  <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage66} width={64} height={64} />
                  </div>
                </div>
              </div>
              <div className="absolute h-[93px] left-[37.5px] top-[266.5px] w-[282.5px]">
                <div className="absolute bottom-0 left-[-1.06%] right-[-1.06%] top-0">
                  <Image alt="" className="block max-w-none size-full" src={imgVector11} width={286} height={93} />
                  {/* Passing light effect */}
                  {isAutomationOn && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
                      animate={{
                        x: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.5
                      }}
                      style={{ mixBlendMode: 'overlay' }}
                    />
                  )}
                </div>
              </div>
              <div className="absolute bg-[#f7f5ff] border-[#c5b4fe] border-[0.843px] border-solid box-border flex gap-[4px] items-center justify-center left-[67px] px-[12px] py-[8px] rounded-[99px] top-[309px]">
                <div className="flex flex-col font-normal h-[16px] justify-center text-[#9747ff] text-[12px] w-[89px]">
                  <p className="leading-[1.4]">Follow-up 💡</p>
                </div>
              </div>
            </div>

            {/* Branch 2: Birthday wishes */}
            <div className="absolute contents left-[205px] top-[325px]">
              <div className="absolute h-[88px] left-[279px] top-[325px] w-[15px]">
                <div className="absolute bottom-0 left-[-20%] right-0 top-[-3.41%]">
                  <Image alt="" className="block max-w-none size-full" src={imgVector14} width={18} height={91} />
                  {/* Passing light effect */}
                  {isAutomationOn && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-60"
                      animate={{
                        y: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.3
                      }}
                      style={{ mixBlendMode: 'overlay' }}
                    />
                  )}
                </div>
              </div>
              <div className="absolute box-border flex items-center left-[245px] pl-0 pr-[24px] py-0 top-[409px]">
                <div className="mr-[-24px] relative shrink-0 size-[72px]">
                  <div className="absolute left-0 size-[72px] top-0">
                    <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                  </div>
                  <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage67} width={64} height={64} />
                  </div>
                </div>
                <div className="mr-[-24px] relative shrink-0 size-[72px]">
                  <div className="absolute left-0 size-[72px] top-0">
                    <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                  </div>
                  <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage68} width={64} height={64} />
                  </div>
                </div>
              </div>
              <div className="absolute bg-[#f7f5ff] border-[#c5b4fe] border-[0.843px] border-solid box-border flex gap-[4px] items-center justify-center left-[205px] px-[12px] py-[8px] rounded-[99px] top-[361px]">
                <div className="flex flex-col font-normal justify-center text-[#9747ff] text-[13.487px]">
                  <p className="leading-[1.4] whitespace-pre">Birthday wishes 🎂</p>
                </div>
              </div>
            </div>

            {/* Branch 3: Sent reminders */}
            <div className="absolute contents left-[89px] top-[325px]">
              <div className="absolute box-border flex items-center left-[89px] pl-0 pr-[24px] py-0 top-[542.5px]">
                <div className="mr-[-24px] relative shrink-0 size-[72px]">
                  <div className="absolute left-0 size-[72px] top-0">
                    <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                  </div>
                  <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage69} width={64} height={64} />
                  </div>
                </div>
                <div className="mr-[-24px] relative shrink-0 size-[72px]">
                  <div className="absolute left-0 size-[72px] top-0">
                    <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                  </div>
                  <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage70} width={64} height={64} />
                  </div>
                </div>
                <div className="mr-[-24px] relative shrink-0 size-[72px]">
                  <div className="absolute left-0 size-[72px] top-0">
                    <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                  </div>
                  <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage71} width={64} height={64} />
                  </div>
                </div>
                <div className="mr-[-24px] relative shrink-0 size-[72px]">
                  <div className="absolute left-0 size-[72px] top-0">
                    <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                  </div>
                  <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage72} width={64} height={64} />
                  </div>
                </div>
              </div>
              <div className="absolute h-[227px] left-[198.5px] top-[325px] w-[51.5px]">
                <div className="absolute bottom-0 left-[-5.83%] right-0 top-[-1.32%]">
                  <Image alt="" className="block max-w-none size-full" src={imgVector15} width={55} height={230} />
                  {/* Passing light effect */}
                  {isAutomationOn && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-60"
                      animate={{
                        y: ['-100%', '200%']
                      }}
                      transition={{
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 0.4
                      }}
                      style={{ mixBlendMode: 'overlay' }}
                    />
                  )}
                </div>
              </div>
              <div className="absolute bg-[#f7f5ff] border-[#c5b4fe] border-[0.843px] border-solid box-border flex gap-[4px] items-center justify-center left-[133px] px-[12px] py-[8px] rounded-[99px] top-[500px]">
                <div className="flex flex-col font-normal justify-center text-[#9747ff] text-[13.487px]">
                  <p className="leading-[1.4] whitespace-pre">Reminders 📮</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

