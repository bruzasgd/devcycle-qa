import { Brain, Sparkles, Code } from "lucide-react";

const AITestGenerationAnimation = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative">
      <div className="flex items-center mb-6">
        <Brain size={28} className="text-yellow-500 animate-pulse mr-3" />
        <div className="flex items-center space-x-2">
          <Sparkles size={20} className="text-yellow-400 animate-bounce" />
          <span className="text-sm font-medium">AI Test Generation</span>
        </div>
      </div>
      
      <div className="space-y-4">
        {/* AI analyzing requirements */}
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
          <span className="text-xs">Analyzing requirements...</span>
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className="w-1 h-1 bg-yellow-400 rounded-full animate-bounce" 
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Generated test cases */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 space-y-2">
          <div className="flex items-center space-x-2">
            <Code size={14} className="text-yellow-600" />
            <span className="text-xs font-medium">Generated Tests:</span>
          </div>
          
          <div className="space-y-1 text-[10px] font-mono">
            <div className="text-green-600 animate-fade-in">✓ Login validation test</div>
            <div className="text-green-600 animate-fade-in" style={{ animationDelay: "0.5s" }}>✓ Edge case scenarios</div>
            <div className="text-green-600 animate-fade-in" style={{ animationDelay: "1s" }}>✓ API boundary tests</div>
          </div>
        </div>
        
        {/* AI confidence score */}
        <div className="flex justify-between items-center">
          <span className="text-xs">Coverage Score</span>
          <div className="flex items-center space-x-2">
            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-yellow-500 rounded-full animate-grow-bar"></div>
            </div>
            <span className="text-xs font-medium animate-number-change">85%</span>
          </div>
        </div>
      </div>
      
      {/* Neural network visualization */}
      <div className="absolute -top-4 -right-6">
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse" 
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 50 50">
          <path d="M10,10 L40,40" stroke="#EAB308" strokeWidth="1" opacity="0.5" className="animate-pulse" />
          <path d="M40,10 L10,40" stroke="#EAB308" strokeWidth="1" opacity="0.5" className="animate-pulse" />
        </svg>
      </div>
      
      {/* AI processing indicator */}
      <div className="absolute -bottom-6 -left-4">
        <div className="flex items-center space-x-1">
          <Brain size={12} className="text-yellow-500 animate-spin-slow" />
          <span className="text-[8px] text-gray-500">AI Processing</span>
        </div>
      </div>
    </div>
  </div>
);

export default AITestGenerationAnimation;