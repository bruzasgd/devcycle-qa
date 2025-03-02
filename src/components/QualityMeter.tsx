
import React from "react";
import { qualityIndicators } from "../config/styleConfig";

interface QualityMeterProps {
  servicesUsed: number;
  totalServices: number;
}

const QualityMeter: React.FC<QualityMeterProps> = ({ servicesUsed, totalServices }) => {
  // Calculate percentage of services being used
  const percentage = (servicesUsed / totalServices) * 100;
  
  // Calculate quality metrics based on percentage of services used
  const stabilityScore = calculateQualityScore(percentage, qualityIndicators.stability);
  const speedScore = calculateQualityScore(percentage, qualityIndicators.speed);
  const reliabilityScore = calculateQualityScore(percentage, qualityIndicators.reliability);
  
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-medium mb-2">Testing Impact on Software Quality</h3>
        <p className="text-foreground/70">
          As more testing services are utilized, software quality metrics improve significantly
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <QualityIndicator 
          title="Stability" 
          percentage={stabilityScore} 
          color="blue" 
          description="Fewer crashes & bugs"
        />
        <QualityIndicator 
          title="Performance" 
          percentage={speedScore} 
          color="green"
          description="Faster response times"
        />
        <QualityIndicator 
          title="Reliability" 
          percentage={reliabilityScore} 
          color="purple"
          description="Consistent behavior"
        />
      </div>
      
      <div className="mt-8 flex flex-col items-center">
        <div className="w-full max-w-md bg-gray-100 h-2 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="mt-2 text-sm text-foreground/70">
          <span className="font-medium">{servicesUsed} of {totalServices}</span> testing services active
        </div>
      </div>
    </div>
  );
};

interface QualityIndicatorProps {
  title: string;
  percentage: number;
  color: "blue" | "green" | "purple" | "amber" | "red";
  description: string;
}

const QualityIndicator: React.FC<QualityIndicatorProps> = ({ title, percentage, color, description }) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue": return "from-blue-200 to-blue-500 text-blue-700";
      case "green": return "from-green-200 to-green-500 text-green-700";
      case "purple": return "from-purple-200 to-purple-500 text-purple-700";
      case "amber": return "from-amber-200 to-amber-500 text-amber-700";
      case "red": return "from-red-200 to-red-500 text-red-700";
      default: return "from-gray-200 to-gray-500 text-gray-700";
    }
  };
  
  const colorClasses = getColorClasses(color);
  
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-medium">{title}</h4>
        <span className="font-bold">{percentage}%</span>
      </div>
      
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-2">
        <div 
          className={`h-full rounded-full bg-gradient-to-r ${colorClasses} transition-all duration-1000 ease-out`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      <p className="text-xs text-foreground/70">{description}</p>
    </div>
  );
};

// Helper function to calculate quality score based on percentage of services used
function calculateQualityScore(percentage: number, indicator: { low: number; medium: number; high: number }) {
  if (percentage < 33) {
    return indicator.low;
  } else if (percentage < 66) {
    // Linear interpolation between low and medium
    const ratio = (percentage - 33) / 33;
    return Math.round(indicator.low + ratio * (indicator.medium - indicator.low));
  } else if (percentage < 100) {
    // Linear interpolation between medium and high
    const ratio = (percentage - 66) / 34;
    return Math.round(indicator.medium + ratio * (indicator.high - indicator.medium));
  } else {
    return indicator.high;
  }
}

export default QualityMeter;
