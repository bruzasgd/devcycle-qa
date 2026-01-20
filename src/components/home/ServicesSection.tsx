
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
import QAOpsAnimation from '../animations/QAOpsAnimation';
import ManagedQAAnimation from '../animations/ManagedQAAnimation';

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
            <span>Quality Engineering Services</span>
          </div>
        </div>
        <h2 id="services-heading" className="text-2xl sm:text-3xl font-medium mb-3 reveal">
          QA Optimization Stack
        </h2>
        <p className="text-foreground/60 max-w-2xl mx-auto text-sm reveal">
          Strategic QA consulting and engineering foundations that scale agile and DevOps pipelines with autonomous testing, predictive analytics, and operational QA metrics—aligned with uptime, user experience, and release velocity goals.
        </p>
      </div>
      
      {/* 1. AI-Powered Test Orchestration */}
      <ServiceSection
        id="ai-agents"
        title="AI Agents – Intelligent Test Orchestration"
        description="Autonomous QA agents leverage code context and change analysis to dynamically select and execute relevant tests at scale. These intelligent orchestrators optimize test runtimes through parallel execution and smart prioritization, feeding actionable insights back to DevOps teams for continuous pipeline refinement."
        label="AI Agents"
        animationElement={<AIAgentMCPAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 2. Smart Test Generation */}
      <ServiceSection
        id="ai-testing"
        title="AI Testing – Smart Test Generation"
        description="Generative AI transforms specifications, user stories, and production telemetry into comprehensive test suites—including edge cases and risk-based prioritization. Self-healing frameworks automatically adapt to UI and API changes, eliminating brittle tests and reducing maintenance overhead by up to 70%."
        label="Generative AI"
        isReversed={true}
        animationElement={<AITestGenerationAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 3. CI/CD Integration */}
      <ServiceSection
        id="cicd-integration"
        title="CI/CD Pipeline Integration"
        description="Quality gates integrate seamlessly into CI/CD workflows, enforcing automated checks at every commit. Real-time feedback loops prevent regression leakage into production, while progressive testing across development, staging, and production environments ensures confidence at each deployment stage."
        label="Quality Gates"
        animationElement={<CICDAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 4. E2E Testing Framework */}
      <ServiceSection
        id="e2e-testing"
        title="E2E Testing Framework (Cypress, Playwright)"
        description="Behavior-driven (BDD/ATDD) executable specifications validate complete user journeys with Given-When-Then scenarios. Real-device and cloud testing infrastructure ensures coverage across web, mobile, and hybrid applications on actual devices and browser configurations."
        label="Cross-Platform"
        isReversed={true}
        animationElement={<E2ETestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 5. Visual QA */}
      <ServiceSection
        id="visual-qa"
        title="Visual QA – Visual Regression Detection"
        description="AI-assisted visual comparison combines pixel-perfect and semantic change detection to catch UI drift before users do. Cross-browser validation across real devices ensures UX consistency, while intelligent diffing filters noise and highlights meaningful visual regressions."
        label="Visual AI"
        animationElement={<ScreenshotTestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 6. Quality Analytics */}
      <ServiceSection
        id="quality-analytics"
        title="Quality Analytics & Risk Insights"
        description="Dashboards deliver actionable intelligence: flake detection, slow test identification, coverage trends, and root cause forecasting. Predictive analytics and reliability scores drive smarter decisions, enabling teams to focus effort where it impacts quality most."
        label="Predictive Analytics"
        isReversed={true}
        animationElement={<SmartAnalyticsAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 7. Performance Benchmarking */}
      <ServiceSection
        id="performance-qa"
        title="Performance & Resilience Engineering"
        description="Load, stress, and chaos testing with predictive bottleneck analysis ensures scalable, reliable performance under real-world conditions. API and microservices QA validates distributed system resilience, identifying failure points before they impact production users."
        label="Resilience"
        animationElement={<BackendTestingAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 8. Automation Migration */}
      <ServiceSection
        id="automation-migration"
        title="Automation Migration & Low-Code Platforms"
        description="Convert legacy manual test suites into modern automation pipelines using low-code/no-code tools and hybrid scripting approaches. Boost throughput with reduced maintenance overhead, enabling broader team participation in quality engineering without deep coding expertise."
        label="Low-Code"
        isReversed={true}
        animationElement={<MigrationAutomationAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 9. QAOps / TestOps */}
      <ServiceSection
        id="qaops"
        title="Process & Strategy Optimization (QAOps/TestOps)"
        description="Strategic frameworks align QA with DevOps, SRE, and security practices. Enable shift-left and shift-right testing, observability workflows, and operational quality engineering that treats testing as a continuous, integrated discipline rather than a phase."
        label="TestOps"
        animationElement={<QAOpsAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 10. Best Practices & Strategy */}
      <ServiceSection
        id="qa-strategy"
        title="Security & Compliance Automation"
        description="Integrate security testing into CI/CD pipelines with automated vulnerability scanning, OWASP compliance checks, and API security validation. Shift security left to catch issues early while maintaining audit trails and compliance documentation."
        label="Security"
        isReversed={true}
        animationElement={<BestPracticesAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
      
      {/* 11. Managed QA Services */}
      <ServiceSection
        id="managed-qa"
        title="Managed QA Services & On-Demand Support"
        description="End-to-end managed QA offerings—from strategy to execution—delivering flexible outcomes without heavy internal hiring or tooling overhead. Fully outsourced QAOps/TestOps with dedicated teams that scale with your release cadence and business needs."
        label="Managed Services"
        animationElement={<ManagedQAAnimation />}
        onVisibilityChange={onVisibilityChange}
        className="py-4"
      />
    </section>
  );
};

export default ServicesSection;
