import React, { useState, useEffect } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ 
  text, 
  speed = 50, 
  delay = 0,
  className = "",
  onComplete
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else {
      onComplete?.();
    }
  }, [displayedText, text, speed, started, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      <span className="cursor-blink text-primary">█</span>
    </span>
  );
};

export default TypingAnimation;
