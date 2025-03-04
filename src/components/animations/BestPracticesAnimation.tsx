
import { CheckSquare } from "lucide-react";

const BestPracticesAnimation = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative">
      <div className="space-y-3 w-64">
        <div className="p-2 rounded-lg border border-yellow-200 bg-yellow-50 flex items-center animate-slide-in" style={{ animationDelay: "0.1s" }}>
          <CheckSquare size={16} className="text-yellow-500 mr-2" />
          <span className="text-xs">Test Cases Documented</span>
        </div>
        <div className="p-2 rounded-lg border border-yellow-200 bg-yellow-50 flex items-center animate-slide-in" style={{ animationDelay: "0.2s" }}>
          <CheckSquare size={16} className="text-yellow-500 mr-2" />
          <span className="text-xs">Acceptance Criteria Clear</span>
        </div>
        <div className="p-2 rounded-lg border border-yellow-200 bg-yellow-50 flex items-center animate-slide-in" style={{ animationDelay: "0.3s" }}>
          <CheckSquare size={16} className="text-yellow-500 mr-2" />
          <span className="text-xs">Test Data Available</span>
        </div>
        <div className="p-2 rounded-lg border border-gray-200 bg-gray-50 flex items-center opacity-60 animate-slide-in" style={{ animationDelay: "0.4s" }}>
          <div className="h-4 w-4 border-2 border-gray-300 rounded mr-2 animate-pulse"></div>
          <span className="text-xs">Code Review Complete</span>
        </div>
      </div>
      
      {/* Agile process animation */}
      <div className="absolute -bottom-8 -left-4">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[10px] font-medium border border-blue-200">
            1
          </div>
          <div className="w-12 h-0.5 bg-gray-200"></div>
          <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center text-[10px] font-medium border border-yellow-200">
            2
          </div>
          <div className="w-12 h-0.5 bg-gray-200"></div>
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-medium border border-gray-200 animate-pulse">
            3
          </div>
        </div>
        <div className="text-[8px] mt-1 text-center font-medium text-gray-500">
          AGILE WORKFLOW
        </div>
      </div>
      
      {/* Animated checkmark */}
      <div className="absolute -top-6 -right-6 w-12 h-12 flex items-center justify-center">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" stroke="#EAB308" strokeWidth="2" />
          <path className="checkmark__check" fill="none" stroke="#EAB308" strokeWidth="2" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
      </div>
    </div>
  </div>
);

export default BestPracticesAnimation;
