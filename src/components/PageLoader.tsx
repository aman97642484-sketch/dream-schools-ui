import { useEffect, useState } from "react";

export function PageLoader() {
  const [done, setDone] = useState(false);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 900);
    const t2 = setTimeout(() => setHide(true), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (hide) return null;
  return (
    <div
      className={`fixed inset-0 z-[100] bg-hero flex items-center justify-center transition-opacity duration-500 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="text-center text-primary-foreground">
        <div className="relative h-16 w-16 mx-auto">
          <div className="absolute inset-0 rounded-full border-2 border-white/20" />
          <div className="absolute inset-0 rounded-full border-2 border-gold border-t-transparent animate-spin" />
        </div>
        <div className="mt-6 font-display text-xl tracking-tight">Dream Public School</div>
        <div className="mt-1 text-[11px] uppercase tracking-[0.3em] text-white/60">Loading excellence</div>
      </div>
    </div>
  );
}
