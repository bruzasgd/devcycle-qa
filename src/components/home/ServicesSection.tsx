
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
          Comprehensive QA Solutions
        </h2>
        <p className="text-foreground/70 max-w-3xl mx-auto reveal">
          We offer a full spectrum of testing and quality assurance services to ensure your software delivers exceptional experiences.
        </p>
      </div>
      
      {/* Services with reduced vertical spacing */}
      <ServiceSection
        id="service-1"
        title="Manual Testing: The Foundation of QA"
        description="Manual testing is the backbone of software quality, ensuring precise human validation of functionality. However, it's time-consuming and prone to human error. We help you establish reliable manual testing processes while identifying opportunities for automation."
        label="Manual Testing"
        animationElement={<ManualTestingAnimation />}
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
        title="Visual Regression & Screenshot Testing"
        description="Detect unwanted visual changes automatically. Our screenshot testing captures UI regressions by comparing images pixel-by-pixel, ensuring your users always experience a visually consistent interface across all browsers and devices."
        label="Screenshot Testing"
        animationElement={<ScreenshotTestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-4"
        title="Performance & Load Testing"
        description="Ensure your system is robust under any load. We test APIs, databases, and system performance under stress conditions to identify bottlenecks and optimize performance before they impact your users."
        label="Performance Testing"
        isReversed={true}
        animationElement={<BackendTestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-5"
        title="CI/CD Integration – Seamless Deployment"
        description="Integrate QA seamlessly into your development pipeline with Azure, GitHub, and Jenkins. Our CI/CD integration ensures quality gates at every stage, catching issues before they reach production."
        label="CI/CD Integration"
        animationElement={<CICDAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-6"
        title="Best QA Practices"
        description="We establish clear Definition of Ready (DOR) & Definition of Done (DOD), aligning QA with Agile workflows for optimal efficiency. Our quality-first approach ensures requirements clarity and comprehensive test coverage."
        label="Best Practices"
        isReversed={true}
        animationElement={<BestPracticesAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-7"
        title="Test Management & Reporting"
        description="Gain complete visibility into your QA process with our test management solutions. Track test execution, coverage metrics, and uncover insights to continuously improve your testing strategy."
        label="Test Management"
        animationElement={<TestManagementAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
    </section>
  );
};

export default ServicesSection;
