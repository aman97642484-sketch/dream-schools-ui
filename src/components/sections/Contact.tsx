import { useState } from "react";
import { Reveal } from "../Reveal";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/lib/api";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in name, email, and message.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await api.post("/contact", form);
      toast.success(data?.message || "Message sent. We'll respond within one working day.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err: any) {
      console.error("[contact] submit failed:", err?.response?.data || err?.message || err);
      const msg = err?.response?.data?.message || err?.message || "Could not send. Please try again or email us directly.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-28 md:py-36 bg-secondary/40">
      <div className="container-edge">
        <Reveal className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-gold">Contact</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">We'd love to <em className="text-gradient-gold not-italic">hear from you.</em></h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-5 space-y-4">
            {[
              { icon: MapPin, title: "Address", value: "24, Education Avenue, Sector 21, New Delhi 110075" },
              { icon: Phone, title: "Phone", value: "+91 11 4567 8900 · +91 98100 12345" },
              { icon: Mail, title: "Email", value: "info@dreampublicschool.edu.in" },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl bg-card p-6 border border-border/60 flex gap-4">
                <div className="h-11 w-11 rounded-xl bg-primary-soft text-primary flex items-center justify-center shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.title}</div>
                  <div className="mt-0.5 text-primary font-medium">{c.value}</div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl overflow-hidden border border-border/60 aspect-[4/3] bg-card">
              <iframe
                title="Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.05%2C28.55%2C77.10%2C28.60&layer=mapnik"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 rounded-3xl bg-card p-8 md:p-10 border border-border/60 shadow-soft">
            <h3 className="font-display text-2xl text-primary">Send us a message</h3>
            <p className="text-sm text-muted-foreground mt-1">Our admissions team usually responds within one working day.</p>
            <form className="mt-8 grid sm:grid-cols-2 gap-5" onSubmit={onSubmit}>
              <Field label="Full name" placeholder="Aarav Mehta" value={form.name} onChange={update("name")} required />
              <Field label="Email" type="email" placeholder="you@example.com" value={form.email} onChange={update("email")} required />
              <Field label="Phone" placeholder="+91 ..." value={form.phone} onChange={update("phone")} />
              <Field label="Subject" placeholder="Admission inquiry, etc." value={form.subject} onChange={update("subject")} />
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Message</label>
                <textarea rows={5} value={form.message} onChange={update("message")} required
                  placeholder="Tell us a little about your child and your questions..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
              </div>
              <div className="sm:col-span-2 flex justify-end">
                <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? (<><Loader2 className="h-4 w-4 animate-spin" /> Sending…</>) : (<>Send Message <Send className="h-4 w-4" /></>)}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder, value, onChange, required }: {
  label: string; type?: string; placeholder?: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
    </div>
  );
}
