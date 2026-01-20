
import { Settings, ArrowRight, Shield, Eye } from "lucide-react";

const QAOpsAnimation = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="space-y-3 w-full max-w-[200px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <Settings size={14} className="text-primary" />
        <span className="text-xs font-medium">QAOps / TestOps</span>
      </div>
      
      {/* Flow diagram */}
      <div className="flex items-center justify-between text-[9px]">
        <div className="text-center">
          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mb-1">
            <span className="font-medium text-primary">Dev</span>
          </div>
          <span className="text-foreground/50">Shift-Left</span>
        </div>
        
        <ArrowRight size={12} className="text-gray-300" />
        
        <div className="text-center">
          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mb-1">
            <Eye size={14} className="text-primary" />
          </div>
          <span className="text-foreground/50">Observe</span>
        </div>
        
        <ArrowRight size={12} className="text-gray-300" />
        
        <div className="text-center">
          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mb-1">
            <Shield size={14} className="text-primary" />
          </div>
          <span className="text-foreground/50">Shift-Right</span>
        </div>
      </div>
      
      {/* Metrics */}
      <div className="flex justify-between text-[9px] text-foreground/50 pt-2 border-t border-gray-100">
        <span>SRE Aligned</span>
        <span>Security Integrated</span>
      </div>
    </div>
  </div>
);

export default QAOpsAnimation;
