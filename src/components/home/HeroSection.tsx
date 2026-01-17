
import React from 'react';
import CrashTestLogo from '../CrashTestLogo';

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(250,204,21,0.1),rgba(255,255,255,0))]"></div>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-yellow-400/5 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-yellow-500/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6 animate-fade-in">
            <CrashTestLogo size={64} aria-hidden="true" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight animate-fade-in">
            Ship Quality Software, <span className="text-primary">Faster</span>
          </h1>
          
          <p className="mt-5 text-lg sm:text-xl text-foreground/70 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: "0.1s" }}>
            QA automation & testing services that reduce bugs by 70% and accelerate your releases.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-sm hover:shadow-lg transition-all hover:scale-105"
              aria-label="Get a free QA consultation"
            >
              Get Free Consultation
            </a>
            <a 
              href="#services" 
              className="px-8 py-3.5 rounded-full bg-background border border-border text-foreground font-medium shadow-sm hover:shadow-md transition-all hover:scale-105"
              aria-label="View our QA services"
            >
              View Services
            </a>
          </div>
          
          {/* Quick value props */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-foreground/60 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>70% Faster Testing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>AI-Powered Automation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Enterprise Proven</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L10 9L19 1" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
