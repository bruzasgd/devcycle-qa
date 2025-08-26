import { TrendingUp, Brain, AlertTriangle } from "lucide-react";

const SmartAnalyticsAnimation = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative">
      <div className="flex items-center mb-4">
        <TrendingUp size={24} className="text-yellow-500 mr-2" />
        <Brain size={20} className="text-yellow-400 animate-pulse ml-1" />
        <span className="text-sm font-medium ml-2">Smart Analytics</span>
      </div>
      
      <div className="space-y-3">
        {/* AI Insights */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-2">
            <Brain size={12} className="text-yellow-600" />
            <span className="text-xs font-medium">AI Insights</span>
          </div>
          
          <div className="space-y-1 text-[9px]">
            <div className="flex items-center space-x-1">
              <AlertTriangle size={8} className="text-orange-500" />
              <span>High failure rate in checkout flow</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-1 h-1 bg-green-500 rounded-full"></div>
              <span>Performance improved by 23%</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
              <span>Recommend mobile test expansion</span>
            </div>
          </div>
        </div>
        
        {/* Predictive Analysis */}
        <div className="flex justify-between items-center text-xs">
          <span>Risk Prediction</span>
          <div className="flex items-center space-x-2">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[30%] bg-green-500 rounded-full animate-grow-bar"></div>
            </div>
            <span className="text-green-600 font-medium">Low Risk</span>
          </div>
        </div>
        
        {/* Quality Trend */}
        <div className="flex justify-between items-center text-xs">
          <span>Quality Trend</span>
          <div className="flex items-center space-x-1">
            <TrendingUp size={12} className="text-green-500 animate-bounce" />
            <span className="text-green-600 font-medium animate-number-change">+12%</span>
          </div>
        </div>
      </div>
      
      {/* Data visualization */}
      <div className="absolute -top-8 -right-8">
        <div className="flex items-end space-x-1">
          {[12, 18, 25, 22, 30].map((height, i) => (
            <div 
              key={i} 
              className="w-2 bg-yellow-400 rounded-t animate-grow-bar" 
              style={{ 
                height: `${height}px`, 
                animationDelay: `${i * 0.2}s` 
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* ML processing dots */}
      <div className="absolute -bottom-4 -right-2">
        <div className="flex space-x-1">
          {[...Array(4)].map((_, i) => (
            <div 
              key={i} 
              className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" 
              style={{ animationDelay: `${i * 0.3}s` }}
            ></div>
          ))}
        </div>
        <span className="text-[7px] text-gray-500 block text-center mt-1">ML Analysis</span>
      </div>
    </div>
  </div>
);

export default SmartAnalyticsAnimation;