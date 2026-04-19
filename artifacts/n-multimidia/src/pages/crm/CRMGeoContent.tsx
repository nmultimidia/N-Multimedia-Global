import { useEffect, useState } from "react";
import { Link } from "wouter";
import { CRMLayout } from "@/components/crm/CRMLayout";
import { api } from "@/lib/api";
import { geoContent } from "@/config/geoContent";

export default function CRMGeoContent() {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => api.getGeoContent().then(setRows).catch(console.error).finally(() => setLoading(false));

  useEffect(() => { load(); }, []);

  const handleToggle = async (code: string, isActive: boolean) => {
    const row = rows.find((r) => r.countryCode === code);
    if (!row) return;
    await api.updateGeoContent(code, { ...row, content: row.content, isActive: !isActive });
    load();
  };

  const handleDelete = async (code: string) => {
    if (!confirm(`Eliminar conteúdo para ${code}?`)) return;
    await api.deleteGeoContent(code);
    load();
  };

  const seedDefaultCountries = async () => {
    const existing = rows.map((r) => r.countryCode);
    for (const [code, data] of Object.entries(geoContent)) {
      if (code === "default" || existing.includes(code)) continue;
      await api.saveGeoContent({ countryCode: code, flag: data.flag, marketLabel: data.marketLabel, content: data, isActive: true });
    }
    load();
  };

  return (
    <CRMLayout>
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs font-mono text-violet-400 tracking-widest mb-1">PERSONALIZAÇÃO POR REGIÃO</p>
            <h1 className="text-3xl font-bold">Conteúdo por País</h1>
          </div>
          <div className="flex gap-3">
            {rows.length === 0 && !loading && (
              <button onClick={seedDefaultCountries} className="px-4 py-2 text-xs font-mono bg-violet-600/20 border border-violet-600/30 text-violet-300 hover:bg-violet-600/40 transition-colors">
                IMPORTAR PADRÕES
              </button>
            )}
            <Link href="/crm/geo-content/new" className="px-4 py-2 text-xs font-mono bg-violet-600 text-white hover:bg-violet-500 transition-colors">
              + NOVO PAÍS
            </Link>
          </div>
        </div>

        <div className="border border-white/5">
          <div className="grid grid-cols-[60px_1fr_160px_100px_120px] gap-4 px-6 py-3 border-b border-white/5 text-xs font-mono text-white/30 tracking-widest">
            <span>FLAG</span>
            <span>MERCADO</span>
            <span>CÓDIGO</span>
            <span>STATUS</span>
            <span>AÇÕES</span>
          </div>

          {loading ? (
            <div className="p-8 text-center text-white/30 text-sm">Carregando...</div>
          ) : rows.length === 0 ? (
            <div className="p-10 text-center">
              <p className="text-white/30 text-sm mb-4">Nenhum conteúdo configurado.</p>
              <button onClick={seedDefaultCountries} className="px-6 py-2 text-sm font-mono bg-violet-600 text-white hover:bg-violet-500 transition-colors">
                Importar Países Padrão (BR, US, GB, AO, PT)
              </button>
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {rows.map((row) => (
                <div key={row.countryCode} className="grid grid-cols-[60px_1fr_160px_100px_120px] gap-4 items-center px-6 py-4 hover:bg-white/2 transition-colors">
                  <span className="text-2xl">{row.flag}</span>
                  <div>
                    <div className="font-semibold text-sm">{row.marketLabel}</div>
                    <div className="text-xs text-white/30">{(row.content as any)?.hero?.sub?.substring(0, 50)}...</div>
                  </div>
                  <span className="text-xs font-mono text-white/50">{row.countryCode}</span>
                  <button
                    onClick={() => handleToggle(row.countryCode, row.isActive)}
                    className={`text-xs font-mono px-2 py-1 border rounded w-fit transition-colors ${row.isActive ? "bg-green-500/20 text-green-300 border-green-500/30" : "bg-white/5 text-white/30 border-white/10"}`}
                  >
                    {row.isActive ? "ATIVO" : "INATIVO"}
                  </button>
                  <div className="flex gap-2">
                    <Link href={`/crm/geo-content/${row.countryCode}`} className="text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors">EDITAR</Link>
                    <button onClick={() => handleDelete(row.countryCode)} className="text-xs font-mono text-red-400/50 hover:text-red-400 transition-colors">DEL</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </CRMLayout>
  );
}
