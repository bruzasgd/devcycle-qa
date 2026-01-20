
import React from 'react';
import { Shield, TrendingUp, Zap, Clock } from 'lucide-react';
import QualityMeter from '../QualityMeter';

interface QualityImpactSectionProps {
  servicesUsed: number;
}

const QualityImpactSection: React.FC<QualityImpactSectionProps> = ({ servicesUsed }) => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-background to-yellow-50/30">
      <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-20">
        <div className="text-center mb-10 reveal">
          <h2 className="text-2xl sm:text-3xl font-medium mb-3">
            Measurable Quality Outcomes
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto text-sm">
            Optimized QA processes deliver compounding efficiency gains across your entire software delivery lifecycle.
          </p>
        </div>
        
        <div className="flex justify-center mb-10 reveal">
          <QualityMeter servicesUsed={servicesUsed} totalServices={11} />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal">
          <div className="text-center p-4 rounded-lg bg-background border border-border shadow-sm">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 mb-3">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-medium text-sm mb-1">Higher Reliability</h3>
            <p className="text-xs text-foreground/60">99.9% uptime with proactive defect prevention</p>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-background border border-border shadow-sm">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 mb-3">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-medium text-sm mb-1">Fewer Regressions</h3>
            <p className="text-xs text-foreground/60">85% reduction in production defects</p>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-background border border-border shadow-sm">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 mb-3">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-medium text-sm mb-1">Better UX</h3>
            <p className="text-xs text-foreground/60">Visual QA ensures pixel-perfect experiences</p>
          </div>
          
          <div className="text-center p-4 rounded-lg bg-background border border-border shadow-sm">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 mb-3">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-medium text-sm mb-1">Faster Releases</h3>
            <p className="text-xs text-foreground/60">60% acceleration in deployment cycles</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityImpactSection;
