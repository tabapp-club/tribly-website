"use client";

import Image from "next/image";

// Figma assets
const imgFrame1 = "http://localhost:3845/assets/a2e8a793ef0e4920a7ec9a574364a783832d9680.svg";
const img3 = "http://localhost:3845/assets/c77c79db9b131dbed18e8ec27d1d05d893dab8db.svg";
const imgEllipse32 = "http://localhost:3845/assets/268d628b6134878341af1b4e3f3f44482536a65a.svg";

export default function ContactMobile() {
  return (
    <section className="relative w-full py-[60px]">
      <div className="max-w-[381px] mx-auto px-[16px]">
        {/* Heading */}
        <div className="flex flex-col font-normal justify-center mb-[80px] text-[36px] text-black w-full">
          <p className="leading-[normal]">Our team of experts are ready to discuss your needs and tailor a solution that works for you.</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-[13.5px] items-start w-full">
          {/* Row 1 */}
          <div className="flex gap-[12px] items-center w-full">
            <button className="bg-white border-[#9747ff] border-[0.75px] border-solid flex gap-[12px] h-[71.905px] items-center justify-center px-[18px] py-[12px] rounded-[74.25px] flex-1 shadow-[0px_6px_0px_0px_#9747FF]">
              <div className="flex flex-col font-medium justify-center text-[#9747ff] text-[15px] text-nowrap">
                <p className="leading-[19.5px] whitespace-pre">Get started</p>
              </div>
              <div className="relative shrink-0 size-[18px]">
                <Image alt="Arrow" className="block max-w-none size-full" src={imgFrame1} width={18} height={18} />
              </div>
            </button>

            <div className="relative shrink-0 size-[88.5px]">
              <div className="absolute bg-white border-[#9747ff] border-[0.75px] border-solid left-1/2 rounded-[749.25px] size-[79.5px] top-1/2 translate-x-[-50%] translate-y-[-50%] shadow-[0px_6px_0px_0px_#9747FF] flex items-center justify-center">
                <div className="rotate-180 scale-y-[-100%]">
                  <Image alt="Arrow" className="block max-w-none" src={img3} width={39} height={21} />
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 - Logo element */}
          <div className="border-[#9747ff] border-[0.563px] border-solid flex gap-[4.5px] h-[88.5px] items-center p-[4.5px] rounded-[749.25px] w-full">
            <div className="flex-1 h-[79.5px] relative rounded-[749.25px] overflow-hidden">
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
          </div>

          {/* Row 3 */}
          <div className="flex gap-[9.75px] items-center justify-end w-full">
            <div className="relative shrink-0 size-[88.5px]">
              <div className="absolute bg-white border-[#9747ff] border-[0.75px] border-solid left-1/2 rounded-[749.25px] size-[79.5px] top-1/2 translate-x-[-50%] translate-y-[-50%] shadow-[0px_6px_0px_0px_#9747FF] flex items-center justify-center">
                <div className="rotate-180 scale-y-[-100%]">
                  <Image alt="Arrow" className="block max-w-none" src={img3} width={39} height={21} />
                </div>
              </div>
            </div>

            <button className="bg-white border-[#9747ff] border-[0.75px] border-solid flex gap-[12px] h-[72.032px] items-center justify-center px-[18px] py-[12px] rounded-[74.25px] flex-1 shadow-[0px_6px_0px_0px_#9747FF]">
              <div className="flex flex-col items-start justify-center">
                <div className="flex gap-[3px] items-center">
                  <div className="relative shrink-0 size-[6px]">
                    <Image alt="Available" className="block max-w-none size-full" src={imgEllipse32} width={6} height={6} />
                  </div>
                  <div className="flex flex-col font-medium justify-center text-[#13923d] text-[7.5px] text-nowrap">
                    <p className="leading-[normal] whitespace-pre">Available</p>
                  </div>
                </div>
                <div className="flex flex-col font-medium justify-center text-[#9747ff] text-[15px] text-nowrap">
                  <p className="leading-[19.5px] whitespace-pre">Quick call with expert</p>
                </div>
              </div>
              <div className="relative shrink-0 size-[18px]">
                <Image alt="Arrow" className="block max-w-none size-full" src={imgFrame1} width={18} height={18} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

