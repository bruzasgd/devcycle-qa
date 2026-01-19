import { LayoutList } from "lucide-react";

const TestManagementAnimation = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="space-y-3 w-full max-w-[180px]">
      <div className="flex items-center gap-2 mb-2">
        <LayoutList size={14} className="text-primary" />
        <span className="text-xs font-medium">Test Report</span>
      </div>
      
      {/* Stats */}
      <div className="space-y-2 text-[10px]">
        <div className="flex justify-between items-center">
          <span className="text-foreground/60">Total Tests</span>
          <span className="font-medium">168</span>
        </div>
        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-3/4 bg-primary rounded-full" />
        </div>
      </div>
      
      {/* Automated vs Manual */}
      <div className="space-y-1">
        <div className="flex justify-between text-[9px] text-foreground/50">
          <span>Automated 60%</span>
          <span>Manual 40%</span>
        </div>
        <div className="flex gap-0.5 h-1.5">
          <div className="h-full bg-primary rounded-full w-3/5" />
          <div className="h-full bg-gray-300 rounded-full w-2/5" />
        </div>
      </div>
      
      {/* Pass rate */}
      <div className="flex justify-between items-center text-[10px]">
        <span className="text-foreground/60">Pass Rate</span>
        <span className="font-medium text-primary">98.2%</span>
      </div>
    </div>
  </div>
);

export default TestManagementAnimation;
