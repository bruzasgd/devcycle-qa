import React from "react";
import { Check, ArrowRight } from "lucide-react";

interface SubmitButtonProps {
  isSubmitting: boolean;
  isSubmitted: boolean;
}

const SubmitButton = ({ isSubmitting, isSubmitted }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting || isSubmitted}
      className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
        isSubmitted
          ? "bg-primary/20 text-primary border border-primary/30"
          : "bg-primary text-primary-foreground hover:brightness-110 shadow-[0_0_30px_hsl(var(--primary)/0.25)]"
      }`}
    >
      {isSubmitting ? (
        <>
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Sending...
        </>
      ) : isSubmitted ? (
        <>
          <Check size={18} />
          Message sent
        </>
      ) : (
        <>
          Send message
          <ArrowRight size={16} />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
