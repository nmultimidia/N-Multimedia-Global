import { motion } from 'framer-motion';

export function Problem() {
  return (
    <section className="py-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 leading-tight">
            A maioria das agências quer te vender <span className="text-white/40 line-through">serviços</span>.<br/>
            Nós construímos <span className="text-gradient-primary">máquinas de lucro</span>.
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-muted-foreground text-lg">
              <p>
                Você já ouviu o mesmo discurso dezenas de vezes: "Vamos aumentar seu tráfego, melhorar seu engajamento, otimizar seu SEO."
              </p>
              <p>
                O problema? Curtidas não pagam boletos. Tráfego sem conversão é apenas vaidade.
              </p>
            </div>
            <div className="space-y-6 text-lg">
              <p className="font-semibold text-white">
                O que acontece quando você muda o foco de vaidade para alavancagem?
              </p>
              <p className="text-muted-foreground">
                Tudo muda. O ciclo de vendas encurta. O CAC despenca. O LTV dispara. Porque não estamos apenas decorando a vitrine; estamos otimizando o motor.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
