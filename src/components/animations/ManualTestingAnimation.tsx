import { FileSpreadsheet, Clock, User } from "lucide-react";

const ManualTestingAnimation = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="space-y-3 w-full max-w-[200px]">
      {/* Spreadsheet mock */}
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        <div className="bg-gray-50 border-b border-gray-200 px-2 py-1 flex items-center gap-1.5">
          <FileSpreadsheet size={10} className="text-green-600" />
          <span className="text-[9px] text-foreground/60">test_cases.xlsx</span>
        </div>
        <div className="p-1.5 space-y-1 text-[8px]">
          <div className="flex gap-1">
            <span className="w-16 font-medium">Test Case</span>
            <span className="w-12 font-medium">Status</span>
          </div>
          <div className="flex gap-1">
            <span className="w-16 truncate">TC-001</span>
            <span className="w-12 text-green-600">PASS</span>
          </div>
          <div className="flex gap-1">
            <span className="w-16 truncate">TC-002</span>
            <span className="w-12 text-red-600">FAIL</span>
          </div>
          <div className="flex gap-1">
            <span className="w-16 truncate">TC-003</span>
            <span className="w-12 text-yellow-600">WIP</span>
          </div>
        </div>
      </div>
      
      {/* Indicators */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 text-[9px] text-foreground/50">
          <Clock size={10} />
          <span>Time-intensive</span>
        </div>
        <div className="flex items-center gap-1 text-[9px] text-foreground/50">
          <User size={10} />
          <span>Human effort</span>
        </div>
      </div>
    </div>
  </div>
);

export default ManualTestingAnimation;
