
import React from "react";
import { CalendarDays } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-secondary/50 border-l border-border p-6 sm:p-8 flex flex-col justify-center">
      <div className="mb-6">
        <h3 className="text-base font-mono font-medium mb-3 flex items-center text-foreground">
          <span className="text-primary mr-2">&gt;</span>
          availability.config
        </h3>
        <p className="text-sm text-muted-foreground font-mono mb-4">
          // Flexible meeting times
        </p>
        
        {/* Mini availability calendar */}
        <div className="grid grid-cols-5 gap-1 mb-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
            <div key={day} className="text-center">
              <div className="text-[10px] font-mono font-medium text-muted-foreground mb-1">{day}</div>
              <div className="w-full aspect-square rounded bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-xs font-mono hover:bg-primary/20 transition-colors cursor-pointer">
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-3 font-mono text-sm">
        <div className="flex items-center text-muted-foreground">
          <span className="text-primary mr-2">$</span>
          <span>phone: +370 62728 602</span>
        </div>
        <div className="flex items-center text-muted-foreground">
          <span className="text-primary mr-2">$</span>
          <span>location: remote | on-site</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
