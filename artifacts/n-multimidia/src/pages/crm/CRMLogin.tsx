import { useState } from "react";
import { useLocation } from "wouter";
import { api } from "@/lib/api";
import { saveToken } from "@/lib/crmAuth";

export default function CRMLogin() {
  const [, navigate] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await api.login(email, password);
      saveToken(res.token, res.email);
      navigate("/crm/dashboard");
    } catch (err: any) {
      setError(err.message || "Erro ao autenticar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="text-5xl font-black tracking-tighter mb-2">
            N<span className="text-violet-500">.</span>
          </div>
          <p className="text-white/40 text-sm font-mono tracking-widest">CRM ADMIN</p>
        </div>

        <div className="bg-white/5 border border-white/10 p-8">
          <h1 className="text-xl font-bold mb-6">Acesso Restrito</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-mono text-white/40 tracking-widest block mb-2">E-MAIL</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition-colors"
                placeholder="email@nmultimidia.com"
                required
              />
            </div>

            <div>
              <label className="text-xs font-mono text-white/40 tracking-widest block mb-2">SENHA</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-violet-500 transition-colors"
                placeholder="••••••••••••"
                required
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-violet-600 hover:bg-violet-500 text-white font-bold py-3 px-6 transition-colors font-mono tracking-widest text-sm uppercase disabled:opacity-50"
            >
              {loading ? "AUTENTICANDO..." : "ENTRAR"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
