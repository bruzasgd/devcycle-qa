
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-4 bg-white/80 backdrop-blur-md shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-semibold text-primary transition-all">
            DevCycleQA
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-primary">
            Services
          </a>
          <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-primary">
            Contact
          </a>
        </nav>
        
        <a 
          href="#contact" 
          className="px-5 py-2 text-sm font-medium rounded-full bg-primary text-white shadow-sm hover:shadow-md transition-all"
        >
          Get in Touch
        </a>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <a 
          href="#services" 
          className="hidden sm:flex items-center justify-center w-10 h-10 mb-4 text-foreground/50 hover:text-primary animate-float transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </header>
  );
};

export default Header;
