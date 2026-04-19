import { useEffect, useState } from "react";
import { CRMLayout } from "@/components/crm/CRMLayout";
import { api } from "@/lib/api";
import { Link } from "wouter";

const STATUS_COLORS: Record<string, string> = {
  new: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  contacted: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  qualified: "bg-green-500/20 text-green-300 border-green-500/30",
  closed: "bg-white/10 text-white/40 border-white/10",
};

const STATUS_LABELS: Record<string, string> = {
  new: "Novo",
  contacted: "Contactado",
  qualified: "Qualificado",
  closed: "Encerrado",
};

export default function CRMDashboard() {
  const [diagnostics, setDiagnostics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getDiagnostics().then(setDiagnostics).catch(console.error).finally(() => setLoading(false));
  }, []);

  const total = diagnostics.length;
  const newCount = diagnostics.filter((d) => d.status === "new").length;
  const qualified = diagnostics.filter((d) => d.status === "qualified").length;
  const countries = [...new Set(diagnostics.map((d) => d.countryCode).filter(Boolean))].length;

  const recent = diagnostics.slice(0, 5);

  const stats = [
    { label: "Total de Leads", value: total, sub: "todos os diagnósticos" },
    { label: "Novos Leads", value: newCount, sub: "aguardando contato", accent: true },
    { label: "Qualificados", value: qualified, sub: "oportunidades abertas" },
    { label: "Países Ativos", value: countries, sub: "mercados com leads" },
  ];

  return (
    <CRMLayout>
      <div className="p-8">
        <div className="mb-8">
          <p className="text-xs font-mono text-violet-400 tracking-widest mb-1">VISÃO GERAL</p>
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <div key={i} className={`border p-6 ${s.accent ? "border-violet-500/30 bg-violet-500/5" : "border-white/5 bg-white/2"}`}>
              <div className={`text-4xl font-black mb-2 ${s.accent ? "text-violet-400" : "text-white"}`}>{loading ? "—" : s.value}</div>
              <div className="font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-xs text-white/40">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="border border-white/5">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
            <h2 className="font-bold">Diagnósticos Recentes</h2>
            <Link href="/crm/diagnostics" className="text-xs font-mono text-violet-400 hover:text-violet-300 tracking-widest">
              VER TODOS →
            </Link>
          </div>

          {loading ? (
            <div className="p-8 text-center text-white/30 text-sm">Carregando...</div>
          ) : recent.length === 0 ? (
            <div className="p-8 text-center text-white/30 text-sm">Nenhum diagnóstico ainda.</div>
          ) : (
            <div className="divide-y divide-white/5">
              {recent.map((d) => (
                <Link key={d.id} href={`/crm/diagnostics/${d.id}`}>
                  <div className="flex items-center gap-4 px-6 py-4 hover:bg-white/2 transition-colors cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-violet-600/20 flex items-center justify-center text-sm font-bold text-violet-400 shrink-0">
                      {d.name?.[0]?.toUpperCase() || "?"}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm truncate">{d.name}</div>
                      <div className="text-xs text-white/40 truncate">{d.email}</div>
                    </div>
                    <div className="text-xs font-mono text-white/30 shrink-0">{d.countryCode?.toUpperCase()}</div>
                    <span className={`text-xs font-mono px-2 py-1 border rounded shrink-0 ${STATUS_COLORS[d.status] || STATUS_COLORS.new}`}>
                      {STATUS_LABELS[d.status] || d.status}
                    </span>
                    <div className="text-xs text-white/20 shrink-0">{new Date(d.createdAt).toLocaleDateString("pt-BR")}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </CRMLayout>
  );
}
