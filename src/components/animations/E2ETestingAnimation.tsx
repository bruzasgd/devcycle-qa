
import React from "react";
import { CheckCircle, PlayCircle } from "lucide-react";
import { sizing } from "../../config/styleConfig";

const E2ETestingAnimation: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="flex flex-col space-y-3">
          <div className="text-sm font-medium mb-1 text-center">BDD & ATDD Testing</div>
          
          {/* BDD Given/When/Then Format */}
          <div className="bg-blue-50 border border-blue-200 rounded-md p-2 text-xs">
            <div className="font-medium text-blue-700 mb-1">Feature: User Authentication</div>
            <div className="ml-2 text-[10px] space-y-1">
              <div className="text-blue-600 font-medium">Scenario: Successful login</div>
              <div className="ml-2 text-blue-800">
                <div className="flex">
                  <span className="w-16 font-semibold">Given</span>
                  <span>I am on the login page</span>
                </div>
                <div className="flex">
                  <span className="w-16 font-semibold">When</span>
                  <span>I enter valid credentials</span>
                </div>
                <div className="flex">
                  <span className="w-16 font-semibold">And</span>
                  <span>I click the login button</span>
                </div>
                <div className="flex">
                  <span className="w-16 font-semibold">Then</span>
                  <span>I should be redirected to dashboard</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Automated Test Execution */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 rounded-lg bg-green-50 border border-green-200 flex items-center animate-hover">
              <CheckCircle size={sizing.iconSize.sm} className="text-green-500 mr-2" />
              <span className="text-xs">Login Test</span>
            </div>
            <div className="p-2 rounded-lg bg-green-50 border border-green-200 flex items-center animate-hover" style={{ animationDelay: "0.2s" }}>
              <CheckCircle size={sizing.iconSize.sm} className="text-green-500 mr-2" />
              <span className="text-xs">Signup Test</span>
            </div>
            <div className="p-2 rounded-lg bg-green-50 border border-green-200 flex items-center animate-pulse" style={{ animationDelay: "0.4s" }}>
              <svg className="animate-spin h-4 w-4 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-xs">Cart Test</span>
            </div>
            <div className="p-2 rounded-lg bg-gray-50 border border-gray-200 flex items-center opacity-60" style={{ animationDelay: "0.6s" }}>
              <PlayCircle size={sizing.iconSize.sm} className="text-gray-400 mr-2" />
              <span className="text-xs">Checkout Test</span>
            </div>
          </div>
          
          {/* Tools */}
          <div className="bg-gray-50 border border-gray-200 rounded-md py-1 px-2">
            <div className="text-[9px] text-gray-500 mb-1">Popular Frameworks</div>
            <div className="flex flex-wrap gap-1">
              <div className="text-[8px] px-1 rounded bg-purple-100 text-purple-800">Cucumber</div>
              <div className="text-[8px] px-1 rounded bg-cyan-100 text-cyan-800">Cypress</div>
              <div className="text-[8px] px-1 rounded bg-amber-100 text-amber-800">Playwright</div>
              <div className="text-[8px] px-1 rounded bg-green-100 text-green-800">Selenium</div>
              <div className="text-[8px] px-1 rounded bg-pink-100 text-pink-800">SpecFlow</div>
            </div>
          </div>
        </div>
        
        {/* Browser frames with animated tests */}
        <div className="absolute -top-8 -left-8 w-16 h-16 rotate-6 border border-gray-200 rounded bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="h-2 bg-gray-100 flex items-center px-1">
            <div className="w-1 h-1 rounded-full bg-red-500 mr-0.5"></div>
            <div className="w-1 h-1 rounded-full bg-yellow-500 mr-0.5"></div>
            <div className="w-1 h-1 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 p-1">
            <div className="w-full h-1 bg-gray-200 mb-1 animate-pulse"></div>
            <div className="w-full h-1 bg-gray-200 mb-1"></div>
            <div className="w-3/4 h-1 bg-gray-200"></div>
          </div>
        </div>
        
        <div className="absolute -top-4 -right-10 w-16 h-16 -rotate-6 border border-gray-200 rounded bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="h-2 bg-gray-100 flex items-center px-1">
            <div className="w-1 h-1 rounded-full bg-red-500 mr-0.5"></div>
            <div className="w-1 h-1 rounded-full bg-yellow-500 mr-0.5"></div>
            <div className="w-1 h-1 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 p-1">
            <div className="w-full h-1 bg-gray-200 mb-1"></div>
            <div className="w-full h-1 bg-gray-200 mb-1"></div>
            <div className="w-3/4 h-1 bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default E2ETestingAnimation;
