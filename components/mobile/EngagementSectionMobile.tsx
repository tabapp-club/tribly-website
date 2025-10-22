"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Figma assets
const imgAvatarImage60 = "http://localhost:3845/assets/c7cb4ef30d35272d3418aee23b79a17b9ec2f983.png";
const imgAvatarImage61 = "http://localhost:3845/assets/ff38e6a7ebbf24ebe4fe502ad5d7aa6690fc7f61.png";
const imgAvatarImage62 = "http://localhost:3845/assets/2012c3d4d964e59979626fd96ad25fab7fdeeb09.png";
const imgAvatarImage63 = "http://localhost:3845/assets/5745c570278b3f0eecb319f62c521279924509b0.png";
const imgAvatarImage48 = "http://localhost:3845/assets/67fee70178eb4d04731f74d6f2e21b9976bd1a2c.png";
const imgAvatarImage49 = "http://localhost:3845/assets/e594627b1d75c62e5f161737fee57c100f4c4323.png";
const imgAvatarImage50 = "http://localhost:3845/assets/7d3e9fb44d63d644644132f36d1434f46c1cf8af.png";
const imgAvatarImage51 = "http://localhost:3845/assets/727dde92b9ecafef047fdf08408808ed119d178e.png";
const imgButton = "http://localhost:3845/assets/5f0ea243307a5cfa54b65e10058b6641c8421e98.svg";
const imgStar = "http://localhost:3845/assets/9a4e447f0372156a9b3d9b91f12545a6144a7af3.svg";
const imgStarFilled = "http://localhost:3845/assets/2d8bbb34e1685eb52d12ca9634dc786316a97174.svg";
const imgStarEmpty = "http://localhost:3845/assets/1a4eb2a9f72ae7e31af6bdeb5560f99a8eeb3791.svg";
const imgButton2 = "http://localhost:3845/assets/07438a4b4d09d942923c75774025ffbf5f37f4a0.svg";

