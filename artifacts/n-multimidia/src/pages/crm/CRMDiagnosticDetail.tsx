import { useEffect, useState } from "react";
import { useParams, useLocation } from "wouter";
import { CRMLayout } from "@/components/crm/CRMLayout";
import { api } from "@/lib/api";

const STATUS_OPTIONS = [
  { value: "new", label: "Novo" },
  { value: "contacted", label: "Contactado" },
  { value: "qualified", label: "Qualificado" },
  { value: "closed", label: "Encerrado" },
];

const STATUS_COLORS: Record<string, string> = {
  new: "text-violet-400",
  contacted: "text-blue-400",
  qualified: "text-green-400",
  closed: "text-white/30",
};

export default function CRMDiagnosticDetail() {
  const { id } = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const [d, setD] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    api.getDiagnostic(Number(id)).then(setD).catch(console.error).finally(() => setLoading(false));
  }, [id]);

  const handleStatusChange = async (status: string) => {
    setSaving(true);
    try {
      const updated = await api.updateDiagnosticStatus(Number(id), status);
      setD(updated);
    } catch (e) { console.error(e); }
    finally { setSaving(false); }
  };

  const handleDelete = async () => {
    if (!confirm("Eliminar este diagnóstico?")) return;
    await api.deleteDiagnostic(Number(id));
    navigate("/crm/diagnostics");
  };

  if (loading) return <CRMLayout><div className="p-8 text-white/30">Carregando...</div></CRMLayout>;
  if (!d) return <CRMLayout><div className="p-8 text-white/30">Não encontrado.</div></CRMLayout>;

  return (
    <CRMLayout>
      <div className="p-8 max-w-3xl">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate("/crm/diagnostics")} className="text-white/30 hover:text-white text-sm transition-colors">← Voltar</button>
          <div className="flex-1">
            <p className="text-xs font-mono text-violet-400 tracking-widest mb-1">DIAGNÓSTICO #{d.id}</p>
            <h1 className="text-2xl font-bold">{d.name}</h1>
          </div>
          <button onClick={handleDelete} className="text-red-400/50 hover:text-red-400 text-sm font-mono transition-colors">ELIMINAR</button>
        </div>

        <div className="space-y-8 mb-8">
          <div>
            <p className="text-xs font-mono text-violet-400/60 tracking-widest mb-4">CONTACTO</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "E-MAIL", value: d.email },
                { label: "WHATSAPP / TELEFONE", value: d.phone || "—" },
                { label: "CARGO", value: d.role || "—" },
                { label: "PAÍS", value: d.countryCode?.toUpperCase() || "—" },
                { label: "RECEBIDO EM", value: new Date(d.createdAt).toLocaleString("pt-BR") },
              ].map((field) => (
                <div key={field.label} className="border border-white/5 bg-white/2 p-5">
                  <p className="text-xs font-mono text-white/30 tracking-widest mb-2">{field.label}</p>
                  {field.label === "WHATSAPP / TELEFONE" && d.phone ? (
                    <a
                      href={`https://wa.me/${d.phone.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-400 hover:text-green-300 transition-colors"
                    >
                      {d.phone}
                    </a>
                  ) : (
                    <p className="text-sm text-white">{field.value}</p>
                  )}
                </div>
              ))}
              <div className="border border-white/5 bg-white/2 p-5">
                <p className="text-xs font-mono text-white/30 tracking-widest mb-2">STATUS</p>
                <select
                  value={d.status}
                  onChange={(e) => handleStatusChange(e.target.value)}
                  disabled={saving}
                  className={`bg-transparent border-none text-sm font-bold focus:outline-none cursor-pointer ${STATUS_COLORS[d.status] || "text-white"}`}
                >
                  {STATUS_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value} className="bg-black text-white">{o.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-mono text-violet-400/60 tracking-widest mb-4">INFORMAÇÕES</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "BUDGET", value: d.budget || "—" },
                { label: "TIMELINE", value: d.timeline || "—" },
              ].map((field) => (
                <div key={field.label} className="border border-white/5 bg-white/2 p-5">
                  <p className="text-xs font-mono text-white/30 tracking-widest mb-2">{field.label}</p>
                  <p className="text-sm text-white">{field.value}</p>
                </div>
              ))}
            </div>
            {d.need && (
              <div className="border border-white/5 bg-white/2 p-6 mt-4">
                <p className="text-xs font-mono text-white/30 tracking-widest mb-3">NECESSIDADE PRINCIPAL</p>
                <p className="text-sm text-white leading-relaxed">{d.need}</p>
              </div>
            )}
          </div>

          {(d.segment || d.companySize || d.businessModel || d.digitalMaturity || d.mainChannel) && (
            <div>
              <p className="text-xs font-mono text-violet-400/60 tracking-widest mb-4">PERFIL DA EMPRESA</p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: "SEGMENTO", value: d.segment || "—" },
                  { label: "TAMANHO DA EMPRESA", value: d.companySize || "—" },
                  { label: "MODELO DE NEGÓCIO", value: d.businessModel || "—" },
                  { label: "MATURIDADE DIGITAL", value: d.digitalMaturity || "—" },
                  { label: "CANAL PRINCIPAL", value: d.mainChannel || "—" },
                  { label: "WEBSITE", value: d.website || "—" },
                ].map((field) => (
                  <div key={field.label} className="border border-white/5 bg-white/2 p-5">
                    <p className="text-xs font-mono text-white/30 tracking-widest mb-2">{field.label}</p>
                    {field.label === "WEBSITE" && d.website ? (
                      <a href={d.website} target="_blank" rel="noopener noreferrer" className="text-sm text-violet-400 hover:text-violet-300 transition-colors break-all">{d.website}</a>
                    ) : (
                      <p className="text-sm text-white">{field.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </CRMLayout>
  );
}
