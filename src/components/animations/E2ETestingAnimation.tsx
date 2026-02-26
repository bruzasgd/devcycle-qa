import { PlayCircle, CheckCircle } from "lucide-react";

const E2ETestingAnimation = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="space-y-3 w-full max-w-[180px]">
      {/* BDD syntax */}
      <div className="bg-secondary border border-border rounded p-2 text-[9px] font-mono space-y-1">
        <div className="text-accent">Given user is logged in</div>
        <div className="text-primary">When clicks checkout</div>
        <div className="text-[hsl(var(--terminal-purple))]">Then order is placed</div>
      </div>
      
      {/* Test status */}
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-[10px] font-mono">
          <CheckCircle size={12} className="text-primary" />
          <span className="text-foreground">Login flow</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono">
          <CheckCircle size={12} className="text-primary" />
          <span className="text-foreground">Cart actions</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono">
          <PlayCircle size={12} className="text-accent" />
          <span className="text-muted-foreground">Checkout...</span>
        </div>
      </div>
      
      {/* Frameworks */}
      <div className="flex gap-1.5 text-[8px] font-mono text-muted-foreground">
        <span className="px-1.5 py-0.5 bg-primary/10 border border-primary/20 rounded text-primary">Cypress</span>
        <span className="px-1.5 py-0.5 bg-accent/10 border border-accent/20 rounded text-accent">Playwright</span>
      </div>
    </div>
  </div>
);

export default E2ETestingAnimation;
