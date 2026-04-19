import { motion } from 'framer-motion';
import { MouseEvent, useRef, useState } from 'react';

const services = [
  {
    title: "Soluções de IA",
    desc: "Automação inteligente, IA generativa e agentes que trabalham 24h pelo seu negócio.",
    en: "INTELLIGENT AUTOMATION",
    highlight: true
  },
  {
    title: "Análise de Dados",
    desc: "Business Intelligence, dashboards preditivos e decisões baseadas em dados reais.",
    en: "PREDICTIVE ANALYTICS",
    highlight: true
  },
  {
    title: "Performance Marketing",
    desc: "Crescimento escalável baseado em dados rígidos.",
    en: "DATA-DRIVEN SCALE",
    highlight: false
  },
  {
    title: "Web Development",
    desc: "Plataformas digitais desenhadas para conversão extrema.",
    en: "HIGH-CONVERSION ARCHITECTURE",
    highlight: false
  },
  {
    title: "Branding & Posicionamento",
    desc: "Construção de autoridade magnética e inevitável.",
    en: "MAGNETIC AUTHORITY",
    highlight: false
  },
  {
    title: "Social Media",
    desc: "Distribuição de conteúdo que domina a atenção.",
    en: "ATTENTION MONOPOLY",
    highlight: false
  },
  {
    title: "Paid Ads",
    desc: "Aquisição de clientes com ROI previsível.",
    en: "PREDICTABLE ACQUISITION",
    highlight: false
  },
  {
    title: "Strategy & Consultoria",
    desc: "Engenharia de funil e design de ofertas irresistíveis.",
    en: "OFFER ENGINEERING",
    highlight: false
  }
];

function ServiceCard({ service, index }: { service: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotateX(((y - centerY) / centerY) * -10);
    setRotateY(((x - centerX) / centerX) * 10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 15 }}
        className={`h-full bg-card p-8 border transition-colors duration-300 flex flex-col justify-between group cursor-default relative overflow-hidden ${service.highlight ? 'border-primary/30 hover:border-primary/70' : 'border-white/5 hover:border-primary/50'}`}
      >
        {service.highlight && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div>
          <p className={`text-xs font-mono mb-4 ${service.highlight ? 'text-primary' : 'text-primary/70'}`}>{service.en}</p>
          <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
          <p className="text-muted-foreground">{service.desc}</p>
        </div>
        <div className="mt-8 flex justify-end">
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-all">
            +
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section className="py-32 relative bg-black/50">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossa <span className="italic text-white/50">Engenharia</span></h2>
          <p className="text-muted-foreground max-w-xl text-lg">
            Um ecossistema completo focado em uma única métrica: o seu crescimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
