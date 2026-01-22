
import { useEffect } from "react";

/**
 * SmoothScroll component provides enhanced scrolling behavior
 * including smooth anchor scrolling and reveal animations
 */
const SmoothScroll = () => {
  useEffect(() => {
    // Smooth scroll to anchor links with subtle experience
    const handleAnchorClick = function(this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === "#") return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Add a very subtle highlight effect to the target element
        targetElement.classList.add('gentle-pulse');
        
        // Smooth scroll with enhanced behavior
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
        
        // Remove pulse effect after animation completes
        setTimeout(() => {
          targetElement.classList.remove('gentle-pulse');
        }, 1500);
      }
    };

    // Add event listeners to all anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick as EventListener);
    });

    // Intersection Observer for reveal animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a small delay based on the element's position
          setTimeout(() => {
            entry.target.classList.add('revealed');
            
            // Add subtle effects for key elements
            if (entry.target.classList.contains('key-element')) {
              entry.target.classList.add('subtle-highlight');
            }
            
            // Add floating animation for call-to-action elements
            if (entry.target.classList.contains('cta')) {
              entry.target.classList.add('animate-float');
            }
          }, index * 100); // Staggered delay
          
          // Don't observe again if animate-once
          if (entry.target.dataset.animateOnce !== 'false') {
            observer.unobserve(entry.target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Select all elements with reveal classes
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .fade-up, .fade-in, .scale-in');
    
    // Sort elements by their vertical position for natural flow
    const sortedElements = Array.from(revealElements).sort((a, b) => {
      return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
    });
    
    sortedElements.forEach(el => {
      observer.observe(el);
    });

    // Parallax scroll effect for background elements - simplified
    const handleParallax = () => {
      const scrollY = window.scrollY;
      
      document.querySelectorAll('.parallax').forEach(element => {
        const speed = element.getAttribute('data-speed') || "0.1"; // Reduced default speed
        const direction = element.getAttribute('data-direction') || "vertical";
        
        if (element instanceof HTMLElement) {
          if (direction === "vertical") {
            element.style.transform = `translateY(${scrollY * parseFloat(speed)}px)`;
          } else if (direction === "horizontal") {
            element.style.transform = `translateX(${scrollY * parseFloat(speed)}px)`;
          } else if (direction === "rotate") {
            // Reduced rotation speed
            element.style.transform = `rotate(${scrollY * parseFloat(speed) * 0.02}deg)`;
          } else if (direction === "scale") {
            // Reduced scale effect
            const baseScale = 1 + (scrollY * parseFloat(speed) * 0.0005);
            element.style.transform = `scale(${baseScale})`;
          }
        }
      });
      
      // Add progress indicator for scroll position
      const scrollProgress = Math.min((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100);
      const progressBar = document.querySelector('.scroll-progress-bar');
      if (progressBar instanceof HTMLElement) {
        progressBar.style.width = `${scrollProgress}%`;
      }
    };
    
    // Add scroll progress indicator to the DOM
    const progressIndicator = document.createElement('div');
    progressIndicator.className = 'fixed top-0 left-0 w-full h-1 z-50';
    progressIndicator.innerHTML = '<div class="scroll-progress-bar h-full bg-yellow-500 origin-left"></div>';
    document.body.appendChild(progressIndicator);
    
    // Add scroll event for parallax effects
    window.addEventListener('scroll', handleParallax, { passive: true });
    
    // Initialize parallax on load
    handleParallax();
    
    // Add keyframe animations but make very subtle
    const style = document.createElement('style');
    style.textContent = `
      .gentle-pulse {
        animation: gentle-highlight 1.5s ease-out;
      }
      
      @keyframes gentle-highlight {
        0% { box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.05); }
        70% { box-shadow: 0 0 0 4px rgba(250, 204, 21, 0); }
        100% { box-shadow: 0 0 0 0 rgba(250, 204, 21, 0); }
      }
      
      .subtle-highlight {
        animation: subtle-glow 2s ease-in-out;
      }
      
      @keyframes subtle-glow {
        0% { box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.05); }
        50% { box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.02); }
        100% { box-shadow: 0 0 0 0 rgba(250, 204, 21, 0); }
      }
      
      .scroll-progress-bar {
        transition: width 0.1s ease-out;
      }
    `;
    document.head.appendChild(style);

    // Clean up function
    return () => {
      // Remove event listeners from anchor links
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick as EventListener);
      });
      
      // Disconnect intersection observer
      observer.disconnect();
      
      // Remove scroll event listener
      window.removeEventListener('scroll', handleParallax);
      
      // Remove progress indicator
      if (document.body.contains(progressIndicator)) {
        document.body.removeChild(progressIndicator);
      }
      
      // Remove style element
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return null;
};

export default SmoothScroll;
