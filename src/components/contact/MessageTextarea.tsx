
import React from "react";

interface MessageTextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MessageTextarea = ({ value, onChange }: MessageTextareaProps) => {
  return (
    <div>
      <label htmlFor="message" className="block text-sm font-mono font-medium text-muted-foreground mb-1">
        <span className="text-primary/60">$ </span>Meeting Agenda
      </label>
      <textarea
        id="message"
        name="message"
        value={value}
        onChange={onChange}
        placeholder="// What would you like to discuss?"
        rows={3}
        className="w-full px-4 py-2 rounded border border-border bg-secondary font-mono text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
      />
    </div>
  );
};

export default MessageTextarea;
