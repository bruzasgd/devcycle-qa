
import React from 'react';
import ServiceSection from '../ServiceSection';
import CrashTestLogo from '../CrashTestLogo';
import ManualTestingAnimation from '../animations/ManualTestingAnimation';
import E2ETestingAnimation from '../animations/E2ETestingAnimation';
import ScreenshotTestingAnimation from '../animations/ScreenshotTestingAnimation';
import BackendTestingAnimation from '../animations/BackendTestingAnimation';
import CICDAnimation from '../animations/CICDAnimation';
import BestPracticesAnimation from '../animations/BestPracticesAnimation';
import TestManagementAnimation from '../animations/TestManagementAnimation';
import AITestGenerationAnimation from '../animations/AITestGenerationAnimation';
import SmartAnalyticsAnimation from '../animations/SmartAnalyticsAnimation';

interface ServicesSectionProps {
  onVisibilityChange: (isVisible: boolean, serviceId: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onVisibilityChange }) => {
  return (
    <section id="services" className="py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <div className="inline-flex items-center justify-center mb-4 reveal">
          <CrashTestLogo size={30} className="mr-2" />
          <div className="chip bg-yellow-100 text-yellow-800 border-yellow-200 relative">
            <span>Services</span>
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl font-medium mb-4 reveal">
          Modern QA Solutions
        </h2>
        <p className="text-foreground/70 max-w-3xl mx-auto reveal">
          We combine proven QA practices with cutting-edge technology and AI where it adds real value to deliver intelligent testing solutions that evolve with your software.
        </p>
      </div>
      
      {/* Services with reduced vertical spacing */}
      <ServiceSection
        id="service-1"
        title="AI-Assisted Test Generation & Manual Testing"
        description="We combine the precision of manual testing with AI-powered test case generation. Our intelligent tools help create comprehensive test scenarios from requirements while maintaining the human insight needed for edge cases and user experience validation."
        label="Smart Test Generation"
        animationElement={<AITestGenerationAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-2"
        title="BDD & ATDD E2E Testing"
        description="Bridge the gap between business requirements and technical implementation with Behavior-Driven Development (BDD) and Acceptance Test-Driven Development (ATDD). Our approach uses Given-When-Then scenarios that everyone understands, from developers to stakeholders."
        label="E2E Testing"
        isReversed={true}
        animationElement={<E2ETestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-3"
        title="AI-Enhanced Visual Regression Testing"
        description="Advanced computer vision technology detects meaningful visual changes beyond pixel-perfect comparisons. Our AI algorithms understand design intent, ignore acceptable variations like dynamic content, and flag actual visual regressions across devices and browsers."
        label="Smart Visual Testing"
        animationElement={<ScreenshotTestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-4"
        title="Performance & Load Testing"
        description="Comprehensive performance testing that ensures your system is robust under any load. We test APIs, databases, and system performance under stress conditions, with intelligent analysis to identify bottlenecks and provide actionable optimization recommendations."
        label="Performance Testing"
        isReversed={true}
        animationElement={<BackendTestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-5"
        title="CI/CD Integration – Seamless Deployment"
        description="Integrate QA seamlessly into your development pipeline with Azure, GitHub, and Jenkins. Our CI/CD integration ensures quality gates at every stage, with intelligent failure analysis and automated reporting to catch issues before they reach production."
        label="CI/CD Integration"
        animationElement={<CICDAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-6"
        title="QA Strategy & Best Practices"
        description="We establish clear Definition of Ready (DOR) & Definition of Done (DOD), aligning QA with Agile workflows for optimal efficiency. Our quality-first approach ensures requirements clarity, comprehensive test coverage, and continuous process improvement."
        label="QA Strategy"
        isReversed={true}
        animationElement={<BestPracticesAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-7"
        title="Intelligent Test Analytics & Reporting"
        description="Transform raw testing data into actionable insights with smart analytics. Our system identifies quality trends, highlights high-risk areas, generates comprehensive reports, and provides data-driven recommendations to optimize your testing strategy and prevent defects."
        label="Smart Analytics"
        animationElement={<SmartAnalyticsAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
    </section>
  );
};

export default ServicesSection;
