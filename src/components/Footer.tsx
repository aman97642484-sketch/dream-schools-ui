import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-[80%] rounded-full bg-gold/20 blur-3xl" />

      <div className="container-edge relative pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-5 [&_*]:text-primary-foreground">
              <Logo />
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Nurturing curious minds and confident hearts since 1998. A CBSE-affiliated co-educational institution committed to academic excellence.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full glass-dark transition-transform hover:-translate-y-0.5 hover:bg-gold/20">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              {[
                { to: "/about", label: "About Us" },
                { to: "/academics", label: "Academics" },
                { to: "/gallery", label: "Gallery" },
                { to: "/admissions", label: "Admissions" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold mb-5">Admissions</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-gold transition-colors">Download Brochure</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Eligibility Criteria</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Fee Structure</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Apply Online</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold mb-5">Reach Us</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/80">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>24, Education Avenue,<br />Sector 21, New Delhi 110075</span></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>+91 11 4567 8900</span></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /><span>info@dreampublicschool.edu.in</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Dream Public School. All rights reserved.</p>
          <p>CBSE Affiliation No. 2730421 · Designed with care.</p>
        </div>
      </div>
    </footer>
  );
}
