
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
    <section id="services" className="py-6 sm:py-8" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <div className="inline-flex items-center justify-center mb-4 reveal">
          <CrashTestLogo size={30} className="mr-2" aria-hidden="true" />
          <div className="chip bg-yellow-100 text-yellow-800 border-yellow-200">
            <span>Our Services</span>
          </div>
        </div>
        <h2 id="services-heading" className="text-3xl sm:text-4xl font-medium mb-4 reveal">
          QA Optimization Stack
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto reveal">
          Strategic automation and process refinement that scales quality, not headcount.
        </p>
      </div>
      
      <ServiceSection
        id="service-1"
        title="Automation Migration"
        description="Convert manual test suites to automated pipelines. Reduce execution time by 70%."
        label="Automation"
        animationElement={<MigrationAutomationAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-2"
        title="AI-Powered Test Orchestration"
        description="Intelligent agents that prioritize, schedule, and execute tests based on code changes."
        label="AI Agents"
        isReversed={true}
        animationElement={<AIAgentMCPAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-3"
        title="Smart Test Generation"
        description="Auto-generate test cases from specs. Maximize coverage with minimal maintenance."
        label="AI Testing"
        animationElement={<AITestGenerationAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-4"
        title="E2E Testing Framework"
        description="BDD/ATDD scenarios that validate complete user journeys automatically."
        label="E2E"
        isReversed={true}
        animationElement={<E2ETestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-5"
        title="Visual Regression Detection"
        description="Automated cross-browser visual validation. Catch UI drift before users do."
        label="Visual QA"
        animationElement={<ScreenshotTestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-6"
        title="Performance Benchmarking"
        description="Load testing and bottleneck identification. Ensure reliability at scale."
        label="Performance"
        isReversed={true}
        animationElement={<BackendTestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-7"
        title="Pipeline Integration"
        description="Embed quality gates into CI/CD. Automated feedback on every commit."
        label="CI/CD"
        animationElement={<CICDAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-8"
        title="Process Optimization"
        description="Streamlined workflows, quality metrics, and continuous improvement systems."
        label="Strategy"
        isReversed={true}
        animationElement={<BestPracticesAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-9"
        title="Quality Analytics"
        description="Actionable insights from test data. Predict failures, optimize coverage."
        label="Analytics"
        animationElement={<SmartAnalyticsAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
    </section>
  );
};

export default ServicesSection;
