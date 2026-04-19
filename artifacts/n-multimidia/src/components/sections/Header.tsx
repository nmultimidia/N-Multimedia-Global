import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { useGeo } from '@/context/GeoContext';

const navLinks = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Resultados', href: '/#resultados' },
  { label: 'Processo', href: '/#processo' },
  { label: 'Carreiras', href: '/carreira' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const { geo } = useGeo();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionNav = (id: string) => {
    setMenuOpen(false);
    if (location !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-white hover:text-primary transition-colors duration-300"
          >
            N<span className="text-primary">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith('/#') ? (
                <button
                  key={link.label}
                  onClick={() => handleSectionNav(link.href.replace('/#', ''))}
                  className="text-sm font-mono text-muted-foreground hover:text-white transition-colors tracking-wider uppercase"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-mono text-muted-foreground hover:text-white transition-colors tracking-wider uppercase"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleSectionNav('contato')}
              className="text-sm font-mono font-bold tracking-widest uppercase px-6 py-2.5 bg-primary text-white hover:bg-primary/80 transition-colors"
            >
              {geo.header.cta}
            </button>
          </div>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-6">
              {navLinks.map((link) =>
                link.href.startsWith('/#') ? (
                  <button
                    key={link.label}
                    onClick={() => handleSectionNav(link.href.replace('/#', ''))}
                    className="text-sm font-mono text-left text-muted-foreground hover:text-white transition-colors tracking-wider uppercase"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm font-mono text-muted-foreground hover:text-white transition-colors tracking-wider uppercase"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <button
                onClick={() => handleSectionNav('contato')}
                className="text-sm font-mono font-bold tracking-widest uppercase px-6 py-3 bg-primary text-white hover:bg-primary/80 transition-colors w-full"
              >
                {geo.header.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
