import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const objections = [
  {
    q: '"Já contratei agência antes e não tive resultado."',
    a: 'A maioria das agências vende horas de trabalho disfarçadas de estratégia. Nós vendemos sistemas. Antes de qualquer proposta, fazemos um diagnóstico BANT para entender exatamente o que está quebrando no seu funil. Se não conseguirmos provar valor no diagnóstico, encerramos a conversa ali — sem perda de tempo para nenhum dos dois lados.',
    tag: 'OBJEÇÃO #1 / CONFIANÇA'
  },
  {
    q: '"É muito caro. Não tenho orçamento agora."',
    a: 'Caro em relação a quê? Ao custo de continuar dependendo de estratégias que não escalam? Um cliente que fatura R$30k/mês e não investe em crescimento estruturado está perdendo R$360k/ano em potencial. A pergunta certa não é "quanto custa?", é "quanto estou deixando de ganhar?"',
    tag: 'OBJEÇÃO #2 / PREÇO'
  },
  {
    q: '"Não sei se é o momento certo."',
    a: 'O momento perfeito nunca existe — mas o mercado não espera. Nossos melhores clientes chegaram em momentos de transição: mudança de modelo de negócio, novo produto, reposicionamento. A janela de vantagem competitiva fecha mais rápido do que parece. A pergunta não é se você vai agir, é quem vai agir primeiro: você ou seu concorrente.',
    tag: 'OBJEÇÃO #3 / TIMING'
  },
  {
    q: '"Preciso pensar. Vou analisar com meu sócio."',
    a: 'Respeitamos o processo decisório. Por isso nosso diagnóstico é feito com os decisores reais (a metodologia BANT existe para isso). Se quiser, agende uma call conjunta. O que não funciona: deixar a decisão para "depois" enquanto o mercado avança. Podemos reservar uma vaga para a próxima semana.',
    tag: 'OBJEÇÃO #4 / DECISÃO'
  },
  {
    q: '"Como sei que vocês vão entregar o que prometem?"',
    a: 'Não pedimos fé — pedimos dados. Antes de qualquer contrato, apresentamos cases relevantes para o seu segmento, referências de clientes que você pode ligar agora, e uma metodologia de acompanhamento transparente. Nosso contrato tem cláusulas de performance. Se não batemos metas, você tem saída garantida sem multa.',
    tag: 'OBJEÇÃO #5 / PROVA'
  },
  {
    q: '"Meu negócio é diferente. Isso não vai funcionar para mim."',
    a: 'Excelente ponto — e é exatamente por isso que começamos com diagnóstico, não com template. Trabalhamos com mais de 40 países e setores radicalmente diferentes. A mecânica de crescimento muda na superfície, mas os princípios de alavancagem são universais. Se o seu negócio for realmente inadequado para nosso modelo, vamos dizer isso na primeira conversa.',
    tag: 'OBJEÇÃO #6 / FIT'
  },
];

export function Objections() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-32 bg-black/30 border-t border-white/5 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-primary tracking-widest mb-4">RESPONDENDO ANTES QUE VOCÊ PERGUNTE</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            A resposta para a dúvida<br />
            que você ainda <span className="text-gradient-primary italic">não fez.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl">
            Todo cliente chega com objeções. Isso é inteligente, não é problema. Aqui estão as seis mais comuns — respondidas com honestidade brutal.
          </p>
        </motion.div>

        <div className="space-y-3">
          {objections.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="border border-white/5 bg-card hover:border-primary/20 transition-colors duration-300"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 p-6 text-left"
              >
                <div>
                  <span className="text-xs font-mono text-primary/60 tracking-widest block mb-2">{obj.tag}</span>
                  <span className="text-lg font-semibold text-white/80 italic">{obj.q}</span>
                </div>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl text-primary/60 shrink-0 mt-1"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                      {obj.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
