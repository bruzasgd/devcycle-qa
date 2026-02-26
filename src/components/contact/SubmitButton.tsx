
import React from "react";
import { Check, Calendar } from "lucide-react";

interface SubmitButtonProps {
  isSubmitting: boolean;
  isSubmitted: boolean;
}

const SubmitButton = ({ isSubmitting, isSubmitted }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting || isSubmitted}
      className={`w-full flex items-center justify-center px-6 py-2.5 rounded font-mono font-medium transition-all ${
        isSubmitted 
          ? "bg-primary/20 text-primary border border-primary/30" 
          : "bg-primary text-primary-foreground hover:brightness-110"
      }`}
    >
      {isSubmitting ? (
        <span className="flex items-center font-mono">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          processing...
        </span>
      ) : isSubmitted ? (
        <span className="flex items-center">
          <Check size={18} className="mr-2" />
          ✓ meeting.scheduled
        </span>
      ) : (
        <span className="flex items-center">
          $ submit --request
        </span>
      )}
    </button>
  );
};

export default SubmitButton;
