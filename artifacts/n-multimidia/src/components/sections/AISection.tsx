import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const capabilities = [
  {
    id: '01',
    title: 'Automação Inteligente',
    en: 'INTELLIGENT AUTOMATION',
    desc: 'Agentes de IA que operam fluxos de vendas, atendimento e operações sem intervenção humana — 24h por dia, sem erros, sem custo marginal.',
    metrics: ['−78% custo operacional', '+300% capacidade de escala', 'Tempo de resposta: <1s'],
  },
  {
    id: '02',
    title: 'Análise Preditiva',
    en: 'PREDICTIVE ANALYTICS',
    desc: 'Modelos de machine learning que antecipam comportamento de compra, churn e oportunidades — antes que os concorrentes percebam.',
    metrics: ['LTV projetado com 92% precisão', 'Segmentação em tempo real', 'Churn prevention automático'],
  },
  {
    id: '03',
    title: 'IA Generativa',
    en: 'GENERATIVE AI',
    desc: 'Conteúdo, copy, criativos e estratégias geradas por IA treinada com a voz da sua marca — velocidade de produção multiplicada por 10.',
    metrics: ['×10 velocidade de produção', 'Tom de voz consistente', 'A/B automático por variante'],
  },
  {
    id: '04',
    title: 'Business Intelligence',
    en: 'REAL-TIME BI',
    desc: 'Dashboards executivos com dados unificados de todas as fontes — do tráfego pago ao CRM — para decisões em segundos, não em dias.',
    metrics: ['Dados em tempo real', 'Fontes unificadas', 'KPIs que importam'],
  },
];

const floatingDots = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 3,
  size: Math.random() * 3 + 1,
}));

export function AISection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 relative overflow-hidden border-t border-white/5 bg-black/60">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/8 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-violet-600/6 blur-[100px] rounded-full" />
        {floatingDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full bg-primary/30"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: dot.size,
              height: dot.size,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.4, 1] }}
            transition={{ duration: 3 + dot.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-mono text-primary tracking-widest mb-4">INTELIGÊNCIA ARTIFICIAL & DADOS</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Não vendemos<br />
              <span className="italic text-white/40">tecnologia</span>.<br />
              Vendemos vantagem competitiva.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg">
              Enquanto seus concorrentes ainda tomam decisões por intuição, os nossos clientes já operam com 
              modelos preditivos, automação e inteligência real-time. A diferença não é visível — até os resultados chegarem.
            </p>

            <div className="space-y-3">
              {capabilities.map((cap, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`w-full text-left px-6 py-4 border transition-all duration-300 flex items-center gap-4 group ${
                    active === i
                      ? 'border-primary/50 bg-primary/10'
                      : 'border-white/5 hover:border-white/15 bg-card/30'
                  }`}
                >
                  <span className={`font-mono text-sm shrink-0 ${active === i ? 'text-primary' : 'text-white/20'}`}>
                    {cap.id}
                  </span>
                  <div className="min-w-0">
                    <p className={`font-bold text-sm ${active === i ? 'text-white' : 'text-white/60'}`}>{cap.title}</p>
                    <p className="text-xs text-primary/60 font-mono">{cap.en}</p>
                  </div>
                  <div className={`ml-auto w-1.5 h-1.5 rounded-full shrink-0 transition-all ${active === i ? 'bg-primary' : 'bg-white/10'}`} />
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-px bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-sm" />
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-card/50 border border-white/5 p-10 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4 mb-8">
                <span className="text-6xl font-black text-primary/15 font-mono leading-none">{capabilities[active].id}</span>
                <div>
                  <p className="text-xs font-mono text-primary tracking-widest mb-2">{capabilities[active].en}</p>
                  <h3 className="text-2xl font-bold">{capabilities[active].title}</h3>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                {capabilities[active].desc}
              </p>

              <div className="space-y-3">
                {capabilities[active].metrics.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-white/80 font-mono">{m}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/5">
                <div className="flex gap-3">
                  {capabilities.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-0.5 transition-all duration-300 ${i === active ? 'bg-primary w-8' : 'bg-white/15 w-4 hover:bg-white/30'}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-primary/10 pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-16 h-16 border border-primary/10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
