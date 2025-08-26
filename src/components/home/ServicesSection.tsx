
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
          AI-Powered QA Solutions
        </h2>
        <p className="text-foreground/70 max-w-3xl mx-auto reveal">
          We leverage cutting-edge AI technology alongside proven QA practices to deliver intelligent testing solutions that evolve with your software.
        </p>
      </div>
      
      {/* Services with reduced vertical spacing */}
      <ServiceSection
        id="service-1"
        title="AI-Enhanced Test Generation & Automation"
        description="Transform your testing approach with AI-powered test case generation. Our intelligent algorithms analyze your application behavior, user flows, and business logic to automatically create comprehensive test scenarios, reducing manual effort while increasing coverage and accuracy."
        label="AI Test Generation"
        animationElement={<AITestGenerationAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-2"
        title="Smart BDD & AI-Driven E2E Testing"
        description="Bridge the gap between business requirements and technical implementation with AI-enhanced Behavior-Driven Development. Our intelligent system automatically generates Given-When-Then scenarios from requirements, creates self-healing test scripts, and adapts to UI changes without manual intervention."
        label="Smart E2E Testing"
        isReversed={true}
        animationElement={<E2ETestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-3"
        title="AI-Powered Visual Intelligence & Regression Testing"
        description="Advanced computer vision AI detects visual anomalies beyond pixel-perfect comparisons. Our intelligent algorithms understand design intent, ignore acceptable variations, and flag meaningful visual regressions while adapting to responsive design changes across devices and browsers."
        label="AI Visual Testing"
        animationElement={<ScreenshotTestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-4"
        title="Intelligent Performance & Predictive Load Testing"
        description="AI-driven performance testing that learns your system's behavior patterns and predicts potential bottlenecks. Our machine learning algorithms analyze historical data to simulate realistic load scenarios, automatically adjust test parameters, and provide actionable optimization recommendations."
        label="AI Performance Testing"
        isReversed={true}
        animationElement={<BackendTestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-5"
        title="Smart CI/CD with Intelligent Quality Gates"
        description="AI-enhanced CI/CD pipelines that learn from deployment patterns and automatically adjust quality thresholds. Our intelligent system predicts deployment risks, suggests optimal testing strategies, and implements dynamic quality gates that adapt to your codebase evolution."
        label="Smart CI/CD"
        animationElement={<CICDAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-6"
        title="AI-Driven QA Strategy & Best Practices"
        description="Leverage machine learning to continuously optimize your QA processes. Our AI analyzes team performance, identifies bottlenecks, and recommends personalized improvements to Definition of Ready and Done criteria, ensuring your QA practices evolve with your development velocity."
        label="Smart QA Strategy"
        isReversed={true}
        animationElement={<BestPracticesAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-7"
        title="Intelligent Test Analytics & Predictive Reporting"
        description="Transform raw testing data into actionable insights with AI-powered analytics. Our machine learning algorithms predict quality trends, identify high-risk areas, generate automated reports, and provide intelligent recommendations to optimize your testing ROI and prevent defects."
        label="AI Analytics"
        animationElement={<SmartAnalyticsAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
    </section>
  );
};

export default ServicesSection;
