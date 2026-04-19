import { motion } from 'framer-motion';
import { Link } from 'wouter';

const values = [
  {
    title: 'Minimalismo',
    desc: 'Menos é mais. Processos simples, objetivos claros, foco no essencial. Cortamos o ruído para que a inteligência apareça.',
    icon: '—',
  },
  {
    title: 'Disrupção',
    desc: 'Incentivar novas ideias, inovação e ousadia em cada projeto. A estagnação não tem lugar aqui.',
    icon: '↗',
  },
  {
    title: 'Colaboração',
    desc: 'As equipes funcionam como uma rede horizontal, não como uma hierarquia pesada. Sua voz importa desde o primeiro dia.',
    icon: '⊕',
  },
  {
    title: 'Meritocracia Criativa',
    desc: 'Quem entrega valor ganha reconhecimento público. Aqui não existe senioridade de cargo, existe senioridade de entrega.',
    icon: '▲',
  },
];

const badges = [
  { icon: '💡', name: 'Inovador do Mês', desc: 'Para quem trouxe uma ideia que mudou o jogo' },
  { icon: '⚡', name: 'Entrega Rápida', desc: 'Para quem superou prazos sem perder qualidade' },
  { icon: '🎨', name: 'Criatividade em Alta', desc: 'Para quem produziu algo memorável' },
  { icon: '🤝', name: 'Colaborador Destaque', desc: 'Para quem elevou a equipe inteira' },
  { icon: '🚀', name: 'Performance Extraordinária', desc: 'Para resultados que superaram todas as expectativas' },
];

const awards = [
  { period: 'Mensais', desc: 'Melhor projeto, melhor colaboração, maior impacto para o cliente. Reconhecimento público em toda a equipe.', accent: '#7c3aed' },
  { period: 'Trimestrais', desc: 'Reconhecimento financeiro ou bônus para top performers. Porque resultado excepcional merece recompensa real.', accent: '#3b82f6' },
  { period: 'Gamificação', desc: 'Ranking saudável baseado em pontos por badges + entregas. Competição que eleva, não que divide.', accent: '#10b981' },
];

const principles = [
  { title: 'Remote-First', desc: 'Trabalhamos de qualquer lugar do mundo. Não medimos horas sentadas — medimos impacto gerado.' },
  { title: 'Feedback Assíncrono', desc: 'Reuniões curtas de alinhamento, feedback rico via plataforma. Respeitamos o tempo e o foco de todos.' },
  { title: 'Autonomia Real', desc: 'Cada pessoa é dona do seu projeto. Com autonomia vem responsabilidade — e com responsabilidade vem crescimento.' },
  { title: 'Hall da Fama Digital', desc: 'Os melhores são destacados publicamente todo mês. Sua contribuição nunca passa despercebida.' },
];

const flow = [
  { num: '01', label: 'Entregas', desc: 'Cada membro ganha pontos e badges por performance em projetos reais.' },
  { num: '02', label: 'Peer Recognition', desc: 'Reconhecimento entre colegas — não apenas do líder para o time.' },
  { num: '03', label: 'Anúncio', desc: 'Na última semana do mês, awards divulgados em call + mural digital público.' },
  { num: '04', label: 'Incentivo', desc: 'Os vencedores ganham destaque, bônus ou prioridade em projetos mais estratégicos.' },
];

const openRoles = [
  { title: 'Performance Marketing Lead', type: 'Full-time · Remote', area: 'GROWTH' },
  { title: 'Senior Copywriter (PT/EN)', type: 'Full-time · Remote', area: 'CREATIVE' },
  { title: 'Web Developer (React)', type: 'Full-time · Remote', area: 'TECH' },
  { title: 'Brand Strategist', type: 'Full-time · Remote', area: 'STRATEGY' },
];

