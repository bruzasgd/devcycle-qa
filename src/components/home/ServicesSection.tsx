
import React from 'react';
import { Zap, Bot, TestTube, Eye, Gauge, GitBranch } from 'lucide-react';

interface ServicesSectionProps {
  onVisibilityChange: (isVisible: boolean, serviceId: string) => void;
}

const services = [
  {
    id: "service-1",
    icon: Zap,
    title: "Test Automation",
    description: "Migrate from manual to automated testing with Playwright, Cypress & Selenium. Reduce testing time by 70%.",
    highlight: "Most Popular"
  },
  {
    id: "service-2",
    icon: Bot,
    title: "AI Testing Agents",
    description: "Custom AI agents with GitHub, Jira & Slack integration for intelligent test orchestration.",
    highlight: null
  },
  {
    id: "service-3",
    icon: TestTube,
    title: "E2E Testing",
    description: "BDD & ATDD testing with Given-When-Then scenarios. Complete user journey validation.",
    highlight: null
  },
  {
    id: "service-4",
    icon: Eye,
    title: "Visual Testing",
    description: "AI-powered visual regression testing across browsers, devices, and screen sizes.",
    highlight: null
  },
  {
    id: "service-5",
    icon: Gauge,
    title: "Performance Testing",
    description: "Load testing, stress testing & scalability analysis with actionable optimization insights.",
    highlight: null
  },
  {
    id: "service-6",
    icon: GitBranch,
    title: "CI/CD Integration",
    description: "Automated testing pipelines for Jenkins, GitHub Actions, GitLab CI & Azure DevOps.",
    highlight: null
  }
];

const ServicesSection: React.FC<ServicesSectionProps> = ({ onVisibilityChange }) => {
  // Trigger visibility for all services on mount for the quality meter
  React.useEffect(() => {
    services.forEach((_, index) => {
      setTimeout(() => {
        onVisibilityChange(true, `service-${index + 1}`);
      }, index * 100);
    });
  }, [onVisibilityChange]);

  return (
    <section id="services" className="py-16 sm:py-20 bg-secondary/30" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-semibold mb-4">
            Complete QA Solutions
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Everything you need to ship high-quality software with confidence.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              {service.highlight && (
                <div className="absolute -top-3 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  {service.highlight}
                </div>
              )}
              
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Discuss your QA needs
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
