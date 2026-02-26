
import React from 'react';
import { Shield, TrendingUp, Zap, Clock } from 'lucide-react';
import QualityMeter from '../QualityMeter';

interface QualityImpactSectionProps {
  servicesUsed: number;
}

const QualityImpactSection: React.FC<QualityImpactSectionProps> = ({ servicesUsed }) => {
  return (
    <section className="py-12 sm:py-16 border-t border-border">
      <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-20">
        <div className="text-center mb-10 reveal">
          <h2 className="text-2xl sm:text-3xl font-mono font-medium mb-3 text-foreground">
            <span className="text-primary/40">## </span>Measurable Quality Outcomes
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm font-mono">
            // Optimized QA processes deliver compounding efficiency gains
          </p>
        </div>
        
        <div className="flex justify-center mb-10 reveal">
          <QualityMeter servicesUsed={servicesUsed} totalServices={10} />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
          {[
            { icon: Shield, label: "reliability", value: "99.9%", desc: "uptime with proactive defect prevention", color: "text-primary" },
            { icon: TrendingUp, label: "regressions", value: "-85%", desc: "reduction in production defects", color: "text-accent" },
            { icon: Zap, label: "ux_quality", value: "A+", desc: "pixel-perfect visual experiences", color: "text-[hsl(var(--terminal-amber))]" },
            { icon: Clock, label: "velocity", value: "+60%", desc: "acceleration in deployment cycles", color: "text-[hsl(var(--terminal-purple))]" },
          ].map(({ icon: Icon, label, value, desc, color }) => (
            <div key={label} className="terminal-window">
              <div className="terminal-titlebar">
                <div className="terminal-dot-red" />
                <div className="terminal-dot-yellow" />
                <div className="terminal-dot-green" />
              </div>
              <div className="p-4 font-mono text-xs space-y-1">
                <div><span className="text-muted-foreground">{"{"}</span></div>
                <div className="pl-3">
                  <span className="text-accent">"{label}"</span>
                  <span className="text-muted-foreground">: </span>
                  <span className={`font-semibold text-lg ${color}`}>{value}</span>
                </div>
                <div className="pl-3 text-muted-foreground text-[10px]">// {desc}</div>
                <div><span className="text-muted-foreground">{"}"}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityImpactSection;
