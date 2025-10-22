"use client";

export default function FooterMobile() {

  return (
    <section className="relative w-full px-[16px] py-[60px]">
      <div className="relative h-[1878px] w-full max-w-[380px] mx-auto">
        {/* Background gradient */}
        <div className="absolute bg-gradient-to-b from-[#f7f1ff] h-full left-1/2 rounded-[40px] to-[#ffffff] top-0 translate-x-[-50%] w-full" />

        {/* Content */}
        <div className="relative flex flex-col gap-[42px] items-center justify-center px-[22px] py-[31px]">
          {/* Solutions Section */}
          <div className="w-full">
            <div className="border border-[#9747ff] border-solid w-full flex gap-[8px] items-center justify-center p-[12px] rounded-[99px] mb-[8px]">
              <span className="font-medium text-[#090909] text-[16px]">
                Solutions
              </span>
            </div>
            
            <div className="flex flex-col gap-[8px] items-start px-[16px] w-full">
              {[
                "Customer Engagement",
                "Customer Retention",
                "Cohort Management",
                "Digital Invoice management",
                "AI suggested personalised campaigns",
                "WhatsApp campaigns",
                "Business Achievement & Milestones tracking.",
                "tribly AI services",
                "Customer Loyalty",
                "Feedback Management"
              ].map((item, index) => (
                <button key={index} className="font-normal text-[#090909] text-[14px] text-left w-full py-1">
                  <p className="leading-[26px]">{item}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Industries Section */}
          <div className="w-full flex flex-col gap-[24px]">
            <div className="border border-[#9747ff] border-solid w-full flex gap-[8px] h-[49.868px] items-center justify-center p-[12px] rounded-[99px]">
              <span className="font-medium text-[#090909] text-[16px]">
                Industries that benefits from tribly
              </span>
            </div>

            <div className="flex flex-col gap-[16px] items-start justify-center px-[16px] w-full">
                {/* Healthcare & Wellness */}
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <div className="font-medium text-[#090909] text-[16px] w-full">
                    <p className="leading-[26px]">For Healthcare & Wellness</p>
                  </div>
                  {[
                    "Dermatology & Aesthetic Clinics",
                    "Dental clinics",
                    "Fertility and IVF Centers",
                    "Eye Clinics (Ophthalmology/Optometry)",
                    "Physiotherapy & Rehab Clinics",
                    "Gynecology & Women's Health Clinics",
                    "Pediatrics Clinics",
                    "Weight-loss, Nutrition & Wellness Clinics"
                  ].map((item, index) => (
                    <button key={index} className="font-normal text-[#090909] text-[14px] text-left w-full">
                      <ul>
                        <li className="list-disc ms-[21px]">
                          <span className="leading-[26px]">{item}</span>
                        </li>
                      </ul>
                    </button>
                  ))}
                </div>

                {/* Automobile & Mobility */}
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <div className="font-medium text-[#090909] text-[16px]">
                    <p className="leading-[26px]">For Automobile & Mobility</p>
                  </div>
                  {[
                    "Car Dealerships",
                    "Two-Wheeler Dealerships",
                    "Automobile Service Centers & Workshops",
                    "Spares & Accessories",
                    "Automobile Wash & Detailing Studios"
                  ].map((item, index) => (
                    <button key={index} className="font-normal text-[#090909] text-[14px] text-left w-full">
                      <ul>
                        <li className="list-disc ms-[21px]">
                          <span className="leading-[26px]">{item}</span>
                        </li>
                      </ul>
                    </button>
                  ))}
                </div>

                {/* Food & Hospitality */}
                <div className="flex flex-col gap-[8px]">
                  <div className="font-medium text-[#090909] text-[16px]">
                    <p className="leading-[26px]">Food & Hospitality</p>
                  </div>
                  {[
                    "Sweets & bakeries",
                    "Hotels & Resorts",
                    "Restaurants & Cafés"
                  ].map((item, index) => (
                    <button key={index} className="font-normal text-[#090909] text-[14px] text-left">
                      <ul>
                        <li className="list-disc ms-[21px]">
                          <span className="leading-[26px]">{item}</span>
                        </li>
                      </ul>
                    </button>
                  ))}
                </div>

                {/* Retail & Lifestyle */}
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <div className="font-medium text-[#090909] text-[16px] w-full">
                    <p className="leading-[26px]">Retail & Lifestyle</p>
                  </div>
                  {[
                    "Fashion & Apparel Stores",
                    "Electronics & Appliances Stores",
                    "Furniture & Home Décor"
                  ].map((item, index) => (
                    <button key={index} className="font-normal text-[#090909] text-[14px] text-left">
                      <ul>
                        <li className="list-disc ms-[21px]">
                          <span className="leading-[26px]">{item}</span>
                        </li>
                      </ul>
                    </button>
                  ))}
                </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="w-full flex flex-col gap-[20px]">
            <div className="border border-[#9747ff] border-solid w-full flex gap-[8px] h-[50px] items-center justify-center p-[12px] rounded-[99px]">
              <span className="font-medium text-[#090909] text-[16px]">
                Company
              </span>
            </div>

            <div className="flex flex-col gap-[8px] items-start px-[16px] w-full">
              {[
                "About",
                "Careers",
                "Partner with us",
                "Terms and conditions",
                "Privacy policy",
                "Contact us"
              ].map((item, index) => (
                <button key={index} className="font-normal text-[#090909] text-[14px] text-left">
                  <p className="leading-[26px] whitespace-pre">{item}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-[16px] items-start justify-center px-[16px] w-full">
            <div className="font-normal text-[#090909] text-[14px]">
              <p className="leading-[26px] whitespace-pre">Social Media</p>
            </div>
            <div className="flex gap-[16px] items-start">
              <div className="border border-[#e2cbff] border-solid flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] rounded-[99px]">
                <button className="font-normal text-[#090909] text-[14px]">
                  <p className="leading-[26px] whitespace-pre">LinkedIN</p>
                </button>
              </div>
              <div className="border border-[#e2cbff] border-solid flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] rounded-[99px]">
                <button className="font-normal text-[#090909] text-[14px]">
                  <p className="leading-[26px] whitespace-pre">Instagram</p>
                </button>
              </div>
              <div className="border border-[#e2cbff] border-solid flex flex-col gap-[8px] items-center justify-center px-[16px] py-[8px] rounded-[99px]">
                <button className="font-normal text-[#090909] text-[14px]">
                  <p className="leading-[26px] whitespace-pre">Facebook</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright at bottom */}
        <div className="absolute flex flex-col font-normal justify-center left-[110.5px] text-[14px] text-black text-nowrap top-[1865px] translate-y-[-50%]">
          <p className="leading-[26px] whitespace-pre">© 2025 All rights reserved</p>
        </div>
      </div>
    </section>
  );
}

