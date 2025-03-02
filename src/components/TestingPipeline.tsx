
import React from "react";
import CrashTestLogo from "./CrashTestLogo";

interface TestingPipelineProps {
  activeStep: number;
  totalSteps: number;
}

const TestingPipeline: React.FC<TestingPipelineProps> = ({ activeStep, totalSteps }) => {
  return (
    <div className="fixed left-6 inset-y-0 z-30 flex items-center pointer-events-none lg:block hidden">
      <div className="h-[70vh] flex flex-col items-center justify-between py-8 relative">
        {/* Vertical pipeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
        
        {/* Active pipeline portion */}
        <div 
          className="absolute left-1/2 top-0 w-1 bg-yellow-500 transform -translate-x-1/2 transition-all duration-500"
          style={{ height: `${(activeStep / (totalSteps - 1)) * 100}%` }}
        ></div>
        
        {/* Testing stages with crash test logos */}
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div 
            key={index} 
            className="relative z-10"
          >
            <CrashTestLogo 
              size={36} 
              className={`transition-all duration-300 ${
                index <= activeStep 
                  ? 'animate-pulse-subtle' 
                  : 'opacity-30'
              }`} 
            />
            
            {/* Animated pulse effect for active stage */}
            {index === activeStep && (
              <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-30"></div>
            )}
            
            {/* Stage name */}
            <div className={`absolute left-12 top-1/2 transform -translate-y-1/2 whitespace-nowrap px-3 py-1 rounded-lg text-xs font-medium ${
              index <= activeStep 
                ? 'bg-yellow-100 text-yellow-800' 
                : 'bg-gray-100 text-gray-500'
            }`}>
              Stage {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestingPipeline;
