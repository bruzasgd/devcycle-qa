
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
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Index = () => {
  // State to track which testing services are visible on screen
  const [visibleServices, setVisibleServices] = useState<number>(0);
  const heroRef = useRef(null);
  
  // Using enhanced intersection observer
  const heroIsVisible = useIntersectionObserver({
    ref: heroRef,
    threshold: 0.3,
    triggerOnce: true
  });
  
  // Function to track visible services - will be attached to section visibility
  const trackServiceVisibility = (isVisible: boolean, serviceId: string) => {
    if (isVisible) {
      setVisibleServices(prev => {
        // Extract the service number from the ID (e.g., "service-3" gives us 3)
        const serviceNumber = parseInt(serviceId.split('-')[1]);
        // Return the maximum service number seen so far
        return Math.max(prev, serviceNumber);
      });
    }
  };

  return (
    <div className="min-h-screen relative antialiased">
      <SmoothScroll />
      <Header />
      
      {/* Testing Pipeline */}
      <TestingPipeline activeStep={visibleServices} totalSteps={7} />
      
      <main>
        {/* Hero Section */}
        <div ref={heroRef}>
          <HeroSection />
        </div>
        
        {/* Services Section */}
        <ServicesSection onVisibilityChange={trackServiceVisibility} />
        
        {/* Quality Impact Section */}
        <QualityImpactSection servicesUsed={visibleServices} />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
