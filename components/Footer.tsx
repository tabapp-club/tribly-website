"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="relative size-full h-[729px]">
      <div className="absolute bg-gradient-to-b from-[#f7f1ff] h-[626px] left-1/2 rounded-[40px] to-[#ffffff] top-0 translate-x-[-50%] w-[1240px]" />
      
      <div className="absolute flex gap-[48px] h-[452px] items-start left-1/2 top-[38px] translate-x-[-50%]">
        {/* Solutions Column */}
        <div className="flex flex-col gap-[20px] items-start w-[300px]">
          <div className="border border-[#9747ff] border-solid flex items-center justify-center p-[12px] rounded-[99px] w-full">
            <h3 className="text-[16px] font-clash font-medium text-[#090909] text-center">Solutions</h3>
          </div>
          <div className="flex flex-col gap-[8px] px-[16px] py-0 w-full">
            <a href="#" className="text-[14px] font-clash text-[#090909] text-left hover:text-[#9747ff] transition-colors">Customer Engagement</a>
            <a href="#" className="text-[14px] font-clash text-[#090909] text-left hover:text-[#9747ff] transition-colors">Customer Retention</a>
            <a href="#" className="text-[14px] font-clash text-[#090909] text-left hover:text-[#9747ff] transition-colors">Cohort Management</a>
            <a href="#" className="text-[14px] font-clash text-[#090909] text-left hover:text-[#9747ff] transition-colors">Digital Invoice management</a>
            <a href="#" className="text-[14px] font-clash text-[#090909] text-left hover:text-[#9747ff] transition-colors">
              <div>AI suggested personalised</div>
              <div>campaigns</div>
            </a>
            <a href="#" className="text-[14px] font-clash text-[#090909] text-left hover:text-[#9747ff] transition-colors">WhatsApp campaigns</a>
            <a href="#" className="text-[14px] font-clash text-[#090909] text-left hover:text-[#9747ff] transition-colors">
              <div>Business Achievement &</div>
              <div>Milestones tracking.</div>
            </a>
            <a href="#" className="text-[14px] font-clash text-[#090909] text-left hover:text-[#9747ff] transition-colors">tribly AI services</a>
            <a href="#" className="text-[14px] font-clash text-[#090909] text-left hover:text-[#9747ff] transition-colors">Customer Loyalty</a>
            <a href="#" className="text-[14px] font-clash text-[#090909] text-left hover:text-[#9747ff] transition-colors">Feedback Management</a>
          </div>
        </div>

        {/* Industries Column */}
        <div className="flex flex-col gap-[24px] items-start">
          <div className="border border-[#9747ff] border-solid flex items-center justify-center p-[12px] rounded-[99px] w-full">
            <h3 className="text-[16px] font-clash font-medium text-[#090909] text-center">Industries that benefit from tribly</h3>
          </div>
          <div className="flex gap-[48px] items-start">
            {/* Healthcare Column */}
            <div className="flex flex-col gap-[8px] items-start w-[229px]">
              <h4 className="text-[16px] font-clash font-medium text-[#090909] text-left">For Healthcare & Wellness</h4>
              <ul className="space-y-1 text-left">
                <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Dermatology & Aesthetic Clinics</li>
                <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Dental clinics</li>
                <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Fertility and IVF Centers</li>
                <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Eye Clinics (Ophthalmology/Optometry)</li>
                <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Physiotherapy & Rehab Clinics</li>
                <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Gynecology & Women's Health Clinics</li>
                <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Pediatrics Clinics</li>
                <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Weight-loss, Nutrition & Wellness Clinics</li>
              </ul>
            </div>

            {/* Automobile Column */}
            <div className="flex flex-col gap-[8px] items-start w-[229px]">
              <h4 className="text-[16px] font-clash font-medium text-[#090909] text-left">For Automobile & Mobility</h4>
              <ul className="space-y-1 text-left">
                <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Car Dealerships</li>
                <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Two-Wheeler Dealerships</li>
                <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Automobile Service Centers & Workshops</li>
                <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Spares & Accessories</li>
                <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Automobile Wash & Detailing Studios</li>
              </ul>
            </div>

            {/* Food & Retail Column */}
            <div className="flex flex-col gap-[8px] items-start">
              <div className="flex flex-col gap-[8px] items-start">
                <h4 className="text-[16px] font-clash font-medium text-[#090909] text-left">Food & Hospitality</h4>
                <ul className="space-y-1 text-left">
                  <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Sweets & bakeries</li>
                  <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Hotels & Resorts</li>
                  <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Restaurants & Cafés</li>
                </ul>
              </div>
              <div className="flex flex-col gap-[8px] items-start">
                <h4 className="text-[16px] font-clash font-medium text-[#090909] text-left">Retail & Lifestyle</h4>
                <ul className="space-y-1 text-left">
                  <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Fashion & Apparel Stores</li>
                  <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Electronics & Appliances Stores</li>
                  <li className="text-[14px] font-clash text-[#090909] list-disc ml-[21px]">Furniture & Home Décor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Company Column */}
        <div className="flex flex-col gap-[20px] items-start">
          <div className="border border-[#9747ff] border-solid flex items-center justify-center p-[12px] rounded-[99px] w-full">
            <h3 className="text-[16px] font-clash font-medium text-[#090909] text-center">Company</h3>
          </div>
          <div className="flex flex-col gap-[8px] px-[16px] py-0 w-full">
            <a href="/about" className="text-[14px] font-manrope text-[#090909] text-left hover:text-[#9747ff] transition-colors">About</a>
            <a href="#" className="text-[14px] font-manrope text-[#090909] text-left hover:text-[#9747ff] transition-colors">Careers</a>
            <a href="#" className="text-[14px] font-manrope text-[#090909] text-left hover:text-[#9747ff] transition-colors">Partner with us</a>
            <a href="#" className="text-[14px] font-manrope text-[#090909] text-left hover:text-[#9747ff] transition-colors">Terms and conditions</a>
            <a href="#" className="text-[14px] font-manrope text-[#090909] text-left hover:text-[#9747ff] transition-colors">Privacy policy</a>
            <a href="#" className="text-[14px] font-manrope text-[#090909] text-left hover:text-[#9747ff] transition-colors">Contact us</a>
          </div>
        </div>
      </div>

      {/* Social Media Section - Hidden for now */}
      {/* <div className="absolute flex gap-[16px] h-[42px] items-center left-[calc(50%-572px)] top-[490px]">
        <span className="text-[14px] font-clash text-[#090909] text-left">Social Media</span>
        <div className="border border-[#e2cbff] border-solid flex items-center justify-center p-[8px] rounded-[99px] w-[164px]">
          <a href="#" className="text-[14px] font-clash text-[#090909] text-center hover:text-[#9747ff] transition-colors">LinkedIN</a>
        </div>
        <div className="border border-[#e2cbff] border-solid flex items-center justify-center p-[8px] rounded-[99px] w-[164px]">
          <a href="#" className="text-[14px] font-clash text-[#090909] text-center hover:text-[#9747ff] transition-colors">Instagram</a>
        </div>
        <div className="border border-[#e2cbff] border-solid flex items-center justify-center p-[8px] rounded-[99px] w-[164px]">
          <a href="#" className="text-[14px] font-clash text-[#090909] text-center hover:text-[#9747ff] transition-colors">Facebook</a>
        </div>
      </div> */}

      {/* Copyright */}
      <div className="absolute flex flex-col gap-[24px] items-center justify-center left-0 overflow-clip right-0 top-[calc(50%+300px)] translate-y-[-50%] pb-[40px]">
        <div className="w-full h-px bg-gray-200"></div>
        <p className="text-[14px] font-clash text-black text-center">© 2025 All rights reserved</p>
      </div>
    </div>
  );
}