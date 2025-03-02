
import { ReactNode, useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  label: string;
  isReversed?: boolean;
  animationElement: ReactNode;
  onVisibilityChange?: (isVisible: boolean, id: string) => void;
}

const ServiceSection = ({
  id,
  title,
  description,
  label,
  isReversed = false,
  animationElement,
  onVisibilityChange,
}: ServiceSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Use the intersection observer hook to detect when section becomes visible
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
      className="py-20 sm:py-24 overflow-hidden" 
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
          <div className={`w-full lg:w-1/2 ${isReversed ? 'reveal-right' : 'reveal-left'}`}>
            <div className="max-w-lg mx-auto lg:mx-0 space-y-6">
              <div className="chip">{label}</div>
              <h2 className="text-3xl sm:text-4xl font-medium">{title}</h2>
              <p className="text-foreground/80 leading-relaxed">{description}</p>
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 ${isReversed ? 'reveal-left' : 'reveal-right'}`}>
            <div className="max-w-lg mx-auto lg:mx-0 aspect-[4/3] flex items-center justify-center rounded-xl bg-accent/50 p-6 backdrop-blur-sm shadow-sm">
              {animationElement}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
