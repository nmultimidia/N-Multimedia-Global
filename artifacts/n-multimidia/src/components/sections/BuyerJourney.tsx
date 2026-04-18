import { motion } from 'framer-motion';

const stages = [
  {
    id: '01',
    name: 'Consciência',
    en: 'AWARENESS',
    color: 'from-blue-600/20 to-transparent',
    accent: '#3b82f6',
    problem: 'Seu cliente sente a dor, mas ainda não sabe que você existe.',
    action: 'Criamos conteúdo de autoridade, anúncios de topo de funil e posicionamento que fazem você aparecer no momento exato da consciência do problema.',
    kpi: 'Reach, CPM, Brand Recall',
  },
  {
    id: '02',
    name: 'Consideração',
    en: 'CONSIDERATION',
    color: 'from-purple-600/20 to-transparent',
    accent: '#7c3aed',
    problem: 'Ele pesquisa soluções. Você compete com 10 alternativas na mesma tela.',
    action: 'Engenharia de copy, prova social estratégica, retargeting inteligente e ofertas irresistíveis que isolam sua proposta de valor da competição.',
    kpi: 'CTR, Tempo na Página, Leads Qualificados',
  },
  {
    id: '03',
    name: 'Decisão',
    en: 'DECISION',
    color: 'from-violet-600/20 to-transparent',
    accent: '#8b5cf6',
    problem: 'Ele está pronto para comprar — mas a menor fricção mata a venda.',
    action: 'Funis de conversão cirúrgicos, sequências de e-mail de urgência, ofertas com bônus e garantias que eliminam o risco percebido e fecham a venda.',
    kpi: 'Conversão, CAC, ROAS',
  },
  {
    id: '04',
    name: 'Retenção',
    en: 'RETENTION',
    color: 'from-emerald-600/20 to-transparent',
    accent: '#10b981',
    problem: 'A venda não é o fim. O LTV do cliente é onde o lucro real mora.',
    action: 'Onboarding premium, upsell e cross-sell estruturado, comunidade de clientes e programas de fidelidade que transformam compradores em promotores da sua marca.',
    kpi: 'LTV, Churn Rate, NPS',
  },
];

export function BuyerJourney() {
  return (
    <section className="py-32 bg-card/20 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-3xl"
        >
          <p className="text-xs font-mono text-primary tracking-widest mb-4">JORNADA DE COMPRA</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Estamos onde o cliente está.<br />
            <span className="text-gradient-primary">Em cada etapa.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
            A maioria das agências foca na venda. Nós mapeamos a jornada completa — do primeiro contato ao 
            cliente que indica você sem ser pedido. Cada fase tem estratégia, métricas e execução própria.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative"
              >
                <div
                  className="h-full border border-white/5 bg-card hover:border-opacity-50 transition-all duration-500 p-8 flex flex-col relative overflow-hidden"
                  style={{ borderColor: `${stage.accent}10` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${stage.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="text-5xl font-black font-mono"
                        style={{ color: `${stage.accent}20` }}
                      >
                        {stage.id}
                      </span>
                      <span
                        className="text-xs font-mono tracking-widest px-2 py-1"
                        style={{ color: stage.accent, border: `1px solid ${stage.accent}30` }}
                      >
                        {stage.en}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">{stage.name}</h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-mono text-white/30 mb-2 tracking-widest">O PROBLEMA</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{stage.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-mono mb-2 tracking-widest" style={{ color: stage.accent }}>
                          NOSSA ATUAÇÃO
                        </p>
                        <p className="text-white/70 text-sm leading-relaxed">{stage.action}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-white/5">
                      <p className="text-xs font-mono text-white/30 mb-1 tracking-widest">KPIs</p>
                      <p className="text-xs text-muted-foreground">{stage.kpi}</p>
                    </div>
                  </div>
                </div>

                {i < stages.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-20 text-white/20 text-xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 p-8 border border-primary/20 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-xs font-mono text-primary tracking-widest mb-2">INSIGHT CHAVE</p>
            <p className="text-lg font-semibold text-white">
              Empresas que acompanham toda a jornada têm CAC 3x menor e LTV 4x maior.
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Não é coincidência. É matemática de funil bem construído.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contato');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shrink-0 text-sm font-mono font-bold tracking-widest uppercase px-8 py-3 bg-primary text-white hover:bg-primary/80 transition-colors"
          >
            Mapear minha jornada
          </button>
        </motion.div>
      </div>
    </section>
  );
}
