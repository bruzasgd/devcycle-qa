
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
          Complete QA Solutions
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto reveal">
          From manual to automated testing—everything you need to ship quality software.
        </p>
      </div>
      
      <ServiceSection
        id="service-1"
        title="Manual to Automation Migration"
        description="Transition from manual to automated testing with Playwright, Cypress, or Selenium. Cut testing time by 70%."
        label="Automation Migration"
        animationElement={<MigrationAutomationAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-2"
        title="AI Testing Agents"
        description="Custom AI agents integrated with GitHub, Jira, Slack for intelligent test orchestration and automated decision-making."
        label="AI Agents"
        isReversed={true}
        animationElement={<AIAgentMCPAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-3"
        title="AI Test Generation"
        description="Auto-generate test cases from requirements using AI, combined with manual testing for edge cases."
        label="Smart Testing"
        animationElement={<AITestGenerationAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-4"
        title="E2E Testing (BDD/ATDD)"
        description="Given-When-Then scenarios for complete user journey validation. Catch integration issues early."
        label="E2E Testing"
        isReversed={true}
        animationElement={<E2ETestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-5"
        title="Visual Regression Testing"
        description="AI-powered visual testing across browsers and devices. Detect meaningful UI changes automatically."
        label="Visual Testing"
        animationElement={<ScreenshotTestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-6"
        title="Performance & Load Testing"
        description="Stress test your APIs and apps. Identify bottlenecks and optimize for peak traffic."
        label="Performance"
        isReversed={true}
        animationElement={<BackendTestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-7"
        title="CI/CD Integration"
        description="Automated testing in your pipeline. Supports Jenkins, GitHub Actions, GitLab CI, Azure DevOps."
        label="CI/CD"
        animationElement={<CICDAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-8"
        title="QA Strategy & Best Practices"
        description="Definition of Ready/Done, Agile workflows, test planning, and continuous improvement."
        label="QA Strategy"
        isReversed={true}
        animationElement={<BestPracticesAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-9"
        title="Test Analytics & Reporting"
        description="Transform test data into insights. Predict defects, track trends, optimize coverage."
        label="Analytics"
        animationElement={<SmartAnalyticsAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
    </section>
  );
};

export default ServicesSection;
