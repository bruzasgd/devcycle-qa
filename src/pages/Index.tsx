
import { useState, useRef } from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SmoothScroll from "../components/SmoothScroll";
import TestingPipeline from "../components/TestingPipeline";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import QualityImpactSection from "../components/home/QualityImpactSection";
import ClientExperienceSection from "../components/home/ClientExperienceSection";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { trackServiceVisibility } from "../utils/visibilityTracking";

const Index = () => {
  const [visibleServices, setVisibleServices] = useState<number>(0);
  const heroRef = useRef(null);
  
  useIntersectionObserver({
    ref: heroRef,
    threshold: 0.3,
    triggerOnce: true
  });
  
  const handleServiceVisibility = (isVisible: boolean, serviceId: string) => {
    trackServiceVisibility(isVisible, serviceId, setVisibleServices);
  };

  return (
    <div className="min-h-screen relative antialiased">
      <SmoothScroll />
      <Header />
      
      <TestingPipeline activeStep={visibleServices} totalSteps={9} />
      
      <main>
        <div ref={heroRef}>
          <HeroSection />
        </div>
        
        <ServicesSection onVisibilityChange={handleServiceVisibility} />
        
        <QualityImpactSection servicesUsed={visibleServices} />
        
        <Contact />
        
        <ClientExperienceSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
