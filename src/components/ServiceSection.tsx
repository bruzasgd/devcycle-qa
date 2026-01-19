
import { ReactNode, useRef } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import CrashTestLogo from "./CrashTestLogo";

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  label: string;
  isReversed?: boolean;
  animationElement: ReactNode;
  onVisibilityChange?: (isVisible: boolean, id: string) => void;
  className?: string; // Added className prop
}

const ServiceSection = ({
  id,
  title,
  description,
  label,
  isReversed = false,
  animationElement,
  onVisibilityChange,
  className = "", // Default value
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
      className={`py-8 sm:py-10 overflow-hidden border-b border-gray-100 last:border-b-0 ${className}`} 
      ref={sectionRef}
    >
      <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-20">
        <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16`}>
          <div className={`w-full lg:w-1/2 ${isReversed ? 'reveal-right' : 'reveal-left'}`}>
            <div className="max-w-md mx-auto lg:mx-0 space-y-3">
              <div className="flex items-center">
                <CrashTestLogo size={20} className="mr-2" />
                <div className="chip bg-yellow-100 text-yellow-800 border-yellow-200 text-xs">{label}</div>
              </div>
              <h2 className="text-2xl sm:text-3xl font-medium">{title}</h2>
              <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
            </div>
          </div>
          
          <div className={`w-full lg:w-1/2 ${isReversed ? 'reveal-left' : 'reveal-right'}`}>
            <div className="max-w-sm mx-auto lg:mx-0 aspect-[4/3] flex items-center justify-center rounded-lg bg-gradient-to-tr from-gray-50 to-yellow-50/50 p-4 border border-yellow-100/50">
              {animationElement}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
