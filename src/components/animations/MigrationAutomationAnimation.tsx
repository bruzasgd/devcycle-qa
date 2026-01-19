import React from 'react';
import { ArrowRight, FileText, Settings, CheckCircle2 } from 'lucide-react';

const MigrationAutomationAnimation = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-4 gap-4">
      {/* Manual Testing Side */}
      <div className="flex flex-col items-center gap-2">
        <div className="bg-muted/50 border border-muted-foreground/20 rounded-lg p-3 w-24 flex flex-col items-center">
          <FileText className="w-8 h-8 text-muted-foreground mb-1" />
          <div className="text-[10px] font-medium">Manual</div>
          <div className="w-full bg-muted rounded-full h-1 mt-2">
            <div className="h-full w-1/4 bg-yellow-500 rounded-full" />
          </div>
        </div>
        <div className="text-[9px] text-muted-foreground">Slow</div>
      </div>

      {/* Arrow */}
      <div className="flex flex-col items-center">
        <ArrowRight className="w-6 h-6 text-primary" />
        <div className="text-[9px] font-medium text-primary mt-1">Migrate</div>
      </div>

      {/* Automated Testing Side */}
      <div className="flex flex-col items-center gap-2">
        <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 w-24 flex flex-col items-center">
          <Settings className="w-8 h-8 text-primary mb-1" />
          <div className="text-[10px] font-medium">Automated</div>
          <div className="space-y-0.5 w-full mt-2">
            <div className="flex items-center gap-0.5">
              <CheckCircle2 className="w-2.5 h-2.5 text-green-500" />
              <div className="h-1 bg-green-500 rounded-full flex-1" />
            </div>
            <div className="flex items-center gap-0.5">
              <CheckCircle2 className="w-2.5 h-2.5 text-green-500" />
              <div className="h-1 bg-green-500 rounded-full flex-1" />
            </div>
          </div>
        </div>
        <div className="text-[9px] font-medium text-primary">Fast</div>
      </div>
    </div>
  );
};

export default MigrationAutomationAnimation;
