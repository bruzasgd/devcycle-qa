import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-sm">
            <h2 className="text-xl font-mono font-semibold text-foreground mb-2">
              DevCycleQA<span className="cursor-blink text-primary">_</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-driven quality engineering that accelerates releases while reducing regression risk.
            </p>
          </div>

          <div className="flex gap-10">
            <div>
              <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Navigation</h3>
              <div className="flex flex-col space-y-2 text-sm">
                <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
                <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Connect</h3>
              <div className="flex flex-col space-y-2 text-sm">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">GitHub</a>
              </div>
            </div>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2.5 rounded-full bg-card/60 hover:bg-primary/10 border border-border hover:border-primary/40 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="text-foreground" />
          </button>
        </div>

        <div className="border-t border-border/60 mt-10 pt-6 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-xs text-muted-foreground font-mono">
            © {currentYear} DevCycleQA — MB "Test Automation"
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
