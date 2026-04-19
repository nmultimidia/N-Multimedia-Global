import { useEffect, useState } from "react";
import { Link } from "wouter";
import { CRMLayout } from "@/components/crm/CRMLayout";
import { api } from "@/lib/api";

const STATUS_COLORS: Record<string, string> = {
  new: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  contacted: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  qualified: "bg-green-500/20 text-green-300 border-green-500/30",
  closed: "bg-white/10 text-white/40 border-white/10",
};
const STATUS_LABELS: Record<string, string> = {
  new: "Novo", contacted: "Contactado", qualified: "Qualificado", closed: "Encerrado",
};

export default function CRMDiagnostics() {
  const [diagnostics, setDiagnostics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const load = () => api.getDiagnostics().then(setDiagnostics).catch(console.error).finally(() => setLoading(false));
  useEffect(() => { load(); }, []);

  const filtered = diagnostics.filter((d) => {
    const matchStatus = filter === "all" || d.status === filter;
    const q = search.toLowerCase();
    const matchSearch = !q || d.name?.toLowerCase().includes(q) || d.email?.toLowerCase().includes(q) || d.countryCode?.toLowerCase().includes(q);
    return matchStatus && matchSearch;
  });

  return (
    <CRMLayout>
      <div className="p-8">
        <div className="mb-6">
          <p className="text-xs font-mono text-violet-400 tracking-widest mb-1">LEADS & QUALIFICAÇÃO</p>
          <h1 className="text-3xl font-bold">Diagnósticos</h1>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nome, email ou país..."
            className="bg-black border border-white/10 px-4 py-2 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition-colors flex-1 min-w-48"
          />
          {["all", "new", "contacted", "qualified", "closed"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-4 py-2 text-xs font-mono border transition-colors ${filter === s ? "bg-violet-600 border-violet-600 text-white" : "border-white/10 text-white/40 hover:text-white hover:border-white/30"}`}
            >
              {s === "all" ? "TODOS" : STATUS_LABELS[s]?.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="border border-white/5">
          <div className="grid grid-cols-[1fr_1.5fr_80px_120px_120px_40px] gap-4 px-6 py-3 border-b border-white/5 text-xs font-mono text-white/30 tracking-widest">
            <span>NOME</span>
            <span>E-MAIL</span>
            <span>PAÍS</span>
            <span>STATUS</span>
            <span>DATA</span>
            <span></span>
          </div>

          {loading ? (
            <div className="p-8 text-center text-white/30 text-sm">Carregando...</div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center text-white/30 text-sm">Nenhum resultado.</div>
          ) : (
            <div className="divide-y divide-white/5">
              {filtered.map((d) => (
                <div key={d.id} className="grid grid-cols-[1fr_1.5fr_80px_120px_120px_40px] gap-4 items-center px-6 py-4 hover:bg-white/2 transition-colors">
                  <Link href={`/crm/diagnostics/${d.id}`} className="font-semibold text-sm hover:text-violet-400 transition-colors truncate">{d.name}</Link>
                  <span className="text-sm text-white/50 truncate">{d.email}</span>
                  <span className="text-xs font-mono text-white/40">{d.countryCode?.toUpperCase() || "—"}</span>
                  <span className={`text-xs font-mono px-2 py-1 border rounded w-fit ${STATUS_COLORS[d.status] || STATUS_COLORS.new}`}>
                    {STATUS_LABELS[d.status] || d.status}
                  </span>
                  <span className="text-xs text-white/30">{new Date(d.createdAt).toLocaleDateString("pt-BR")}</span>
                  <Link href={`/crm/diagnostics/${d.id}`} className="text-white/20 hover:text-violet-400 text-sm transition-colors">→</Link>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-4 text-xs text-white/30 font-mono">{filtered.length} resultado(s)</div>
      </div>
    </CRMLayout>
  );
}
