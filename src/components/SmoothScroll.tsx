
import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    // Smooth scroll to anchor links with enhanced experience
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Add a very subtle pulse effect to the target element
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
      });
    });

    // Enhanced Intersection Observer for reveal animations with staggered timing and dynamic effects
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
            
            // Add subtle effects for key elements - no particles
            if (entry.target.classList.contains('key-element')) {
              entry.target.classList.add('subtle-highlight');
            }
            
            // Add floating animation for call-to-action elements
            if (entry.target.classList.contains('cta')) {
              entry.target.classList.add('animate-float');
            }
          }, index * 100); // Staggered delay
          
          if (entry.target.dataset.animateOnce !== 'false') {
            observer.unobserve(entry.target);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Select all elements with reveal classes
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .fade-up, .fade-in, .scale-in');
    
    // Sort elements by their vertical position to create a natural flow
    const sortedElements = Array.from(revealElements).sort((a, b) => {
      return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
    });
    
    sortedElements.forEach(el => {
      observer.observe(el);
    });

    // Enhanced parallax scroll effect for background elements with smoother performance
    const handleParallax = () => {
      const scrollY = window.scrollY;
      
      document.querySelectorAll('.parallax').forEach(element => {
        const speed = element.getAttribute('data-speed') || "0.2";
        const direction = element.getAttribute('data-direction') || "vertical";
        
        // Fix type error by ensuring element is HTMLElement and speed is converted to number
        if (element instanceof HTMLElement) {
          if (direction === "vertical") {
            element.style.transform = `translateY(${scrollY * parseFloat(speed)}px)`;
          } else if (direction === "horizontal") {
            element.style.transform = `translateX(${scrollY * parseFloat(speed)}px)`;
          } else if (direction === "rotate") {
            element.style.transform = `rotate(${scrollY * parseFloat(speed) * 0.05}deg)`;
          } else if (direction === "scale") {
            const baseScale = 1 + (scrollY * parseFloat(speed) * 0.001);
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
    
    // No longer need createParticles function - removed
    
    // Add scroll progress indicator to the DOM
    const progressIndicator = document.createElement('div');
    progressIndicator.className = 'fixed top-0 left-0 w-full h-1 z-50';
    progressIndicator.innerHTML = '<div class="scroll-progress-bar h-full bg-yellow-500 origin-left"></div>';
    document.body.appendChild(progressIndicator);
    
    // Add scroll event for parallax and other scroll-based effects
    window.addEventListener('scroll', handleParallax, { passive: true });
    
    // Initialize parallax on load
    handleParallax();
    
    // Add keyframe animations but make pulse more subtle
    const style = document.createElement('style');
    style.textContent = `
      .gentle-pulse {
        animation: gentle-highlight 1.5s ease-out;
      }
      
      @keyframes gentle-highlight {
        0% { box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.1); }
        70% { box-shadow: 0 0 0 8px rgba(250, 204, 21, 0); }
        100% { box-shadow: 0 0 0 0 rgba(250, 204, 21, 0); }
      }
      
      .subtle-highlight {
        animation: subtle-glow 2s ease-in-out;
      }
      
      @keyframes subtle-glow {
        0% { box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.1); }
        50% { box-shadow: 0 0 0 5px rgba(250, 204, 21, 0.05); }
        100% { box-shadow: 0 0 0 0 rgba(250, 204, 21, 0); }
      }
      
      .scroll-progress-bar {
        transition: width 0.1s ease-out;
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Clean up
      observer.disconnect();
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
