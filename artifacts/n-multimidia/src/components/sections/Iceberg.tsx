import { motion } from 'framer-motion';

const visible = [
  'Criativo impactante',
  'Campanhas no ar',
  'Relatório mensal',
  'Post no feed',
  'Logo bonito',
];

const hidden = [
  'Análise de cohort e LTV',
  'Engenharia de oferta irresistível',
  'Modelos preditivos de IA',
  'Mapeamento de jornada de compra',
  'Teste A/B de copy e criativo',
  'Otimização de funil de vendas',
  'Automação com agentes de IA',
  'Segmentação comportamental',
  'Estrutura de retenção e upsell',
  'Diagnóstico BANT pré-campanha',
  'Business Intelligence & dashboards',
  'Análise competitiva de mercado',
  'Framework de escalabilidade',
  'Arquitetura de dados e rastreamento',
];

export function Iceberg() {
  return (
    <section className="py-32 relative overflow-hidden bg-background border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <p className="text-xs font-mono text-primary tracking-widest mb-4">A TEORIA DO ICEBERG</p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              O que você vê é apenas<br />
              <span className="text-gradient-primary">10% do trabalho.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
              Todo cliente aplaude o criativo, a campanha, o post. Mas o resultado real vem de um trabalho 
              imenso que acontece debaixo da superfície — invisível, silencioso, e completamente decisivo.
            </p>
          </motion.div>

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-2xl"
            >
              <div className="relative">
                <div
                  className="relative z-10 mx-auto border border-white/10 bg-card/50 backdrop-blur-sm p-8 text-center"
                  style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)' }}
                >
                  <p className="text-xs font-mono text-primary/60 tracking-widest mb-4">O QUE O CLIENTE VÊ</p>
                  <div className="space-y-2">
                    {visible.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-3 justify-center"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                        <span className="text-white/70 text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent my-0 relative z-20">
                  <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-mono px-4 py-1.5 whitespace-nowrap tracking-widest">
                    LINHA DA ÁGUA
                  </div>
                </div>

                <div
                  className="relative z-10 mx-auto mt-0 border border-primary/20 bg-primary/5 backdrop-blur-sm p-10"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)' }}
                >
                  <p className="text-xs font-mono text-primary tracking-widest mb-6 text-center">O QUE REALMENTE GERA RESULTADO</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    {hidden.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06 }}
                        className="flex items-center gap-3"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-white/80 text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-16 text-center max-w-2xl"
            >
              <p className="text-muted-foreground text-lg leading-relaxed">
                Agências comuns entregam o que o cliente consegue ver. Nós obsedamos pelo que está embaixo — 
                porque é lá que vivem os seus próximos R$500k.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
