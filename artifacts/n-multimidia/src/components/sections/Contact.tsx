import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGeo } from "@/context/GeoContext";
import { api } from "@/lib/api";

export function Contact() {
  const { geo, countryCode } = useGeo();
  const c = geo.contact;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [need, setNeed] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await api.submitDiagnostic({ name, email, budget, timeline, need, countryCode });
      setSuccess(true);
      setName(""); setEmail(""); setBudget(""); setTimeline(""); setNeed("");
    } catch (err: any) {
      setError(err.message || "Erro ao enviar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {c.heading} <span className="text-gradient-primary">{c.headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{c.subtext}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card p-8 md:p-12 border border-white/5 rounded-2xl"
        >
          {success ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Diagnóstico Enviado!</h3>
              <p className="text-muted-foreground">A nossa equipa irá avaliar o seu perfil e entrar em contacto em breve.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground">01. EMPRESA & AUTORIDADE</label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu Nome / Cargo" className="bg-background border-white/10 h-12" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground">02. E-MAIL CORPORATIVO</label>
                  <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@suaempresa.com" type="email" className="bg-background border-white/10 h-12" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground">{c.budgetLabel}</label>
                  <Select onValueChange={setBudget}>
                    <SelectTrigger className="bg-background border-white/10 h-12">
                      <SelectValue placeholder={c.budgetPlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {c.budgetOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.label}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground">04. TIMELINE</label>
                  <Select onValueChange={setTimeline}>
                    <SelectTrigger className="bg-background border-white/10 h-12">
                      <SelectValue placeholder={c.timelinePlaceholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {c.timelineOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.label}>{opt.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">05. NECESSIDADE PRINCIPAL</label>
                <Textarea
                  value={need}
                  onChange={(e) => setNeed(e.target.value)}
                  placeholder={c.needPlaceholder}
                  className="bg-background border-white/10 min-h-[120px] resize-none"
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">{error}</div>
              )}

              <Button disabled={submitting} className="w-full h-14 text-lg mt-4 bg-white text-black hover:bg-white/90 rounded-none font-bold uppercase tracking-widest">
                {submitting ? "Enviando..." : c.submitLabel}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
