
import React from "react";

interface FormInputProps {
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  required?: boolean;
  icon?: React.ReactNode;
  min?: string;
}

const FormInput = ({ 
  id, 
  name, 
  type, 
  value, 
  onChange, 
  label, 
  required = false,
  icon,
  min
}: FormInputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-mono font-medium text-muted-foreground mb-1">
        <span className="text-primary/60">$ </span>{label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          min={min}
          className="w-full px-4 py-2 rounded border border-border bg-secondary font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden"
        />
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/70 pointer-events-none">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInput;
