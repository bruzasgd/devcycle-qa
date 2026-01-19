import React from 'react';
import { Brain, GitBranch, MessageSquare, Database, Workflow } from 'lucide-react';

const AIAgentMCPAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      {/* Central AI Agent Brain */}
      <div className="relative z-10">
        <div className="relative bg-primary/10 border-2 border-primary/30 rounded-full p-4">
          <Brain className="w-10 h-10 text-primary" />
        </div>
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <div className="text-xs font-medium text-primary">AI Agent</div>
        </div>
      </div>

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
        <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
        <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
        <line x1="50%" y1="50%" x2="80%" y2="75%" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.3" />
      </svg>

      {/* MCP Integration Cards - Simplified */}
      <div className="absolute top-4 left-4 bg-background border border-border rounded p-2" style={{ zIndex: 2 }}>
        <GitBranch className="w-5 h-5 text-foreground/70" />
      </div>

      <div className="absolute top-4 right-4 bg-background border border-border rounded p-2" style={{ zIndex: 2 }}>
        <Workflow className="w-5 h-5 text-foreground/70" />
      </div>

      <div className="absolute bottom-4 left-4 bg-background border border-border rounded p-2" style={{ zIndex: 2 }}>
        <MessageSquare className="w-5 h-5 text-foreground/70" />
      </div>

      <div className="absolute bottom-4 right-4 bg-background border border-border rounded p-2" style={{ zIndex: 2 }}>
        <Database className="w-5 h-5 text-foreground/70" />
      </div>
    </div>
  );
};

export default AIAgentMCPAnimation;
