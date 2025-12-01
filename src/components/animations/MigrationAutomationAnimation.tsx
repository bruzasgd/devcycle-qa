import React from 'react';
import { ArrowRight, FileText, Settings, CheckCircle2, Zap, Clock, Sparkles } from 'lucide-react';

const MigrationAutomationAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      {/* Manual Testing Side */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative bg-muted/80 border-2 border-muted-foreground/30 rounded-xl p-6 w-40 h-40 flex flex-col items-center justify-center shadow-lg">
          <FileText className="w-12 h-12 text-muted-foreground mb-2" />
          <div className="text-sm font-semibold text-foreground mb-1">Manual</div>
          <div className="text-xs text-muted-foreground mb-3">Testing</div>
          
          {/* Slow progress bar */}
          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-yellow-500 rounded-full" 
              style={{ 
                animation: 'slow-progress 4s ease-in-out infinite',
                width: '0%'
              }} 
            />
          </div>
          
          <div className="absolute bottom-2 right-2">
            <Clock className="w-5 h-5 text-yellow-500 animate-pulse" />
          </div>
        </div>
        <div className="text-xs text-muted-foreground font-medium">Slow & Manual</div>
      </div>

      {/* Migration Arrow with Transformation Effect */}
      <div className="mx-6 flex flex-col items-center gap-2">
        <div className="relative">
          <ArrowRight className="w-16 h-16 text-primary" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
          <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-primary animate-spin" style={{ animationDuration: '3s' }} />
        </div>
        <div className="text-sm font-bold text-primary px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
          Migration
        </div>
      </div>

      {/* Automated Testing Side */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative bg-primary/10 border-2 border-primary rounded-xl p-6 w-40 h-40 flex flex-col items-center justify-center shadow-xl shadow-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 rounded-xl" />
          
          <Settings className="w-12 h-12 text-primary mb-2 animate-spin" style={{ animationDuration: '3s' }} />
          <div className="text-sm font-semibold text-foreground mb-1">Automated</div>
          <div className="text-xs text-muted-foreground mb-3">Testing</div>
          
          {/* Fast progress with checkmarks */}
          <div className="w-full space-y-1.5">
            <div className="flex items-center gap-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
              <div className="h-1.5 bg-green-500 rounded-full flex-1" />
            </div>
            <div className="flex items-center gap-1 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
              <div className="h-1.5 bg-green-500 rounded-full flex-1" />
            </div>
            <div className="flex items-center gap-1 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
              <div className="h-1.5 bg-green-500 rounded-full flex-1" />
            </div>
          </div>
          
          <div className="absolute bottom-2 right-2">
            <Zap className="w-6 h-6 text-primary animate-bounce" />
          </div>
        </div>
        <div className="text-xs font-bold text-primary">Fast & Reliable</div>
      </div>

      {/* Animated background elements */}
      <div className="absolute top-8 left-1/2 w-2 h-2 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-12 left-1/3 w-1.5 h-1.5 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '0.7s' }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary/35 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
      
      <style>{`
        @keyframes slow-progress {
          0% { width: 0%; }
          70% { width: 30%; }
          100% { width: 30%; }
        }
      `}</style>
    </div>
  );
};

export default MigrationAutomationAnimation;