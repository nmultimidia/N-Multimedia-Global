import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function Contact() {
  return (
    <section className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Pronto para o <span className="text-gradient-primary">Próximo Nível?</span></h2>
          <p className="text-muted-foreground text-lg">
            Preencha o formulário BANT. Nossa equipe avaliará sua elegibilidade.
          </p>
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
                <label className="text-sm font-mono text-muted-foreground">03. BUDGET RANGE</label>
                <Select>
                  <SelectTrigger className="bg-background border-white/10 h-12">
                    <SelectValue placeholder="Selecione o investimento mensal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-10k">R$ 5k - R$ 10k</SelectItem>
                    <SelectItem value="10-50k">R$ 10k - R$ 50k</SelectItem>
                    <SelectItem value="50k+">R$ 50k+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground">04. TIMELINE</label>
                <Select>
                  <SelectTrigger className="bg-background border-white/10 h-12">
                    <SelectValue placeholder="Quando deseja iniciar?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="now">Imediatamente</SelectItem>
                    <SelectItem value="1month">Em 1 mês</SelectItem>
                    <SelectItem value="quarter">Neste trimestre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-mono text-muted-foreground">05. NECESSIDADE PRINCIPAL</label>
              <Textarea 
                placeholder="Qual é o gargalo que está impedindo seu crescimento hoje?" 
                className="bg-background border-white/10 min-h-[120px] resize-none"
              />
            </div>

            <Button className="w-full h-14 text-lg mt-4 bg-white text-black hover:bg-white/90 rounded-none font-bold uppercase tracking-widest">
              Solicitar Diagnóstico
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
