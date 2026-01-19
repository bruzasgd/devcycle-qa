import { CheckSquare, Square } from "lucide-react";

const BestPracticesAnimation = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="space-y-2 w-full max-w-[180px]">
      {/* Checklist items */}
      <div className="p-1.5 rounded border border-yellow-200 bg-yellow-50/50 flex items-center gap-2">
        <CheckSquare size={12} className="text-primary" />
        <span className="text-[10px]">Tests Documented</span>
      </div>
      <div className="p-1.5 rounded border border-yellow-200 bg-yellow-50/50 flex items-center gap-2">
        <CheckSquare size={12} className="text-primary" />
        <span className="text-[10px]">Criteria Clear</span>
      </div>
      <div className="p-1.5 rounded border border-yellow-200 bg-yellow-50/50 flex items-center gap-2">
        <CheckSquare size={12} className="text-primary" />
        <span className="text-[10px]">Data Available</span>
      </div>
      <div className="p-1.5 rounded border border-gray-200 bg-gray-50 flex items-center gap-2 opacity-50">
        <Square size={12} className="text-gray-400" />
        <span className="text-[10px]">Review Complete</span>
      </div>
      
      {/* Workflow indicator */}
      <div className="flex items-center justify-center gap-1 pt-2">
        <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center text-[8px] border border-blue-200">1</div>
        <div className="w-6 h-0.5 bg-gray-200" />
        <div className="w-4 h-4 rounded-full bg-yellow-100 flex items-center justify-center text-[8px] border border-yellow-200">2</div>
        <div className="w-6 h-0.5 bg-gray-200" />
        <div className="w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-[8px] border border-gray-200">3</div>
      </div>
    </div>
  </div>
);

export default BestPracticesAnimation;
