
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-sm">
            <h2 className="text-2xl font-mono font-semibold text-primary mb-2">
              DevCycleQA<span className="cursor-blink">_</span>
            </h2>
            <p className="text-muted-foreground font-mono text-sm leading-relaxed">
              <span className="text-primary/60">$ </span>echo "AI-driven quality engineering that accelerates releases while reducing regression risk."
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h3 className="font-mono text-xs text-primary/60 mb-3 uppercase tracking-wider">// Navigation</h3>
              <div className="flex flex-col space-y-2 font-mono text-sm">
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="text-primary/40">→ </span>services
                </a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="text-primary/40">→ </span>contact
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-mono text-xs text-primary/60 mb-3 uppercase tracking-wider">// Connect</h3>
              <div className="flex flex-col space-y-2 font-mono text-sm">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="text-primary/40">→ </span>LinkedIn
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="text-primary/40">→ </span>GitHub
                </a>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded bg-secondary hover:bg-primary/10 border border-border transition-colors self-start"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-primary" />
          </button>
        </div>
        
        <div className="border-t border-border mt-10 pt-6">
          <p className="text-muted-foreground text-sm font-mono text-center">
            <span className="text-primary/40">// </span>&copy; {currentYear} DevCycleQA by MB "Test Automation". All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
