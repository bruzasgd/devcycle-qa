
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "services" },
    { href: "#contact", label: "contact" },
  ];

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
          <a href="#" className="text-xl md:text-2xl font-mono font-semibold text-primary transition-all">
            DevCycleQA<span className="cursor-blink">_</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary/50">$ </span>{link.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-3">
          <a 
            href="#contact" 
            className="hidden sm:inline-flex px-5 py-2 text-sm font-mono font-medium rounded bg-primary text-primary-foreground hover:brightness-110 transition-all"
          >
            &gt; connect
          </a>
          
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-mono text-muted-foreground hover:text-primary transition-colors py-2"
              >
                <span className="text-primary/50">$ </span>{link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setMobileOpen(false)}
              className="block px-5 py-2 text-sm font-mono font-medium rounded bg-primary text-primary-foreground hover:brightness-110 transition-all text-center"
            >
              &gt; connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
