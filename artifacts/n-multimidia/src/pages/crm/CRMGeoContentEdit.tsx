import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import { CRMLayout } from "@/components/crm/CRMLayout";
import { api } from "@/lib/api";
import { getGeoContent } from "@/config/geoContent";

type Tab = "hero" | "results" | "contact" | "header";
const TABS: { key: Tab; label: string }[] = [
  { key: "hero", label: "Hero" },
  { key: "results", label: "Resultados" },
  { key: "contact", label: "Formulário" },
  { key: "header", label: "Header" },
];

export default function CRMGeoContentEdit() {
  const { code } = useParams<{ code: string }>();
  const [, navigate] = useLocation();
  const isNew = code === "new";

  const [tab, setTab] = useState<Tab>("hero");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [meta, setMeta] = useState({ countryCode: "", flag: "", marketLabel: "" });
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    if (isNew) {
      const def = getGeoContent("default");
      setContent(def);
      return;
    }
    api.getGeoContentByCode(code!).then((row: any) => {
      setMeta({ countryCode: row.countryCode, flag: row.flag, marketLabel: row.marketLabel });
      setContent(row.content);
    }).catch(console.error);
  }, [code]);

  const set = (path: string, value: string) => {
    setContent((prev: any) => {
      const parts = path.split(".");
      const next = { ...prev };
      let cur = next;
      for (let i = 0; i < parts.length - 1; i++) {
        cur[parts[i]] = { ...cur[parts[i]] };
        cur = cur[parts[i]];
      }
      cur[parts[parts.length - 1]] = value;
      return next;
    });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const payload = { ...meta, content };
      if (isNew) {
        await api.saveGeoContent({ ...payload, countryCode: meta.countryCode.toUpperCase() });
      } else {
        await api.updateGeoContent(code!, payload);
      }
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
      if (isNew) navigate(`/crm/geo-content/${meta.countryCode.toUpperCase()}`);
    } catch (e: any) {
      alert(e.message);
    } finally {
      setSaving(false);
    }
  };

  if (!content) return <CRMLayout><div className="p-8 text-white/30">Carregando...</div></CRMLayout>;

  const field = (label: string, path: string, multiline = false) => (
    <div key={path} className="space-y-2">
      <label className="text-xs font-mono text-white/40 tracking-widest">{label}</label>
      {multiline ? (
        <textarea
          value={path.split(".").reduce((o, k) => o?.[k], content) || ""}
          onChange={(e) => set(path, e.target.value)}
          rows={3}
          className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors resize-none"
        />
      ) : (
        <input
          value={path.split(".").reduce((o, k) => o?.[k], content) || ""}
          onChange={(e) => set(path, e.target.value)}
          className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500 transition-colors"
        />
      )}
    </div>
  );

  return (
    <CRMLayout>
      <div className="p-8 max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate("/crm/geo-content")} className="text-white/30 hover:text-white text-sm transition-colors">← Voltar</button>
          <div className="flex-1">
            <p className="text-xs font-mono text-violet-400 tracking-widest mb-1">{isNew ? "NOVO PAÍS" : `EDITAR — ${code}`}</p>
            <h1 className="text-2xl font-bold">{isNew ? "Adicionar País" : meta.marketLabel || code}</h1>
          </div>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2 text-sm font-mono bg-violet-600 text-white hover:bg-violet-500 transition-colors disabled:opacity-50"
          >
            {saved ? "✓ SALVO" : saving ? "SALVANDO..." : "SALVAR"}
          </button>
        </div>

        {isNew && (
          <div className="grid grid-cols-3 gap-4 mb-6 border border-white/5 bg-white/2 p-5">
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 tracking-widest">CÓDIGO (ex: DE)</label>
              <input value={meta.countryCode} onChange={(e) => setMeta({ ...meta, countryCode: e.target.value.toUpperCase() })} className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500" placeholder="BR" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 tracking-widest">FLAG (emoji)</label>
              <input value={meta.flag} onChange={(e) => setMeta({ ...meta, flag: e.target.value })} className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500" placeholder="🇩🇪" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/40 tracking-widest">NOME DO MERCADO</label>
              <input value={meta.marketLabel} onChange={(e) => setMeta({ ...meta, marketLabel: e.target.value })} className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500" placeholder="Deutschland" />
            </div>
          </div>
        )}

        <div className="flex gap-1 mb-6 border-b border-white/5">
          {TABS.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)} className={`px-5 py-3 text-xs font-mono tracking-widest transition-colors ${tab === t.key ? "text-violet-400 border-b-2 border-violet-500" : "text-white/30 hover:text-white"}`}>
              {t.label.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="space-y-5 border border-white/5 bg-white/2 p-6">
          {tab === "hero" && <>
            {field("TAGLINE (antes do highlight)", "hero.tagline")}
            {field("HIGHLIGHT (texto em roxo)", "hero.taglineHighlight")}
            {field("SUBTÍTULO", "hero.sub", true)}
            {field("TEXTO DO BOTÃO CTA", "hero.cta")}
            {field("BANNER (texto da notificação de geo)", "banner", true)}
          </>}

          {tab === "results" && <>
            {field("RECEITA GERADA (ex: R$50M+)", "results.revenue")}
            {field("LABEL DA RECEITA", "results.revenueLabel")}
          </>}

          {tab === "contact" && <>
            {field("TÍTULO DO FORMULÁRIO", "contact.heading")}
            {field("HIGHLIGHT DO TÍTULO", "contact.headingHighlight")}
            {field("SUBTÍTULO", "contact.subtext", true)}
            {field("LABEL DO CAMPO BUDGET", "contact.budgetLabel")}
            {field("PLACEHOLDER DO BUDGET", "contact.budgetPlaceholder")}
            {field("PLACEHOLDER DO TIMELINE", "contact.timelinePlaceholder")}
            {field("PLACEHOLDER DA NECESSIDADE", "contact.needPlaceholder")}
            {field("LABEL DO BOTÃO SUBMIT", "contact.submitLabel")}
          </>}

          {tab === "header" && <>
            {field("TEXTO DO BOTÃO NO HEADER", "header.cta")}
            {field("NOME DO MERCADO", "marketLabel")}
            {field("FLAG (emoji)", "flag")}
          </>}
        </div>
      </div>
    </CRMLayout>
  );
}
