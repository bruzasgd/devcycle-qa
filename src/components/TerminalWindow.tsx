import React, { ReactNode } from "react";

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ title = "terminal", children, className = "" }) => {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-titlebar">
        <div className="terminal-dot-red" />
        <div className="terminal-dot-yellow" />
        <div className="terminal-dot-green" />
        <span className="ml-2 text-[10px] font-mono text-muted-foreground">{title}</span>
      </div>
      <div className="p-3">
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
