import { PlayCircle, CheckCircle } from "lucide-react";

const E2ETestingAnimation = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="space-y-3 w-full max-w-[180px]">
      {/* BDD syntax */}
      <div className="bg-gray-50 border border-gray-200 rounded p-2 text-[9px] font-mono space-y-1">
        <div className="text-blue-600">Given user is logged in</div>
        <div className="text-green-600">When clicks checkout</div>
        <div className="text-purple-600">Then order is placed</div>
      </div>
      
      {/* Test status */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-[10px]">
          <CheckCircle size={12} className="text-green-500" />
          <span>Login flow</span>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <CheckCircle size={12} className="text-green-500" />
          <span>Cart actions</span>
        </div>
        <div className="flex items-center gap-2 text-[10px]">
          <PlayCircle size={12} className="text-primary" />
          <span className="text-foreground/60">Checkout...</span>
        </div>
      </div>
      
      {/* Frameworks */}
      <div className="flex gap-1.5 text-[8px] text-foreground/50">
        <span className="px-1.5 py-0.5 bg-gray-100 rounded">Cypress</span>
        <span className="px-1.5 py-0.5 bg-gray-100 rounded">Playwright</span>
      </div>
    </div>
  </div>
);

export default E2ETestingAnimation;
