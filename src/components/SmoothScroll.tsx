
import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    // Smooth scroll to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Enhanced Intersection Observer for reveal animations with staggered timing
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a small delay based on the element's position to create a cascade effect
          setTimeout(() => {
            entry.target.classList.add('revealed');
          }, index * 100); // Staggered delay
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Select all elements with reveal classes
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    // Sort elements by their vertical position to create a natural flow
    const sortedElements = Array.from(revealElements).sort((a, b) => {
      return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
    });
    
    sortedElements.forEach(el => {
      observer.observe(el);
    });

    // Parallax scroll effect for background elements
    const handleParallax = () => {
      const scrollY = window.scrollY;
      
      document.querySelectorAll('.parallax').forEach(element => {
        const speed = element.getAttribute('data-speed') || "0.2";
        // Fix type error by ensuring element is HTMLElement and speed is converted to number
        if (element instanceof HTMLElement) {
          element.style.transform = `translateY(${scrollY * parseFloat(speed)}px)`;
        }
      });
    };
    
    window.addEventListener('scroll', handleParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return null;
};

export default SmoothScroll;
