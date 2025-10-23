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
const imgAvatarImage69 = "/images/comm-avatar-15.png";
const imgAvatarImage70 = "/images/comm-avatar-16.png";
const imgAvatarImage71 = "/images/comm-avatar-17.png";
const imgAvatarImage72 = "/images/comm-avatar-18.png";
const imgAvatarImage73 = "/images/comm-avatar-10.png";
const imgAvatarImage74 = "/images/comm-avatar-11.png";
const imgAvatarImage75 = "/images/comm-avatar-12.png";
const imgAvatarImage76 = "/images/comm-avatar-13.png";
const imgAvatarImage77 = "/images/comm-avatar-1.png";
const imgAvatarImage78 = "/images/comm-avatar-9.png";
const imgAvatarImage79 = "/images/comm-avatar-16.png";
const imgAvatarImage80 = "/images/comm-avatar-17.png";
const imgAvatarImage81 = "/images/comm-avatar-18.png";
const imgVector1 = "/icons/comm-line-1.svg";
const imgEllipse34 = "/icons/comm-ellipse-ring.svg";
const imgVector13 = "/icons/comm-line-6.svg";
const imgEllipse36 = "/icons/comm-avatar-ring.svg";
const imgVector11 = "/icons/comm-line-2.svg";
const imgVector8 = "/icons/comm-line-3.svg";
const imgVector9 = "/icons/comm-line-4.svg";
const imgVector10 = "/icons/comm-line-5.svg";
const imgVector14 = "/icons/comm-line-7.svg";

