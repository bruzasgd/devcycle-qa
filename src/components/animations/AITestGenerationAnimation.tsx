import { Brain, Code } from "lucide-react";

const AITestGenerationAnimation = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="space-y-3 w-full max-w-[180px]">
      <div className="flex items-center gap-2 mb-4">
        <Brain size={18} className="text-primary" />
        <span className="text-xs font-medium">AI Generation</span>
      </div>
      
      {/* Generated test cases */}
      <div className="bg-yellow-50/50 border border-yellow-200/50 rounded p-2 space-y-1.5">
        <div className="flex items-center gap-1.5">
          <Code size={10} className="text-primary" />
          <span className="text-[10px] font-medium">Generated:</span>
        </div>
        
        <div className="space-y-1 text-[9px] font-mono">
          <div className="text-green-600">✓ Login validation</div>
          <div className="text-green-600">✓ Edge cases</div>
          <div className="text-green-600">✓ API boundaries</div>
        </div>
      </div>
      
      {/* Coverage score */}
      <div className="flex justify-between items-center text-[10px]">
        <span className="text-foreground/60">Coverage</span>
        <div className="flex items-center gap-1.5">
          <div className="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full w-[85%] bg-primary rounded-full" />
          </div>
          <span className="font-medium">85%</span>
        </div>
      </div>
    </div>
  </div>
);

export default AITestGenerationAnimation;
