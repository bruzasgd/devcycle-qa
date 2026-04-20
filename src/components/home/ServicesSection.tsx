import React, { useEffect, useRef } from 'react';
import { Bot, Sparkles, GitBranch, MonitorPlay, Eye, BarChart3, Gauge, RefreshCw, ShieldCheck, Headphones } from 'lucide-react';
import ServiceCard from '../ServiceCard';

interface ServicesSectionProps {
  onVisibilityChange: (isVisible: boolean, serviceId: string) => void;
}

const services = [
  {
    id: 'ai-agents',
    icon: Bot,
    label: 'AI Agents',
    title: 'Intelligent Test Orchestration',
    description: 'Autonomous QA agents leverage code context and change analysis to dynamically select and execute relevant tests at scale.',
    highlights: ['Smart test prioritization', 'Parallel execution', 'Continuous DevOps feedback'],
  },
  {
    id: 'ai-testing',
    icon: Sparkles,
    label: 'Generative AI',
    title: 'Smart Test Generation',
    description: 'Generative AI transforms specifications and telemetry into comprehensive test suites with edge cases and risk-based prioritization.',
    highlights: ['Self-healing frameworks', 'Edge-case discovery', '70% less maintenance'],
  },
  {
    id: 'cicd-integration',
    icon: GitBranch,
    label: 'Quality Gates',
    title: 'CI/CD Pipeline Integration',
    description: 'Quality gates enforce automated checks at every commit with real-time feedback loops to prevent regression leakage.',
    highlights: ['Progressive testing', 'Commit-level enforcement', 'Zero-friction rollouts'],
  },
  {
    id: 'e2e-testing',
    icon: MonitorPlay,
    label: 'Cross-Platform',
    title: 'E2E Testing Framework',
    description: 'Behavior-driven executable specifications validate complete user journeys across Cypress, Playwright, and real-device clouds.',
    highlights: ['BDD/ATDD scenarios', 'Real-device coverage', 'Web, mobile & hybrid'],
  },
  {
    id: 'visual-qa',
    icon: Eye,
    label: 'Visual AI',
    title: 'Visual Regression Detection',
    description: 'AI-assisted visual comparison combines pixel-perfect and semantic change detection to catch UI drift before users do.',
    highlights: ['Cross-browser validation', 'Intelligent diffing', 'Noise filtering'],
  },
  {
    id: 'quality-analytics',
    icon: BarChart3,
    label: 'Predictive Analytics',
    title: 'Quality Analytics & Insights',
    description: 'Dashboards deliver actionable intelligence: flake detection, slow tests, coverage trends, and root cause forecasting.',
    highlights: ['Reliability scores', 'Predictive forecasting', 'Coverage trendlines'],
  },
  {
    id: 'performance-qa',
    icon: Gauge,
    label: 'Resilience',
    title: 'Performance Engineering',
    description: 'Load, stress, and chaos testing with predictive bottleneck analysis ensures scalable performance under real-world conditions.',
    highlights: ['Chaos engineering', 'API & microservice QA', 'Bottleneck prediction'],
  },
  {
    id: 'automation-migration',
    icon: RefreshCw,
    label: 'Low-Code',
    title: 'Automation Migration',
    description: 'Convert legacy manual test suites into modern automation pipelines using low-code tools and hybrid scripting approaches.',
    highlights: ['No-code platforms', 'Hybrid scripting', 'Broader team participation'],
  },
  {
    id: 'qa-strategy',
    icon: ShieldCheck,
    label: 'Security',
    title: 'Security & Compliance',
    description: 'Integrate security testing into CI/CD with automated vulnerability scanning, OWASP checks, and API security validation.',
    highlights: ['Shift-left security', 'OWASP compliance', 'Audit-ready trails'],
  },
  {
    id: 'managed-qa',
    icon: Headphones,
    label: 'Managed Services',
    title: 'Managed QA & On-Demand',
    description: 'End-to-end managed QA — from strategy to execution — delivering flexible outcomes without heavy internal hiring overhead.',
    highlights: ['Fully outsourced QAOps', 'Dedicated teams', 'Scales with releases'],
  },
];

const ServicesSection: React.FC<ServicesSectionProps> = ({ onVisibilityChange }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Treat the whole section as "active" for the pipeline indicator
        if (entry.isIntersecting) {
          services.forEach((s) => onVisibilityChange(true, s.id));
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [onVisibilityChange]);

  return (
    <section id="services" ref={sectionRef} className="py-24 sm:py-32" aria-labelledby="services-heading">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <div className="chip mb-5">QA Optimization Stack</div>
          <h2 id="services-heading" className="text-4xl sm:text-5xl font-semibold text-foreground tracking-tight">
            Built for engineers who <span className="gradient-text">ship</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Strategic QA consulting and engineering foundations that scale agile and DevOps pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
