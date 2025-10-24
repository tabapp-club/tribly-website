"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Local assets
const imgFrame = "/icons/arrow-right-purple.svg";
const imgFrame2 = "/icons/arrow-right-purple.svg";
const imgHugeiconsMenuTwoLine = "/icons/button-icon-1.svg";

// Menu data
const menuItems = {
  Solutions: [
    "Customer Engagement",
    "Customer Retention", 
    "Cohort Management",
    "Digital Invoice Management",
    "AI Campaigns",
    "WhatsApp Integration",
    "Business Analytics",
    "Customer Loyalty",
    "Feedback Management"
  ],
  Industry: {
    "Healthcare & Wellness": [
      "Dermatology & Aesthetic Clinics",
      "Dental Clinics",
      "Fertility and IVF Centers",
      "Eye Clinics (Ophthalmology/Optometry)",
      "Physiotherapy & Rehab Clinics",
      "Gynecology & Women's Health Clinics",
      "Pediatrics Clinics",
      "Weight-loss, Nutrition & Wellness Clinics"
    ],
    "Automobile & Mobility": [
      "Car Dealerships",
      "Two-Wheeler Dealerships",
      "Automobile Service Centers & Workshops",
      "Spares & Accessories",
      "Automobile Wash & Detailing Studios"
    ],
    "Food & Hospitality": [
      "Sweets & Bakeries",
      "Hotels & Resorts",
      "Restaurants & Cafés"
    ],
    "Retail & Lifestyle": [
      "Fashion & Apparel Stores",
      "Electronics & Appliances Stores",
      "Furniture & Home Décor"
    ]
  },
  About: [],
  Pricing: [
    "Starter Plan",
    "Professional Plan",
    "Enterprise Plan",
    "Custom Solutions",
    "Free Trial",
    "Compare Plans"
  ],
  Resources: [
    "Documentation",
    "API Reference"
  ]
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 box-border content-stretch flex items-center justify-center p-[24px]"
    >
      {/* Mobile Navbar */}
      <div className="md:hidden bg-white box-border content-stretch flex items-center justify-between overflow-clip px-[24px] py-[16px] relative rounded-[99px] shadow-[0px_4px_0px_0px_rgba(151,71,255,0.5)] w-full">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-medium leading-[1.2] not-italic relative shrink-0 text-[#9747ff] text-[40px] text-nowrap tracking-[-0.8px] whitespace-pre"
          onClick={closeDropdowns}
        >
          tribly.
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="flex items-center justify-center relative shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.3335 15H6.66683M33.3335 25H16.6668" stroke="#9747FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex backdrop-blur-[2.5px] backdrop-filter bg-[rgba(255,255,255,0.5)] box-border content-stretch gap-[16px] lg:gap-[40px] items-center justify-between p-[12px] lg:p-[16px] relative rounded-[99px] shrink-0 w-full max-w-[1200px] shadow-[0_2px_0_rgba(151,71,255,0.5)]">
        {/* Logo */}
        <Link 
          href="/" 
          className="font-medium leading-[1.2] not-italic relative shrink-0 text-[#9747ff] text-[28px] sm:text-[32px] lg:text-[40px] text-nowrap tracking-[-0.8px] whitespace-pre hover:opacity-80 transition-opacity"
          onClick={closeDropdowns}
        >
          tribly.
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex content-stretch gap-[16px] items-center justify-center relative shrink-0">
          {Object.keys(menuItems).map((item) => (
            <div key={item} className="relative">
              {item === "About" ? (
                // Clickable link for About
                <Link href="/about">
                  <div className="font-manrope font-bold leading-[26px] relative text-[#090909] text-[15.6px] text-nowrap whitespace-pre cursor-pointer px-[8px] py-0 hover:text-[#9747ff] transition-colors">
                    {item}
                  </div>
                </Link>
              ) : item === "Pricing" ? (
                // Clickable link for Pricing
                <Link href="/pricing">
                  <div className="font-manrope font-bold leading-[26px] relative text-[#090909] text-[15.6px] text-nowrap whitespace-pre cursor-pointer px-[8px] py-0 hover:text-[#9747ff] transition-colors">
                    {item}
                  </div>
                </Link>
              ) : (
                // Dropdown for other items
                <button 
                  className="box-border content-stretch flex h-[26px] items-center px-[8px] py-0 relative shrink-0 group cursor-pointer hover:bg-[#f7f1ff] rounded-lg transition-colors"
                  onClick={() => handleDropdownToggle(item)}
                >
                  <span className="font-manrope flex items-center gap-1 font-bold leading-[26px] relative text-[#090909] text-[15.6px] text-nowrap whitespace-pre group-hover:text-[#9747ff] transition-colors">
                    {item}
                  </span>
                  <div className="flex items-center justify-center relative shrink-0">
                    <Image 
                      alt="Dropdown" 
                      className={`block size-[24px] transition-all duration-200 group-hover:brightness-0 group-hover:saturate-100 group-hover:hue-rotate-[270deg] ${activeDropdown === item ? 'rotate-180' : 'rotate-90'}`} 
                      src={imgFrame} 
                      width={24} 
                      height={24} 
                    />
                  </div>
                </button>
              )}

              {/* Dropdown Menu - Only for dropdown items */}
              {item !== "About" && item !== "Pricing" && (
                <AnimatePresence>
                  {activeDropdown === item && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute top-full left-0 mt-2 bg-white rounded-[16px] border border-gray-100 overflow-hidden z-[70] ${item === "Industry" ? "w-[600px] shadow-[0_6px_0_0_#9747ff]" : "w-[280px] shadow-[0_6px_0_0_#9747ff]"}`}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item === "Industry" ? (
                        // Special multi-column layout for Industry
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(menuItems.Industry).map(([category, subItems]) => (
                              <div key={category} className="space-y-2">
                                <h4 className="font-semibold text-[#9747ff] text-[14px] border-b border-gray-200 pb-1 mb-2 flex items-center gap-2">
                                  <div className="w-2 h-2 bg-[#9747ff] rounded-full"></div>
                                  {category}
                                </h4>
                                <div className="space-y-1">
                                  {subItems.map((subItem, index) => (
                                    <Link
                                      key={index}
                                      href={`/industry/${subItem.toLowerCase().replace(/\s*&\s*/g, '-').replace(/\s+/g, '-')}`}
                                      className="block text-[14px] font-medium text-gray-700 hover:text-[#9747ff] hover:bg-[#f7f1ff] px-2 py-1 rounded-md transition-all duration-200 hover:translate-x-1"
                                      onClick={closeDropdowns}
                                    >
                                      {subItem}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        // Regular dropdown for other items
                        <div className="py-2">
                          {(menuItems[item as keyof typeof menuItems] as string[]).map((subItem, index) => (
                            item === "Solutions" || item === "Resources" || item === "Pricing" ? (
                              <div
                                key={index}
                                className="block px-4 py-3 text-[14px] font-medium text-gray-700 cursor-default"
                              >
                                {subItem}
                              </div>
                            ) : (
                              <Link
                                key={index}
                                href={`/${item.toLowerCase().replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block px-4 py-3 text-[14px] font-medium text-gray-700 hover:bg-[#f7f1ff] hover:text-[#9747ff] transition-colors"
                                onClick={closeDropdowns}
                              >
                                {subItem}
                              </Link>
                            )
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="content-stretch gap-[8px] items-center relative shrink-0 flex">
          {/* Login to tribly Button */}
          <a href="https://app.tribly.ai/login" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border border-[#9747ff] border-solid box-border content-stretch flex gap-[8px] h-[48px] items-center justify-center px-[24px] py-[8px] relative rounded-[99px] shrink-0 hover:bg-[#f7f1ff] transition-colors shadow-[0_4px_0_#9747FF]"
            >
              <span className="font-manrope font-medium leading-[26px] relative shrink-0 text-[#9747ff] text-[15.1px] text-nowrap whitespace-pre">
                Login to tribly
              </span>
              <Image alt="Arrow" className="block max-w-none size-[24px]" src={imgFrame2} width={24} height={24} />
            </motion.button>
          </a>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Full Screen Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full bg-[#F7F1FF] shadow-xl z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6 sm:p-8 max-w-[400px] mx-auto">
                {/* Close Button */}
                <div className="flex justify-end mb-12">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-3 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <div className="w-6 h-0.5 bg-gray-600 rotate-45 absolute" />
                      <div className="w-6 h-0.5 bg-gray-600 -rotate-45 absolute" />
                    </div>
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="space-y-6 sm:space-y-8">
                  {Object.keys(menuItems).map((item) => (
                    <div key={item}>
                      {item === "About" ? (
                        // Clickable link for About in mobile
                        <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                          <div className="w-full text-left font-manrope font-bold text-[18px] text-[#090909] hover:text-[#9747ff] transition-colors cursor-pointer py-3 block">
                            {item}
                          </div>
                        </Link>
                      ) : item === "Pricing" ? (
                        // Clickable link for Pricing in mobile
                        <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                          <div className="w-full text-left font-manrope font-bold text-[18px] text-[#090909] hover:text-[#9747ff] transition-colors cursor-pointer py-3 block">
                            {item}
                          </div>
                        </Link>
                      ) : (
                        // Dropdown for other items in mobile
                        <>
                          <button
                            className="w-full text-left font-manrope font-bold text-[18px] text-[#090909] hover:text-[#9747ff] transition-colors py-3"
                            onClick={() => handleDropdownToggle(item)}
                          >
                            {item}
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === item && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="pl-4 space-y-2 mt-2">
                                  {item === "Industry" ? (
                                    // Special handling for Industry in mobile
                                    Object.entries(menuItems.Industry).map(([category, subItems]) => (
                                      <div key={category} className="space-y-2">
                                        <h5 className="font-semibold text-[#9747ff] text-[14px] mt-3 first:mt-0 flex items-center gap-2">
                                          <div className="w-2 h-2 bg-[#9747ff] rounded-full"></div>
                                          {category}
                                        </h5>
                                        <div className="pl-4 space-y-1">
                                          {subItems.map((subItem, index) => (
                                            <Link
                                              key={index}
                                              href={`/industry/${subItem.toLowerCase().replace(/\s*&\s*/g, '-').replace(/\s+/g, '-')}`}
                                              className="block text-[12px] font-medium text-gray-600 hover:text-[#9747ff] transition-colors py-2 px-2 rounded-md hover:bg-gray-50"
                                              onClick={() => {
                                                setIsMobileMenuOpen(false);
                                                closeDropdowns();
                                              }}
                                            >
                                              {subItem}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    ))
                                  ) : (
                                    // Regular mobile menu for other items
                                    (menuItems[item as keyof typeof menuItems] as string[]).map((subItem, index) => (
                                      item === "Solutions" || item === "Resources" || item === "Pricing" ? (
                                        <div
                                          key={index}
                                          className="block text-[14px] text-gray-600 cursor-default py-1"
                                        >
                                          {subItem}
                                        </div>
                                      ) : (
                                        <Link
                                          key={index}
                                          href={`/${item.toLowerCase().replace(/\s+/g, '-')}/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                          className="block text-[14px] text-gray-600 hover:text-[#9747ff] transition-colors py-1"
                                          onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            closeDropdowns();
                                          }}
                                        >
                                          {subItem}
                                        </Link>
                                      )
                                    ))
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-12 sm:mt-16 space-y-4 sm:space-y-6">
                  <a href="https://app.tribly.ai/login" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white border border-[#9747ff] border-solid flex gap-[12px] h-[56px] items-center justify-center px-[24px] py-[12px] rounded-[99px] hover:bg-[#f7f1ff] transition-colors shadow-[0_4px_0_#9747FF]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="font-manrope font-medium text-[#9747ff] text-[16px]">
                        Login to tribly
                      </span>
                      <Image alt="Arrow" className="size-[24px]" src={imgFrame2} width={24} height={24} />
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}