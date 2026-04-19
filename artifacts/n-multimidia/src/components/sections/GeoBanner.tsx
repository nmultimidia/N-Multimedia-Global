import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGeo } from '@/context/GeoContext';

export function GeoBanner() {
  const { geo, loading } = useGeo();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!loading) {
      setVisible(true);
      const t = setTimeout(() => setVisible(false), 5000);
      return () => clearTimeout(t);
    }
  }, [loading]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
        >
          <div className="flex items-center gap-3 bg-card/90 backdrop-blur-xl border border-primary/20 px-5 py-3 shadow-lg shadow-primary/10">
            <span className="text-xl leading-none">{geo.flag}</span>
            <span className="text-xs font-mono text-white/80 tracking-wide">{geo.banner}</span>
            <button
              className="pointer-events-auto ml-2 text-white/30 hover:text-white/70 transition-colors text-xs"
              onClick={() => setVisible(false)}
            >
              ✕
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
