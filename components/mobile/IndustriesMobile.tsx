"use client";

import Image from "next/image";

// Local assets
const imgBg1 = "/images/industry-healthcare.png";
const imgBg2 = "/images/industry-auto.png";
const imgBg3 = "/images/industry-retail.png";
const imgBg4 = "/images/industry-food.png";

export default function IndustriesMobile() {
  const industries = [
    { name: "Healthcare &\nWellness", bg: imgBg1, border: "#023e8a" },
    { name: "Automobile &\nMobility", bg: imgBg2, border: "#9381ff" },
    { name: "Retail &\nLifestyle", bg: imgBg3, border: "#8cb369" },
    { name: "Food &\nHospitality", bg: imgBg4, border: "#90323d" }
  ];

  return (
    <section className="relative w-full bg-[#f0f5ff] py-[87px]">
      <div className="max-w-[412px] mx-auto px-[16px]">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center text-[#061026] mb-[62px]">
          <div className="flex flex-col font-semibold justify-center text-[32px]">
            <p className="leading-[normal] text-nowrap whitespace-pre">Industries We Serve</p>
          </div>
          <div className="flex flex-col font-normal justify-center text-[20px]">
            <p className="leading-[normal] text-nowrap whitespace-pre">Built for Every Business That Wants to Grow</p>
          </div>
        </div>

        {/* Industry Cards - Horizontal Scroll */}
        <div 
          className="relative w-full overflow-x-scroll scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: { display: 'none' }
          }}
        >
          <div className="flex gap-[12px] w-max">
            {industries.map((industry, index) => (
              <div key={index} className="relative h-[333.75px] w-[228px] flex-shrink-0">
                <div 
                  className="absolute bg-white h-full left-1/2 rounded-[30px] top-0 translate-x-[-50%] w-full" 
                  style={{ borderWidth: '0.375px', borderStyle: 'solid', borderColor: industry.border }}
                />
                <div className="absolute h-[225.75px] left-1/2 rounded-[24px] top-[calc(50%+45px)] translate-x-[-50%] translate-y-[-50%] w-[210px] overflow-hidden">
                  <Image 
                    alt={industry.name} 
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" 
                    src={industry.bg}
                    width={210}
                    height={226}
                  />
                </div>
                <div className="absolute flex flex-col font-medium justify-center leading-[19.5px] left-[114.75px] text-[#090909] text-[18px] text-center text-nowrap top-[49.26px] translate-x-[-50%] translate-y-[-50%] whitespace-pre-line">
                  <p className="mb-0">{industry.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

