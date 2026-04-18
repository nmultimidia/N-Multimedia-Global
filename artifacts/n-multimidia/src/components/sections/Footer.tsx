import { Link } from 'wouter';

export function Footer() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-white/10 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="text-3xl font-black tracking-tighter mb-4">
              N<span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Agência digital internacional. Não vendemos marketing. Vendemos alavancagem.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono text-primary/60 tracking-widest mb-4">NAVEGAÇÃO</p>
            <div className="space-y-3">
              {[
                { label: 'Serviços', id: 'servicos' },
                { label: 'Resultados', id: 'resultados' },
                { label: 'Processo BANT', id: 'processo' },
                { label: 'Contato', id: 'contato' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScrollTo(item.id)}
                  className="block text-sm text-muted-foreground hover:text-white transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-mono text-primary/60 tracking-widest mb-4">EMPRESA</p>
            <div className="space-y-3">
              <Link href="/carreira" className="block text-sm text-muted-foreground hover:text-white transition-colors">
                Carreiras
              </Link>
              <a href="#" className="block text-sm text-muted-foreground hover:text-white transition-colors">
                Sobre
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-white transition-colors">
                Cases
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-mono text-primary/60 tracking-widest mb-4">REDES</p>
            <div className="space-y-3">
              {['LinkedIn', 'Instagram', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            N Multimídia © 2025 — Global Operations
          </div>
          <div className="text-xs font-mono text-muted-foreground/40 tracking-widest">
            WE DON'T SELL MARKETING. WE SELL LEVERAGE.
          </div>
        </div>
      </div>
    </footer>
  );
}
