import { motion } from 'framer-motion';
import { useGeo } from '@/context/GeoContext';

export function Results() {
  const { geo } = useGeo();

  const stats = [
    { value: "300+", label: "Projetos Lançados", sub: "GLOBAL IMPACT" },
    { value: "40+", label: "Países", sub: "WORLDWIDE REACH" },
    { value: geo.results.revenue, label: geo.results.revenueLabel, sub: "PROVEN LEVERAGE" },
    { value: "98%", label: "Retenção de Clientes", sub: "LONG-TERM PARTNERSHIPS" },
  ];

  return (
    <section className="py-32 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">O Fim da <span className="text-gradient-primary">Dúvida</span></h2>
          <p className="mt-4 text-muted-foreground font-mono text-sm tracking-widest">NUMBERS DON'T LIE.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center flex flex-col items-center"
            >
              <div className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-xs text-primary/60 font-mono tracking-wider">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
