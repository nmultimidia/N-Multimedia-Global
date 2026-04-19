import { motion } from 'framer-motion';
import { HeroScene } from '../3d/HeroScene';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url(/hero-crystal.png)' }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/10 via-background/50 to-background" />
      
      <HeroScene />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 relative"
        >
          <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
            N
          </h1>
          <div className="absolute inset-0 blur-3xl bg-primary/30 -z-10 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          <h2 className="text-primary font-mono tracking-widest uppercase text-sm md:text-base mb-6">
            WE DON'T SELL MARKETING. WE SELL LEVERAGE.
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
            Fazemos a oferta ser tão boa que você se sentiria <span className="text-gradient-primary italic">estúpido</span> em dizer não.
          </h3>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            A agência digital internacional que comanda presença, autoridade e resultados implacáveis.
          </p>
          
          <Button size="lg" className="h-14 px-8 text-lg bg-white text-black hover:bg-white/90 rounded-none font-semibold uppercase tracking-wider transition-transform hover:scale-105 duration-300">
            Iniciar Diagnóstico
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
