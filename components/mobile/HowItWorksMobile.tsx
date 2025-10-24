"use client";

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
  }
];

export default function HowItWorksMobile() {
  return (
    <section className="relative w-full py-[87px] bg-white">
      <div className="max-w-[411px] mx-auto px-[28.875px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center text-black mb-[137px]">
          <div className="flex flex-col font-semibold justify-center text-[32px] w-[343px]">
            <p className="leading-[normal]">How it works</p>
          </div>
          <div className="flex flex-col font-light justify-center text-[20px] w-[285px]">
            <p className="leading-[normal]">See how real businesses use Tribly to grow smarter.</p>
          </div>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="sticky mb-4 last:mb-0"
              style={{ 
                top: `calc(50vh - 56px + ${index * 12}px)`,
                zIndex: index + 1
              }}
            >
              <div className="relative h-[112.5px] w-[353.25px] mx-auto">
                {/* Border */}
                <div 
                  className="absolute border-[0.281px] border-[#9747ff] border-solid h-full left-0 rounded-[280.969px] top-0 w-full bg-white" 
                  style={{ boxShadow: '0 8px 30px 0 #F7F5FF' }}
                />
                
                {/* Image background */}
                <div className="absolute border-[0.281px] border-[#9747ff] border-solid h-[108px] left-[2.25px] rounded-[280.969px] top-[2.25px] w-[142.816px] overflow-hidden">
                  <Image 
                    alt={step.title} 
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[280.969px] size-full" 
                    src={step.bg}
                    width={143}
                    height={108}
                  />
                </div>

                {/* Content */}
                <div className="absolute flex flex-col gap-[4.5px] items-start left-[151.59px] top-[29.98px]">
                  <div className="flex flex-col font-semibold justify-center text-[18px] text-black w-full">
                    <p className="leading-[normal]">{step.title}</p>
                  </div>
                  <div className="flex gap-[4.219px] items-start text-black w-full">
                    <div className="flex flex-col font-semibold justify-center text-[18px] text-nowrap">
                      <p className="leading-[normal] whitespace-pre">{step.percentage}</p>
                    </div>
                    <div className="flex flex-col font-normal justify-center text-[6.75px] w-[145.406px]">
                      <p className="leading-[normal]">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Spacer to allow last card to scroll properly */}
          <div className="h-[40vh]" />
        </div>
      </div>
    </section>
  );
}

