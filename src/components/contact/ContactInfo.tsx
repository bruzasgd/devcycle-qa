
import React from "react";
import { CalendarDays } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-yellow-500/10 p-6 sm:p-8 flex flex-col justify-center">
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 flex items-center">
          <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-2">
            <CalendarDays size={16} className="text-yellow-600" />
          </div>
          Our Availability
        </h3>
        <p className="text-sm text-foreground/70 mb-4">
          We offer flexible meeting times to accommodate your schedule.
        </p>
        
        {/* Mini availability calendar */}
        <div className="grid grid-cols-5 gap-1 mb-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
            <div key={day} className="text-center">
              <div className="text-[10px] font-medium text-foreground/60 mb-1">{day}</div>
              <div className="w-full aspect-square rounded-md bg-yellow-50 border border-yellow-100 flex items-center justify-center text-yellow-800 text-xs font-medium hover:bg-yellow-100 transition-colors cursor-pointer">
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <div className="mr-3 h-6 w-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
            <span>✉️</span>
          </div>
          <p className="text-sm">contact@devcycleqa.com</p>
        </div>
        <div className="flex items-center">
          <div className="mr-3 h-6 w-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
            <span>📱</span>
          </div>
          <p className="text-sm">+370 62728 602</p>
        </div>
        <div className="flex items-center">
          <div className="mr-3 h-6 w-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
            <span>🌐</span>
          </div>
          <p className="text-sm">Remote & On-site Available</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
