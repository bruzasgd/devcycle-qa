import React from 'react';
import { Brain, GitBranch, MessageSquare, Database, Workflow, Sparkles } from 'lucide-react';

const AIAgentMCPAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Central AI Agent */}
      <div className="relative">
        <div className="bg-primary/20 border-2 border-primary rounded-full p-6 shadow-lg shadow-primary/30">
          <Brain className="w-16 h-16 text-primary animate-pulse" />
        </div>
        <div className="absolute -top-1 -right-1">
          <Sparkles className="w-5 h-5 text-primary animate-spin" style={{ animationDuration: '3s' }} />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute w-32 h-32 border-2 border-primary/30 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
        </div>
      </div>

      {/* MCP Connections */}
      {/* GitHub MCP */}
      <div className="absolute top-8 left-12 flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="w-1 h-12 bg-primary/30 origin-bottom rotate-45" />
        <div className="bg-muted border border-border rounded-lg p-3 shadow-md hover:scale-110 transition-transform">
          <GitBranch className="w-6 h-6 text-foreground" />
          <div className="text-xs mt-1 font-medium">GitHub</div>
        </div>
      </div>

      {/* Jira/Test Management MCP */}
      <div className="absolute top-8 right-12 flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="bg-muted border border-border rounded-lg p-3 shadow-md hover:scale-110 transition-transform">
          <Workflow className="w-6 h-6 text-foreground" />
          <div className="text-xs mt-1 font-medium">Jira</div>
        </div>
        <div className="w-1 h-12 bg-primary/30 origin-bottom -rotate-45" />
      </div>

      {/* Slack/Communication MCP */}
      <div className="absolute bottom-8 left-12 flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="w-1 h-12 bg-primary/30 origin-top rotate-[-45deg]" />
        <div className="bg-muted border border-border rounded-lg p-3 shadow-md hover:scale-110 transition-transform">
          <MessageSquare className="w-6 h-6 text-foreground" />
          <div className="text-xs mt-1 font-medium">Slack</div>
        </div>
      </div>

      {/* Database MCP */}
      <div className="absolute bottom-8 right-12 flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="bg-muted border border-border rounded-lg p-3 shadow-md hover:scale-110 transition-transform">
          <Database className="w-6 h-6 text-foreground" />
          <div className="text-xs mt-1 font-medium">TestDB</div>
        </div>
        <div className="w-1 h-12 bg-primary/30 origin-top rotate-45" />
      </div>

      {/* Center Label */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center">
        <div className="text-sm font-medium text-primary">AI Agent + MCPs</div>
        <div className="text-xs text-muted-foreground">Intelligent QA Orchestration</div>
      </div>

      {/* Animated data flow particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDelay: '0s' }} />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-primary/60 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default AIAgentMCPAnimation;