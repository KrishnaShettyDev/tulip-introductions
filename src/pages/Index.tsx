import { useEffect, useRef } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import BeforeAppsSection from "@/components/landing/BeforeAppsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ComparisonSection from "@/components/landing/ComparisonSection";
import NinetiesPrinciplesSection from "@/components/landing/NinetiesPrinciplesSection";
import TrustSection from "@/components/landing/TrustSection";
import RealDatesSection from "@/components/landing/RealDatesSection";
import FAQSection from "@/components/landing/FAQSection";
import WaitlistSection from "@/components/landing/WaitlistSection";
import FooterSection from "@/components/landing/FooterSection";

const Index = () => {
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionsRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionsRef} className="min-h-screen bg-background paper-texture">
      <Navbar />
      <HeroSection />
      <BeforeAppsSection />
      <HowItWorksSection />
      <ComparisonSection />
      <NinetiesPrinciplesSection />
      <TrustSection />
      <RealDatesSection />
      <FAQSection />
      <WaitlistSection />
      <FooterSection />
    </div>
  );
};

export default Index;
