
import { useEffect, useState, RefObject } from 'react';

interface UseIntersectionObserverProps {
  ref: RefObject<HTMLElement>;
  options?: IntersectionObserverInit;
  onIntersect?: (isVisible: boolean) => void;
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Enhanced hook that observes when an element is visible in the viewport
 * with improved options for animations
 */
const useIntersectionObserver = ({
  ref,
  options,
  onIntersect,
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = false
}: UseIntersectionObserverProps): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observerOptions = options || {
      threshold,
      rootMargin,
    };
    
    const observer = new IntersectionObserver(([entry]) => {
      const newIsVisible = entry.isIntersecting;
      
      if (newIsVisible || !triggerOnce) {
        setIsVisible(newIsVisible);
      }
      
      if (onIntersect) {
        onIntersect(newIsVisible);
      }
      
      // If element is visible and we only want to trigger once, unobserve
      if (newIsVisible && triggerOnce && ref.current) {
        observer.unobserve(ref.current);
      }
    }, observerOptions);
    
    observer.observe(ref.current);
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, onIntersect, threshold, rootMargin, triggerOnce]);
  
  return isVisible;
};

export default useIntersectionObserver;
