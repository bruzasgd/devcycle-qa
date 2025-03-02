
import React from "react";
import { CheckCircle, ImageIcon, X } from "lucide-react";
import { sizing } from "../../config/styleConfig";

const ScreenshotTestingAnimation: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="flex flex-col space-y-4">
          <div className="text-sm font-medium mb-2 text-center">Visual Regression Testing</div>
          
          {/* Image comparison visualization */}
          <div className="flex space-x-2 items-center">
            {/* Original screenshot */}
            <div className="relative border border-gray-200 rounded-md overflow-hidden bg-white">
              <div className="absolute top-0 left-0 bg-blue-500 text-white text-[8px] px-1">Expected</div>
              <div className="w-28 h-28 p-1 pt-3 grid grid-cols-3 grid-rows-3 gap-0.5">
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={`expected-${i}`} 
                    className={`${i === 4 ? 'bg-blue-100' : 'bg-gray-100'} rounded-sm`}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Comparison arrows */}
            <div className="flex flex-col items-center">
              <svg className="w-5 h-5 text-gray-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              <div className="text-[9px] font-medium text-gray-500">Compare</div>
            </div>
            
            {/* Actual screenshot */}
            <div className="relative border border-gray-200 rounded-md overflow-hidden bg-white">
              <div className="absolute top-0 left-0 bg-green-500 text-white text-[8px] px-1">Actual</div>
              <div className="w-28 h-28 p-1 pt-3 grid grid-cols-3 grid-rows-3 gap-0.5">
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={`actual-${i}`} 
                    className={`${i === 4 ? 'bg-blue-200' : 'bg-gray-100'} ${i === 4 ? 'border border-red-400' : ''} rounded-sm`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Diff result */}
          <div className="border border-gray-200 rounded-md p-2 bg-white/80">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <ImageIcon size={sizing.iconSize.sm} className="text-primary mr-1" />
                <span className="text-xs font-medium">Diff Result</span>
              </div>
              <div className="text-xs text-yellow-600 flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 mr-1"></span>
                1 difference
              </div>
            </div>
            <div className="relative h-16 bg-gray-50 rounded flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/3 w-1/3 h-1/3 bg-red-400 animate-pulse rounded-sm border border-red-500"></div>
              </div>
              <div className="relative z-10 bg-white/80 rounded px-2 py-1 text-[10px] border border-red-200">
                Center element color changed (#E6F0FF → #BFDBFE)
              </div>
            </div>
          </div>
          
          {/* Results and controls */}
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center">
              <button className="px-2 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded-md text-[10px] flex items-center mr-2">
                <CheckCircle size={12} className="mr-1" />
                Approve
              </button>
              <button className="px-2 py-0.5 bg-red-50 text-red-700 border border-red-200 rounded-md text-[10px] flex items-center">
                <X size={12} className="mr-1" />
                Reject
              </button>
            </div>
            <div className="text-gray-500 text-[9px]">
              Test: <span className="font-medium">LoginForm.spec</span>
            </div>
          </div>
        </div>
        
        {/* Tools indicating screenshot comparison */}
        <div className="absolute -top-8 -right-4 text-[8px] bg-gray-50 border border-gray-200 rounded px-1 py-0.5 shadow-sm">
          Tools: Percy, Applitools
        </div>
      </div>
    </div>
  );
};

export default ScreenshotTestingAnimation;