export default function Carreira() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5 pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/8 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-mono text-primary tracking-widest mb-6">N MULTIMÍDIA · CAREERS</p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Faça parte do time<br />
              <span className="text-gradient-primary">que muda o jogo.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Não buscamos funcionários. Buscamos pessoas que acordam pensando em como fazer melhor. 
              Aqui, a mediocridade não tem espaço — e o excepcional é a norma esperada.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-28 border-b border-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-mono text-primary tracking-widest mb-4">FUNDAÇÃO</p>
            <h2 className="text-4xl md:text-5xl font-bold">Nossos 4 Princípios</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card border border-white/5 p-8 hover:border-primary/30 transition-colors duration-300 group"
              >
                <div className="text-3xl text-primary/40 font-mono mb-6 group-hover:text-primary transition-colors duration-300">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-card/20 border-b border-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-2xl"
          >
            <p className="text-xs font-mono text-primary tracking-widest mb-4">RECONHECIMENTO</p>
            <h2 className="text-4xl md:text-5xl font-bold">Appreciation Badges</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Reconhecimento em tempo real. Cada badge é público, visível para toda a equipe, e conta 
              pontos no ranking mensal.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {badges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border border-white/5 p-6 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl mb-4">{badge.icon}</div>
                <h4 className="font-bold text-sm mb-2">{badge.name}</h4>
                <p className="text-muted-foreground text-xs leading-relaxed">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-b border-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-mono text-primary tracking-widest mb-4">AWARDS</p>
            <h2 className="text-4xl md:text-5xl font-bold">Premiações que Importam</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="border border-white/5 bg-card p-8 relative overflow-hidden group hover:border-opacity-40 transition-all duration-300"
                style={{ borderColor: `${award.accent}15` }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: award.accent }}
                />
                <h3 className="text-2xl font-black mb-4" style={{ color: award.accent }}>
                  {award.period}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{award.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[420px] overflow-hidden border-y border-white/5">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/team-photo.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
        <div className="relative z-10 h-full flex items-center container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs font-mono text-primary tracking-widest mb-4">O NOSSO TIME</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 max-w-lg">
              Pessoas que entregam.<br />Não que aparecem.
            </h2>
            <p className="text-muted-foreground max-w-md">
              100% remoto, 40+ países, uma única obsessão: resultados que importam para o cliente.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-28 bg-card/20 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-mono text-primary tracking-widest mb-4">COMO TRABALHAMOS</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Estilo de Trabalho</h2>
              <div className="space-y-8">
                {principles.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="w-px bg-primary/30 shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-2">{p.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-mono text-primary tracking-widest mb-4">FLUXO MENSAL</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Ciclo de Reconhecimento</h2>
              <div className="space-y-6">
                {flow.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 items-start"
                  >
                    <span className="text-4xl font-black text-primary/20 font-mono shrink-0 leading-none">
                      {step.num}
                    </span>
                    <div>
                      <h4 className="font-bold text-white mb-1">{step.label}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-28 border-b border-white/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-xs font-mono text-primary tracking-widest mb-4">OPORTUNIDADES ABERTAS</p>
            <h2 className="text-4xl md:text-5xl font-bold">Vagas Disponíveis</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Todas as posições são remotas, globais e baseadas em performance.
            </p>
          </motion.div>

          <div className="space-y-3">
            {openRoles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border border-white/5 bg-card hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              >
                <div>
                  <span className="text-xs font-mono text-primary/60 tracking-widest mb-1 block">{role.area}</span>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{role.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{role.type}</p>
                </div>
                <span className="text-primary/40 group-hover:text-primary transition-colors text-xl">→</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 border border-primary/20 bg-primary/5 text-center"
          >
            <h3 className="text-2xl font-bold mb-3">Não viu sua vaga?</h3>
            <p className="text-muted-foreground mb-6">
              Pessoas excepcionais sempre têm espaço. Mande seu portfólio e nos convença.
            </p>
            <a
              href="mailto:careers@nmultimidia.com"
              className="inline-block text-sm font-mono font-bold tracking-widest uppercase px-8 py-3 bg-primary text-white hover:bg-primary/80 transition-colors"
            >
              careers@nmultimidia.com
            </a>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="text-2xl font-black tracking-tighter text-white hover:text-primary transition-colors">
            N<span className="text-primary">.</span>
          </Link>
          <Link href="/" className="text-sm font-mono text-muted-foreground hover:text-white transition-colors tracking-wider uppercase">
            ← Voltar ao site
          </Link>
          <div className="text-sm text-muted-foreground">N Multimídia © 2025 — Global Operations</div>
        </div>
      </footer>
    </main>
  );
}
