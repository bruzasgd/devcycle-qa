import React from "react";

interface MessageTextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MessageTextarea = ({ value, onChange }: MessageTextareaProps) => {
  return (
    <div>
      <label htmlFor="message" className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        value={value}
        onChange={onChange}
        placeholder="Tell us about your project and preferred meeting time..."
        rows={6}
        className="w-full px-4 py-3 rounded-lg border border-border bg-background/60 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-all resize-none"
      />
    </div>
  );
};

export default MessageTextarea;
