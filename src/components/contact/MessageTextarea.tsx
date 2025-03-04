
import React from "react";

interface MessageTextareaProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MessageTextarea = ({ value, onChange }: MessageTextareaProps) => {
  return (
    <div>
      <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
        Meeting Agenda
      </label>
      <textarea
        id="message"
        name="message"
        value={value}
        onChange={onChange}
        placeholder="What would you like to discuss?"
        rows={3}
        className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all resize-none"
      />
    </div>
  );
};

export default MessageTextarea;
