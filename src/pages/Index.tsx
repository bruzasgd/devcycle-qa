
import { useEffect } from "react";
import Header from "../components/Header";
import ServiceSection from "../components/ServiceSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import SmoothScroll from "../components/SmoothScroll";
import { CheckCircle, FileCheck, Gauge, Cpu, GitBranch, CheckSquare, LayoutList } from "lucide-react";

const Index = () => {
  // Animation components for each service
  const ManualTestingAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="animate-pulse-subtle absolute w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-dashed border-gray-300"></div>
      <div className="relative z-10 text-center">
        <FileCheck size={48} className="mx-auto mb-4 text-gray-400" />
        <div className="w-48 h-2 bg-gray-200 rounded-full mb-2"></div>
        <div className="w-36 h-2 bg-gray-200 rounded-full mb-2"></div>
        <div className="w-40 h-2 bg-gray-200 rounded-full"></div>
      </div>
      
      <div className="absolute bottom-4 right-4 flex items-center">
        <div className="h-3 w-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
        <span className="text-xs text-gray-400">Processing...</span>
      </div>
    </div>
  );

  const AutomatedUITestingAnimation = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative grid grid-cols-2 gap-4">
        <div className="p-3 rounded-lg bg-green-50 border border-green-200 flex items-center">
          <CheckCircle size={16} className="text-green-500 mr-2" />
          <span className="text-xs">Login Test</span>
        </div>
        <div className="p-3 rounded-lg bg-green-50 border border-green-200 flex items-center">
          <CheckCircle size={16} className="text-green-500 mr-2" />
          <span className="text-xs">Signup Test</span>
        </div>
        <div className="p-3 rounded-lg bg-green-50 border border-green-200 flex items-center animate-pulse">
          <svg className="animate-spin h-4 w-4 text-primary mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-xs">Cart Test</span>
        </div>
        <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 flex items-center opacity-60">
          <div className="h-4 w-4 border-2 border-gray-300 rounded-full mr-2"></div>
          <span className="text-xs">Checkout Test</span>
        </div>
      </div>
    </div>
  );

  const BackendTestingAnimation = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <Gauge size={28} className="text-primary" />
          <div className="ml-4 w-40 h-6 bg-gradient-to-r from-green-500 to-red-500 rounded-full overflow-hidden">
            <div className="h-full bg-white/20 animate-progress"></div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-xs">Response Time</span>
            <span className="text-xs font-medium">245ms</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs">Throughput</span>
            <span className="text-xs font-medium">865 req/s</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs">Error Rate</span>
            <span className="text-xs font-medium">0.05%</span>
          </div>
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
              <GitBranch size={24} className="text-primary mb-2" />
              <span className="text-xs">Commit</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-green-500 text-white p-1">
                <CheckCircle size={22} />
              </div>
              <span className="text-xs">Tests</span>
            </div>
            <div className="flex flex-col items-center animate-pulse">
              <Cpu size={24} className="text-primary mb-2" />
              <span className="text-xs">Deploy</span>
            </div>
          </div>
          
          <div className="w-full h-2 bg-gray-100 rounded-full mb-6 overflow-hidden">
            <div className="h-full w-2/3 bg-primary rounded-full animate-pulse"></div>
          </div>
          
          <div className="p-3 rounded-lg bg-green-50 border border-green-200 text-xs w-full text-center">
            Pipeline in progress: Stage 2/3
          </div>
        </div>
      </div>
    </div>
  );

  const BestPracticesAnimation = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="space-y-3 w-64">
          <div className="p-2 rounded-lg border border-green-200 bg-green-50 flex items-center">
            <CheckSquare size={16} className="text-green-500 mr-2" />
            <span className="text-xs">Test Cases Documented</span>
          </div>
          <div className="p-2 rounded-lg border border-green-200 bg-green-50 flex items-center">
            <CheckSquare size={16} className="text-green-500 mr-2" />
            <span className="text-xs">Acceptance Criteria Clear</span>
          </div>
          <div className="p-2 rounded-lg border border-green-200 bg-green-50 flex items-center">
            <CheckSquare size={16} className="text-green-500 mr-2" />
            <span className="text-xs">Test Data Available</span>
          </div>
          <div className="p-2 rounded-lg border border-gray-200 bg-gray-50 flex items-center opacity-60">
            <div className="h-4 w-4 border-2 border-gray-300 rounded mr-2"></div>
            <span className="text-xs">Code Review Complete</span>
          </div>
        </div>
      </div>
    </div>
  );

  const TestManagementAnimation = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="flex items-center mb-4">
          <LayoutList size={22} className="text-primary mr-2" />
          <span className="text-sm font-medium">Test Report Dashboard</span>
        </div>
        
        <div className="space-y-3 w-64">
          <div className="flex justify-between items-center text-xs">
            <span>Total Tests</span>
            <span className="font-medium">168</span>
          </div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-green-500 rounded-full"></div>
          </div>
          
          <div className="flex justify-between text-xs">
            <span>Automated</span>
            <span>Manual</span>
          </div>
          <div className="flex space-x-1">
            <div className="h-1.5 bg-primary rounded-full w-3/5"></div>
            <div className="h-1.5 bg-gray-300 rounded-full w-2/5"></div>
          </div>
          
          <div className="flex justify-between items-center text-xs">
            <span>Pass Rate</span>
            <span className="font-medium text-green-500">98.2%</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative antialiased">
      <SmoothScroll />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
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
                  className="px-8 py-3 rounded-full bg-primary text-white shadow-sm hover:shadow-md transition-all"
                >
                  Explore Services
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-3 rounded-full bg-white border border-gray-200 text-primary shadow-sm hover:shadow-md transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section id="services" className="py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <div className="chip inline-block mb-4 reveal">Services</div>
            <h2 className="text-3xl sm:text-4xl font-medium mb-6 reveal">
              Comprehensive QA Solutions
            </h2>
            <p className="text-foreground/70 max-w-3xl mx-auto reveal">
              We offer a full spectrum of testing and quality assurance services to ensure your software delivers exceptional experiences.
            </p>
          </div>
          
          <ServiceSection
            id="manual-testing"
            title="Manual Testing: The Foundation of QA"
            description="Manual testing is the backbone of software quality, ensuring precise human validation of functionality. However, it's time-consuming and prone to human error. We help you establish reliable manual testing processes while identifying opportunities for automation."
            label="Manual Testing"
            animationElement={<ManualTestingAnimation />}
          />
          
          <ServiceSection
            id="automated-testing"
            title="Automated UI & E2E Testing: Speed & Precision"
            description="Boost efficiency with automated UI and end-to-end testing, reducing repetitive tasks while enhancing coverage and reliability. Our automation frameworks enable faster releases while maintaining exceptional quality standards."
            label="Automated Testing"
            isReversed={true}
            animationElement={<AutomatedUITestingAnimation />}
          />
          
          <ServiceSection
            id="backend-testing"
            title="Backend, Performance & Load Testing"
            description="Ensure your system is robust under any load. We test APIs, databases, and system performance under stress conditions to identify bottlenecks and optimize performance before they impact your users."
            label="Performance Testing"
            animationElement={<BackendTestingAnimation />}
          />
          
          <ServiceSection
            id="cicd-integration"
            title="CI/CD Integration – Seamless Deployment"
            description="Integrate QA seamlessly into your development pipeline with Azure, GitHub, and Jenkins. Our CI/CD integration ensures quality gates at every stage, catching issues before they reach production."
            label="CI/CD Integration"
            isReversed={true}
            animationElement={<CICDAnimation />}
          />
          
          <ServiceSection
            id="best-practices"
            title="Best QA Practices: Agile DOR & DOD"
            description="We establish clear Definition of Ready (DOR) & Definition of Done (DOD), aligning QA with Agile workflows for optimal efficiency. Our quality-first approach ensures requirements clarity and comprehensive test coverage."
            label="Best Practices"
            animationElement={<BestPracticesAnimation />}
          />
          
          <ServiceSection
            id="test-management"
            title="Test Management: Control Your Testing Process"
            description="End-to-end test management solutions, from organizing test cases to tracking execution across manual and automated suites. We help you optimize test coverage, visualize quality metrics, and make data-driven decisions."
            label="Test Management"
            isReversed={true}
            animationElement={<TestManagementAnimation />}
          />
        </section>
       
        <Contact />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
