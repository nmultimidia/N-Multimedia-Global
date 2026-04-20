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

  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (value: string, key: string) => {
    navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const generateApiKey = () => {
    const key = "nmk_" + Array.from(crypto.getRandomValues(new Uint8Array(24)))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    set("api_key", key);
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
      desc: "Informações gerais usados no CRM e notificações.",
      fields: [
        { key: "agency_name", label: "NOME DA AGÊNCIA", type: "text", placeholder: "N Multimídia" },
        { key: "agency_tagline", label: "TAGLINE", type: "text", placeholder: "Empowering Smalls, Scalling Greats" },
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

            <div className="border border-violet-500/20 bg-violet-500/5">
              <div className="px-6 py-4 border-b border-violet-500/10">
                <h2 className="font-bold text-sm text-violet-300">Webhook</h2>
                <p className="text-xs text-white/40 mt-1">
                  Receba os dados de cada novo lead em tempo real. Cole a URL do Zapier, Make, n8n ou qualquer serviço.
                </p>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 tracking-widest">URL DO WEBHOOK</label>
                  <input
                    type="url"
                    value={settings["webhook_url"] || ""}
                    onChange={(e) => set("webhook_url", e.target.value)}
                    placeholder="https://hooks.zapier.com/hooks/catch/..."
                    className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                  <p className="text-xs text-white/30">Disparado via POST com todos os dados do lead quando um diagnóstico é submetido.</p>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 tracking-widest">CHAVE SECRETA DO WEBHOOK</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={settings["webhook_secret"] || ""}
                      onChange={(e) => set("webhook_secret", e.target.value)}
                      placeholder="Chave enviada no header Authorization"
                      className="flex-1 bg-black border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition-colors font-mono"
                    />
                    {settings["webhook_secret"] && (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(settings["webhook_secret"], "webhook_secret")}
                        className="px-4 py-3 text-xs font-mono border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors"
                      >
                        {copied === "webhook_secret" ? "✓" : "COPIAR"}
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-white/30">Enviada como <code className="text-violet-400">Authorization: Bearer &lt;chave&gt;</code> e <code className="text-violet-400">X-Webhook-Secret</code>.</p>
                </div>

                <div className="bg-black/40 border border-white/5 p-4 text-xs font-mono text-white/30">
                  <p className="text-white/50 mb-2">PAYLOAD ENVIADO:</p>
                  <pre className="text-violet-300/70 whitespace-pre-wrap">{`{
  "event": "new_diagnostic",
  "timestamp": "2025-01-01T00:00:00Z",
  "data": {
    "id": 42,
    "name": "João Silva",
    "role": "CEO",
    "email": "joao@empresa.com",
    "budget": "R$ 8.000 – R$ 20.000/mês",
    "timeline": "Imediatamente",
    "need": "...",
    "segment": "Tech / SaaS",
    "companySize": "6 a 20 pessoas",
    "businessModel": "B2B",
    "digitalMaturity": "Intermediário",
    "mainChannel": "Google Ads / SEO",
    "countryCode": "BR"
  }
}`}</pre>
                </div>
              </div>
            </div>

            <div className="border border-blue-500/20 bg-blue-500/5">
              <div className="px-6 py-4 border-b border-blue-500/10">
                <h2 className="font-bold text-sm text-blue-300">API Key</h2>
                <p className="text-xs text-white/40 mt-1">
                  Chave para integrar com sistemas externos ou proteger chamadas à API.
                </p>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-white/40 tracking-widest">CHAVE DE API</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={settings["api_key"] || ""}
                      onChange={(e) => set("api_key", e.target.value)}
                      placeholder="nmk_..."
                      className="flex-1 bg-black border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500 transition-colors font-mono"
                    />
                    <button
                      type="button"
                      onClick={generateApiKey}
                      className="px-4 py-3 text-xs font-mono border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors"
                    >
                      GERAR
                    </button>
                    {settings["api_key"] && (
                      <button
                        type="button"
                        onClick={() => copyToClipboard(settings["api_key"], "api_key")}
                        className="px-4 py-3 text-xs font-mono border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors"
                      >
                        {copied === "api_key" ? "✓" : "COPIAR"}
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-white/30">Use o botão GERAR para criar uma chave segura automaticamente.</p>
                </div>

                <div className="bg-black/40 border border-white/5 p-4 space-y-2">
                  <p className="text-xs font-mono text-white/50">ENDPOINT PÚBLICO:</p>
                  <div className="flex items-center justify-between gap-2">
                    <code className="text-xs text-blue-300/70 break-all">POST /api/diagnostic</code>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <code className="text-xs text-blue-300/70 break-all">GET /api/geo-content/:code</code>
                  </div>
                  <p className="text-xs text-white/30 mt-2">Envie a API Key no header: <code className="text-blue-400">X-API-Key: &lt;sua-chave&gt;</code></p>
                </div>
              </div>
            </div>

            <div className="border border-white/5 bg-white/2 p-6">
              <h2 className="font-bold text-sm mb-2">Credenciais de Acesso ao CRM</h2>
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