export default function CommunicationAutomation() {
  const [isAutomationOn, setIsAutomationOn] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      
      // Calculate progress: 0 when entering viewport, 1 when centered, continues after
      const progress = Math.max(0, Math.min(1, 1 - (cardCenter - viewportCenter) / (viewportHeight / 2)));
      
      // Turn on automation when card is at least 50% visible/centered
      if (progress >= 0.5 && !isAutomationOn) {
        setIsAutomationOn(true);
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
  }, [isAutomationOn]);

  return (
    <section ref={sectionRef} className="relative w-full py-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="bg-gradient-to-b from-[#f4f1ff] to-[#ffffff] relative h-[833px] w-full">
          <div 
            className={`absolute h-[635px] left-[100px] rounded-[32px] top-[99px] w-[1240px] transition-all duration-500 p-[1px] ${
              isAutomationOn 
                ? 'bg-gradient-to-b from-[#9747ff] to-[#ffffff]' 
                : 'bg-gradient-to-b from-gray-300 to-[#ffffff]'
            }`}
          >
            <div className="bg-white h-full w-full rounded-[31px]">
            {/* Title - Always visible */}
            <div className="absolute flex flex-col gap-[8px] items-start left-[40px] top-[32px] z-20">
              <div className="flex flex-col font-semibold justify-center text-[32px] text-black">
                <p className="leading-[normal] whitespace-pre">Communication Automation</p>
              </div>
              <div className="flex flex-col font-normal justify-center text-[#999999] text-[20px] w-[648px]">
                <p className="leading-[1.4]">Retain customers 5x cheaper than acquiring new ones.</p>
              </div>
            </div>

            <div 
              className={`h-[635px] overflow-clip relative rounded-[inherit] w-[1240px] transition-all duration-500 ${
                isAutomationOn ? '' : 'grayscale opacity-50'
              }`}
            >

              {/* Logo section */}
              <div className="absolute contents left-px top-[184px]">
                <div className="absolute h-0 left-px top-[224px] w-[520px]">
                  <div className="absolute bottom-[-3px] left-0 right-0 top-[-3px]">
                    <Image alt="" className="block max-w-none size-full" src={imgVector1} width={520} height={6} />
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsAutomationOn(!isAutomationOn)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bg-[#f7f5ff] border-[#c5b4fe] border-[0.843px] border-solid box-border flex gap-[4px] items-center justify-center left-[181px] p-[12px] rounded-[80px] top-[203px] cursor-pointer z-20 transition-all duration-300 hover:shadow-lg"
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
                <div className="absolute left-[calc(50%-58px)] size-[84px] top-[calc(50%-91.5px)] translate-x-[-50%] translate-y-[-50%]">
                  <div className="absolute left-0 size-[84px] top-0">
                    <Image alt="" className="block max-w-none size-full" src={imgEllipse34} width={84} height={84} />
                  </div>
                  <div className="absolute left-1/2 size-[72px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                    <Image alt="" className="block max-w-none size-full" height={72} src={imgEllipse35} width={72} />
                  </div>
                </div>
              </div>

              {/* Branch 1: Birthday wishes */}
              <div className="absolute contents left-[404px] top-[324.5px]">
                <div className="absolute h-[97px] left-[483.5px] top-[324.5px] w-[75.5px]">
                  <div className="absolute bottom-[-3.09%] left-[-3.97%] right-0 top-0">
                    <Image alt="" className="block max-w-none size-full" src={imgVector13} width={79} height={100} />
                  </div>
                </div>
                <div className="absolute bg-[#f7f5ff] border-[#c5b4fe] border-[0.843px] border-solid box-border flex gap-[4px] items-center justify-center left-[404px] px-[12px] py-[8px] rounded-[99px] top-[355px]">
                  <div className="flex flex-col font-normal justify-center text-[#9747ff] text-[13.487px]">
                    <p className="leading-[1.4] whitespace-pre">Birthday wishes 🎂</p>
                  </div>
                </div>
                <div className="absolute box-border flex items-center left-[556px] pl-0 pr-[24px] py-0 top-[380px]">
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
                </div>
              </div>

              {/* Branch 2: Follow-up sent */}
              <div className="absolute contents left-[104px] top-[266.5px]">
                <div className="absolute h-[93px] left-[186.5px] top-[266.5px] w-[377.5px]">
                  <div className="absolute bottom-0 left-[-0.79%] right-[-0.79%] top-0">
                    <Image alt="" className="block max-w-none size-full" src={imgVector11} width={381} height={93} />
                  </div>
                </div>
                <div className="absolute box-border flex items-center left-[104px] pl-0 pr-[24px] py-0 top-[357px]">
                  <div className="mr-[-24px] relative shrink-0 size-[72px]">
                    <div className="absolute left-0 size-[72px] top-0">
                      <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                    </div>
                    <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                      <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage66} width={64} height={64} />
                    </div>
                  </div>
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
                <div className="absolute bg-[#f7f5ff] border-[#c5b4fe] border-[0.843px] border-solid box-border flex gap-[4px] items-center justify-center left-[245px] px-[12px] py-[8px] rounded-[99px] top-[309px]">
                  <div className="flex flex-col font-normal h-[16px] justify-center text-[#9747ff] text-[12px] w-[89px]">
                    <p className="leading-[1.4]">Follow-up 💡</p>
                  </div>
                </div>
              </div>

              {/* Branch 3: Feedback sent */}
              <div className="absolute contents left-[603.5px] top-[226px]">
                <div className="absolute h-[86.5px] left-[603.5px] top-[226px] w-[412.5px]">
                  <div className="absolute bottom-[-3.47%] left-0 right-0 top-[-3.47%]">
                    <Image alt="" className="block max-w-none size-full" src={imgVector8} width={413} height={93} />
                  </div>
                </div>
                <div className="absolute box-border flex items-center left-[1013px] pl-0 pr-[24px] py-0 top-[275px]">
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
                </div>
                <div className="absolute bg-[#f7f5ff] border-[#c5b4fe] border-[0.843px] border-solid box-border flex gap-[4px] items-center justify-center left-[853px] px-[12px] py-[8px] rounded-[99px] top-[255px]">
                  <div className="flex flex-col font-normal justify-center text-[#9747ff] text-[12px]">
                    <p className="leading-[16px] whitespace-pre">{`Feedback ✅`}</p>
                  </div>
                </div>
              </div>

              {/* Branch 4: Personalised offer sent */}
              <div className="absolute contents left-[733px] top-[228px]">
                <div className="absolute h-[179.5px] left-[826.5px] top-[228px] w-[60.5px]">
                  <div className="absolute bottom-[-1.67%] left-[-4.74%] right-0 top-[-0.01%]">
                    <Image alt="" className="block max-w-none size-full" src={imgVector9} width={64} height={183} />
                  </div>
                </div>
                <div className="absolute box-border flex items-center left-[885px] pl-0 pr-[24px] py-0 top-[370px]">
                  <div className="mr-[-24px] relative shrink-0 size-[72px]">
                    <div className="absolute left-0 size-[72px] top-0">
                      <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                    </div>
                    <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                      <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage72} width={64} height={64} />
                    </div>
                  </div>
                  <div className="mr-[-24px] relative shrink-0 size-[72px]">
                    <div className="absolute left-0 size-[72px] top-0">
                      <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                    </div>
                    <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                      <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage73} width={64} height={64} />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[#f7f5ff] border-[#c5b4fe] border-[0.843px] border-solid box-border flex gap-[4px] items-center justify-center left-[733px] px-[12px] py-[8px] rounded-[99px] top-[331px]">
                  <div className="flex flex-col font-normal justify-center text-[#9747ff] text-[12px]">
                    <p className="leading-[16px] whitespace-pre">Personalised offer 💰</p>
                  </div>
                </div>
              </div>

              {/* Branch 5: Festive campaign */}
              <div className="absolute contents left-[632px] top-[227.5px]">
                <div className="absolute h-[298.5px] left-[713.5px] top-[227.5px] w-[79.5px]">
                  <div className="absolute bottom-[-1.01%] left-[-3.77%] right-0 top-0">
                    <Image alt="" className="block max-w-none size-full" src={imgVector10} width={83} height={302} />
                  </div>
                </div>
                <div className="absolute box-border flex items-center left-[789px] pl-0 pr-[24px] py-0 top-[484px]">
                  <div className="mr-[-24px] relative shrink-0 size-[72px]">
                    <div className="absolute left-0 size-[72px] top-0">
                      <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                    </div>
                    <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                      <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage74} width={64} height={64} />
                    </div>
                  </div>
                  <div className="mr-[-24px] relative shrink-0 size-[72px]">
                    <div className="absolute left-0 size-[72px] top-0">
                      <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                    </div>
                    <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                      <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage75} width={64} height={64} />
                    </div>
                  </div>
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
                      <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage76} width={64} height={64} />
                    </div>
                  </div>
                  <div className="mr-[-24px] relative shrink-0 size-[72px]">
                    <div className="absolute left-0 size-[72px] top-0">
                      <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                    </div>
                    <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                      <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage77} width={64} height={64} />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[#f7f5ff] border-[#c5b4fe] border-[0.843px] border-solid box-border flex gap-[4px] items-center justify-center left-[632px] px-[12px] py-[8px] rounded-[99px] top-[472px]">
                  <div className="flex flex-col font-normal justify-center text-[#9747ff] text-[12px]">
                    <p className="leading-[16px] whitespace-pre">Festive campaign 🪔</p>
                  </div>
                </div>
              </div>

              {/* Branch 6: Sent reminders */}
              <div className="absolute contents left-[283px] top-[325.5px]">
                <div className="absolute h-[179px] left-[392.5px] top-[325.5px] w-[51.5px]">
                  <div className="absolute bottom-0 left-[-5.83%] right-0 top-[-1.68%]">
                    <Image alt="" className="block max-w-none size-full" src={imgVector14} width={55} height={182} />
                  </div>
                </div>
                <div className="absolute box-border flex items-center left-[283px] pl-0 pr-[24px] py-0 top-[495px]">
                  <div className="mr-[-24px] relative shrink-0 size-[72px]">
                    <div className="absolute left-0 size-[72px] top-0">
                      <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                    </div>
                    <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                      <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage78} width={64} height={64} />
                    </div>
                  </div>
                  <div className="mr-[-24px] relative shrink-0 size-[72px]">
                    <div className="absolute left-0 size-[72px] top-0">
                      <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                    </div>
                    <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                      <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage79} width={64} height={64} />
                    </div>
                  </div>
                  <div className="mr-[-24px] relative shrink-0 size-[72px]">
                    <div className="absolute left-0 size-[72px] top-0">
                      <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                    </div>
                    <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                      <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage80} width={64} height={64} />
                    </div>
                  </div>
                  <div className="mr-[-24px] relative shrink-0 size-[72px]">
                    <div className="absolute left-0 size-[72px] top-0">
                      <Image alt="" className="block max-w-none size-full" src={imgEllipse36} width={72} height={72} />
                    </div>
                    <div className="absolute left-[4px] rounded-[32px] size-[64px] top-[4px]">
                      <Image alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgAvatarImage81} width={64} height={64} />
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[#f7f5ff] border-[#c5b4fe] border-[0.843px] border-solid box-border flex gap-[4px] items-center justify-center left-[327px] px-[12px] py-[8px] rounded-[99px] top-[429px]">
                  <div className="flex flex-col font-normal justify-center text-[#9747ff] text-[13.487px]">
                    <p className="leading-[1.4] whitespace-pre">Reminders 📮</p>
                  </div>
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

