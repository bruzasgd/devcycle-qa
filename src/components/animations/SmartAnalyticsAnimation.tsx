import { TrendingUp, Brain } from "lucide-react";

const SmartAnalyticsAnimation = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="space-y-3 w-full max-w-[180px]">
      <div className="flex items-center gap-2 mb-2">
        <TrendingUp size={14} className="text-primary" />
        <Brain size={14} className="text-primary" />
        <span className="text-xs font-medium">Analytics</span>
      </div>
      
      {/* Insights */}
      <div className="bg-yellow-50/50 border border-yellow-100 rounded p-2 space-y-1.5">
        <div className="text-[9px] font-medium text-primary">AI Insights</div>
        <div className="text-[9px] text-foreground/60">• Flaky: checkout.spec</div>
        <div className="text-[9px] text-foreground/60">• Slow: login tests</div>
      </div>
      
      {/* Risk prediction */}
      <div className="flex justify-between items-center text-[10px]">
        <span className="text-foreground/60">Risk Level</span>
        <div className="flex items-center gap-1.5">
          <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-1/4 bg-green-500 rounded-full" />
          </div>
          <span className="font-medium text-green-600">Low</span>
        </div>
      </div>
      
      {/* Trend */}
      <div className="flex items-center justify-between text-[10px]">
        <span className="text-foreground/60">Quality Trend</span>
        <div className="flex items-center gap-1 text-green-600">
          <TrendingUp size={10} />
          <span className="font-medium">+12%</span>
        </div>
      </div>
    </div>
  </div>
);

export default SmartAnalyticsAnimation;
