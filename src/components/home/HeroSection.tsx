
import React from 'react';
import CrashTestLogo from '../CrashTestLogo';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(250,204,21,0.1),rgba(255,255,255,0))]"></div>
      
      {/* Animated background elements with more subtle movement */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="parallax absolute top-20 left-20 w-64 h-64 rounded-full bg-yellow-400/5 blur-3xl" data-speed="0.02" data-direction="scale"></div>
        <div className="parallax absolute bottom-10 right-10 w-96 h-96 rounded-full bg-yellow-500/5 blur-3xl" data-speed="-0.02" data-direction="rotate"></div>
        <div className="parallax absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-black/5 blur-xl" data-speed="0.04" data-direction="horizontal"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-4 animate-fade-in relative key-element">
            <CrashTestLogo size={80} className="relative" aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight animate-fade-in relative">
            <span className="relative inline-block">
              Professional QA Testing & Automation Services
            </span>
          </h1>
          <p className="mt-6 text-xl text-foreground/70 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Expert software quality assurance solutions: AI-powered test automation, E2E testing, CI/CD integration, performance testing, and visual regression. Elevate your software quality with proven QA methodologies trusted by industry leaders.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.2s" }}>
            <a 
              href="#services" 
              className="relative px-8 py-3 rounded-full bg-yellow-500 text-white shadow-sm hover:shadow-md transition-all hover:scale-105 overflow-hidden group cta"
              aria-label="Explore our QA testing services"
            >
              <span className="relative z-10">Explore QA Services</span>
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:animate-move-background"></span>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-white border border-gray-200 text-yellow-600 shadow-sm hover:shadow-md transition-all hover:scale-105 overflow-hidden group cta"
              aria-label="Schedule a QA consultation meeting"
            >
              <span className="relative z-10">Schedule Consultation</span>
              <span className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full bg-yellow-50/50"></span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated arrows indicator with better animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <div className="animate-wave">
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L10 9L19 1" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="animate-wave" style={{ animationDelay: "0.5s" }}>
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L10 9L19 1" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
