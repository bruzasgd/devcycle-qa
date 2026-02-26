import { GitBranch, CheckCircle, Cpu } from "lucide-react";

const CICDAnimation = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="space-y-4 w-full max-w-[200px]">
      {/* Pipeline stages */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center gap-1">
          <GitBranch size={16} className="text-primary" />
          <span className="text-[9px] font-mono text-muted-foreground">Commit</span>
          <div className="h-1 w-6 rounded-full bg-primary" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <CheckCircle size={16} className="text-accent" />
          <span className="text-[9px] font-mono text-muted-foreground">Tests</span>
          <div className="h-1 w-6 rounded-full bg-accent" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <Cpu size={16} className="text-muted-foreground" />
          <span className="text-[9px] font-mono text-muted-foreground">Deploy</span>
          <div className="h-1 w-6 rounded-full bg-border" />
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
        <div className="h-full w-2/3 bg-primary rounded-full" />
      </div>
      
      {/* Status */}
      <div className="text-center text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 rounded py-1.5">
        pipeline: stage 2/3
      </div>
    </div>
  </div>
);

export default CICDAnimation;
