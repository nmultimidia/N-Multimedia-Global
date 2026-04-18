export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-black tracking-tighter">N</div>
        
        <div className="flex gap-6 text-sm text-muted-foreground font-mono">
          <a href="#" className="hover:text-white transition-colors">LINKEDIN</a>
          <a href="#" className="hover:text-white transition-colors">INSTAGRAM</a>
          <a href="#" className="hover:text-white transition-colors">TWITTER</a>
        </div>
        
        <div className="text-sm text-muted-foreground">
          N Multimídia © 2025 — Global Operations
        </div>
      </div>
    </footer>
  );
}
