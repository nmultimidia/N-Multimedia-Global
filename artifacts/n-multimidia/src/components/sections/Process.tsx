import { motion } from 'framer-motion';

const steps = [
  { id: "01", title: "Diagnóstico", desc: "Mapeamento cirúrgico de Budget e Necessidades reais. Se não fizermos sentido para você, diremos na primeira call.", tag: "BANT: BUDGET / NEED" },
  { id: "02", title: "Estratégia", desc: "Arquitetura da solução e definição de Autoridade. Desenhamos o plano de ataque perfeito.", tag: "BANT: AUTHORITY" },
  { id: "03", title: "Execução", desc: "Implementação implacável com prazos definidos. Velocidade é a nossa vantagem injusta.", tag: "BANT: TIMELINE" },
  { id: "04", title: "Resultados", desc: "Otimização contínua e escalabilidade. O jogo nunca termina, ele apenas sobe de nível.", tag: "SCALING" },
];

export function Process() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Metodologia <span className="text-white/40">BANT</span></h2>
          <p className="text-muted-foreground text-lg">Um funil projetado para eliminar atritos e focar na execução pura.</p>
        </div>

        <div className="space-y-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center group"
            >
              <div className="text-6xl md:text-8xl font-black text-white/5 group-hover:text-primary/20 transition-colors duration-500 font-mono">
                {step.id}
              </div>
              <div>
                <span className="text-xs font-mono text-primary mb-2 block tracking-widest">{step.tag}</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-lg max-w-2xl">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
