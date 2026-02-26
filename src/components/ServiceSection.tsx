
import { ReactNode, useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import TerminalWindow from "./TerminalWindow";

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  label: string;
  isReversed?: boolean;
  animationElement: ReactNode;
  onVisibilityChange?: (isVisible: boolean, id: string) => void;
  className?: string;
}

const ServiceSection = ({
  id,
  title,
  description,
  label,
  isReversed = false,
  animationElement,
  onVisibilityChange,
  className = "",
}: ServiceSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useIntersectionObserver({
    ref: sectionRef,
    onIntersect: (isVisible) => {
      if (onVisibilityChange) {
        onVisibilityChange(isVisible, id);
      }
    }
  });
  
  return (
    <section 
      id={id} 
      className={`py-8 sm:py-10 overflow-hidden border-b border-border last:border-b-0 ${className}`} 
      ref={sectionRef}
    >
      <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-20">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}>
          <div className={`w-full lg:w-1/2 ${isReversed ? 'reveal-right' : 'reveal-left'}`}>
            <div className="max-w-md mx-auto lg:mx-0 space-y-3">
              <div className="flex items-center">
                <span className="chip font-mono text-xs">&lt;{label} /&gt;</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-mono font-medium text-foreground">
                <span className="text-primary/40">// </span>{title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 ${isReversed ? 'reveal-left' : 'reveal-right'}`}>
            <TerminalWindow title={`${id}.tsx`}>
              <div className="aspect-[4/3] flex items-center justify-center">
                {animationElement}
              </div>
            </TerminalWindow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
