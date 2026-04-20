import React from 'react';
import { Shield, TrendingUp, Zap, Clock } from 'lucide-react';

interface QualityImpactSectionProps {
  servicesUsed: number;
}

const stats = [
  { icon: Shield, label: 'Reliability', value: '99.9%', desc: 'uptime with proactive defect prevention' },
  { icon: TrendingUp, label: 'Regressions', value: '-85%', desc: 'reduction in production defects' },
  { icon: Zap, label: 'UX Quality', value: 'A+', desc: 'pixel-perfect visual experiences' },
  { icon: Clock, label: 'Velocity', value: '+60%', desc: 'acceleration in deployment cycles' },
];

const QualityImpactSection: React.FC<QualityImpactSectionProps> = () => {
  return (
    <section className="py-24 sm:py-28 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <div className="chip mb-5">Outcomes</div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Measurable quality, <span className="gradient-text">compounded</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-border/60">
          {stats.map(({ icon: Icon, label, value, desc }) => (
            <div key={label} className="bg-background/95 p-8 hover:bg-card/60 transition-colors">
              <Icon size={20} strokeWidth={1.75} className="text-primary mb-4" />
              <div className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">{value}</div>
              <div className="mt-1 text-xs font-mono text-primary/80 uppercase tracking-wider">{label}</div>
              <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityImpactSection;
