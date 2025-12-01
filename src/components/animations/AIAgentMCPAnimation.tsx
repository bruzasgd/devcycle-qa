import React from 'react';
import { Brain, GitBranch, MessageSquare, Database, Workflow, Sparkles, Zap } from 'lucide-react';

const AIAgentMCPAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden">
      {/* Central AI Agent Brain */}
      <div className="relative z-10">
        <div className="relative bg-gradient-to-br from-primary/30 to-primary/10 border-3 border-primary rounded-full p-8 shadow-2xl shadow-primary/40">
          <Brain className="w-20 h-20 text-primary" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
          
          {/* Sparkles around brain */}
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary animate-spin" style={{ animationDuration: '3s' }} />
          <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-primary/60 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
          
          {/* Pulsing rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-primary/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-primary/10 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.3s' }} />
        </div>
        
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <div className="text-sm font-bold text-primary">AI Agent</div>
        </div>
      </div>

      {/* Connection Lines with Animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.1 }} />
            <stop offset="50%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        {/* Animated connection lines */}
        <line x1="50%" y1="50%" x2="15%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" />
        <line x1="50%" y1="50%" x2="85%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <line x1="50%" y1="50%" x2="15%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
        <line x1="50%" y1="50%" x2="85%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      </svg>

      {/* MCP Integration Cards */}
      {/* GitHub */}
      <div 
        className="absolute top-12 left-8 bg-background border-2 border-border rounded-lg p-4 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-fade-in" 
        style={{ animationDelay: '0.2s', zIndex: 2 }}
      >
        <GitBranch className="w-8 h-8 text-foreground mb-1" />
        <div className="text-xs font-bold">GitHub</div>
        <div className="absolute -bottom-1 -right-1">
          <Zap className="w-4 h-4 text-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
        </div>
      </div>

      {/* Jira */}
      <div 
        className="absolute top-12 right-8 bg-background border-2 border-border rounded-lg p-4 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-fade-in" 
        style={{ animationDelay: '0.4s', zIndex: 2 }}
      >
        <Workflow className="w-8 h-8 text-foreground mb-1" />
        <div className="text-xs font-bold">Jira</div>
        <div className="absolute -bottom-1 -right-1">
          <Zap className="w-4 h-4 text-primary animate-bounce" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>

      {/* Slack */}
      <div 
        className="absolute bottom-12 left-8 bg-background border-2 border-border rounded-lg p-4 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-fade-in" 
        style={{ animationDelay: '0.6s', zIndex: 2 }}
      >
        <MessageSquare className="w-8 h-8 text-foreground mb-1" />
        <div className="text-xs font-bold">Slack</div>
        <div className="absolute -bottom-1 -right-1">
          <Zap className="w-4 h-4 text-primary animate-bounce" style={{ animationDelay: '0.6s' }} />
        </div>
      </div>

      {/* Database */}
      <div 
        className="absolute bottom-12 right-8 bg-background border-2 border-border rounded-lg p-4 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-fade-in" 
        style={{ animationDelay: '0.8s', zIndex: 2 }}
      >
        <Database className="w-8 h-8 text-foreground mb-1" />
        <div className="text-xs font-bold">TestDB</div>
        <div className="absolute -bottom-1 -right-1">
          <Zap className="w-4 h-4 text-primary animate-bounce" style={{ animationDelay: '0.8s' }} />
        </div>
      </div>

      {/* Flowing data particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0s', zIndex: 3 }} />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/70 rounded-full animate-ping" style={{ animationDelay: '0.5s', zIndex: 3 }} />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: '1s', zIndex: 3 }} />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '0.7s', zIndex: 3 }} />
    </div>
  );
};

export default AIAgentMCPAnimation;