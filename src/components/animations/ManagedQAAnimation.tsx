
import { Users, CheckCircle, HeadphonesIcon } from "lucide-react";

const ManagedQAAnimation = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="space-y-3 w-full max-w-[180px]">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <HeadphonesIcon size={14} className="text-primary" />
        <span className="text-xs font-medium">Managed QA</span>
      </div>
      
      {/* Service tiers */}
      <div className="space-y-2">
        <div className="bg-white border border-gray-200 rounded p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Users size={10} className="text-primary" />
              <span className="text-[9px] font-medium">Strategy</span>
            </div>
            <CheckCircle size={10} className="text-green-500" />
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Users size={10} className="text-primary" />
              <span className="text-[9px] font-medium">Execution</span>
            </div>
            <CheckCircle size={10} className="text-green-500" />
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded p-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Users size={10} className="text-primary" />
              <span className="text-[9px] font-medium">Support</span>
            </div>
            <CheckCircle size={10} className="text-green-500" />
          </div>
        </div>
      </div>
      
      {/* Status */}
      <div className="text-center text-[9px] text-primary font-medium">
        Fully Outsourced QAOps
      </div>
    </div>
  </div>
);

export default ManagedQAAnimation;
