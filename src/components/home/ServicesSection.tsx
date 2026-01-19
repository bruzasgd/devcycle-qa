
import React from 'react';
import ServiceSection from '../ServiceSection';
import CrashTestLogo from '../CrashTestLogo';
import E2ETestingAnimation from '../animations/E2ETestingAnimation';
import ScreenshotTestingAnimation from '../animations/ScreenshotTestingAnimation';
import BackendTestingAnimation from '../animations/BackendTestingAnimation';
import CICDAnimation from '../animations/CICDAnimation';
import BestPracticesAnimation from '../animations/BestPracticesAnimation';
import AITestGenerationAnimation from '../animations/AITestGenerationAnimation';
import SmartAnalyticsAnimation from '../animations/SmartAnalyticsAnimation';
import MigrationAutomationAnimation from '../animations/MigrationAutomationAnimation';
import AIAgentMCPAnimation from '../animations/AIAgentMCPAnimation';

interface ServicesSectionProps {
  onVisibilityChange: (isVisible: boolean, serviceId: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onVisibilityChange }) => {
  return (
    <section id="services" className="py-8 sm:py-12" aria-labelledby="services-heading">
      <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-20 text-center mb-8">
        <div className="inline-flex items-center justify-center mb-3 reveal">
          <CrashTestLogo size={24} className="mr-2" aria-hidden="true" />
          <div className="chip bg-yellow-100 text-yellow-800 border-yellow-200 text-xs">
            <span>Our Services</span>
          </div>
        </div>
        <h2 id="services-heading" className="text-2xl sm:text-3xl font-medium mb-3 reveal">
          QA Optimization Stack
        </h2>
        <p className="text-foreground/60 max-w-xl mx-auto text-sm reveal">
          Strategic automation and process refinement that scales quality, not headcount.
        </p>
      </div>
      
      {/* 1. AI-Powered Test Orchestration - Most trending */}
      <ServiceSection
        id="service-1"
        title="AI-Powered Test Orchestration"
        description="Intelligent agents that prioritize, schedule, and execute tests based on code changes."
        label="AI Agents"
        animationElement={<AIAgentMCPAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 2. Smart Test Generation - AI trend continues */}
      <ServiceSection
        id="service-2"
        title="Smart Test Generation"
        description="Auto-generate test cases from specs. Maximize coverage with minimal maintenance."
        label="AI Testing"
        isReversed={true}
        animationElement={<AITestGenerationAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 3. CI/CD Integration - Shift-left testing trend */}
      <ServiceSection
        id="service-3"
        title="Pipeline Integration"
        description="Embed quality gates into CI/CD. Automated feedback on every commit."
        label="CI/CD"
        animationElement={<CICDAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 4. E2E Testing Framework */}
      <ServiceSection
        id="service-4"
        title="E2E Testing Framework"
        description="BDD/ATDD scenarios that validate complete user journeys automatically."
        label="E2E"
        isReversed={true}
        animationElement={<E2ETestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 5. Visual Regression Detection */}
      <ServiceSection
        id="service-5"
        title="Visual Regression Detection"
        description="Automated cross-browser visual validation. Catch UI drift before users do."
        label="Visual QA"
        animationElement={<ScreenshotTestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 6. Quality Analytics */}
      <ServiceSection
        id="service-6"
        title="Quality Analytics"
        description="Actionable insights from test data. Predict failures, optimize coverage."
        label="Analytics"
        isReversed={true}
        animationElement={<SmartAnalyticsAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 7. Performance Benchmarking */}
      <ServiceSection
        id="service-7"
        title="Performance Benchmarking"
        description="Load testing and bottleneck identification. Ensure reliability at scale."
        label="Performance"
        animationElement={<BackendTestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 8. Automation Migration */}
      <ServiceSection
        id="service-8"
        title="Automation Migration"
        description="Convert manual test suites to automated pipelines. Reduce execution time by 70%."
        label="Automation"
        isReversed={true}
        animationElement={<MigrationAutomationAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 9. Process Optimization */}
      <ServiceSection
        id="service-9"
        title="Process Optimization"
        description="Streamlined workflows, quality metrics, and continuous improvement systems."
        label="Strategy"
        animationElement={<BestPracticesAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
    </section>
  );
};

export default ServicesSection;
