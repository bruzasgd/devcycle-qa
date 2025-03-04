
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
      <label htmlFor={id} className="block text-sm font-medium text-foreground/80 mb-1">
        {label}
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
          className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all"
        />
        {icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-yellow-500/70">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInput;
