import React from 'react';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';

const MigrationAutomationAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Manual Testing Side */}
      <div className="flex flex-col items-center gap-4 opacity-60">
        <div className="relative bg-muted/50 border-2 border-border rounded-lg p-6 w-32">
          <div className="text-center">
            <div className="text-sm font-medium mb-2">Manual</div>
            <div className="text-xs text-muted-foreground mb-3">Testing</div>
            <div className="space-y-2">
              <div className="h-2 bg-yellow-500/30 rounded animate-pulse" style={{ animationDelay: '0s' }} />
              <div className="h-2 bg-yellow-500/30 rounded animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="h-2 bg-yellow-500/30 rounded animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground">Slow & Error-prone</div>
      </div>

      {/* Arrow */}
      <div className="mx-8 flex flex-col items-center gap-2">
        <ArrowRight className="w-12 h-12 text-primary animate-pulse" />
        <div className="text-sm font-medium text-primary">Migration</div>
      </div>

      {/* Automated Testing Side */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative bg-primary/10 border-2 border-primary rounded-lg p-6 w-32 shadow-lg shadow-primary/20">
          <div className="absolute -top-2 -right-2">
            <Zap className="w-6 h-6 text-primary animate-bounce" />
          </div>
          <div className="text-center">
            <div className="text-sm font-medium mb-2">Automated</div>
            <div className="text-xs text-muted-foreground mb-3">Testing</div>
            <div className="space-y-2">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-green-500" />
                <div className="h-2 bg-green-500/50 rounded flex-1" />
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-green-500" />
                <div className="h-2 bg-green-500/50 rounded flex-1" />
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-green-500" />
                <div className="h-2 bg-green-500/50 rounded flex-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs font-medium text-primary">Fast & Reliable</div>
      </div>

      {/* Background particles */}
      <div className="absolute top-4 left-1/2 w-2 h-2 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-8 left-1/3 w-1 h-1 bg-primary/20 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};

export default MigrationAutomationAnimation;