"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const imgAvatarImage60 = "http://localhost:3845/assets/c7cb4ef30d35272d3418aee23b79a17b9ec2f983.png";
const imgAvatarImage61 = "http://localhost:3845/assets/ff38e6a7ebbf24ebe4fe502ad5d7aa6690fc7f61.png";
const imgAvatarImage62 = "http://localhost:3845/assets/2012c3d4d964e59979626fd96ad25fab7fdeeb09.png";
const imgAvatarImage63 = "http://localhost:3845/assets/5745c570278b3f0eecb319f62c521279924509b0.png";
const imgAvatarImage48 = "http://localhost:3845/assets/67fee70178eb4d04731f74d6f2e21b9976bd1a2c.png";
const imgAvatarImage49 = "http://localhost:3845/assets/e594627b1d75c62e5f161737fee57c100f4c4323.png";
const imgAvatarImage50 = "http://localhost:3845/assets/7d3e9fb44d63d644644132f36d1434f46c1cf8af.png";
const imgAvatarImage51 = "http://localhost:3845/assets/727dde92b9ecafef047fdf08408808ed119d178e.png";
const imgButton = "http://localhost:3845/assets/aef5c75d3b33243eb1b713de17252e9548c6d229.svg";
const imgStar = "http://localhost:3845/assets/5e1b3c7220930af1c1ab0d38c5b30516ad1d15b5.svg";
const imgStarFilled = "http://localhost:3845/assets/da9f6fbafabc08d1c4c9fdba136e6e000622cc29.svg";
const imgStarEmpty = "http://localhost:3845/assets/cf16db22833c6b974ce8e3252c79d86637a8f847.svg";
const imgButton1 = "http://localhost:3845/assets/252eabe1efa3ab40d8e2642db6309be9e10dc59c.svg";

