import { useState } from "react";
import { Reveal } from "../Reveal";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { api } from "@/lib/api";

const GRADES = ["Pre-Primary", "Grade I", "Grade II", "Grade III", "Grade IV", "Grade V", "Grade VI", "Grade VII", "Grade VIII", "Grade IX", "Grade X", "Grade XI", "Grade XII"];

export function InquiryForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ studentName: "", parentName: "", email: "", phone: "", grade: "", message: "" });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const required: (keyof typeof form)[] = ["studentName", "parentName", "email", "phone", "grade"];
    if (required.some((k) => !form[k].trim())) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await api.post("/inquiries", form);
      toast.success(data?.message || "Inquiry received. Our team will contact you shortly.");
      setForm({ studentName: "", parentName: "", email: "", phone: "", grade: "", message: "" });
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Could not submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inquiry" className="py-28 md:py-36">
      <div className="container-edge max-w-3xl">
        <Reveal>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-gold">Admission inquiry</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">Begin your child's <em className="text-gradient-gold not-italic">journey.</em></h2>
          <p className="mt-4 text-muted-foreground">Submit a quick inquiry — our admissions team will reach out within one working day.</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 rounded-3xl bg-card p-8 md:p-10 border border-border/60 shadow-soft">
          <form className="grid sm:grid-cols-2 gap-5" onSubmit={onSubmit}>
            <TextField label="Student's name" value={form.studentName} onChange={update("studentName")} required />
            <TextField label="Parent's name" value={form.parentName} onChange={update("parentName")} required />
            <TextField label="Email" type="email" value={form.email} onChange={update("email")} required />
            <TextField label="Phone" value={form.phone} onChange={update("phone")} required />
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Grade applying for *</label>
              <select value={form.grade} onChange={update("grade")} required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
                <option value="">Select a grade</option>
                {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Anything we should know?</label>
              <textarea rows={4} value={form.message} onChange={update("message")}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
            </div>
            <div className="sm:col-span-2 flex justify-end">
              <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-all disabled:opacity-60">
                {loading ? (<><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>) : (<>Submit Inquiry <Send className="h-4 w-4" /></>)}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function TextField({ label, type = "text", value, onChange, required }: {
  label: string; type?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
        {label}{required ? " *" : ""}
      </label>
      <input type={type} value={value} onChange={onChange} required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
    </div>
  );
}
