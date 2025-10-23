"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const imgAvatarImage60 = "/images/avatar-1.png";
const imgAvatarImage61 = "/images/avatar-2.png";
const imgAvatarImage62 = "/images/avatar-3.png";
const imgAvatarImage63 = "/images/avatar-4.png";
const imgAvatarImage48 = "/images/avatar-5.png";
const imgAvatarImage49 = "/images/avatar-6.png";
const imgAvatarImage50 = "/images/avatar-7.png";
const imgAvatarImage51 = "/images/avatar-8.png";
const imgButton = "/icons/button-purple.svg";
const imgStar = "/icons/star-half.svg";
const imgStarFilled = "/icons/star-filled.svg";
const imgStarEmpty = "/icons/star-empty.svg";
const imgButton1 = "/icons/button-green.svg";

export default function EngagementSection() {
  return (
    <section className="relative h-[752px] w-full py-8">
      <div className="max-w-[1240px] mx-auto h-full relative">
        {/* Background gradient */}
        <div className="absolute bg-gradient-to-b from-[#f1ecff] h-full left-1/2 rounded-[40px] to-[#ffffff] to-[99.99%] top-0 translate-x-[-50%] w-full z-0" />

        {/* Header */}
        <div className="absolute content-stretch flex items-center justify-between left-[48px] top-[24px] w-[calc(100%-96px)] z-10">
          <div className="flex flex-col font-medium justify-center leading-[0] not-italic text-[#0e0234] text-[24px]">
            <p className="leading-[normal]">ENGAGEMENT</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="h-[60px] relative w-[61.333px] cursor-pointer"
          >
            <Image alt="Arrow" className="block max-w-none size-full" src={imgButton1} width={61} height={60} />
          </motion.div>
        </div>

        {/* Title and Description */}
        <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-[44px] not-italic text-[#0e0234] top-[140px] w-[785px] z-10">
          <h2 className="flex flex-col font-semibold justify-center text-[32px] w-full leading-[normal]">
            Connect instantly. Engage meaningfully.
          </h2>
          <p className="flex flex-col justify-center text-[24px] w-[745px] leading-[1.4] font-normal">
            Real-time customer engagement through WhatsApp and SMS. Build lasting relationships with personalized interactions.
          </p>
        </div>

        {/* Cards Container */}
        <div className="absolute bg-white h-[640px] left-[12px] overflow-hidden rounded-[32px] top-[100px] w-[calc(100%-24px)] z-5">
          <div className="absolute bg-gradient-to-b from-[#e1d8ff] h-[640px] left-1/2 rounded-[32px] to-[#ffffff] top-1/2 translate-x-[-50%] translate-y-[-50%] w-full z-0" />

          {/* First Row of Cards (Animated - Moving Right) */}
          <motion.div
            className="absolute flex gap-[27px] items-center top-[433px] z-10"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Card 1: 180 customers opened WhatsApp messages */}
            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[12px] py-[12px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[320px]">
                <p className="mb-0">
                  <span className="font-semibold text-[32px]">180</span>
                  <span className="text-[24px]"> </span>
                </p>
                <p className="text-[16px]">customers opened WhatsApp messages — send them exclusive deals and promotions.</p>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex items-center pl-[8px] pr-[24px] py-[8px] relative shrink-0">
                  <div className="border-2 border-solid border-white mr-[-16px] relative rounded-[30px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage60} width={48} height={48} />
                  </div>
                  <div className="border-2 border-solid border-white mr-[-16px] relative rounded-[30px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage61} width={48} height={48} />
                  </div>
                  <div className="border-2 border-solid border-white mr-[-16px] relative rounded-[30px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage62} width={48} height={48} />
                  </div>
                  <div className="border-2 border-solid border-white mr-[-16px] relative rounded-[30px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage63} width={48} height={48} />
                  </div>
                </div>
                <div className="h-[38.152px] relative shrink-0 w-[39px]">
                  <Image alt="" className="block max-w-none size-full" src={imgButton} width={39} height={38} />
                </div>
              </div>
            </div>

            {/* Card 2: 95 customers clicked WhatsApp links */}
            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[12px] py-[12px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[320px]">
                <p className="leading-[1.6]">
                  <span className="text-[24px]">95</span>
                  <span className="text-[40px]"> </span>
                  <span className="text-[20px]">{`customers clicked WhatsApp links — `}</span>
                  <span className="font-normal text-[20px]">nurture them with follow-up sequences.</span>
                </p>
              </div>
            </div>

            {/* Card 3: 320 SMS messages delivered */}
            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[4px] h-[180px] items-start justify-center px-[12px] py-[12px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-black w-[380px]">
                <p className="leading-[1.6] whitespace-pre-wrap">
                  <span className="font-semibold text-[36px]">{`320 `}</span>
                  <span className="text-[20px]">{` SMS messages delivered — send them appointment reminders and updates.`}</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex items-center pl-[8px] pr-[24px] py-[8px] relative shrink-0">
                  <div className="mr-[-16px] relative rounded-[24px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage48} width={48} height={48} />
                  </div>
                  <div className="mr-[-16px] relative rounded-[24px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage49} width={48} height={48} />
                  </div>
                  <div className="mr-[-16px] relative rounded-[24px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage50} width={48} height={48} />
                  </div>
                  <div className="mr-[-16px] relative rounded-[24px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage51} width={48} height={48} />
                  </div>
                </div>
                <div className="h-[38.152px] relative shrink-0 w-[39px]">
                  <Image alt="" className="block max-w-none size-full" src={imgButton} width={39} height={38} />
                </div>
              </div>
            </div>

            {/* Card 4: 45 customers replied to messages */}
            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[4px] h-[180px] items-start justify-center px-[12px] py-[12px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[380px]">
                <p className="leading-[1.6]">
                  <span className="text-[40px]">{`45 `}</span>
                  <span className="font-normal text-[20px]">customers replied to messages — engage them with personalized conversations.</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStar} width={36} height={34} />
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStarFilled} width={36} height={34} />
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStarFilled} width={36} height={34} />
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStarEmpty} width={36} height={34} />
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStarEmpty} width={36} height={34} />
              </div>
            </div>

            {/* Card 5: 🎯 78 customers engaged with polls */}
            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[12px] py-[12px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-black w-[380px]">
                <p className="leading-[1.6]">
                  <span className="font-semibold text-[49px]">🎯 78</span>
                  <span className="text-[20px]">{` customers engaged with polls — gather feedback and improve services.`}</span>
                </p>
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[290px]">
                <p className="mb-0">
                  <span className="font-semibold text-[32px]">180</span>
                  <span className="text-[24px]"> </span>
                </p>
                <p className="text-[16px]">customers opened WhatsApp messages — follow up with personalized offers.</p>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex items-center pl-[8px] pr-[24px] py-[8px] relative shrink-0">
                  <div className="border-2 border-solid border-white mr-[-16px] relative rounded-[30px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage60} width={48} height={48} />
                  </div>
                  <div className="border-2 border-solid border-white mr-[-16px] relative rounded-[30px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage61} width={48} height={48} />
                  </div>
                  <div className="border-2 border-solid border-white mr-[-16px] relative rounded-[30px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage62} width={48} height={48} />
                  </div>
                  <div className="border-2 border-solid border-white mr-[-16px] relative rounded-[30px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage63} width={48} height={48} />
                  </div>
                </div>
                <div className="h-[38.152px] relative shrink-0 w-[39px]">
                  <Image alt="" className="block max-w-none size-full" src={imgButton} width={39} height={38} />
                </div>
              </div>
            </div>

            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="text-[24px]">95</span>
                  <span className="text-[40px]"> </span>
                  <span className="text-[20px]">{`customers clicked email links — `}</span>
                  <span className="font-normal text-[20px]">send them targeted content.</span>
                </p>
              </div>
            </div>

            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[4px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-black w-[348px]">
                <p className="leading-[1.6] whitespace-pre-wrap">
                  <span className="font-semibold text-[36px]">{`320 `}</span>
                  <span className="text-[20px]">{` SMS messages delivered successfully — track engagement rates.`}</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex items-center pl-[8px] pr-[24px] py-[8px] relative shrink-0">
                  <div className="mr-[-16px] relative rounded-[24px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage48} width={48} height={48} />
                  </div>
                  <div className="mr-[-16px] relative rounded-[24px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage49} width={48} height={48} />
                  </div>
                  <div className="mr-[-16px] relative rounded-[24px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage50} width={48} height={48} />
                  </div>
                  <div className="mr-[-16px] relative rounded-[24px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage51} width={48} height={48} />
                  </div>
                </div>
                <div className="h-[38.152px] relative shrink-0 w-[39px]">
                  <Image alt="" className="block max-w-none size-full" src={imgButton} width={39} height={38} />
                </div>
              </div>
            </div>

            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[4px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="text-[40px]">{`45 `}</span>
                  <span className="font-normal text-[20px]">customers replied to messages — respond quickly to build relationships.</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStar} width={36} height={34} />
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStarFilled} width={36} height={34} />
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStarFilled} width={36} height={34} />
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStarEmpty} width={36} height={34} />
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStarEmpty} width={36} height={34} />
              </div>
            </div>

            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="font-semibold text-[49px]">🎯 78</span>
                  <span className="text-[20px]">{` customers engaged with content — optimize your messaging strategy.`}</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Second Row of Cards (Animated - Moving Left) */}
          <motion.div
            className="absolute flex gap-[27px] items-center top-[237px] z-10"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Card 1: 📱 156 customers active on WhatsApp */}
            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[12px] py-[12px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[380px]">
                <p className="mb-0">
                  <span className="font-semibold text-[40px]">{`📱 156 `}</span>
                  <span className="text-[20px]">customers</span>
                </p>
                <p className="text-[20px]">{` active on WhatsApp — create personalized customer journeys.`}</p>
              </div>
            </div>

            {/* Card 2: 67 customers clicked CTAs */}
            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[12px] py-[12px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[380px]">
                <p className="font-semibold mb-0 text-[40px]">{`🎯 67 `}</p>
                <p className="text-[20px] whitespace-pre-wrap">{`customers clicked CTAs — convert them with special offers`}</p>
              </div>
            </div>

            {/* Card 3: 89 High engagement customers */}
            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[12px] py-[12px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-black w-[380px]">
                <p className="leading-[1.6] mb-0">
                  <span className="font-semibold text-[32px]">89</span>
                  <span className="text-[24px]"> </span>
                </p>
                <p className="leading-[1.6] text-[16px] whitespace-pre-wrap">
                  <span>{`High engagement customers — `}</span>
                  <span className="text-[#13923d]">create VIP experiences for them</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex items-center pl-[8px] pr-[24px] py-[8px] relative shrink-0">
                  <div className="mr-[-16px] relative rounded-[24px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage48} width={48} height={48} />
                  </div>
                  <div className="mr-[-16px] relative rounded-[24px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage49} width={48} height={48} />
                  </div>
                  <div className="mr-[-16px] relative rounded-[24px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage50} width={48} height={48} />
                  </div>
                  <div className="mr-[-16px] relative rounded-[24px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage51} width={48} height={48} />
                  </div>
                </div>
                <div className="h-[38.152px] relative shrink-0 w-[39px]">
                  <Image alt="" className="block max-w-none size-full" src={imgButton} width={39} height={38} />
                </div>
              </div>
            </div>

            {/* Card 4: 234 customers shared content */}
            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[12px] py-[12px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[380px]">
                <p className="leading-[1.6]">
                  <span className="text-[32px]">234</span>
                  <span className="text-[20px]"> </span>
                  <span className="font-normal text-[16px]">customers shared content — amplify their advocacy with rewards.</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStar} width={36} height={34} />
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStarFilled} width={36} height={34} />
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStarFilled} width={36} height={34} />
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStarFilled} width={36} height={34} />
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStarFilled} width={36} height={34} />
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[290px]">
                <p className="mb-0">
                  <span className="font-semibold text-[40px]">{`📱 156 `}</span>
                  <span className="text-[20px]">customers</span>
                </p>
                <p className="text-[20px]">{` active on WhatsApp — send them instant updates and offers.`}</p>
              </div>
            </div>

            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[290px]">
                <p className="font-semibold mb-0 text-[40px]">{`⚠️ 67 `}</p>
                <p className="text-[20px] whitespace-pre-wrap">{`customers unsubscribed from emails — analyze and improve content`}</p>
              </div>
            </div>

            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6] mb-0">
                  <span className="font-semibold text-[32px]">89</span>
                  <span className="text-[24px]"> </span>
                </p>
                <p className="leading-[1.6] text-[16px] whitespace-pre-wrap">
                  <span>{`High engagement customers — `}</span>
                  <span className="text-[#13923d]">reward their loyalty</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex items-center pl-[8px] pr-[24px] py-[8px] relative shrink-0">
                  <div className="mr-[-16px] relative rounded-[24px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage48} width={48} height={48} />
                  </div>
                  <div className="mr-[-16px] relative rounded-[24px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage49} width={48} height={48} />
                  </div>
                  <div className="mr-[-16px] relative rounded-[24px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage50} width={48} height={48} />
                  </div>
                  <div className="mr-[-16px] relative rounded-[24px] shrink-0 size-[48px] overflow-hidden">
                    <Image alt="" className="absolute inset-0 object-cover size-full" src={imgAvatarImage51} width={48} height={48} />
                  </div>
                </div>
                <div className="h-[38.152px] relative shrink-0 w-[39px]">
                  <Image alt="" className="block max-w-none size-full" src={imgButton} width={39} height={38} />
                </div>
              </div>
            </div>

            <div className="bg-white border-[#9747ff] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="text-[32px]">234</span>
                  <span className="text-[20px]"> </span>
                  <span className="font-normal text-[16px]">customers opened emails — segment them for better targeting.</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full">
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStar} width={36} height={34} />
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStarFilled} width={36} height={34} />
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStarFilled} width={36} height={34} />
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStarFilled} width={36} height={34} />
                <Image alt="Star" className="block h-[34px] w-[36px]" src={imgStarFilled} width={36} height={34} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}