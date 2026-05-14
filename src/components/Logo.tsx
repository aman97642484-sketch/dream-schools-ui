export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-11 w-11 shrink-0">
        <svg viewBox="0 0 48 48" className="h-full w-full">
          <defs>
            <linearGradient id="lg-shield" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.38 0.13 260)" />
              <stop offset="100%" stopColor="oklch(0.24 0.1 262)" />
            </linearGradient>
            <linearGradient id="lg-gold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.85 0.14 82)" />
              <stop offset="100%" stopColor="oklch(0.7 0.14 70)" />
            </linearGradient>
          </defs>
          <path
            d="M24 2 L42 8 V24 C42 35 34 43 24 46 C14 43 6 35 6 24 V8 Z"
            fill="url(#lg-shield)"
          />
          <path
            d="M24 2 L42 8 V24 C42 35 34 43 24 46 C14 43 6 35 6 24 V8 Z"
            fill="none"
            stroke="url(#lg-gold)"
            strokeWidth="1.2"
          />
          <circle cx="24" cy="18" r="3" fill="url(#lg-gold)" />
          <path d="M14 28 H34 M14 32 H34 M14 36 H30" stroke="url(#lg-gold)" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-display text-base font-semibold tracking-tight text-primary">
          Dream Public School
        </div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Excellence · Integrity · Vision
        </div>
      </div>
    </div>
  );
}
