import { motion } from 'framer-motion';

const values = [
  { title: "Minimalismo", desc: "Menos é mais. Processos simples, objetivos claros, foco no essencial." },
  { title: "Disrupção", desc: "Incentivo a novas ideias, inovação e ousadia em cada projeto." },
  { title: "Colaboração", desc: "As equipes funcionam como uma rede, não como uma hierarquia pesada." },
  { title: "Meritocracia Criativa", desc: "Quem entrega valor, ganha reconhecimento público." }
];

export function Culture() {
  return (
    <section className="py-32 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              A Cultura do <br/><span className="text-gradient-primary">Result-First</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nós somos 100% remote-first. Acreditamos em entregas, não em horas sentadas na cadeira. Cada membro da equipe N Multimídia atua como dono do seu próprio projeto.
            </p>
            <div className="space-y-6">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">{v.title}</h4>
                    <p className="text-muted-foreground text-sm">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-square bg-gradient-to-tr from-background to-background/50 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden glass-card"
            >
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
              <h3 className="text-3xl font-black text-center z-10">APPRECIATION<br/>BADGES</h3>
              <p className="text-center text-muted-foreground mt-4 z-10 max-w-sm">
                Nosso sistema interno de reconhecimento recompensa o excepcional. Não aceitamos a mediocridade.
              </p>
              
              <div className="flex gap-4 mt-8 z-10">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-16 h-16 rounded-full border-2 border-primary/50 flex items-center justify-center bg-black/50 backdrop-blur-md">
                    <div className="w-8 h-8 rotate-45 bg-primary/20" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
