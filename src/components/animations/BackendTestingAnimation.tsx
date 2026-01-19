import { Gauge } from "lucide-react";

const BackendTestingAnimation = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="space-y-3 w-full max-w-[180px]">
      <div className="flex items-center gap-2 mb-2">
        <Gauge size={16} className="text-primary" />
        <span className="text-xs font-medium">Load Test</span>
      </div>
      
      {/* Metrics */}
      <div className="space-y-2 text-[10px]">
        <div className="flex justify-between items-center">
          <span className="text-foreground/60">Response</span>
          <span className="font-medium">245ms</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-foreground/60">Throughput</span>
          <span className="font-medium">865 req/s</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-foreground/60">Error Rate</span>
          <span className="font-medium text-green-600">0.05%</span>
        </div>
      </div>
      
      {/* Load bar */}
      <div className="w-full h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400 rounded-full overflow-hidden">
        <div className="h-full w-1/3 bg-white/20" />
      </div>
      
      {/* Server grid */}
      <div className="flex justify-center gap-0.5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-sm bg-primary/30" />
        ))}
      </div>
    </div>
  </div>
);

export default BackendTestingAnimation;
