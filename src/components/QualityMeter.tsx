
import React from "react";
import { qualityIndicators } from "../config/styleConfig";

interface QualityMeterProps {
  servicesUsed: number;
  totalServices: number;
}

const QualityMeter: React.FC<QualityMeterProps> = ({ servicesUsed, totalServices }) => {
  const percentage = (servicesUsed / totalServices) * 100;
  const stabilityScore = calculateQualityScore(percentage, qualityIndicators.stability);
  const speedScore = calculateQualityScore(percentage, qualityIndicators.speed);
  const reliabilityScore = calculateQualityScore(percentage, qualityIndicators.reliability);
  
  // CLI-style progress bar
  const filledBlocks = Math.round((servicesUsed / totalServices) * 20);
  const emptyBlocks = 20 - filledBlocks;
  const progressBar = "█".repeat(filledBlocks) + "░".repeat(emptyBlocks);
  
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-6">
        <h3 className="text-xl sm:text-2xl font-mono font-medium mb-2 text-foreground">
          <span className="text-primary/40">&gt; </span>testing_impact.analyze()
        </h3>
        <p className="text-muted-foreground font-mono text-sm">
          // As more testing services are utilized, software quality metrics improve
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <QualityIndicator title="stability" percentage={stabilityScore} color="primary" description="Fewer crashes & bugs" />
        <QualityIndicator title="performance" percentage={speedScore} color="accent" description="Faster response times" />
        <QualityIndicator title="reliability" percentage={reliabilityScore} color="amber" description="Consistent behavior" />
      </div>
      
      <div className="mt-8 flex flex-col items-center">
        <div className="font-mono text-sm text-primary tracking-wider">
          [{progressBar}]
        </div>
        <div className="mt-2 text-sm text-muted-foreground font-mono">
          <span className="text-primary">{servicesUsed}</span>
          <span className="text-muted-foreground">/{totalServices}</span> services_active
        </div>
      </div>
    </div>
  );
};

interface QualityIndicatorProps {
  title: string;
  percentage: number;
  color: "primary" | "accent" | "amber";
  description: string;
}

const QualityIndicator: React.FC<QualityIndicatorProps> = ({ title, percentage, color, description }) => {
  const colorMap = {
    primary: "text-primary bg-primary",
    accent: "text-accent bg-accent",
    amber: "text-[hsl(var(--terminal-amber))] bg-[hsl(var(--terminal-amber))]",
  };
  const textColor = colorMap[color].split(" ")[0];
  const bgColor = colorMap[color].split(" ")[1];
  
  return (
    <div className="terminal-window">
      <div className="terminal-titlebar">
        <div className="terminal-dot-red" />
        <div className="terminal-dot-yellow" />
        <div className="terminal-dot-green" />
        <span className="ml-2 text-[10px] font-mono text-muted-foreground">{title}.metric</span>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2 font-mono">
          <span className={`text-sm ${textColor}`}>{title}</span>
          <span className={`font-bold text-lg ${textColor}`}>{percentage}%</span>
        </div>
        
        <div className="w-full h-1.5 bg-border rounded-full overflow-hidden mb-2">
          <div 
            className={`h-full rounded-full ${bgColor} transition-all duration-1000 ease-out`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        
        <p className="text-[10px] font-mono text-muted-foreground">// {description}</p>
      </div>
    </div>
  );
};

function calculateQualityScore(percentage: number, indicator: { low: number; medium: number; high: number }) {
  if (percentage < 33) {
    return indicator.low;
  } else if (percentage < 66) {
    const ratio = (percentage - 33) / 33;
    return Math.round(indicator.low + ratio * (indicator.medium - indicator.low));
  } else if (percentage < 100) {
    const ratio = (percentage - 66) / 34;
    return Math.round(indicator.medium + ratio * (indicator.high - indicator.medium));
  } else {
    return indicator.high;
  }
}

export default QualityMeter;
