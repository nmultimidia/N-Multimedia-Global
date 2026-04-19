import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { clearToken, getEmail } from "@/lib/crmAuth";

const navItems = [
  { href: "/crm/dashboard", label: "Dashboard", icon: "⬛" },
  { href: "/crm/diagnostics", label: "Diagnósticos", icon: "📋" },
  { href: "/crm/geo-content", label: "Conteúdo por País", icon: "🌍" },
  { href: "/crm/settings", label: "Configurações", icon: "⚙️" },
];

export function CRMLayout({ children }: { children: ReactNode }) {
  const [location, navigate] = useLocation();
  const email = getEmail();

  const handleLogout = () => {
    clearToken();
    navigate("/crm/login");
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex">
      <aside className="w-64 shrink-0 bg-black/60 border-r border-white/5 flex flex-col">
        <div className="p-6 border-b border-white/5">
          <div className="text-xl font-black tracking-tighter">
            N<span className="text-violet-500">.</span> <span className="text-white/40 text-sm font-normal font-mono">CRM</span>
          </div>
          <p className="text-xs text-white/40 mt-1 truncate">{email}</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors ${
                location === item.href
                  ? "bg-violet-600/20 text-violet-400 border border-violet-600/30"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <a
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded text-sm text-white/40 hover:text-white hover:bg-white/5 transition-colors mb-1"
          >
            ← Ver Site
          </a>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded text-sm text-red-400/70 hover:text-red-400 hover:bg-red-400/10 transition-colors"
          >
            🚪 Sair
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
