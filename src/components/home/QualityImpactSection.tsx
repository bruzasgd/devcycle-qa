
import React from 'react';
import { TrendingUp, Bug, Zap, Users } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "70%",
    label: "Faster Testing",
    description: "Reduce testing time with automation"
  },
  {
    icon: Bug,
    value: "85%",
    label: "Fewer Bugs",
    description: "Catch issues before production"
  },
  {
    icon: Zap,
    value: "3x",
    label: "Faster Releases",
    description: "Ship features confidently"
  },
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    description: "Enterprise teams served"
  }
];

interface QualityImpactSectionProps {
  servicesUsed: number;
}

const QualityImpactSection: React.FC<QualityImpactSectionProps> = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">
            Results That Matter
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Our clients see measurable improvements in their software quality.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="bg-background rounded-xl p-6 text-center shadow-sm border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="font-medium text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-foreground/60">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityImpactSection;
