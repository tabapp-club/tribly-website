"use client";

import Image from "next/image";

// Figma assets  
const imgBg = "http://localhost:3845/assets/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";

export default function AutomationAnalyticsMobile() {
  return (
    <section className="relative w-full px-[36px] py-[60px]">
      <div className="flex flex-col gap-[24px] items-start justify-center w-full max-w-[340px] mx-auto">
        {/* Automation Card */}
        <div className="relative h-[423.562px] w-full">
          <div className="absolute bg-gradient-to-b border-[#b9bbff] border-[0.563px] border-solid from-[#ffffff] from-[14.904%] h-full left-1/2 rounded-[22.5px] to-[#b9bbff] top-0 translate-x-[-50%] w-full" />
          
          <div className="absolute h-[320.622px] left-[calc(50%+0.012px)] rounded-[18px] top-[calc(50%+44.758px)] translate-x-[-50%] translate-y-[-50%] w-[325.711px] overflow-hidden">
            <Image 
              alt="Automation" 
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18px] size-full" 
              src={imgBg}
              width={326}
              height={321}
            />
          </div>

          <div className="absolute flex flex-col gap-[4.5px] items-start left-[22.5px] text-black top-[18px] w-[283.5px]">
            <div className="flex flex-col font-semibold justify-center text-[22.5px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">Automation</p>
            </div>
            <div className="flex flex-col font-normal justify-center min-w-full text-[11.25px] w-[min-content]">
              <p className="leading-[1.4]">Acquiring new customers is 5x more expensive than retaining existing ones.</p>
            </div>
          </div>
        </div>

        {/* Analytics Card */}
        <div className="relative h-[423.562px] w-full">
          <div className="absolute bg-gradient-to-b border-[#feb9ff] border-[0.563px] border-solid from-[#ffffff] from-[14.904%] h-full left-1/2 rounded-[22.5px] to-[#ffb9ba] top-0 translate-x-[-50%] w-full" />
          
          <div className="absolute h-[320.622px] left-[calc(50%+0.012px)] rounded-[18px] top-[calc(50%+44.758px)] translate-x-[-50%] translate-y-[-50%] w-[325.711px] overflow-hidden">
            <Image 
              alt="Analytics" 
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[18px] size-full" 
              src={imgBg}
              width={326}
              height={321}
            />
          </div>

          <div className="absolute flex flex-col gap-[4.5px] items-start left-[22.5px] text-black top-[18px] w-[283.5px]">
            <div className="flex flex-col font-semibold justify-center text-[22.5px] text-nowrap">
              <p className="leading-[normal] whitespace-pre">Analytics</p>
            </div>
            <div className="flex flex-col font-normal justify-center min-w-full text-[11.25px] w-[min-content]">
              <p className="leading-[1.4]">Acquiring new customers is 5x more expensive than retaining existing ones.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

