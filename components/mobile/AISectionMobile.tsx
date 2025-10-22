"use client";

export default function AISectionMobile() {
  return (
    <section className="relative w-full px-[20px] py-[60px]">
      <div className="max-w-[372px] mx-auto">
        <div className="flex items-start gap-[17px] mb-[40px]">
          {/* AI Badge */}
          <div className="relative flex-shrink-0 h-[50px] w-[53px]">
            <div className="absolute bg-[#862ef8] h-[50px] left-0 rounded-[99px] top-0 w-[53px]" />
            <div className="absolute flex flex-col font-semibold justify-center items-center left-1/2 text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%]">
              <p className="text-[32px] leading-[1.4]">AI</p>
            </div>
          </div>

          {/* Heading */}
          <div className="flex flex-col font-semibold justify-center text-[24px] text-black flex-1">
            <p className="leading-[normal]">that brings your customers back</p>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col justify-center text-[16px] text-black ml-[70px]">
          <p className="leading-[normal]">Tribly gives your business the AI advantage—smarter targeting, personalized automation, and insights that bring customers back again and again.</p>
        </div>
      </div>
    </section>
  );
}

