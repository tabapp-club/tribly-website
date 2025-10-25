import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CommunicationAutomation from "@/components/CommunicationAutomation";
import RetentionSection from "@/components/RetentionSection";
import EngagementSection from "@/components/EngagementSection";
import CustomerDataSection from "@/components/CustomerDataSection";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

// Mobile Components
import HeroMobile from "@/components/mobile/HeroMobile";
import AISectionMobile from "@/components/mobile/AISectionMobile";
import CommunicationAutomationMobile from "@/components/mobile/CommunicationAutomationMobile";
import RetentionSectionMobile from "@/components/mobile/RetentionSectionMobile";
import EngagementSectionMobile from "@/components/mobile/EngagementSectionMobile";
import CustomerDataSectionMobile from "@/components/mobile/CustomerDataSectionMobile";
import IndustriesMobile from "@/components/mobile/IndustriesMobile";
import TestimonialsMobile from "@/components/mobile/TestimonialsMobile";
import HowItWorksMobile from "@/components/mobile/HowItWorksMobile";
import ContactMobile from "@/components/mobile/ContactMobile";
import FooterMobile from "@/components/mobile/FooterMobile";

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Navbar />
      
      {/* Desktop Version - Hidden on mobile */}
      <div className="hidden md:block">
        <Hero />
        
        {/* AI Tagline Section */}
        <section className="pt-[124px] pb-12 px-6">
          <div className="max-w-[1440px] mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="relative inline-flex h-[59px] w-[86px]">
                <div className="absolute bg-[#862ef8] h-[58px] left-0 rounded-[99px] top-px w-[86px]" />
                <div className="absolute flex flex-col font-semibold justify-center leading-[0] left-[43px] not-italic text-[48px] text-center text-nowrap text-white top-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <p className="leading-[1.4] whitespace-pre">AI</p>
                </div>
              </div>
              <h2 className="text-[48px] font-semibold text-black leading-[normal] whitespace-pre">
                that brings your customers back
              </h2>
            </div>
            <p className="text-[24px] text-black max-w-[1002px] mx-auto leading-normal">
              Tribly gives your business the AI advantage—smarter targeting, personalized automation, and insights that bring customers back again and again. Perfect for businesses in Andhra Pradesh, Telangana, and Bengaluru.
            </p>
          </div>
        </section>

        <CommunicationAutomation />
        <RetentionSection />
        <div className="h-[164px]" />
        <EngagementSection />
        <div className="h-[164px]" />
        <CustomerDataSection />
        <div className="h-[124px]" />
        <Industries />
        <Testimonials />
        <HowItWorks />
        <Contact />
        <Footer />
      </div>

      {/* Mobile Version - Hidden on desktop */}
      <div className="block md:hidden">
        <HeroMobile />
        <AISectionMobile />
        <CommunicationAutomationMobile />
        <RetentionSectionMobile />
        <EngagementSectionMobile />
        <CustomerDataSectionMobile />
        <IndustriesMobile />
        <TestimonialsMobile />
        <HowItWorksMobile />
        <ContactMobile />
        <FooterMobile />
      </div>
    </main>
  );
}

