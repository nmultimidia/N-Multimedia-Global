import { motion } from 'framer-motion';
import { Link } from 'wouter';

const milestones = [
  { year: '2018', title: 'Fundação', desc: 'Nascemos em Angola com uma missão clara: transformar negócios locais com estratégias de nível global.' },
  { year: '2020', title: 'Expansão Internacional', desc: 'Abrimos operações em Portugal e Brasil, consolidando presença em 3 países lusófonos.' },
  { year: '2022', title: '40+ Países', desc: 'Nossos clientes passaram a abranger mais de 40 países, com campanhas em inglês, português e espanhol.' },
  { year: '2024', title: 'R$50M+ em Resultados', desc: 'Superamos a marca de R$50 milhões em resultados diretos gerados para clientes na América Latina, Europa e África.' },
];

const values = [
  {
    icon: '◈',
    title: 'Alavancagem, não esforço',
    desc: 'Não acreditamos em trabalhar mais. Acreditamos em trabalhar com alavancagem — sistemas, dados e criatividade que multiplicam o impacto.',
  },
  {
    icon: '▲',
    title: 'Resultado real',
    desc: 'Métricas de vaidade não nos interessam. O que conta é receita gerada, leads qualificados e crescimento sustentável.',
  },
  {
    icon: '⊕',
    title: 'Parceria verdadeira',
    desc: 'Não somos fornecedores. Somos sócios no seu crescimento. Quando você cresce, nós crescemos.',
  },
  {
    icon: '↗',
    title: 'Inovação contínua',
    desc: 'O mercado muda. Nossa metodologia evolui. Inteligência Artificial, dados e criatividade andam juntos em cada projeto.',
  },
];

const team = [
  { role: 'CEO & Founder', name: 'Gabriel Tatai', origin: 'Angola → Global' },
  { role: 'Head of Growth', name: 'Time de Performance', origin: 'Brasil · Portugal · Angola' },
  { role: 'Creative Director', name: 'Time Criativo', origin: 'Remote-First · 40+ países' },
  { role: 'Tech & AI Lead', name: 'Time de Tecnologia', origin: 'Full-Stack · IA · Data' },
];

const stats = [
  { value: '300+', label: 'Projetos Entregues' },
  { value: '40+', label: 'Países Atendidos' },
  { value: 'R$50M+', label: 'Em Resultados Gerados' },
  { value: '6+', label: 'Anos de Operação' },
];

export default function Sobre() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5 pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/6 blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/4 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs font-mono text-primary tracking-widest mb-6">N MULTIMÍDIA · SOBRE</p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Empowering Smalls.<br />
              <span className="text-gradient-primary">Scalling Greats.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Somos uma agência digital internacional nascida para dar às pequenas e médias empresas 
              o mesmo arsenal estratégico que as grandes corporações usam — sem burocracia, sem enrolação.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-10 text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-white mb-3">{stat.value}</div>
                <div className="text-xs font-mono text-muted-foreground tracking-widest uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-mono text-primary tracking-widest mb-4">NOSSA HISTÓRIA</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Uma agência diferente,<br />
                <span className="text-gradient-primary">desde o início.</span>
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  A N Multimídia nasceu em 2018 em Angola com uma pergunta simples: por que os pequenos negócios 
                  precisam de tão pouco para crescer, mas têm acesso a ferramentas tão limitadas?
                </p>
                <p>
                  Fundamos a agência com a missão de democratizar estratégias de crescimento que antes 
                  eram exclusivas de grandes marcas com orçamentos milionários.
                </p>
                <p>
                  Hoje, operamos em 40+ países, atendemos desde startups early-stage até marcas consolidadas, 
                  e continuamos com a mesma obsessão: <strong className="text-white">resultado mensurável, todo mês.</strong>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-0"
            >
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 pb-8 last:pb-0 relative"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-xs font-mono text-primary shrink-0 bg-background z-10">
                      {m.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-white/5 mt-1" />
                    )}
                  </div>
                  <div className="pb-0 pt-2">
                    <p className="text-xs font-mono text-primary/60 tracking-widest mb-1">{m.year}</p>
                    <h4 className="font-bold text-white mb-2">{m.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-card/20 border-b border-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center max-w-2xl mx-auto"
          >
            <p className="text-xs font-mono text-primary tracking-widest mb-4">NOSSOS VALORES</p>
            <h2 className="text-4xl md:text-5xl font-bold">O que nos move</h2>
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
                <h3 className="text-lg font-bold mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
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
            <p className="text-xs font-mono text-primary tracking-widest mb-4">QUEM SOMOS</p>
            <h2 className="text-4xl md:text-5xl font-bold">O time por trás da N</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl">
              Um time global, 100% remoto, unido por uma única obsessão: crescimento real para nossos clientes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/5 bg-card p-8 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <span className="text-2xl font-black text-primary">{member.name[0]}</span>
                </div>
                <p className="text-xs font-mono text-primary/60 tracking-widest mb-2">{member.role}</p>
                <h3 className="font-bold text-white text-lg mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.origin}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-b border-white/5">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-mono text-primary tracking-widest mb-6">PRONTO PARA CRESCER?</p>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Vamos construir<br />
              <span className="text-gradient-primary">algo grande juntos.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Seja você uma startup que quer escalar, uma PME que precisa de visibilidade, 
              ou uma grande empresa que quer inovar — temos a estratégia certa para o seu momento.
            </p>
            <a
              href="/#contato"
              className="inline-block text-sm font-mono font-bold tracking-widest uppercase px-10 py-4 bg-primary text-white hover:bg-primary/80 transition-colors"
            >
              Solicitar Diagnóstico Gratuito
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
