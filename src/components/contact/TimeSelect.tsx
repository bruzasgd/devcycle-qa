
import React from "react";
import { Clock } from "lucide-react";

interface TimeSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const TimeSelect = ({ value, onChange }: TimeSelectProps) => {
  return (
    <div>
      <label htmlFor="time" className="block text-sm font-medium text-foreground/80 mb-1">
        Preferred Time
      </label>
      <div className="relative">
        <select
          id="time"
          name="time"
          value={value}
          onChange={onChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all appearance-none"
        >
          <option value="">Select a time...</option>
          <option value="morning">Morning (9AM - 12PM)</option>
          <option value="afternoon">Afternoon (1PM - 5PM)</option>
          <option value="evening">Evening (6PM - 8PM)</option>
        </select>
        <Clock size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-500/70" />
      </div>
    </div>
  );
};

export default TimeSelect;
