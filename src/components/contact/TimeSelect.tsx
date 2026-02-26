import React from "react";
import { Clock } from "lucide-react";

interface TimeSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TimeSelect = ({ value, onChange }: TimeSelectProps) => {
  return (
    <div>
      <label htmlFor="time" className="block text-sm font-mono font-medium text-muted-foreground mb-1">
        <span className="text-primary/60">$ </span>Preferred Time
      </label>
      <div className="relative">
        <select
          id="time"
          name="time"
          value={value}
          onChange={onChange}
          required={false}
          className="w-full px-4 py-2 rounded border border-border bg-secondary font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
        >
          <option value="">// Select a time...</option>
          <option value="morning">Morning (9AM - 12PM)</option>
          <option value="afternoon">Afternoon (1PM - 5PM)</option>
          <option value="evening">Evening (6PM - 8PM)</option>
        </select>
        <Clock size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/70" />
      </div>
    </div>
  );
};

export default TimeSelect;
