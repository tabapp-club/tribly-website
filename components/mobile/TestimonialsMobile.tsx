"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Figma assets
const imgAvatarImage180 = "http://localhost:3845/assets/c42678ed62236a5a8a4bcab0bbb62050b6afa076.png";
const imgAvatarImage181 = "http://localhost:3845/assets/2405e02a9413a640fe960350945e8e8286b9e420.png";
const imgAvatarImage182 = "http://localhost:3845/assets/07905147ffbba7b206b94aceb0fc9ee4568d309d.png";
const imgAvatarImage183 = "http://localhost:3845/assets/6eb5238afae3694f2a7851f6cbbc1ed0566b53e0.png";
const imgAvatarImage184 = "http://localhost:3845/assets/bf1ce766e29aa6f9014fbaca20461a4f1c43cfdb.png";

const testimonials = [
  {
    name: "Dr. Vidya Kadiyala",
    avatar: imgAvatarImage180,
    text: "Turn everyday transactions into an AI-driven two-way conversation to drive higher customer engagement, across almost every function and industry imaginable.",
    initial: "V",
    color: "bg-[#4A90E2]",
    borderColor: "#4A90E2",
  },
  {
    name: "Rajesh Kumar",
    avatar: imgAvatarImage181,
    text: "Tribly has transformed how we engage with our customers. The automation features save us hours every week while improving our retention rates significantly.",
    initial: "R",
    color: "bg-[#7B68EE]",
    borderColor: "#7B68EE",
  },
  {
    name: "Priya Sharma",
    avatar: imgAvatarImage182,
    text: "The insights we get from Tribly are game-changing. We can now predict customer behavior and act proactively to prevent churn.",
    initial: "P",
    color: "bg-[#50C878]",
    borderColor: "#50C878",
  },
  {
    name: "Amit Patel",
    avatar: null,
    text: "Best investment we made for our business. The ROI has been incredible, and our customer satisfaction scores have never been higher.",
    initial: "A",
    color: "bg-[#FFB347]",
    borderColor: "#FFB347",
  },
  {
    name: "Sneha Reddy",
    avatar: imgAvatarImage183,
    text: "The AI-powered campaigns are brilliant. They feel personal and relevant, which has dramatically improved our engagement rates.",
    initial: "S",
    color: "bg-[#FF69B4]",
    borderColor: "#FF69B4",
  },
  {
    name: "Vikram Singh",
    avatar: imgAvatarImage184,
    text: "Tribly's WhatsApp integration is seamless. Our customers love the instant communication, and it has boosted our repeat purchase rate.",
    initial: "V",
    color: "bg-[#9370DB]",
    borderColor: "#9370DB",
  },
];

export default function TestimonialsMobile() {
  return (
    <section className="relative w-full py-[87px]">
      <div className="max-w-[412px] mx-auto px-[22px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center text-black mb-[45px]">
          <div className="flex flex-col font-semibold justify-center text-[32px] w-[343px]">
            <p className="leading-[normal]">Loved by Businesses Like Yours</p>
          </div>
          <div className="flex flex-col font-light justify-center text-[20px] w-[285px]">
            <p className="leading-[normal]">See how real businesses use Tribly to grow smarter.</p>
          </div>
        </div>

        {/* Testimonial Cards - Row 1 */}
        <div className="relative h-[112.5px] overflow-hidden mb-[29.25px]">
          <motion.div
            className="flex gap-[13.5px] w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((testimonial, index) => (
              <div key={index} className="relative h-[112.5px] w-[337.5px] flex-shrink-0">
                <div 
                  className="absolute border-[0.563px] border-solid h-full left-0 rounded-[561.938px] top-0 w-full" 
                  style={{ borderColor: testimonial.borderColor }}
                />
                {testimonial.avatar ? (
                  <div className="absolute left-[6.75px] rounded-[90px] size-[101.25px] top-[5.63px] overflow-hidden">
                    <Image 
                      alt={testimonial.name} 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[90px] size-full" 
                      src={testimonial.avatar}
                      width={101}
                      height={101}
                    />
                  </div>
                ) : (
                  <div className={`absolute ${testimonial.color} left-[6.75px] overflow-clip rounded-[90px] size-[101.25px] top-[5.63px] flex items-center justify-center`}>
                    <p className="font-medium leading-none text-[49.5px] text-center text-white">
                      {testimonial.initial}
                    </p>
                  </div>
                )}
                <div className="absolute flex flex-col font-medium justify-center left-[124.14px] text-[13.5px] text-black text-nowrap top-[31.56px] translate-y-[-50%]">
                  <p className="leading-[normal] whitespace-pre">{testimonial.name}</p>
                </div>
                <div className="absolute flex flex-col font-light justify-center left-[124.14px] text-[9px] text-black top-[66.44px] translate-y-[-50%] w-[172.798px]">
                  <p className="leading-[normal]">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Testimonial Cards - Row 2 */}
        <div className="relative h-[112.5px] overflow-hidden">
          <motion.div
            className="flex gap-[13.5px] w-max"
            animate={{
              x: ["-50%", "0%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials.slice(3, 6), ...testimonials.slice(3, 6)].map((testimonial, index) => (
              <div key={index} className="relative h-[112.5px] w-[337.5px] flex-shrink-0">
                <div 
                  className="absolute border-[0.563px] border-solid h-full left-0 rounded-[561.938px] top-0 w-full" 
                  style={{ borderColor: testimonial.borderColor }}
                />
                {testimonial.avatar ? (
                  <div className="absolute left-[6.75px] rounded-[90px] size-[101.25px] top-[5.63px] overflow-hidden">
                    <Image 
                      alt={testimonial.name} 
                      className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[90px] size-full" 
                      src={testimonial.avatar}
                      width={101}
                      height={101}
                    />
                  </div>
                ) : (
                  <div className={`absolute ${testimonial.color} left-[6.75px] overflow-clip rounded-[90px] size-[101.25px] top-[5.63px] flex items-center justify-center`}>
                    <p className="font-medium leading-none text-[49.5px] text-center text-white">
                      {testimonial.initial}
                    </p>
                  </div>
                )}
                <div className="absolute flex flex-col font-medium justify-center left-[124.14px] text-[13.5px] text-black text-nowrap top-[31.56px] translate-y-[-50%]">
                  <p className="leading-[normal] whitespace-pre">{testimonial.name}</p>
                </div>
                <div className="absolute flex flex-col font-light justify-center left-[124.14px] text-[9px] text-black top-[66.44px] translate-y-[-50%] w-[172.798px]">
                  <p className="leading-[normal]">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

