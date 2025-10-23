"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ExpertCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const imgPhone = "/icons/ellipse-green.svg";

export default function ExpertCallModal({ isOpen, onClose }: ExpertCallModalProps) {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const phoneNumbers = [
    { number: "+91 9010640909", display: "+91 9010640909" },
    { number: "+91 8977719997", display: "+91 8977719997" }
  ];

  const handleCopy = async (number: string) => {
    try {
      await navigator.clipboard.writeText(number.replace(/\s/g, ""));
      setCopiedNumber(number);
      setTimeout(() => setCopiedNumber(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleCall = (number: string) => {
    window.location.href = `tel:${number.replace(/\s/g, "")}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-[32px] shadow-[0_20px_60px_rgba(151,71,255,0.3)] max-w-[500px] w-full overflow-hidden border-2 border-[#9747ff]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-br from-[#9747ff] to-[#7b38cc] p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors z-10"
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-5 h-0.5 bg-white rotate-45 absolute" />
                    <div className="w-5 h-0.5 bg-white -rotate-45 absolute" />
                  </div>
                </button>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image alt="" src={imgPhone} width={8} height={8} />
                      <span className="text-[#5abb80] text-[13px] font-semibold">Available Now</span>
                    </div>
                  </div>
                  <h2 className="text-[28px] font-semibold text-white leading-tight mb-2">
                    Talk to Our Expert
                  </h2>
                  <p className="text-white/90 text-[14px] font-normal">
                    Choose a number to call or save for later
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="space-y-4">
                  {phoneNumbers.map((phone, index) => (
                    <motion.div
                      key={phone.number}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-gradient-to-br from-[#f7f1ff] to-[#ffffff] border-2 border-[#e5d4ff] rounded-[20px] p-5 hover:border-[#9747ff] hover:shadow-[0_8px_20px_rgba(151,71,255,0.15)] transition-all duration-300">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#9747ff] to-[#7b38cc] rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-white font-semibold text-base">{index + 1}</span>
                            </div>
                            <div>
                              <div className="text-[9px] text-gray-500 font-semibold mb-0.5 uppercase tracking-wide">
                                Expert Line {index + 1}
                              </div>
                              <div className="text-[20px] font-semibold text-[#9747ff] tracking-normal">
                                {phone.display}
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            {/* Call Button */}
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleCall(phone.number)}
                              className="w-11 h-11 bg-[#5abb80] hover:bg-[#4a9d6d] rounded-full flex items-center justify-center shadow-lg transition-colors group"
                              title="Call now"
                            >
                              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                            </motion.button>

                            {/* Copy Button */}
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => handleCopy(phone.number)}
                              className="w-11 h-11 bg-[#9747ff] hover:bg-[#7b38cc] rounded-full flex items-center justify-center shadow-lg transition-colors relative"
                              title="Copy number"
                            >
                              {copiedNumber === phone.number ? (
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              )}
                            </motion.button>
                          </div>
                        </div>
                      </div>

                      {copiedNumber === phone.number && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-center mt-2"
                        >
                          <span className="text-[#5abb80] text-[13px] font-semibold">✓ Copied to clipboard!</span>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Footer Info */}
                <div className="mt-6 pt-5 border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-[#f7f1ff] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#9747ff]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[13px] text-gray-600 leading-relaxed font-normal">
                        Our experts are available <span className="font-semibold text-[#9747ff]">Monday to Saturday, 9 AM - 6 PM IST</span>. Call us for personalized assistance with your business needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

