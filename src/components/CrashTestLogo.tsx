
import React from "react";

interface CrashTestLogoProps {
  size?: number;
  className?: string;
}

const CrashTestLogo: React.FC<CrashTestLogoProps> = ({ 
  size = 50,
  className = ""
}) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-0 rounded-full border-4 border-gray-800"></div>
      <div className="absolute inset-0">
        <div className="w-full h-1/2 flex">
          <div className="w-1/2 h-full bg-black"></div>
          <div className="w-1/2 h-full bg-yellow-400"></div>
        </div>
        <div className="w-full h-1/2 flex">
          <div className="w-1/2 h-full bg-yellow-400"></div>
          <div className="w-1/2 h-full bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default CrashTestLogo;
