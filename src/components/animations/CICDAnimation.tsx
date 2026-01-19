import { GitBranch, CheckCircle, Cpu } from "lucide-react";

const CICDAnimation = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="space-y-4 w-full max-w-[200px]">
      {/* Pipeline stages */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center gap-1">
          <GitBranch size={16} className="text-primary" />
          <span className="text-[9px]">Commit</span>
          <div className="h-1 w-6 rounded-full bg-primary" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <CheckCircle size={16} className="text-primary" />
          <span className="text-[9px]">Tests</span>
          <div className="h-1 w-6 rounded-full bg-primary" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <Cpu size={16} className="text-foreground/40" />
          <span className="text-[9px]">Deploy</span>
          <div className="h-1 w-6 rounded-full bg-gray-200" />
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full w-2/3 bg-primary rounded-full" />
      </div>
      
      {/* Status */}
      <div className="text-center text-[10px] text-foreground/60 bg-yellow-50 border border-yellow-100 rounded py-1.5">
        Pipeline: Stage 2/3
      </div>
    </div>
  </div>
);

export default CICDAnimation;
