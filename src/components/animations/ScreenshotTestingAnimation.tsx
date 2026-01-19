import { Image, Check, X } from "lucide-react";

const ScreenshotTestingAnimation = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="space-y-3 w-full max-w-[200px]">
      {/* Comparison view */}
      <div className="flex items-center justify-center gap-2">
        <div className="bg-gray-100 border border-gray-200 rounded p-2 w-16 h-12 flex items-center justify-center">
          <Image size={16} className="text-gray-400" />
        </div>
        <span className="text-[10px] text-foreground/50">vs</span>
        <div className="bg-yellow-50 border border-yellow-200 rounded p-2 w-16 h-12 flex items-center justify-center">
          <Image size={16} className="text-primary" />
        </div>
      </div>
      
      {/* Diff result */}
      <div className="bg-gray-50 border border-gray-200 rounded p-2">
        <div className="flex items-center justify-between text-[10px] mb-1.5">
          <span className="font-medium">Diff Result</span>
          <span className="text-primary">0.2%</span>
        </div>
        <div className="w-full h-1.5 bg-gray-200 rounded-full">
          <div className="h-full w-[2%] bg-red-400 rounded-full" />
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex justify-center gap-2">
        <button className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded text-[9px]">
          <Check size={10} /> Approve
        </button>
        <button className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded text-[9px]">
          <X size={10} /> Reject
        </button>
      </div>
    </div>
  </div>
);

export default ScreenshotTestingAnimation;
