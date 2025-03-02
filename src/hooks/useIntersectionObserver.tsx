
import { useEffect, useState, RefObject } from 'react';

interface UseIntersectionObserverProps {
  ref: RefObject<HTMLElement>;
  options?: IntersectionObserverInit;
  onIntersect?: (isVisible: boolean) => void;
}

/**
 * Hook that observes when an element is visible in the viewport
 */
const useIntersectionObserver = ({
  ref,
  options = {
    threshold: 0.1, // Default to trigger when 10% of the element is visible
    rootMargin: '0px',
  },
  onIntersect
}: UseIntersectionObserverProps): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      const newIsVisible = entry.isIntersecting;
      setIsVisible(newIsVisible);
      
      if (onIntersect) {
        onIntersect(newIsVisible);
      }
    }, options);
    
    observer.observe(ref.current);
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options, onIntersect]);
  
  return isVisible;
};

export default useIntersectionObserver;
