
import React, { useState } from 'react';
import TypingAnimation from '../TypingAnimation';

const HeroSection = () => {
  const [line1Done, setLine1Done] = useState(false);
  const [line2Done, setLine2Done] = useState(false);

  return (
    <section className="relative pt-28 pb-28 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="parallax absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" data-speed="0.02" data-direction="scale"></div>
        <div className="parallax absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl" data-speed="-0.02" data-direction="rotate"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Terminal prompt */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-card border border-border text-primary text-sm font-mono mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            system.status: online
          </div>
          
          {/* Typing hero heading */}
          <div className="text-3xl sm:text-4xl md:text-5xl font-mono font-medium tracking-tight animate-fade-in mb-2">
            <span className="text-muted-foreground">&gt; </span>
            <TypingAnimation 
              text="initializing qa_pipeline..." 
              speed={40}
              onComplete={() => setLine1Done(true)}
            />
          </div>
          
          {line1Done && (
            <div className="text-xl sm:text-2xl font-mono text-primary animate-fade-in mt-4">
              <TypingAnimation 
                text="AI-Driven Quality Engineering" 
                speed={30}
                delay={300}
                onComplete={() => setLine2Done(true)}
              />
            </div>
          )}
          
          <p className={`mt-6 text-base text-muted-foreground font-mono animate-fade-in max-w-3xl mx-auto transition-opacity duration-500 ${line2Done ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
            // Autonomous QA agents, generative test automation, and CI/CD quality gates<br/>
            // that accelerate releases by up to 60% while reducing regression risk.
          </p>
          
          {/* Key benefits as code */}
          <div className={`mt-8 flex flex-wrap justify-center gap-3 text-sm font-mono animate-fade-in transition-opacity duration-500 ${line2Done ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: "0.15s" }}>
            <span className="px-3 py-1 rounded bg-primary/10 text-primary border border-primary/20">
              self_healing: true
            </span>
            <span className="px-3 py-1 rounded bg-accent/10 text-accent border border-accent/20">
              shift_left: enabled
            </span>
            <span className="px-3 py-1 rounded bg-[hsl(var(--terminal-amber))]/10 text-[hsl(var(--terminal-amber))] border border-[hsl(var(--terminal-amber))]/20">
              analytics: predictive
            </span>
            <span className="px-3 py-1 rounded bg-[hsl(var(--terminal-purple))]/10 text-[hsl(var(--terminal-purple))] border border-[hsl(var(--terminal-purple))]/20">
              scale: cloud
            </span>
          </div>
          
          {/* CTAs as terminal commands */}
          <div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in transition-opacity duration-500 ${line2Done ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded bg-primary text-primary-foreground font-mono font-medium hover:brightness-110 transition-all hover:scale-105"
            >
              $ book --strategy-session
            </a>
            <a 
              href="#services" 
              className="px-8 py-3 rounded bg-card border border-border text-primary font-mono hover:bg-secondary transition-all hover:scale-105"
            >
              $ demo --ai-testing
            </a>
          </div>
          
          {/* Stats as key-value */}
          <div className={`mt-12 font-mono text-sm animate-fade-in transition-opacity duration-500 ${line2Done ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: "0.25s" }}>
            <div className="inline-flex items-center gap-4 sm:gap-6 px-6 py-3 rounded bg-card border border-border">
              <span>
                <span className="text-accent">velocity</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-primary font-semibold">+60%</span>
              </span>
              <span className="text-border">|</span>
              <span>
                <span className="text-accent">regressions</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-primary font-semibold">-85%</span>
              </span>
              <span className="text-border">|</span>
              <span>
                <span className="text-accent">coverage</span>
                <span className="text-muted-foreground">: </span>
                <span className="text-primary font-semibold">3x</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - ASCII style */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center font-mono text-primary/50 animate-wave">
          <span className="text-xs">v</span>
          <span className="text-xs">v</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
