import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useGeo } from '@/context/GeoContext';

export function Contact() {
  const { geo } = useGeo();
  const c = geo.contact;

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
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">01. EMPRESA & AUTORIDADE</label>
                <Input placeholder="Seu Nome / Cargo" className="bg-background border-white/10 h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">02. E-MAIL CORPORATIVO</label>
                <Input placeholder="email@suaempresa.com" type="email" className="bg-background border-white/10 h-12" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">{c.budgetLabel}</label>
                <Select>
                  <SelectTrigger className="bg-background border-white/10 h-12">
                    <SelectValue placeholder={c.budgetPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {c.budgetOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">04. TIMELINE</label>
                <Select>
                  <SelectTrigger className="bg-background border-white/10 h-12">
                    <SelectValue placeholder={c.timelinePlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {c.timelineOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-mono text-muted-foreground">05. NECESSIDADE PRINCIPAL</label>
              <Textarea
                placeholder={c.needPlaceholder}
                className="bg-background border-white/10 min-h-[120px] resize-none"
              />
            </div>

            <Button className="w-full h-14 text-lg mt-4 bg-white text-black hover:bg-white/90 rounded-none font-bold uppercase tracking-widest">
              {c.submitLabel}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
