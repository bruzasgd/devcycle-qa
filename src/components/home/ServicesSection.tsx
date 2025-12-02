
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
          <div className="chip bg-yellow-100 text-yellow-800 border-yellow-200 relative">
            <span>QA Testing Services</span>
          </div>
        </div>
        <h2 id="services-heading" className="text-3xl sm:text-4xl font-medium mb-4 reveal">
          Comprehensive QA Testing & Automation Solutions
        </h2>
        <p className="text-foreground/70 max-w-3xl mx-auto reveal">
          We deliver enterprise-grade QA testing services combining proven methodologies with AI-powered automation, CI/CD integration, and intelligent test analytics. From manual testing migration to advanced performance testing, our solutions ensure your software meets the highest quality standards.
        </p>
      </div>
      
      {/* Services with reduced vertical spacing */}
      <ServiceSection
        id="service-1"
        title="Test Automation Migration Services - Manual to Automated Testing"
        description="Transform your QA process with professional test automation migration services. We seamlessly transition from manual testing to automated workflows using industry-leading frameworks including Playwright, Cypress, and Selenium. Our experts assess your current testing processes, identify automation opportunities, implement scalable test automation frameworks, and provide comprehensive training. Reduce testing time by up to 70% while improving test coverage and reliability."
        label="Automation Migration"
        animationElement={<MigrationAutomationAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-2"
        title="AI-Powered Testing Agents with MCP Integration"
        description="Leverage cutting-edge AI testing agents with Model Context Protocol (MCP) integrations for intelligent QA automation. Our custom AI agents connect seamlessly with GitHub for automated code analysis, Jira for test case management, Slack for real-time notifications, and test databases for data-driven testing strategies. Fine-tuned system prompts enable automated decision-making, intelligent test orchestration, and contextual insights across your entire testing ecosystem. Perfect for teams seeking advanced test automation and AI-driven quality assurance."
        label="AI Agent Orchestration"
        isReversed={true}
        animationElement={<AIAgentMCPAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-3"
        title="AI Test Generation & Manual QA Testing Services"
        description="Optimize your testing strategy with AI-assisted test generation combined with expert manual testing. Our hybrid approach uses artificial intelligence to automatically generate comprehensive test cases from requirements, user stories, and specifications while maintaining the precision and human insight of manual QA testing for edge cases, usability, and user experience validation. Achieve broader test coverage faster without sacrificing quality."
        label="Smart Test Generation"
        animationElement={<AITestGenerationAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-4"
        title="BDD & ATDD End-to-End Testing Solutions"
        description="Professional E2E testing services using Behavior-Driven Development (BDD) and Acceptance Test-Driven Development (ATDD) methodologies. We bridge business requirements and technical implementation with clear Given-When-Then scenarios that stakeholders, developers, and QA teams understand. Our E2E testing approach ensures complete user journey validation from UI to backend, catching integration issues early and reducing defects in production."
        label="E2E Testing"
        isReversed={true}
        animationElement={<E2ETestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-5"
        title="Visual Regression Testing with AI Computer Vision"
        description="Advanced visual regression testing services powered by AI computer vision technology. Our intelligent visual testing solution goes beyond pixel-perfect comparisons to detect meaningful UI changes while ignoring acceptable variations in dynamic content, fonts, and responsive layouts. Automatically catch visual bugs across multiple browsers, devices, and screen sizes. Perfect for maintaining design consistency in continuous deployment pipelines."
        label="Smart Visual Testing"
        animationElement={<ScreenshotTestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-6"
        title="Performance Testing & Load Testing Services"
        description="Enterprise-grade performance testing and load testing services to ensure your application performs under any conditions. We conduct comprehensive stress testing, load testing, and scalability testing for APIs, databases, microservices, and full-stack applications. Our performance engineering experts identify bottlenecks, optimize response times, and provide actionable recommendations to handle peak traffic. Includes real-time monitoring, detailed performance metrics, and capacity planning."
        label="Performance Testing"
        isReversed={true}
        animationElement={<BackendTestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-7"
        title="CI/CD Pipeline Integration with Automated Testing"
        description="Complete CI/CD pipeline integration services with multi-stage automated testing. Deploy confidently through development, staging, and production environments with progressive testing at every stage. Our CI/CD solutions include automated unit testing, integration testing, smoke tests, and regression tests with intelligent failure analysis and automatic rollback capabilities. Supports Jenkins, GitLab CI, GitHub Actions, CircleCI, and Azure DevOps. Accelerate release cycles while maintaining quality."
        label="Multi-Stage CI/CD"
        animationElement={<CICDAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-8"
        title="QA Strategy Consulting & Best Practices Implementation"
        description="Expert QA strategy consulting to optimize your software quality assurance process. We establish clear Definition of Ready (DOR) and Definition of Done (DOD) criteria, implement Agile testing methodologies, and align QA processes with DevOps workflows. Our quality-first approach includes test planning, risk-based testing strategies, requirements analysis, comprehensive test coverage optimization, and continuous process improvement frameworks. Perfect for teams transitioning to Agile or scaling QA operations."
        label="QA Strategy"
        isReversed={true}
        animationElement={<BestPracticesAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
      
      <ServiceSection
        id="service-9"
        title="Test Analytics & QA Reporting with AI Insights"
        description="Advanced test analytics and intelligent QA reporting solutions that transform raw testing data into actionable insights. Our analytics platform identifies quality trends, predicts defect patterns, highlights high-risk code areas, and generates comprehensive test reports with data-driven recommendations. Includes real-time dashboards, automated test metrics, code coverage analysis, and predictive analytics to optimize testing strategy, reduce defects, and improve software quality continuously."
        label="Smart Analytics"
        animationElement={<SmartAnalyticsAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-6"
      />
    </section>
  );
};

export default ServicesSection;
