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

const FormInput = ({ id, name, type, value, onChange, label, required = false }: FormInputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-lg border border-border bg-background/60 text-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all"
      />
    </div>
  );
};

export default FormInput;
