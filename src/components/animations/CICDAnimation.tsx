
import { GitBranch, CheckCircle, Cpu } from "lucide-react";

const CICDAnimation = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="relative">
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-6 space-x-12">
          <div className="flex flex-col items-center">
            <GitBranch size={24} className="text-yellow-500 mb-2 animate-pulse" />
            <span className="text-xs">Commit</span>
            <div className="h-2 w-8 mt-1 rounded-full bg-yellow-500 animate-scale"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full bg-yellow-500 text-white p-1 animate-check">
              <CheckCircle size={22} />
            </div>
            <span className="text-xs">Tests</span>
            <div className="h-2 w-8 mt-1 rounded-full bg-yellow-500 animate-scale" style={{ animationDelay: "1s" }}></div>
          </div>
          <div className="flex flex-col items-center animate-pulse">
            <Cpu size={24} className="text-yellow-500 mb-2" />
            <span className="text-xs">Deploy</span>
            <div className="h-2 w-8 mt-1 rounded-full bg-gray-300 animate-scale" style={{ animationDelay: "2s" }}></div>
          </div>
        </div>
        
        <div className="w-full h-2 bg-gray-100 rounded-full mb-6 overflow-hidden relative">
          <div className="h-full w-2/3 bg-yellow-500 rounded-full"></div>
          
          {/* Animated deployment dot */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 h-4 w-4 rounded-full bg-white border-2 border-yellow-500 animate-move-along-path"></div>
        </div>
        
        <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-200 text-xs w-full text-center relative overflow-hidden">
          <div className="relative z-10">Pipeline in progress: Stage 2/3</div>
          <div className="absolute inset-0 bg-yellow-100 animate-progress-right w-2/3"></div>
        </div>
      </div>
      
      {/* Code blocks animation */}
      <div className="absolute -bottom-6 -left-20">
        <div className="flex flex-col items-start space-y-1 text-[8px] font-mono bg-gray-50 p-1 rounded shadow-sm rotate-6 w-14">
          <div className="text-blue-500">trigger:
branches:
  include:
    - main</div>
          <div className="text-blue-500">jobs:
 {""}</div>
          {/* <div className="text-blue-500">{"}"}</div> */}
        </div>
      </div>
      
      {/* Deployment target */}
      <div className="absolute -top-6 -right-6">
        <div className="w-12 h-12 rounded-lg border border-dashed border-yellow-300 flex items-center justify-center animate-pulse-slow">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
            <line x1="6" y1="6" x2="6.01" y2="6"></line>
            <line x1="6" y1="18" x2="6.01" y2="18"></line>
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default CICDAnimation;
