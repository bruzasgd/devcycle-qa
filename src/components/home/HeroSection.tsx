
import React from 'react';
import CrashTestLogo from '../CrashTestLogo';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(250,204,21,0.1),rgba(255,255,255,0))]"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="parallax absolute top-20 left-20 w-64 h-64 rounded-full bg-yellow-400/5 blur-3xl" data-speed="0.02" data-direction="scale"></div>
        <div className="parallax absolute bottom-10 right-10 w-96 h-96 rounded-full bg-yellow-500/5 blur-3xl" data-speed="-0.02" data-direction="rotate"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-4 animate-fade-in">
            <CrashTestLogo size={80} aria-hidden="true" />
          </div>
          
          {/* Trust signal chip */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-100 border border-yellow-200 text-yellow-800 text-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            Trusted by Enterprise Teams Worldwide
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight animate-fade-in">
            AI-Driven Quality Engineering
          </h1>
          <p className="mt-6 text-xl text-foreground/70 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: "0.1s" }}>
            Autonomous QA agents, generative test automation, and CI/CD quality gates that accelerate releases by up to 60% while reducing regression risk.
          </p>
          
          {/* Key benefits */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-foreground/60 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Self-Healing Automation
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Shift-Left Testing
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Predictive Analytics
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              Cloud-Scale QA
            </span>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full bg-yellow-500 text-white shadow-sm hover:shadow-md transition-all hover:scale-105 font-medium"
            >
              Book a QA Strategy Session
            </a>
            <a 
              href="#services" 
              className="px-8 py-3 rounded-full bg-white border border-gray-200 text-yellow-600 shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              See AI Testing in Action
            </a>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <div className="text-center">
              <div className="text-2xl font-semibold text-primary">60%</div>
              <div className="text-xs text-foreground/60">Faster Releases</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-primary">85%</div>
              <div className="text-xs text-foreground/60">Less Regression</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-primary">3x</div>
              <div className="text-xs text-foreground/60">Coverage Increase</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
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
