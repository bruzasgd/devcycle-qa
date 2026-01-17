
import { useState } from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SmoothScroll from "../components/SmoothScroll";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "../components/home/ServicesSection";
import QualityImpactSection from "../components/home/QualityImpactSection";
import ClientExperienceSection from "../components/home/ClientExperienceSection";
import { trackServiceVisibility } from "../utils/visibilityTracking";

const Index = () => {
  const [visibleServices, setVisibleServices] = useState<number>(0);
  
  const handleServiceVisibility = (isVisible: boolean, serviceId: string) => {
    trackServiceVisibility(isVisible, serviceId, setVisibleServices);
  };

  return (
    <div className="min-h-screen relative antialiased">
      <SmoothScroll />
      <Header />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Social Proof - Right after hero */}
        <ClientExperienceSection />
        
        {/* Services Section */}
        <ServicesSection onVisibilityChange={handleServiceVisibility} />
        
        {/* Results/Stats Section */}
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
