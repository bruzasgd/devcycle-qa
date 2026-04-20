import React, { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  highlights?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, label, title, description, highlights = [] }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective h-72 cursor-pointer group"
      onClick={() => setFlipped((f) => !f)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      aria-label={`${title} - click to ${flipped ? 'collapse' : 'view details'}`}
    >
      <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div className="flip-face rounded-2xl bg-card/60 backdrop-blur border border-border p-6 flex flex-col justify-between hover:border-primary/40 hover:bg-card/80 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.08)]">
          <div className="flex items-start justify-between">
            <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
              <Icon size={20} strokeWidth={1.75} />
            </div>
            <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </div>

          <div>
            <div className="text-[11px] font-mono text-primary/70 uppercase tracking-wider mb-2">{label}</div>
            <h3 className="text-lg font-semibold text-foreground leading-tight">{title}</h3>
          </div>

          <div className="text-[11px] font-mono text-muted-foreground">click to expand →</div>
        </div>

        {/* Back */}
        <div className="flip-face flip-back rounded-2xl bg-card/90 backdrop-blur border border-primary/30 p-6 flex flex-col justify-between shadow-[0_0_40px_hsl(var(--primary)/0.12)]">
          <div className="flex items-start justify-between">
            <div className="text-[11px] font-mono text-primary uppercase tracking-wider">{label}</div>
            <button
              onClick={(e) => { e.stopPropagation(); setFlipped(false); }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-3 hide-scrollbar">
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            {highlights.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-foreground/80">
                    <span className="text-primary mt-0.5">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="text-[11px] font-mono text-muted-foreground">← click to flip back</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
