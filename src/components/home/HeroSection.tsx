import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-36 pb-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
        {/* Status pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card/60 backdrop-blur border border-border text-xs font-mono text-muted-foreground mb-8 animate-fade-in">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          AI-driven quality engineering
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight animate-fade-in leading-[1.05]">
          Ship faster.
          <br />
          <span className="gradient-text">Break less.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Autonomous QA agents, generative test automation, and CI/CD quality gates that accelerate releases by up to 60%.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:brightness-110 transition-all hover:scale-[1.02] shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
          >
            Book a strategy session
            <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-card/60 backdrop-blur border border-border text-foreground font-medium hover:bg-secondary transition-all"
          >
            Explore services
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {[
            { value: '+60%', label: 'release velocity' },
            { value: '-85%', label: 'regressions' },
            { value: '3×', label: 'test coverage' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-semibold gradient-text">{s.value}</div>
              <div className="mt-1 text-xs font-mono text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
