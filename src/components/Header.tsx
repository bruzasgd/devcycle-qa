
import { useState, useEffect } from "react";

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
          ? "py-3 bg-background/80 backdrop-blur-md border-b border-border" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-mono font-semibold text-primary transition-all">
            DevCycleQA<span className="cursor-blink">_</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
        </nav>
        
        <a 
          href="#contact" 
          className="px-5 py-2 text-sm font-mono font-medium rounded bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 transition-all"
        >
          &gt; connect
        </a>
      </div>
    </header>
  );
};

export default Header;
