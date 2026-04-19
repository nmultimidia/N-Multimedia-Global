import { useEffect, useState } from "react";
import { CRMLayout } from "@/components/crm/CRMLayout";
import { api } from "@/lib/api";

export default function CRMSettings() {
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    api.getSettings().then(setSettings).catch(console.error).finally(() => setLoading(false));
  }, []);

  const set = (key: string, value: string) => setSettings((prev) => ({ ...prev, [key]: value }));

  const handleSave = async () => {
    setSaving(true);
    try {
      await api.saveSettings(settings);
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (e: any) { alert(e.message); }
    finally { setSaving(false); }
  };

  const groups = [
    {
      title: "Notificações por E-mail",
      desc: "Configure o e-mail que receberá os novos diagnósticos e as credenciais SMTP.",
      fields: [
        { key: "admin_email", label: "E-MAIL DO ADMINISTRADOR", type: "email", placeholder: "gabrieltatai@nmultimidia.com" },
        { key: "smtp_host", label: "SMTP HOST", type: "text", placeholder: "smtp.gmail.com" },
        { key: "smtp_port", label: "SMTP PORT", type: "text", placeholder: "587" },
        { key: "smtp_user", label: "SMTP USUÁRIO", type: "email", placeholder: "seu@email.com" },
        { key: "smtp_pass", label: "SMTP SENHA / APP PASSWORD", type: "password", placeholder: "••••••••" },
      ],
    },
    {
      title: "Identidade da Agência",
      desc: "Informações gerais usadas no CRM e notificações.",
      fields: [
        { key: "agency_name", label: "NOME DA AGÊNCIA", type: "text", placeholder: "N Multimídia" },
        { key: "agency_tagline", label: "TAGLINE", type: "text", placeholder: "We don't sell marketing. We sell leverage." },
      ],
    },
  ];

  return (
    <CRMLayout>
      <div className="p-8 max-w-2xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-mono text-violet-400 tracking-widest mb-1">CONFIGURAÇÕES DO CRM</p>
            <h1 className="text-3xl font-bold">Configurações</h1>
          </div>
          <button
            onClick={handleSave}
            disabled={saving || loading}
            className="px-6 py-2 text-sm font-mono bg-violet-600 text-white hover:bg-violet-500 transition-colors disabled:opacity-50"
          >
            {saved ? "✓ SALVO" : saving ? "SALVANDO..." : "SALVAR TUDO"}
          </button>
        </div>

        {loading ? (
          <div className="text-white/30 text-sm">Carregando...</div>
        ) : (
          <div className="space-y-8">
            {groups.map((group) => (
              <div key={group.title} className="border border-white/5">
                <div className="px-6 py-4 border-b border-white/5">
                  <h2 className="font-bold text-sm">{group.title}</h2>
                  <p className="text-xs text-white/40 mt-1">{group.desc}</p>
                </div>
                <div className="p-6 space-y-4">
                  {group.fields.map((f) => (
                    <div key={f.key} className="space-y-2">
                      <label className="text-xs font-mono text-white/40 tracking-widest">{f.label}</label>
                      <input
                        type={f.type}
                        value={settings[f.key] || ""}
                        onChange={(e) => set(f.key, e.target.value)}
                        placeholder={f.placeholder}
                        className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="border border-white/5 bg-white/2 p-6">
              <h2 className="font-bold text-sm mb-2">Credenciais de Acesso</h2>
              <p className="text-xs text-white/40 mb-4">As credenciais de login do CRM são configuradas diretamente no servidor por segurança.</p>
              <div className="space-y-2 text-sm">
                <div className="flex gap-4">
                  <span className="text-xs font-mono text-white/30 w-24">E-MAIL</span>
                  <span className="text-white/60">gabrieltatai@nmultimidia.com</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-xs font-mono text-white/30 w-24">SENHA</span>
                  <span className="text-white/60">••••••••••••</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </CRMLayout>
  );
}