export default function EngagementSectionMobile() {
  return (
    <section className="relative w-full px-[8px] py-[60px]">
      <div className="relative h-[843px] w-full max-w-[396px] mx-auto">
        {/* Background gradient */}
        <div className="absolute bg-gradient-to-b from-[#f1ecff] h-[752px] left-1/2 rounded-[40px] to-[#ffffff] to-[99.99%] top-0 translate-x-[-50%] w-[396px]" />
        
        {/* Header */}
        <div className="absolute box-border content-stretch flex items-center justify-between left-[16px] px-[24px] py-0 top-[30px] w-[368px] z-10">
          <div className="basis-0 flex flex-col font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#0e0234] text-[24px]">
            <p className="leading-[normal]">ENGAGEMENT</p>
          </div>
          <div className="h-[46px] relative shrink-0 w-[47.022px]">
            <Image alt="Button" className="block max-w-none size-full" src={imgButton2} width={47} height={46} />
          </div>
        </div>

        {/* Content Text */}
        <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[0] left-[24px] not-italic text-[#0e0234] top-[122px] w-[348px] z-10">
          <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[32px] w-full">
            <p className="leading-[normal]">Connect instantly. Engage meaningfully.</p>
          </div>
          <div className="flex flex-col font-normal justify-center relative shrink-0 text-[24px] w-full">
            <p className="leading-[1.4]">At Tribly, we believe every interaction with your customer should create impact. Our platform helps you engage customers in real-time through WhatsApp, SMS, and Email, ensuring your brand stays at the center of their attention.</p>
          </div>
        </div>

        {/* Animated cards container */}
        <div className="absolute h-[737px] left-[8px] overflow-clip top-[106px] w-[380px] z-0">
          {/* Inner background gradient */}
          <div className="absolute bg-gradient-to-b from-[#e1d8ff] h-[742px] left-1/2 rounded-[32px] to-[#ffffff] top-[calc(50%+2.5px)] translate-x-[-50%] translate-y-[-50%] w-[380px]" />
          
          {/* Scrolling cards - Row 1 (bottom row) */}
          <motion.div
            className="absolute content-stretch flex gap-[12px] items-center top-[565.13px] z-10"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Card 1: 180 customers opened WhatsApp messages */}
            <div className="bg-white border-[#9747ff] border-[0.281px] border-solid box-border content-stretch flex flex-col gap-[5.625px] h-[101.25px] items-start justify-center px-[13.5px] py-[4.5px] relative rounded-[13.5px] shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[1.6] not-italic relative shrink-0 text-[0px] text-black w-[163.125px]">
                <p className="mb-0">
                  <span className="font-semibold not-italic text-[18px]">180</span>
                  <span className="text-[13.5px]"> </span>
                </p>
                <p className="text-[9px]">customers opened WhatsApp messages — follow up with personalized offers.</p>
              </div>
              <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex items-center pl-[4.5px] pr-[13.5px] py-[4.5px] relative shrink-0">
                  <div className="border-[1.125px] border-solid border-white mr-[-9px] relative rounded-[30px] shrink-0 size-[27px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgAvatarImage60} width={27} height={27} />
                  </div>
                  <div className="border-[1.125px] border-solid border-white mr-[-9px] relative rounded-[30px] shrink-0 size-[27px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgAvatarImage61} width={27} height={27} />
                  </div>
                  <div className="border-[1.125px] border-solid border-white mr-[-9px] relative rounded-[30px] shrink-0 size-[27px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgAvatarImage62} width={27} height={27} />
                  </div>
                  <div className="border-[1.125px] border-solid border-white mr-[-9px] relative rounded-[30px] shrink-0 size-[27px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgAvatarImage63} width={27} height={27} />
                  </div>
                </div>
                <div className="h-[21.461px] relative shrink-0 w-[21.938px]">
                  <Image alt="" className="block max-w-none size-full" src={imgButton} width={21} height={21} />
                </div>
              </div>
            </div>

            {/* Card 2: 95 customers clicked email links */}
            <div className="bg-white border-[#9747ff] border-[0.281px] border-solid box-border content-stretch flex flex-col gap-[5.625px] h-[101.25px] items-start justify-center px-[13.5px] py-[4.5px] relative rounded-[13.5px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black w-[163.125px]">
                <p className="leading-[1.6]">
                  <span className="text-[13.5px]">95</span>
                  <span className="text-[22.5px]"> </span>
                  <span className="text-[11.25px]">customers clicked email links — </span>
                  <span className="font-normal not-italic text-[11.25px]">send them targeted content.</span>
                </p>
              </div>
            </div>

            {/* Card 3: 320 SMS messages delivered */}
            <div className="bg-white border-[#9747ff] border-[0.281px] border-solid box-border content-stretch flex flex-col gap-[2.25px] h-[101.25px] items-start justify-center px-[13.5px] py-[4.5px] relative rounded-[13.5px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black w-[195.75px]">
                <p className="leading-[1.6] whitespace-pre-wrap">
                  <span className="font-semibold not-italic text-[20.25px]">320 </span>
                  <span className="text-[11.25px]"> SMS messages delivered successfully — track engagement rates.</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex items-center pl-[4.5px] pr-[13.5px] py-[4.5px] relative shrink-0">
                  <div className="mr-[-9px] relative rounded-[24px] shrink-0 size-[27px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgAvatarImage48} width={27} height={27} />
                  </div>
                  <div className="mr-[-9px] relative rounded-[24px] shrink-0 size-[27px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgAvatarImage49} width={27} height={27} />
                  </div>
                  <div className="mr-[-9px] relative rounded-[24px] shrink-0 size-[27px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgAvatarImage50} width={27} height={27} />
                  </div>
                  <div className="mr-[-9px] relative rounded-[24px] shrink-0 size-[27px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgAvatarImage51} width={27} height={27} />
                  </div>
                </div>
                <div className="h-[21.461px] relative shrink-0 w-[21.938px]">
                  <Image alt="" className="block max-w-none size-full" src={imgButton} width={21} height={21} />
                </div>
              </div>
            </div>

            {/* Card 4: 45 customers replied to messages */}
            <div className="bg-white border-[#9747ff] border-[0.281px] border-solid box-border content-stretch flex flex-col gap-[2.25px] h-[101.25px] items-start justify-center px-[13.5px] py-[4.5px] relative rounded-[13.5px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black w-[163.125px]">
                <p className="leading-[1.6]">
                  <span className="text-[22.5px]">45 </span>
                  <span className="font-normal not-italic text-[11.25px]">customers replied to messages — respond quickly to build relationships.</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[6.75px] items-center justify-center relative shrink-0 w-[163.125px]">
                <div className="h-[19.125px] relative shrink-0 w-[20.25px]">
                  <Image alt="" className="block max-w-none size-full" src={imgStar} width={20} height={19} />
                </div>
                <div className="h-[19.125px] relative shrink-0 w-[20.25px]">
                  <Image alt="" className="block max-w-none size-full" src={imgStarFilled} width={20} height={19} />
                </div>
                <div className="h-[19.125px] relative shrink-0 w-[20.25px]">
                  <Image alt="" className="block max-w-none size-full" src={imgStarFilled} width={20} height={19} />
                </div>
                <div className="h-[19.125px] relative shrink-0 w-[20.25px]">
                  <Image alt="" className="block max-w-none size-full" src={imgStarEmpty} width={20} height={19} />
                </div>
                <div className="h-[19.125px] relative shrink-0 w-[20.25px]">
                  <Image alt="" className="block max-w-none size-full" src={imgStarEmpty} width={20} height={19} />
                </div>
              </div>
            </div>

            {/* Card 5: 78 customers shared content */}
            <div className="bg-white border-[#9747ff] border-[0.281px] border-solid box-border content-stretch flex flex-col gap-[5.625px] h-[101.25px] items-start justify-center px-[13.5px] py-[4.5px] relative rounded-[13.5px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black w-[163.125px]">
                <p className="leading-[1.6]">
                  <span className="font-semibold not-italic text-[22.5px]"> </span>
                  <span className="font-semibold not-italic text-[27.563px]">📱 78</span>
                  <span className="text-[11.25px]"> customers shared content — amplify your reach.</span>
                </p>
              </div>
            </div>

            {/* Duplicate cards for seamless loop */}
            <div className="bg-white border-[#9747ff] border-[0.281px] border-solid box-border content-stretch flex flex-col gap-[5.625px] h-[101.25px] items-start justify-center px-[13.5px] py-[4.5px] relative rounded-[13.5px] shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[1.6] not-italic relative shrink-0 text-[0px] text-black w-[163.125px]">
                <p className="mb-0">
                  <span className="font-semibold not-italic text-[18px]">180</span>
                  <span className="text-[13.5px]"> </span>
                </p>
                <p className="text-[9px]">customers opened WhatsApp messages — follow up with personalized offers.</p>
              </div>
            </div>
          </motion.div>
          
          {/* Scrolling cards - Row 2 (top row) */}
          <motion.div
            className="absolute content-stretch flex gap-[12px] items-center top-[451px] z-10"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Card 1: 156 customers engaged with polls */}
            <div className="bg-white border-[#9747ff] border-[0.281px] border-solid box-border content-stretch flex flex-col gap-[5.625px] h-[101.25px] items-start justify-center px-[13.5px] py-[4.5px] relative rounded-[13.5px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[1.6] not-italic relative shrink-0 text-[0px] text-black w-[163.125px]">
                <p className="mb-0">
                  <span className="font-semibold not-italic text-[22.5px]">📊 156 </span>
                  <span className="text-[11.25px]">customers</span>
                </p>
                <p className="text-[11.25px]"> engaged with polls — gather valuable feedback.</p>
              </div>
            </div>

            {/* Card 2: 89 customers clicked CTAs */}
            <div className="bg-white border-[#9747ff] border-[0.281px] border-solid box-border content-stretch flex flex-col gap-[5.625px] h-[101.25px] items-start justify-center px-[13.5px] py-[4.5px] relative rounded-[13.5px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[1.6] not-italic relative shrink-0 text-[0px] text-black w-[163.125px]">
                <p className="font-semibold mb-0 text-[22.5px]">🎯 89 </p>
                <p className="text-[11.25px] whitespace-pre-wrap">customers clicked CTAs — optimize conversion paths</p>
              </div>
            </div>

            {/* Card 3: 234 customers viewed stories */}
            <div className="bg-white border-[#9747ff] border-[0.281px] border-solid box-border content-stretch flex flex-col gap-[5.625px] h-[101.25px] items-start justify-center px-[13.5px] py-[4.5px] relative rounded-[13.5px] shrink-0">
              <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black w-[163.125px]">
                <p className="leading-[1.6] mb-0">
                  <span className="font-semibold not-italic text-[18px]">234</span>
                  <span className="text-[13.5px]"> </span>
                </p>
                <p className="leading-[1.6] text-[9px] whitespace-pre-wrap">
                  <span>customers viewed stories — </span>
                  <span className="text-[#9747ff]">boost brand awareness</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[9px] items-center relative shrink-0 w-full">
                <div className="box-border content-stretch flex items-center pl-[4.5px] pr-[13.5px] py-[4.5px] relative shrink-0">
                  <div className="mr-[-9px] relative rounded-[24px] shrink-0 size-[27px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgAvatarImage48} width={27} height={27} />
                  </div>
                  <div className="mr-[-9px] relative rounded-[24px] shrink-0 size-[27px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgAvatarImage49} width={27} height={27} />
                  </div>
                  <div className="mr-[-9px] relative rounded-[24px] shrink-0 size-[27px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgAvatarImage50} width={27} height={27} />
                  </div>
                  <div className="mr-[-9px] relative rounded-[24px] shrink-0 size-[27px]">
                    <Image alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[24px] size-full" src={imgAvatarImage51} width={27} height={27} />
                  </div>
                </div>
                <div className="h-[21.461px] relative shrink-0 w-[21.938px]">
                  <Image alt="" className="block max-w-none size-full" src={imgButton} width={21} height={21} />
                </div>
              </div>
            </div>

            {/* Card 4: 67 customers joined events */}
            <div className="bg-white border-[#9747ff] border-[0.281px] border-solid box-border content-stretch flex flex-col gap-[5.625px] h-[101.25px] items-start justify-center px-[13.5px] py-[4.5px] relative rounded-[13.5px] shrink-0">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-black w-[163.125px]">
                <p className="leading-[1.6]">
                  <span className="text-[18px]">67</span>
                  <span className="text-[11.25px]"> </span>
                  <span className="font-normal not-italic text-[9px]">customers joined events — foster community engagement.</span>
                </p>
              </div>
              <div className="content-stretch flex gap-[6.75px] items-center justify-center relative shrink-0 w-[163.125px]">
                <div className="h-[19.125px] relative shrink-0 w-[20.25px]">
                  <Image alt="" className="block max-w-none size-full" src={imgStar} width={20} height={19} />
                </div>
                <div className="h-[19.125px] relative shrink-0 w-[20.25px]">
                  <Image alt="" className="block max-w-none size-full" src={imgStarFilled} width={20} height={19} />
                </div>
                <div className="h-[19.125px] relative shrink-0 w-[20.25px]">
                  <Image alt="" className="block max-w-none size-full" src={imgStarFilled} width={20} height={19} />
                </div>
                <div className="h-[19.125px] relative shrink-0 w-[20.25px]">
                  <Image alt="" className="block max-w-none size-full" src={imgStarEmpty} width={20} height={19} />
                </div>
                <div className="h-[19.125px] relative shrink-0 w-[20.25px]">
                  <Image alt="" className="block max-w-none size-full" src={imgStarEmpty} width={20} height={19} />
                </div>
              </div>
            </div>

            {/* Duplicate for seamless loop */}
            <div className="bg-white border-[#9747ff] border-[0.281px] border-solid box-border content-stretch flex flex-col gap-[5.625px] h-[101.25px] items-start justify-center px-[13.5px] py-[4.5px] relative rounded-[13.5px] shrink-0">
              <div className="flex flex-col font-normal justify-center leading-[1.6] not-italic relative shrink-0 text-[0px] text-black w-[163.125px]">
                <p className="mb-0">
                  <span className="font-semibold not-italic text-[22.5px]">📊 156 </span>
                  <span className="text-[11.25px]">customers</span>
                </p>
                <p className="text-[11.25px]"> engaged with polls — gather valuable feedback.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

