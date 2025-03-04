
import { Clock } from "lucide-react";

const ManualTestingAnimation = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    {/* Excel-like spreadsheet representation */}
    <div className="relative z-10 bg-white rounded-md shadow-md w-[280px] overflow-hidden border border-gray-300">
      {/* Excel header */}
      <div className="bg-[#1D6F42] h-6 flex items-center px-2">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
        <div className="text-white text-xs font-medium ml-2">Manual Test Cases.xlsx</div>
      </div>
      
      {/* Excel toolbar */}
      <div className="bg-[#F3F2F1] h-5 flex items-center px-2 border-b border-gray-300">
        <div className="w-3 h-3 bg-gray-400 mr-1"></div>
        <div className="w-3 h-3 bg-gray-400 mr-1"></div>
        <div className="w-20 h-3 bg-gray-300"></div>
      </div>
      
      {/* Excel spreadsheet */}
      <div className="text-[10px]">
        {/* Column headers */}
        <div className="flex border-b border-gray-300 bg-gray-100">
          <div className="w-8 p-1 border-r border-gray-300 font-bold">#</div>
          <div className="w-32 p-1 border-r border-gray-300 font-bold">Test Case</div>
          <div className="w-24 p-1 border-r border-gray-300">Expected</div>
          <div className="w-20 p-1 border-r border-gray-300 font-bold">Status</div>
          <div className="w-16 p-1 font-bold">Time</div>
        </div>
        
        {/* Test rows with varying statuses */}
        <div className="flex border-b border-gray-300 hover:bg-blue-50">
          <div className="w-8 p-1 border-r border-gray-300">1</div>
          <div className="w-32 p-1 border-r border-gray-300">Login Valid</div>
          <div className="w-24 p-1 border-r border-gray-300">Access granted</div>
          <div className="w-20 p-1 border-r border-gray-300 text-green-600 font-medium">PASS</div>
          <div className="w-16 p-1 text-gray-600">5m 12s</div>
        </div>
        
        <div className="flex border-b border-gray-300 hover:bg-blue-50">
          <div className="w-8 p-1 border-r border-gray-300">2</div>
          <div className="w-32 p-1 border-r border-gray-300">Login Invalid</div>
          <div className="w-24 p-1 border-r border-gray-300">Error message</div>
          <div className="w-20 p-1 border-r border-gray-300 text-red-600 font-medium">FAIL</div>
          <div className="w-16 p-1 text-gray-600">8m 45s</div>
        </div>
        
        <div className="flex border-b border-gray-300 hover:bg-blue-50">
          <div className="w-8 p-1 border-r border-gray-300">3</div>
          <div className="w-32 p-1 border-r border-gray-300">Search Product</div>
          <div className="w-24 p-1 border-r border-gray-300">Results show</div>
          <div className="w-20 p-1 border-r border-gray-300 text-green-600 font-medium">PASS</div>
          <div className="w-16 p-1 text-gray-600">6m 30s</div>
        </div>
        
        <div className="flex border-b border-gray-300 hover:bg-blue-50">
          <div className="w-8 p-1 border-r border-gray-300">4</div>
          <div className="w-32 p-1 border-r border-gray-300">Add to Cart</div>
          <div className="w-24 p-1 border-r border-gray-300">Item added</div>
          <div className="w-20 p-1 border-r border-gray-300 text-yellow-500 font-medium">IN PROGRESS</div>
          <div className="w-16 p-1 text-gray-600">--:--</div>
        </div>
        
        <div className="flex border-b border-gray-300 hover:bg-blue-50 bg-blue-50">
          <div className="w-8 p-1 border-r border-gray-300">5</div>
          <div className="w-32 p-1 border-r border-gray-300">Checkout</div>
          <div className="w-24 p-1 border-r border-gray-300">Order confirmed</div>
          <div className="w-20 p-1 border-r border-gray-300 text-gray-500 font-medium">NOT STARTED</div>
          <div className="w-16 p-1 text-gray-600">--:--</div>
        </div>
        
        <div className="flex border-b border-gray-300 hover:bg-blue-50">
          <div className="w-8 p-1 border-r border-gray-300">6</div>
          <div className="w-32 p-1 border-r border-gray-300">Payment Process</div>
          <div className="w-24 p-1 border-r border-gray-300">Payment success</div>
          <div className="w-20 p-1 border-r border-gray-300 text-gray-500 font-medium">NOT STARTED</div>
          <div className="w-16 p-1 text-gray-600">--:--</div>
        </div>
      </div>
      
      {/* Excel footer */}
      <div className="bg-[#F3F2F1] h-5 flex items-center justify-between px-2 text-[8px] text-gray-600">
        <div>6 test cases</div>
        <div>2 passed • 1 failed • 1 in progress • 2 not started</div>
      </div>
    </div>
    
    {/* Manual testing elements */}
    <div className="absolute top-0 left-0 w-10 h-10 -translate-y-1/2 -translate-x-1/2">
      <div className="relative">
        <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center border border-yellow-300">
          <Clock size={14} className="text-yellow-600" />
        </div>
        <div className="absolute -bottom-1 -right-1 rounded-full bg-yellow-500 text-white text-[8px] font-bold h-4 w-8 flex items-center justify-center">
          SLOW
        </div>
      </div>
    </div>
    
    {/* Human tester representation */}
    <div className="absolute bottom-2 right-2">
      <div className="flex items-center space-x-1">
        <div className="w-12 h-12 relative">
          <div className="w-5 h-5 rounded-full bg-gray-600 absolute top-0 left-1/2 transform -translate-x-1/2"></div>
          <div className="w-0.5 h-4 bg-gray-600 absolute top-5 left-1/2 transform -translate-x-1/2"></div>
          <div className="w-8 h-0.5 bg-gray-600 absolute top-7 left-1/2 transform -translate-x-1/2"></div>
          <div className="w-0.5 h-4 bg-gray-600 absolute top-7 left-1/2 transform -translate-x-1/2 rotate-45 origin-top"></div>
          <div className="w-0.5 h-4 bg-gray-600 absolute top-7 left-1/2 transform -translate-x-1/2 -rotate-45 origin-top"></div>
        </div>
        <div className="animate-pulse-subtle px-7 py-4 rounded-lg bg-yellow-50 border border-yellow-200 text-yellow-800 text-[8px]">
          ...takes time
        </div>
      </div>
      <div className="flex items-center space-x-1 mt-1">
        <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
        <div className="text-[7px] text-gray-500">Human error prone</div>
      </div>
    </div>
    
    {/* Progress indicator */}
    <div className="absolute top-2 right-2 flex flex-col items-end">
      <div className="text-[8px] text-gray-500 mb-1">Progress (33%)</div>
      <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div className="w-1/3 h-full bg-yellow-500 rounded-full animate-pulse-subtle"></div>
      </div>
    </div>
  </div>
);

export default ManualTestingAnimation;
