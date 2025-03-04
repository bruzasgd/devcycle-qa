
import { Gauge } from "lucide-react";

const BackendTestingAnimation = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <Gauge size={28} className="text-yellow-500 animate-pulse" />
        <div className="ml-4 w-40 h-6 bg-gradient-to-r from-green-500 to-red-500 rounded-full overflow-hidden relative">
          <div className="h-full w-full bg-white/20 animate-progress absolute"></div>
          {/* Animated load testing dots */}
          <div className="h-2 w-2 bg-white rounded-full absolute top-1/2 -translate-y-1/2 animate-move-right" style={{ left: "10%" }}></div>
          <div className="h-2 w-2 bg-white rounded-full absolute top-1/2 -translate-y-1/2 animate-move-right" style={{ left: "30%", animationDelay: "0.5s" }}></div>
          <div className="h-2 w-2 bg-white rounded-full absolute top-1/2 -translate-y-1/2 animate-move-right" style={{ left: "50%", animationDelay: "1s" }}></div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs">Response Time</span>
          <span className="text-xs font-medium animate-number-change">245ms</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs">Throughput</span>
          <span className="text-xs font-medium animate-number-change" style={{ animationDelay: "0.3s" }}>865 req/s</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs">Error Rate</span>
          <span className="text-xs font-medium animate-number-change" style={{ animationDelay: "0.6s" }}>0.05%</span>
        </div>
      </div>
      
      {/* Server nodes animation */}
      <div className="absolute -bottom-8 -right-8 grid grid-cols-3 gap-1">
        {[...Array(9)].map((_, i) => (
          <div 
            key={i} 
            className="w-3 h-3 rounded-sm bg-yellow-200 animate-pulse" 
            style={{ animationDelay: `${i * 0.1}s` }}
          ></div>
        ))}
      </div>
      
      {/* API call visualization */}
      <div className="absolute -left-6 -top-6">
        <div className="text-xs font-mono bg-yellow-50 border border-yellow-200 rounded p-1 animate-fade-in-out">
          GET /api/v1/data
        </div>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 14L12 21L5 14" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 21V3" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
);

export default BackendTestingAnimation;
