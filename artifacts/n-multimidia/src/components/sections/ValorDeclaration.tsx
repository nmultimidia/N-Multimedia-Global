import { motion } from 'framer-motion';

const dimensions = [
  {
    type: 'TANGÍVEL',
    accent: '#7c3aed',
    items: [
      { label: 'Receita Gerada', desc: 'Aumento direto de faturamento mensurável em 90 dias.' },
      { label: 'Custo de Aquisição', desc: 'Redução do CAC por otimização de funil e segmentação.' },
      { label: 'Participação de Mercado', desc: 'Posicionamento que rouba fatia dos concorrentes.' },
      { label: 'Retorno sobre Investimento', desc: 'ROI documentado, não estimado.' },
    ],
  },
  {
    type: 'INTANGÍVEL',
    accent: '#3b82f6',
    items: [
      { label: 'Autoridade de Marca', desc: 'Percepção de liderança que fecha portas para concorrentes.' },
      { label: 'Conhecimento Acumulado', desc: 'Dados e aprendizados que ficam com você, não com a agência.' },
      { label: 'Confiança do Mercado', desc: 'Reputação que transforma leads frios em quentes automaticamente.' },
      { label: 'Velocidade de Decisão', desc: 'Processos mais ágeis por clareza de posicionamento.' },
    ],
  },
];

const declarations = [
  {
    num: '01',
    label: 'O Benefício',
    en: 'THE BENEFIT',
    desc: 'Qual ganho concreto seu negócio realizará? Não "mais seguidores" — mas "R$80k em novos contratos nos próximos 3 meses".',
  },
  {
    num: '02',
    label: 'O Resultado',
    en: 'THE OUTCOME',
    desc: 'Qual mudança duradoura o projeto gerará na sua empresa? O ativo que permanece depois que a campanha termina.',
  },
  {
    num: '03',
    label: 'O Sucesso Percebido',
    en: 'PERCEIVED SUCCESS',
    desc: 'Como você saberá que valeu cada centavo investido? Definimos isso antes de começar — não depois.',
  },
];

export function ValorDeclaration() {
  return (
    <section className="py-32 relative overflow-hidden bg-card/10 border-t border-white/5">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-xs font-mono text-primary tracking-widest mb-4">ENTREGA DE VALOR REAL</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            A diferença entre o que você<br />
            <span className="text-gradient-primary">paga e o que você ganha.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl leading-relaxed">
            Toda entrega tem um output. Mas só uma estratégia bem executada gera um outcome — 
            uma mudança real e duradoura no seu negócio. Nós trabalhamos obcecados com outcomes, não com outputs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-stretch">
          {dimensions.map((dim, di) => (
            <motion.div
              key={di}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: di * 0.15 }}
              className="border border-white/5 bg-card p-8 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(to right, ${dim.accent}, transparent)` }}
              />
              <p
                className="text-xs font-mono tracking-widest mb-8"
                style={{ color: dim.accent }}
              >
                VALOR {dim.type}
              </p>
              <div className="space-y-6">
                {dim.items.map((item, ii) => (
                  <motion.div
                    key={ii}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: di * 0.15 + ii * 0.07 }}
                    className="flex gap-4"
                  >
                    <div
                      className="w-1 shrink-0 mt-1 rounded-full"
                      style={{ background: dim.accent, opacity: 0.5 }}
                    />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{item.label}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-white/5" />
            <p className="text-xs font-mono text-primary tracking-widest">NOSSA DECLARAÇÃO DE VALOR</p>
            <div className="h-px flex-1 bg-white/5" />
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 rounded-none opacity-20"
              style={{
                background: 'url(/value-visual.png) center/cover no-repeat',
                filter: 'blur(2px)',
              }}
            />
            <div className="relative z-10 grid md:grid-cols-3 gap-0">
              {declarations.map((decl, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className={`p-8 md:p-10 relative ${i < declarations.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/5' : ''} border border-white/5 bg-background/80 backdrop-blur-md`}
                >
                  <span className="text-4xl font-black text-primary/15 font-mono block mb-4 leading-none">
                    {decl.num}
                  </span>
                  <p className="text-xs font-mono text-primary/60 tracking-widest mb-2">{decl.en}</p>
                  <h3 className="text-xl font-bold text-white mb-3">{decl.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{decl.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
