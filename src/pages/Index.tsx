
import { useEffect, useState } from "react";
import Header from "../components/Header";
import ServiceSection from "../components/ServiceSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SmoothScroll from "../components/SmoothScroll";
import QualityMeter from "../components/QualityMeter";
import TestingPipeline from "../components/TestingPipeline";
import ScreenshotTestingAnimation from "../components/animations/ScreenshotTestingAnimation";
import E2ETestingAnimation from "../components/animations/E2ETestingAnimation";
import { CheckCircle, FileCheck, Gauge, Cpu, GitBranch, CheckSquare, LayoutList, CheckIcon, XIcon, Clock } from "lucide-react";

const Index = () => {
  // State to track which testing services are visible on screen
  const [visibleServices, setVisibleServices] = useState<number>(0);
  
  // Function to track visible services - will be attached to section visibility
  const trackServiceVisibility = (isVisible: boolean, serviceId: string) => {
    if (isVisible) {
      setVisibleServices(prev => {
        // Extract the service number from the ID (e.g., "service-3" gives us 3)
        const serviceNumber = parseInt(serviceId.split('-')[1]);
        // Return the maximum service number seen so far
        return Math.max(prev, serviceNumber);
      });
    }
  };

  // Enhanced Animation components for each service with better visualizations
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
            <div className="w-24 p-1 border-r border-gray-300 font-bold">Expected</div>
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
            <div className="w-20 p-1 border-r border-gray-300 text-orange-500 font-medium">IN PROGRESS</div>
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
          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center border border-amber-300">
            <Clock size={14} className="text-amber-600" />
          </div>
          <div className="absolute -bottom-1 -right-1 rounded-full bg-amber-500 text-white text-[8px] font-bold h-4 w-8 flex items-center justify-center">
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
          <div className="animate-pulse-subtle px-2 py-1 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-[8px]">
            Manually testing takes time...
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
          <div className="w-1/3 h-full bg-amber-500 rounded-full animate-pulse-subtle"></div>
        </div>
      </div>
    </div>
  );

  const BackendTestingAnimation = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <Gauge size={28} className="text-primary animate-pulse" />
          <div className="ml-4 w-40 h-6 bg-gradient-to-r from-green-500 to-red-500 rounded-full overflow-hidden relative">
            <div className="h-full w-full bg-white/20 animate-progress absolute"></div>
            {/* Animated load testing dots */}
            <div className="h-2 w-2 bg-white rounded-full absolute top-1/2 -translate-y-1/2 animate-move-right" style={{ left: "10%" }}></div>
            <div className="h-2 w-2 bg-white rounded-full absolute top-1/2 -translate-y-1/2 animate-move-right" style={{ left: "30%", animationDelay: "0.5s" }}></div>
            <div className="h-2 w-2 bg-white rounded-full absolute top-1/2 -translate-y-1/2 animate-move-right" style={{ left: "50%", animationDelay: "1s" }}></div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs">Response Time</span>
            <span className="text-xs font-medium animate-number-change">245ms</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs">Throughput</span>
            <span className="text-xs font-medium animate-number-change" style={{ animationDelay: "0.3s" }}>865 req/s</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs">Error Rate</span>
            <span className="text-xs font-medium animate-number-change" style={{ animationDelay: "0.6s" }}>0.05%</span>
          </div>
        </div>
        
        {/* Server nodes animation */}
        <div className="absolute -bottom-8 -right-8 grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className="w-3 h-3 rounded-sm bg-gray-200 animate-pulse" 
              style={{ animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
        
        {/* API call visualization */}
        <div className="absolute -left-6 -top-6">
          <div className="text-xs font-mono bg-gray-50 border border-gray-200 rounded p-1 animate-fade-in-out">
            GET /api/v1/data
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 14L12 21L5 14" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 21V3" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );

  const CICDAnimation = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-6 space-x-12">
            <div className="flex flex-col items-center">
              <GitBranch size={24} className="text-primary mb-2 animate-pulse" />
              <span className="text-xs">Commit</span>
              <div className="h-2 w-8 mt-1 rounded-full bg-green-500 animate-scale"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-green-500 text-white p-1 animate-check">
                <CheckCircle size={22} />
              </div>
              <span className="text-xs">Tests</span>
              <div className="h-2 w-8 mt-1 rounded-full bg-green-500 animate-scale" style={{ animationDelay: "1s" }}></div>
            </div>
            <div className="flex flex-col items-center animate-pulse">
              <Cpu size={24} className="text-primary mb-2" />
              <span className="text-xs">Deploy</span>
              <div className="h-2 w-8 mt-1 rounded-full bg-gray-300 animate-scale" style={{ animationDelay: "2s" }}></div>
            </div>
          </div>
          
          <div className="w-full h-2 bg-gray-100 rounded-full mb-6 overflow-hidden relative">
            <div className="h-full w-2/3 bg-primary rounded-full"></div>
            
            {/* Animated deployment dot */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 h-4 w-4 rounded-full bg-white border-2 border-primary animate-move-along-path"></div>
          </div>
          
          <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-xs w-full text-center relative overflow-hidden">
            <div className="relative z-10">Pipeline in progress: Stage 2/3</div>
            <div className="absolute inset-0 bg-green-100 animate-progress-right w-2/3"></div>
          </div>
        </div>
        
        {/* Code blocks animation */}
        <div className="absolute -bottom-6 -left-6">
          <div className="flex flex-col items-start space-y-1 text-[8px] font-mono bg-gray-50 p-1 rounded shadow-sm rotate-6 w-14">
            <div className="text-blue-500">function() {'{'}</div>
            <div className="pl-1 text-green-600">return x;</div>
            <div className="text-blue-500">{'}'}</div>
          </div>
        </div>
        
        {/* Deployment target */}
        <div className="absolute -top-6 -right-6">
          <div className="w-12 h-12 rounded-lg border border-dashed border-gray-300 flex items-center justify-center animate-pulse-slow">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
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

  const BestPracticesAnimation = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="space-y-3 w-64">
          <div className="p-2 rounded-lg border border-green-200 bg-green-50 flex items-center animate-slide-in" style={{ animationDelay: "0.1s" }}>
            <CheckSquare size={16} className="text-green-500 mr-2" />
            <span className="text-xs">Test Cases Documented</span>
          </div>
          <div className="p-2 rounded-lg border border-green-200 bg-green-50 flex items-center animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <CheckSquare size={16} className="text-green-500 mr-2" />
            <span className="text-xs">Acceptance Criteria Clear</span>
          </div>
          <div className="p-2 rounded-lg border border-green-200 bg-green-50 flex items-center animate-slide-in" style={{ animationDelay: "0.3s" }}>
            <CheckSquare size={16} className="text-green-500 mr-2" />
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
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-[10px] font-medium border border-green-200">
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
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" stroke="#A3E635" strokeWidth="2" />
            <path className="checkmark__check" fill="none" stroke="#A3E635" strokeWidth="2" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>
      </div>
    </div>
  );

  const TestManagementAnimation = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="flex items-center mb-4">
          <LayoutList size={22} className="text-primary mr-2 animate-pulse" />
          <span className="text-sm font-medium">Test Report Dashboard</span>
        </div>
        
        <div className="space-y-3 w-64">
          <div className="flex justify-between items-center text-xs">
            <span>Total Tests</span>
            <span className="font-medium animate-counter">168</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-green-500 rounded-full animate-grow-bar"></div>
          </div>
          
          <div className="flex justify-between text-xs">
            <span>Automated</span>
            <span>Manual</span>
          </div>
          <div className="flex space-x-1 relative h-1.5">
            <div className="h-1.5 bg-primary rounded-full w-3/5 animate-grow-bar" style={{ animationDelay: "0.3s" }}></div>
            <div className="h-1.5 bg-gray-300 rounded-full w-2/5 animate-grow-bar" style={{ animationDelay: "0.6s" }}></div>
            
            {/* Ratio indicator */}
            <div className="absolute -top-4 left-3/5 transform -translate-x-1/2 text-[10px] text-primary font-medium animate-fade-in" style={{ animationDelay: "0.8s" }}>
              60%
            </div>
            <div className="absolute -top-4 left-[80%] transform -translate-x-1/2 text-[10px] text-gray-500 font-medium animate-fade-in" style={{ animationDelay: "1s" }}>
              40%
            </div>
          </div>
          
          <div className="flex justify-between items-center text-xs">
            <span>Pass Rate</span>
            <span className="font-medium text-green-500 animate-counter" style={{ animationDelay: "0.5s" }}>98.2%</span>
          </div>
        </div>
        
        {/* Mini test case animations */}
        <div className="absolute -top-10 -right-2 grid grid-cols-3 gap-0.5 scale-75">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className={`w-3 h-3 rounded-sm ${i < 5 ? 'bg-green-300' : 'bg-red-300'} animate-pulse`} 
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
        
        {/* Data flow animation */}
        <div className="absolute -bottom-8 -right-4">
          <div className="flex flex-col items-end">
            <div className="text-[8px] mb-1 text-gray-500 font-medium">DATA FLOW</div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-flow"></div>
              <div className="w-2 h-2 rounded-full bg-green-400 animate-flow" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400 animate-flow" style={{ animationDelay: "0.4s" }}></div>
              <div className="w-2 h-2 rounded-full bg-purple-400 animate-flow" style={{ animationDelay: "0.6s" }}></div>
              <div className="w-2 h-2 rounded-full bg-red-400 animate-flow" style={{ animationDelay: "0.8s" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative antialiased">
      <SmoothScroll />
      <Header />
      
      {/* Testing Pipeline visualization */}
      <TestingPipeline activeSteps={visibleServices} totalSteps={7} />
      
      <main>
        {/* Hero Section with enhanced animations */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 -z-5 overflow-hidden">
            <div className="parallax absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" data-speed="0.05"></div>
            <div className="parallax absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" data-speed="-0.08"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight animate-fade-in">
                Elevating Software Quality
              </h1>
              <p className="mt-6 text-xl text-foreground/70 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Empowering businesses with top-tier QA solutions – from manual testing to automation excellence.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <a 
                  href="#services" 
                  className="px-8 py-3 rounded-full bg-primary text-white shadow-sm hover:shadow-md transition-all hover:scale-105"
                >
                  Explore Services
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-3 rounded-full bg-white border border-gray-200 text-primary shadow-sm hover:shadow-md transition-all hover:scale-105"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          
          {/* Animated arrows indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <div className="animate-bounce-sequential">
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L10 9L19 1" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="animate-bounce-sequential" style={{ animationDelay: "0.2s" }}>
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L10 9L19 1" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-8 sm:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
            <div className="chip inline-block mb-4 reveal">Services</div>
            <h2 className="text-3xl sm:text-4xl font-medium mb-4 reveal">
              Comprehensive QA Solutions
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto reveal">
              We offer a full spectrum of testing and quality assurance services to ensure your software delivers exceptional experiences.
            </p>
          </div>
          
          {/* Reordering: 1. Manual, 2. BDD/ATDD, 3. Visual Regression */}
          <ServiceSection
            id="service-1"
            title="Manual Testing: The Foundation of QA"
            description="Manual testing is the backbone of software quality, ensuring precise human validation of functionality. However, it's time-consuming and prone to human error. We help you establish reliable manual testing processes while identifying opportunities for automation."
            label="Manual Testing"
            animationElement={<ManualTestingAnimation />}
            onVisibilityChange={trackServiceVisibility}
          />
          
          <ServiceSection
            id="service-2"
            title="BDD & ATDD E2E Testing"
            description="Bridge the gap between business requirements and technical implementation with Behavior-Driven Development (BDD) and Acceptance Test-Driven Development (ATDD). Our approach uses Given-When-Then scenarios that everyone understands, from developers to stakeholders."
            label="E2E Testing"
            isReversed={true}
            animationElement={<E2ETestingAnimation />}
            onVisibilityChange={trackServiceVisibility}
          />
          
          <ServiceSection
            id="service-3"
            title="Visual Regression & Screenshot Testing"
            description="Detect unwanted visual changes automatically. Our screenshot testing captures UI regressions by comparing images pixel-by-pixel, ensuring your users always experience a visually consistent interface across all browsers and devices."
            label="Screenshot Testing"
            animationElement={<ScreenshotTestingAnimation />}
            onVisibilityChange={trackServiceVisibility}
          />
          
          <ServiceSection
            id="service-4"
            title="Backend, Performance & Load Testing"
            description="Ensure your system is robust under any load. We test APIs, databases, and system performance under stress conditions to identify bottlenecks and optimize performance before they impact your users."
            label="Performance Testing"
            isReversed={true}
            animationElement={<BackendTestingAnimation />}
            onVisibilityChange={trackServiceVisibility}
          />
          
          <ServiceSection
            id="service-5"
            title="CI/CD Integration – Seamless Deployment"
            description="Integrate QA seamlessly into your development pipeline with Azure, GitHub, and Jenkins. Our CI/CD integration ensures quality gates at every stage, catching issues before they reach production."
            label="CI/CD Integration"
            animationElement={<CICDAnimation />}
            onVisibilityChange={trackServiceVisibility}
          />
          
          <ServiceSection
            id="service-6"
            title="Best QA Practices: Agile DOR & DOD"
            description="We establish clear Definition of Ready (DOR) and Definition of Done (DOD) criteria that include quality checkpoints. This ensures that quality is built-in from the start, not tested-in at the end of development."
            label="Best Practices"
            isReversed={true}
            animationElement={<BestPracticesAnimation />}
            onVisibilityChange={trackServiceVisibility}
          />
          
          <ServiceSection
            id="service-7"
            title="Test Management & Automated Reporting"
            description="Gain comprehensive visibility with our test management solutions. We implement tools that track test coverage, execution status, and defect trends with automated reporting dashboards that provide actionable insights."
            label="Test Management"
            animationElement={<TestManagementAnimation />}
            onVisibilityChange={trackServiceVisibility}
          />
        </section>
        
        {/* Quality Meter Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <div className="chip inline-block mb-4 reveal">Quality Metrics</div>
              <h2 className="text-3xl sm:text-4xl font-medium mb-4 reveal">
                Measuring Quality Improvement
              </h2>
              <p className="text-foreground/70 max-w-3xl mx-auto reveal">
                See how implementing our testing services increases software quality across critical metrics.
              </p>
            </div>
            
            <QualityMeter servicesImplemented={visibleServices} />
          </div>
        </section>
        
        {/* Contact Form Section */}
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
