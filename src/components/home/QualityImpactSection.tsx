
import React from 'react';
import QualityMeter from '../QualityMeter';
import CrashTestLogo from '../CrashTestLogo';
import { CheckIcon, XIcon, FileCheck, Clock } from "lucide-react";

interface QualityImpactSectionProps {
  servicesUsed: number;
}

const QualityImpactSection: React.FC<QualityImpactSectionProps> = ({ servicesUsed }) => {
  return (
    <section className="py-14 bg-yellow-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <CrashTestLogo size={40} />
            </div>
          </div>
          <h2 className="text-3xl font-medium mb-4 reveal">See the Quality Impact</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto reveal">
            Watch how your software quality improves as you implement more testing strategies in your development process.
          </p>
        </div>
        
        <QualityMeter servicesUsed={servicesUsed} totalServices={9} />
        
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-yellow-100 transform transition-all hover:scale-105 hover:shadow-md">
            <div className="flex items-center mb-4">
              <div className="mr-4 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center relative key-element">
                <CheckIcon className="h-5 w-5 text-yellow-500" />
              </div>
              <h3 className="font-medium">Higher Reliability</h3>
            </div>
            <p className="text-sm text-foreground/70">
              Reduce bugs and system failures with comprehensive testing strategies.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-yellow-100 transform transition-all hover:scale-105 hover:shadow-md">
            <div className="flex items-center mb-4">
              <div className="mr-4 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center relative key-element">
                <XIcon className="h-5 w-5 text-yellow-500" />
              </div>
              <h3 className="font-medium">Fewer Regressions</h3>
            </div>
            <p className="text-sm text-foreground/70">
              Prevent old bugs from reappearing with automated regression testing.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-yellow-100 transform transition-all hover:scale-105 hover:shadow-md">
            <div className="flex items-center mb-4">
              <div className="mr-4 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center relative key-element">
                <FileCheck className="h-5 w-5 text-yellow-500" />
              </div>
              <h3 className="font-medium">Better UX</h3>
            </div>
            <p className="text-sm text-foreground/70">
              Deliver smooth, consistent user experiences across all platforms and devices.
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-yellow-100 transform transition-all hover:scale-105 hover:shadow-md">
            <div className="flex items-center mb-4">
              <div className="mr-4 w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center relative key-element">
                <Clock className="h-5 w-5 text-yellow-500" />
              </div>
              <h3 className="font-medium">Faster Releases</h3>
            </div>
            <p className="text-sm text-foreground/70">
              Speed up your release cycles with automated testing and CI/CD integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityImpactSection;
