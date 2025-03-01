
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsAnimating(true);
    
    // Add a small animation before scrolling
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      
      // Reset animation state after scrolling starts
      setTimeout(() => setIsAnimating(false), 300);
    }, 150);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
        ${isAnimating ? "bg-primary scale-90" : "bg-primary/80 hover:bg-primary hover:scale-110"}
        text-white`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} className={`transition-transform ${isAnimating ? "animate-bounce" : ""}`} />
    </button>
  );
};

export default ScrollToTop;
