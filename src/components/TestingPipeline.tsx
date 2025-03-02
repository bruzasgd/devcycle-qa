
import React from 'react';

interface TestingPipelineProps {
  activeSteps: number;
  totalSteps: number;
}

const TestingPipeline: React.FC<TestingPipelineProps> = ({ activeSteps, totalSteps }) => {
  // Create an array representing each step in the pipeline
  const steps = Array.from({ length: totalSteps }, (_, i) => i < activeSteps);
  
  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-10 hidden lg:block">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200"></div>
        
        {/* Pipeline steps */}
        <div className="flex flex-col space-y-24">
          {steps.map((isActive, index) => (
            <div key={index} className="relative">
              {/* Crash test dummy-inspired node */}
              <div className={`w-12 h-12 rounded-full border-2 ${isActive ? 'border-black' : 'border-gray-300'} flex items-center justify-center overflow-hidden transition-all duration-500`}>
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-yellow-400"></div>
                  <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-black"></div>
                  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-black"></div>
                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-yellow-400"></div>
                  
                  {/* Show a checkmark or number based on active state */}
                  {isActive && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Connecting line to next step */}
              {index < steps.length - 1 && (
                <div className={`absolute left-6 top-12 w-1 h-24 ${isActive && steps[index + 1] ? 'bg-gradient-to-b from-black to-gray-300 transition-all duration-1000' : 'bg-gray-200'}`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestingPipeline;
