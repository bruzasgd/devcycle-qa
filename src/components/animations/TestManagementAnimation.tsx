
import { LayoutList } from "lucide-react";

const TestManagementAnimation = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative">
      <div className="flex items-center mb-4">
        <LayoutList size={22} className="text-yellow-500 mr-2 animate-pulse" />
        <span className="text-sm font-medium">Test Report Dashboard</span>
      </div>
      
      <div className="space-y-3 w-64">
        <div className="flex justify-between items-center text-xs">
          <span>Total Tests</span>
          <span className="font-medium animate-counter">168</span>
        </div>
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-yellow-500 rounded-full animate-grow-bar"></div>
        </div>
        
        <div className="flex justify-between text-xs">
          <span>Automated</span>
          <span>Manual</span>
        </div>
        <div className="flex space-x-1 relative h-1.5">
          <div className="h-1.5 bg-yellow-500 rounded-full w-3/5 animate-grow-bar" style={{ animationDelay: "0.3s" }}></div>
          <div className="h-1.5 bg-gray-300 rounded-full w-2/5 animate-grow-bar" style={{ animationDelay: "0.6s" }}></div>
          
          {/* Ratio indicator */}
          <div className="absolute -top-4 left-3/5 transform -translate-x-1/2 text-[10px] text-yellow-500 font-medium animate-fade-in" style={{ animationDelay: "0.8s" }}>
            60%
          </div>
          <div className="absolute -top-4 left-[80%] transform -translate-x-1/2 text-[10px] text-gray-500 font-medium animate-fade-in" style={{ animationDelay: "1s" }}>
            40%
          </div>
        </div>
        
        <div className="flex justify-between items-center text-xs">
          <span>Pass Rate</span>
          <span className="font-medium text-yellow-500 animate-counter" style={{ animationDelay: "0.5s" }}>98.2%</span>
        </div>
      </div>
      
      {/* Mini test case animations */}
      <div className="absolute -top-10 -right-2 grid grid-cols-3 gap-0.5 scale-75">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className={`w-3 h-3 rounded-sm ${i < 5 ? 'bg-yellow-300' : 'bg-red-300'} animate-pulse`} 
            style={{ animationDelay: `${i * 0.2}s` }}
          ></div>
        ))}
      </div>
      
      {/* Data flow animation */}
      <div className="absolute -bottom-8 -right-4">
        <div className="flex flex-col items-end">
          <div className="text-[8px] mb-1 text-gray-500 font-medium">DATA FLOW</div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-flow"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-flow" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400 animate-flow" style={{ animationDelay: "0.4s" }}></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500 animate-flow" style={{ animationDelay: "0.6s" }}></div>
            <div className="w-2 h-2 rounded-full bg-black animate-flow" style={{ animationDelay: "0.8s" }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TestManagementAnimation;
