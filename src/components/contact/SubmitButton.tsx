
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
      className={`w-full flex items-center justify-center px-6 py-2.5 rounded-lg font-medium text-white transition-all ${
        isSubmitted 
          ? "bg-green-500 hover:bg-green-600" 
          : "bg-yellow-500 hover:bg-yellow-600"
      }`}
    >
      {isSubmitting ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </span>
      ) : isSubmitted ? (
        <span className="flex items-center">
          <Check size={18} className="mr-2" />
          Meeting Scheduled
        </span>
      ) : (
        <span className="flex items-center">
          <Calendar size={18} className="mr-2" />
          Schedule Meeting
        </span>
      )}
    </button>
  );
};

export default SubmitButton;