export default function CustomerDataSection() {
  return (
    <section className="relative h-[752px] w-full py-8">
      <div className="max-w-[1240px] mx-auto h-full relative">
        {/* Background gradient */}
        <div className="absolute bg-gradient-to-b from-[#e2f1fd] h-full left-1/2 rounded-[40px] to-[#ffffff] to-[99.99%] top-0 translate-x-[-50%] w-full z-0" />

        {/* Header */}
        <div className="absolute content-stretch flex items-center justify-between left-[48px] top-[24px] w-[calc(100%-96px)] z-10">
          <div className="flex flex-col font-medium justify-center leading-[0] not-italic text-[#012e50] text-[24px]">
            <p className="leading-[normal]">CUSTOMER DATA HUB</p>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="h-[60px] relative w-[61.333px] cursor-pointer"
          >
            <Image alt="Arrow" className="block max-w-none size-full" src={imgButton1} width={61} height={60} />
          </motion.div>
        </div>

        {/* Title and Description */}
        <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-[44px] not-italic text-[#012e50] top-[140px] w-[785px] z-10">
          <h2 className="flex flex-col font-semibold justify-center text-[32px] w-full leading-[normal]">
            Connect instantly. Engage meaningfully.
          </h2>
          <p className="flex flex-col justify-center text-[24px] w-[745px] leading-[1.4] font-normal">
            At Tribly, we believe every interaction with your customer should create impact. Our platform helps you engage customers in real-time through WhatsApp, SMS, and Email, ensuring your brand stays at the center of their attention.
          </p>
        </div>

        {/* Cards Container */}
        <div className="absolute bg-white h-[640px] left-[12px] overflow-hidden rounded-[32px] top-[100px] w-[calc(100%-24px)] z-5">
          <div className="absolute bg-gradient-to-b from-[#b2deff] h-[640px] left-1/2 rounded-[32px] to-[#ffffff] top-1/2 translate-x-[-50%] translate-y-[-50%] w-full z-0" />

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
            {/* Card 1: 1,250 customer profiles updated */}
            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[290px]">
                <p className="mb-0">
                  <span className="font-semibold text-[32px]">1,250</span>
                  <span className="text-[24px]"> </span>
                </p>
                <p className="text-[16px]">customer profiles updated — sync data across all touchpoints.</p>
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

            {/* Card 2: 890 purchase histories analyzed */}
            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="text-[24px]">890</span>
                  <span className="text-[40px]"> </span>
                  <span className="text-[20px]">{`purchase histories analyzed — `}</span>
                  <span className="font-normal text-[20px]">identify buying patterns.</span>
                </p>
              </div>
            </div>

            {/* Card 3: 567 behavioral insights generated */}
            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[4px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-black w-[348px]">
                <p className="leading-[1.6] whitespace-pre-wrap">
                  <span className="font-semibold text-[36px]">{`567 `}</span>
                  <span className="text-[20px]">{` behavioral insights generated — personalize customer experiences.`}</span>
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

            {/* Card 4: 234 customers segmented */}
            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[4px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="text-[40px]">{`234 `}</span>
                  <span className="font-normal text-[20px]">customers segmented by preferences — target them effectively.</span>
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

            {/* Card 5: 📊 1,890 data points collected */}
            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="font-semibold text-[49px]">📊 1,890</span>
                  <span className="text-[20px]">{` data points collected — build comprehensive customer profiles.`}</span>
                </p>
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[290px]">
                <p className="mb-0">
                  <span className="font-semibold text-[32px]">1,250</span>
                  <span className="text-[24px]"> </span>
                </p>
                <p className="text-[16px]">customer profiles updated — sync data across all touchpoints.</p>
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

            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="text-[24px]">890</span>
                  <span className="text-[40px]"> </span>
                  <span className="text-[20px]">{`purchase histories analyzed — `}</span>
                  <span className="font-normal text-[20px]">identify buying patterns.</span>
                </p>
              </div>
            </div>

            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[4px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-black w-[348px]">
                <p className="leading-[1.6] whitespace-pre-wrap">
                  <span className="font-semibold text-[36px]">{`567 `}</span>
                  <span className="text-[20px]">{` behavioral insights generated — personalize customer experiences.`}</span>
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

            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[4px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="text-[40px]">{`234 `}</span>
                  <span className="font-normal text-[20px]">customers segmented by preferences — target them effectively.</span>
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

            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="font-semibold text-[49px]">📊 1,890</span>
                  <span className="text-[20px]">{` data points collected — build comprehensive customer profiles.`}</span>
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
            {/* Card 1: 🔍 456 customer journeys mapped */}
            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[290px]">
                <p className="mb-0">
                  <span className="font-semibold text-[40px]">{`🔍 456 `}</span>
                  <span className="text-[20px]">customer</span>
                </p>
                <p className="text-[20px]">{` journeys mapped — optimize touchpoints for better conversion.`}</p>
              </div>
            </div>

            {/* Card 2: 123 customers with incomplete profiles */}
            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[290px]">
                <p className="font-semibold mb-0 text-[40px]">{`⚠️ 123 `}</p>
                <p className="text-[20px] whitespace-pre-wrap">{`customers with incomplete profiles — gather missing data`}</p>
              </div>
            </div>

            {/* Card 3: 789 High-value customer segments */}
            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6] mb-0">
                  <span className="font-semibold text-[32px]">789</span>
                  <span className="text-[24px]"> </span>
                </p>
                <p className="leading-[1.6] text-[16px] whitespace-pre-wrap">
                  <span>{`High-value customer segments — `}</span>
                  <span className="text-[#13923d]">prioritize engagement</span>
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

            {/* Card 4: 345 customers with rich profiles */}
            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="text-[32px]">345</span>
                  <span className="text-[20px]"> </span>
                  <span className="font-normal text-[16px]">customers with rich profiles — leverage data for personalization.</span>
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
            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[290px]">
                <p className="mb-0">
                  <span className="font-semibold text-[40px]">{`🔍 456 `}</span>
                  <span className="text-[20px]">customer</span>
                </p>
                <p className="text-[20px]">{` journeys mapped — optimize touchpoints for better conversion.`}</p>
              </div>
            </div>

            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[1.6] not-italic relative shrink-0 text-black w-[290px]">
                <p className="font-semibold mb-0 text-[40px]">{`⚠️ 123 `}</p>
                <p className="text-[20px] whitespace-pre-wrap">{`customers with incomplete profiles — gather missing data`}</p>
              </div>
            </div>

            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6] mb-0">
                  <span className="font-semibold text-[32px]">789</span>
                  <span className="text-[24px]"> </span>
                </p>
                <p className="leading-[1.6] text-[16px] whitespace-pre-wrap">
                  <span>{`High-value customer segments — `}</span>
                  <span className="text-[#13923d]">prioritize engagement</span>
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

            <div className="bg-white border-[#1e40af] border-[0.5px] border-solid box-border content-stretch flex flex-col gap-[10px] h-[180px] items-start justify-center px-[24px] py-[8px] relative rounded-[24px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-black w-[290px]">
                <p className="leading-[1.6]">
                  <span className="text-[32px]">345</span>
                  <span className="text-[20px]"> </span>
                  <span className="font-normal text-[16px]">customers with rich profiles — leverage data for personalization.</span>
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