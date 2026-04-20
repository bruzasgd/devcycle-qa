import React from "react";
import { Phone, MapPin, Calendar } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="p-8 sm:p-10 h-full flex flex-col justify-center">
      <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-6">
        Direct contact
      </h3>

      <div className="space-y-5">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
            <Phone size={15} />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Phone</div>
            <div className="text-sm text-foreground font-medium">+370 62728 602</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
            <MapPin size={15} />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Location</div>
            <div className="text-sm text-foreground font-medium">Remote · On-site</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
            <Calendar size={15} />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Availability</div>
            <div className="text-sm text-foreground font-medium">Mon–Fri</div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border/60">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Replies within 24 hours. Free 30-minute discovery call.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
