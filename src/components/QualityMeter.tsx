
import React from 'react';
import { qualityIndicators } from '../config/styleConfig';

export interface QualityMeterProps {
  level: number;
  totalLevels: number;
}

const QualityMeter: React.FC<QualityMeterProps> = ({ level, totalLevels }) => {
  // Calculate percentages for each quality aspect based on the level
  const calculatePercentage = (aspect: 'stability' | 'speed' | 'reliability') => {
    const { low, medium, high } = qualityIndicators[aspect];
    const baseValue = low;
    const maxImprovement = high - low;
    const currentImprovement = (level / totalLevels) * maxImprovement;
    return Math.round(baseValue + currentImprovement);
  };

  const stability = calculatePercentage('stability');
  const speed = calculatePercentage('speed');
  const reliability = calculatePercentage('reliability');

  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-10">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">Stability</h3>
          <span className="text-lg font-bold">{stability}%</span>
        </div>
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 to-green-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${stability}%` }}
          ></div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">Speed</h3>
          <span className="text-lg font-bold">{speed}%</span>
        </div>
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 to-green-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${speed}%` }}
          ></div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">Reliability</h3>
          <span className="text-lg font-bold">{reliability}%</span>
        </div>
        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 to-green-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${reliability}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QualityMeter;
