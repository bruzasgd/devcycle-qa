
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
          // Add a pulse effect to the target element
          targetElement.classList.add('pulse-target');
          
          // Smooth scroll with enhanced behavior
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
          
          // Remove pulse effect after animation completes
          setTimeout(() => {
            targetElement.classList.remove('pulse-target');
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
            
            // Add dynamic particle effects for key elements
            if (entry.target.classList.contains('key-element')) {
              createParticles(entry.target);
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
    
    // Create particle effect function
    const createParticles = (element) => {
      const numParticles = 12;
      const colors = ['#EAB308', '#FEF08A', '#FACC15', '#CA8A04'];
      const particleContainer = document.createElement('div');
      particleContainer.className = 'absolute inset-0 overflow-hidden pointer-events-none';
      element.style.position = 'relative';
      element.appendChild(particleContainer);
      
      for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 3;
        particle.className = 'absolute rounded-full';
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = '0';
        particle.style.transform = 'scale(0)';
        
        const animDuration = 1 + Math.random() * 1.5;
        particle.style.animation = `particle-animation ${animDuration}s ease-out forwards`;
        
        particleContainer.appendChild(particle);
        
        // Clean up particles after animation
        setTimeout(() => {
          if (particleContainer.contains(particle)) {
            particleContainer.removeChild(particle);
          }
        }, animDuration * 1000);
      }
      
      // Clean up the container after all animations
      setTimeout(() => {
        if (element.contains(particleContainer)) {
          element.removeChild(particleContainer);
        }
      }, 3000);
    };
    
    // Add scroll progress indicator to the DOM
    const progressIndicator = document.createElement('div');
    progressIndicator.className = 'fixed top-0 left-0 w-full h-1 z-50';
    progressIndicator.innerHTML = '<div class="scroll-progress-bar h-full bg-yellow-500 origin-left"></div>';
    document.body.appendChild(progressIndicator);
    
    // Add scroll event for parallax and other scroll-based effects
    window.addEventListener('scroll', handleParallax, { passive: true });
    
    // Initialize parallax on load
    handleParallax();
    
    // Add keyframe animation for particles
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particle-animation {
        0% { opacity: 0; transform: scale(0) translate(0, 0); }
        20% { opacity: 1; transform: scale(1) translate(0, 0); }
        100% { opacity: 0; transform: scale(0.5) translate(calc(100px * (random(2) - 1)), calc(-100px * random(1))); }
      }
      
      .pulse-target {
        animation: pulse-highlight 1.5s ease-out;
      }
      
      @keyframes pulse-highlight {
        0% { box-shadow: 0 0 0 0 rgba(250, 204, 21, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(250, 204, 21, 0); }
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
