"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Local assets
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

export default function RetentionSection() {
  return (
    <section className="relative h-[752px] w-full py-8">
      <div className="max-w-[1240px] mx-auto h-full relative">
        {/* Background gradient */}
        <div className="absolute bg-gradient-to-b from-[#eafff2] h-full left-1/2 rounded-[40px] to-[#ffffff] to-[99.99%] top-0 translate-x-[-50%] w-full z-0" />
        
        {/* Header */}
        <div className="absolute content-stretch flex items-center justify-between left-[48px] top-[24px] w-[calc(100%-96px)] z-10">
          <div className="flex flex-col font-medium justify-center leading-[0] not-italic text-[#022610] text-[24px]">
            <p className="leading-[normal]">RETENTION</p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="h-[60px] relative w-[61.333px] cursor-pointer"
          >
            <Image alt="Arrow" className="block max-w-none size-full" src={imgButton1} width={61} height={60} />
          </motion.div>
        </div>

        {/* Title and Description */}
        <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-[44px] not-italic text-[#022610] top-[140px] w-[785px] z-10">
          <h2 className="flex flex-col font-semibold justify-center text-[32px] w-full leading-[normal]">
            Keep customers coming back. Build loyalty that lasts.
          </h2>
          <p className="flex flex-col justify-center text-[24px] w-[745px] leading-[1.4] font-normal">
            Acquiring a customer is only the first step—retaining them is where true growth happens. Tribly helps you nurture lasting relationships with your customers by providing consistent, meaningful touchpoints.
          </p>
        </div>

        {/* Cards Container */}
        <div className="absolute bg-white h-[640px] left-[12px] overflow-hidden rounded-[32px] top-[100px] w-[calc(100%-24px)] z-5">
          <div className="absolute bg-gradient-to-b from-[#d3fce3] h-[640px] left-1/2 rounded-[32px] to-[#ffffff] top-1/2 translate-x-[-50%] translate-y-[-50%] w-full z-0" />
          
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
            {/* Card 1: 460 Inactive customers */}
            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[290px]">
                <p className="mb-0">
                  <span className="font-semibold text-[32px]">460</span>
                  <span className="text-[24px]"> </span>
                </p>
                <p className="text-[16px]">Inactive customers found. Retain them</p>
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

            {/* Card 2: 25 customers completed 100 orders */}
            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="text-[24px]">25</span>
                  <span className="text-[40px]"> </span>
                  <span className="text-[20px]">{`customers completed `}</span>
                  <span className="text-[24px]">100</span>
                  <span className="text-[20px]">{` orders — `}</span>
                  <span className="font-normal text-[20px]">celebrate their milestone.</span>
                </p>
              </div>
            </div>

            {/* Card 3: 25 high spenders */}
            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[4px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-black w-[348px]">
                <p className="leading-[1.6] whitespace-pre-wrap">
                  <span className="font-semibold text-[36px]">{`25 `}</span>
                  <span className="text-[20px]">{` high spenders reduced purchase frequency — send a 'We miss you' nudge.`}</span>
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

            {/* Card 4: 20 customers rated below 3 */}
            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[4px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[348px]">
                <p className="leading-[1.6]">
                  <span className="text-[40px]">{`20 `}</span>
                  <span className="font-normal text-[20px]">customers rated below 3 — resolve issues before they churn.</span>
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

            {/* Card 5: 50 new customers */}
            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="font-semibold text-[49px]">🎉 50</span>
                  <span className="text-[20px]">{` new customers joined this month — send them a warm welcome.`}</span>
                </p>
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[290px]">
                <p className="mb-0">
                  <span className="font-semibold text-[32px]">460</span>
                  <span className="text-[24px]"> </span>
                </p>
                <p className="text-[16px]">Inactive customers found. Retain them</p>
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

            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="text-[24px]">25</span>
                  <span className="text-[40px]"> </span>
                  <span className="text-[20px]">{`customers completed `}</span>
                  <span className="text-[24px]">100</span>
                  <span className="text-[20px]">{` orders — `}</span>
                  <span className="font-normal text-[20px]">celebrate their milestone.</span>
                </p>
              </div>
            </div>

            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[4px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-black w-[348px]">
                <p className="leading-[1.6] whitespace-pre-wrap">
                  <span className="font-semibold text-[36px]">{`25 `}</span>
                  <span className="text-[20px]">{` high spenders reduced purchase frequency — send a 'We miss you' nudge.`}</span>
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

            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[4px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="text-[40px]">{`20 `}</span>
                  <span className="font-normal text-[20px]">customers rated below 3 — resolve issues before they churn.</span>
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

            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="font-semibold text-[49px]">🎉 50</span>
                  <span className="text-[20px]">{` new customers joined this month — send them a warm welcome.`}</span>
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
            {/* Card 1: Birthday */}
            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[290px]">
                <p className="mb-0">
                  <span className="font-semibold text-[40px]">{` 🎂 124 `}</span>
                  <span className="text-[20px]">customers</span>
                </p>
                <p className="text-[20px]">{` birthdays this week — send automated wishes + offers."`}</p>
              </div>
            </div>

            {/* Card 2: Warning 90 days */}
            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[290px]">
                <p className="font-semibold mb-0 text-[40px]">{`⚠️ 90 `}</p>
                <p className="text-[20px] whitespace-pre-wrap">{`customers haven't visited in 90 days —  reactivate them`}</p>
              </div>
            </div>

            {/* Card 3: 246 at risk */}
            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6] mb-0">
                  <span className="font-semibold text-[32px]">246</span>
                  <span className="text-[24px]"> </span>
                </p>
                <p className="leading-[1.6] text-[16px] whitespace-pre-wrap">
                  <span>{`High value customers are  `}</span>
                  <span className="text-[#e51919]">at risk</span>
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

            {/* Card 4: 150 positive reviews */}
            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="text-[32px]">150</span>
                  <span className="text-[20px]"> </span>
                  <span className="font-normal text-[16px]">customers left positive reviews — showcase them and reward their loyalty.</span>
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
            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[290px]">
                <p className="mb-0">
                  <span className="font-semibold text-[40px]">{` 🎂 124 `}</span>
                  <span className="text-[20px]">customers</span>
                </p>
                <p className="text-[20px]">{` birthdays this week — send automated wishes + offers."`}</p>
              </div>
            </div>

            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[290px]">
                <p className="font-semibold mb-0 text-[40px]">{`⚠️ 90 `}</p>
                <p className="text-[20px] whitespace-pre-wrap">{`customers haven't visited in 90 days —  reactivate them`}</p>
              </div>
            </div>

            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6] mb-0">
                  <span className="font-semibold text-[32px]">246</span>
                  <span className="text-[24px]"> </span>
                </p>
                <p className="leading-[1.6] text-[16px] whitespace-pre-wrap">
                  <span>{`High value customers are  `}</span>
                  <span className="text-[#e51919]">at risk</span>
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

            <div className="bg-white border-[#5abb80] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="text-[32px]">150</span>
                  <span className="text-[20px]"> </span>
                  <span className="font-normal text-[16px]">customers left positive reviews — showcase them and reward their loyalty.</span>
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
