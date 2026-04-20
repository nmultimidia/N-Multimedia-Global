import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGeo } from "@/context/GeoContext";
import { api } from "@/lib/api";

const COUNTRY_CODES = [
  { code: "AO", flag: "🇦🇴", name: "Angola", dial: "+244" },
  { code: "BR", flag: "🇧🇷", name: "Brasil", dial: "+55" },
  { code: "PT", flag: "🇵🇹", name: "Portugal", dial: "+351" },
  { code: "MZ", flag: "🇲🇿", name: "Moçambique", dial: "+258" },
  { code: "CV", flag: "🇨🇻", name: "Cabo Verde", dial: "+238" },
  { code: "ST", flag: "🇸🇹", name: "São Tomé e Príncipe", dial: "+239" },
  { code: "GW", flag: "🇬🇼", name: "Guiné-Bissau", dial: "+245" },
  { code: "US", flag: "🇺🇸", name: "Estados Unidos", dial: "+1" },
  { code: "GB", flag: "🇬🇧", name: "Reino Unido", dial: "+44" },
  { code: "ZA", flag: "🇿🇦", name: "África do Sul", dial: "+27" },
  { code: "NG", flag: "🇳🇬", name: "Nigéria", dial: "+234" },
  { code: "KE", flag: "🇰🇪", name: "Quénia", dial: "+254" },
  { code: "GH", flag: "🇬🇭", name: "Gana", dial: "+233" },
  { code: "NA", flag: "🇳🇦", name: "Namíbia", dial: "+264" },
  { code: "AR", flag: "🇦🇷", name: "Argentina", dial: "+54" },
  { code: "CO", flag: "🇨🇴", name: "Colômbia", dial: "+57" },
  { code: "MX", flag: "🇲🇽", name: "México", dial: "+52" },
  { code: "CA", flag: "🇨🇦", name: "Canadá", dial: "+1" },
  { code: "AU", flag: "🇦🇺", name: "Austrália", dial: "+61" },
  { code: "FR", flag: "🇫🇷", name: "França", dial: "+33" },
  { code: "DE", flag: "🇩🇪", name: "Alemanha", dial: "+49" },
  { code: "ES", flag: "🇪🇸", name: "Espanha", dial: "+34" },
  { code: "IT", flag: "🇮🇹", name: "Itália", dial: "+39" },
  { code: "NL", flag: "🇳🇱", name: "Países Baixos", dial: "+31" },
  { code: "CH", flag: "🇨🇭", name: "Suíça", dial: "+41" },
  { code: "BE", flag: "🇧🇪", name: "Bélgica", dial: "+32" },
  { code: "SE", flag: "🇸🇪", name: "Suécia", dial: "+46" },
  { code: "NO", flag: "🇳🇴", name: "Noruega", dial: "+47" },
  { code: "DK", flag: "🇩🇰", name: "Dinamarca", dial: "+45" },
  { code: "JP", flag: "🇯🇵", name: "Japão", dial: "+81" },
  { code: "CN", flag: "🇨🇳", name: "China", dial: "+86" },
  { code: "IN", flag: "🇮🇳", name: "Índia", dial: "+91" },
];

function getDefaultDial(countryCode: string): string {
  const found = COUNTRY_CODES.find((c) => c.code === countryCode.toUpperCase());
  return found?.dial ?? "+244";
}

export function Contact() {
  const { geo, countryCode } = useGeo();
  const c = geo.contact;

  const [step, setStep] = useState<1 | 2>(1);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [dialCode, setDialCode] = useState(() => getDefaultDial(countryCode));
  const [phoneNumber, setPhoneNumber] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [need, setNeed] = useState("");

  const [segment, setSegment] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [businessModel, setBusinessModel] = useState("");
  const [digitalMaturity, setDigitalMaturity] = useState("");
  const [mainChannel, setMainChannel] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const selectedCountry = useMemo(
    () => COUNTRY_CODES.find((c) => c.dial === dialCode) ?? COUNTRY_CODES[0],
    [dialCode]
  );

  const phone = phoneNumber ? `${dialCode} ${phoneNumber}` : "";

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phoneNumber) return;
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await api.submitDiagnostic({
        name, role, email, phone, budget, timeline, need, countryCode,
        segment, companySize, businessModel, digitalMaturity, mainChannel,
      });
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Erro ao enviar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-32 relative border-t border-white/5">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {c.heading} <span className="text-gradient-primary">{c.headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{c.subtext}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-white/5 rounded-2xl overflow-hidden"
        >
          {success ? (
            <div className="text-center py-16 px-8">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Diagnóstico Enviado!</h3>
              <p className="text-muted-foreground">A nossa equipa irá avaliar o seu perfil e entrar em contacto em breve.</p>
            </div>
          ) : (
            <>
              <div className="flex border-b border-white/5">
                <div className={`flex-1 py-4 px-8 flex items-center gap-3 transition-colors ${step === 1 ? 'border-b-2 border-primary' : 'border-b-2 border-transparent'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${step === 1 ? 'bg-primary text-white' : 'bg-primary text-white'}`}>1</span>
                  <span className={`text-xs font-mono tracking-widest uppercase ${step === 1 ? 'text-white' : 'text-white/60'}`}>Informações</span>
                  <span className={`text-xs text-muted-foreground hidden md:block`}>Dados de contacto e necessidade</span>
                </div>
                <div className={`flex-1 py-4 px-8 flex items-center gap-3 transition-colors ${step === 2 ? 'border-b-2 border-primary' : 'border-b-2 border-transparent'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${step === 2 ? 'bg-primary text-white' : 'bg-white/10 text-white/40'}`}>2</span>
                  <span className={`text-xs font-mono tracking-widest uppercase ${step === 2 ? 'text-white' : 'text-white/40'}`}>Perfil da Empresa</span>
                  <span className={`text-xs text-muted-foreground hidden md:block ${step === 2 ? '' : 'opacity-40'}`}>Segmento · Tamanho · Maturidade</span>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.form
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                      onSubmit={handleNext}
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-mono text-muted-foreground">01. NOME</label>
                          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome completo" className="bg-background border-white/10 h-12" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-mono text-muted-foreground">02. CARGO</label>
                          <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Ex: CEO, Diretor de Marketing..." className="bg-background border-white/10 h-12" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-mono text-muted-foreground">03. E-MAIL CORPORATIVO</label>
                          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@suaempresa.com" type="email" className="bg-background border-white/10 h-12" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-mono text-muted-foreground">04. WHATSAPP / TELEFONE</label>
                          <div className="flex h-12 rounded-md border border-white/10 bg-background overflow-hidden focus-within:ring-1 focus-within:ring-primary/50">
                            <Select value={dialCode} onValueChange={setDialCode}>
                              <SelectTrigger className="w-[110px] shrink-0 border-0 border-r border-white/10 rounded-none bg-transparent h-full px-3 gap-1.5 focus:ring-0 text-sm">
                                <span className="text-lg leading-none">{selectedCountry.flag}</span>
                                <span className="text-white/70 font-mono text-xs">{dialCode}</span>
                              </SelectTrigger>
                              <SelectContent className="max-h-64">
                                {COUNTRY_CODES.map((country) => (
                                  <SelectItem key={`${country.code}-${country.dial}`} value={country.dial}>
                                    <span className="flex items-center gap-2">
                                      <span className="text-base">{country.flag}</span>
                                      <span className="text-sm">{country.name}</span>
                                      <span className="text-xs text-muted-foreground font-mono ml-auto">{country.dial}</span>
                                    </span>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <input
                              type="tel"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              placeholder="9XX XXX XXX"
                              required
                              className="flex-1 bg-transparent px-3 text-sm outline-none text-white placeholder:text-muted-foreground"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-mono text-muted-foreground">05. {c.budgetLabel}</label>
                          <Select onValueChange={setBudget} value={budget}>
                            <SelectTrigger className="bg-background border-white/10 h-12">
                              <SelectValue placeholder={c.budgetPlaceholder} />
                            </SelectTrigger>
                            <SelectContent>
                              {c.budgetOptions.map((opt) => (
                                <SelectItem key={opt.value} value={opt.label}>{opt.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-mono text-muted-foreground">06. TIMELINE</label>
                          <Select onValueChange={setTimeline} value={timeline}>
                            <SelectTrigger className="bg-background border-white/10 h-12">
                              <SelectValue placeholder={c.timelinePlaceholder} />
                            </SelectTrigger>
                            <SelectContent>
                              {c.timelineOptions.map((opt) => (
                                <SelectItem key={opt.value} value={opt.label}>{opt.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-mono text-muted-foreground">07. NECESSIDADE PRINCIPAL</label>
                        <Textarea
                          value={need}
                          onChange={(e) => setNeed(e.target.value)}
                          placeholder={c.needPlaceholder}
                          className="bg-background border-white/10 min-h-[120px] resize-none"
                        />
                      </div>

                      <Button type="submit" className="w-full h-14 text-lg bg-white text-black hover:bg-white/90 rounded-none font-bold uppercase tracking-widest">
                        Próximo → Perfil da Empresa
                      </Button>
                    </motion.form>
                  )}

                  {step === 2 && (
                    <motion.form
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.25 }}
                      className="space-y-6"
                      onSubmit={handleSubmit}
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-mono text-muted-foreground">08. SEGMENTO / NICHO</label>
                          <Select onValueChange={setSegment} value={segment}>
                            <SelectTrigger className="bg-background border-white/10 h-12">
                              <SelectValue placeholder="Selecione o segmento" />
                            </SelectTrigger>
                            <SelectContent>
                              {["Tech / SaaS", "E-commerce", "Serviços Profissionais", "Saúde & Bem-estar", "Educação", "Varejo Físico", "Imobiliário", "Financeiro", "Outro"].map((v) => (
                                <SelectItem key={v} value={v}>{v}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-mono text-muted-foreground">09. TAMANHO DA EMPRESA</label>
                          <Select onValueChange={setCompanySize} value={companySize}>
                            <SelectTrigger className="bg-background border-white/10 h-12">
                              <SelectValue placeholder="Nº de colaboradores" />
                            </SelectTrigger>
                            <SelectContent>
                              {["1 a 5 pessoas", "6 a 20 pessoas", "21 a 50 pessoas", "51 a 200 pessoas", "Acima de 200"].map((v) => (
                                <SelectItem key={v} value={v}>{v}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-mono text-muted-foreground">10. MODELO DE NEGÓCIO</label>
                          <Select onValueChange={setBusinessModel} value={businessModel}>
                            <SelectTrigger className="bg-background border-white/10 h-12">
                              <SelectValue placeholder="Como você vende?" />
                            </SelectTrigger>
                            <SelectContent>
                              {["B2B (vende para empresas)", "B2C (vende para pessoas)", "B2B2C", "Marketplace", "Assinatura / SaaS", "Outro"].map((v) => (
                                <SelectItem key={v} value={v}>{v}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-mono text-muted-foreground">11. MATURIDADE DIGITAL</label>
                          <Select onValueChange={setDigitalMaturity} value={digitalMaturity}>
                            <SelectTrigger className="bg-background border-white/10 h-12">
                              <SelectValue placeholder="Onde você está hoje?" />
                            </SelectTrigger>
                            <SelectContent>
                              {["Iniciando — sem presença digital", "Básico — redes sociais e site", "Intermediário — já invisto em ads", "Avançado — tenho equipa e dados", "Maduro — quero escalar"].map((v) => (
                                <SelectItem key={v} value={v}>{v}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-mono text-muted-foreground">12. CANAL PRINCIPAL HOJE</label>
                        <Select onValueChange={setMainChannel} value={mainChannel}>
                          <SelectTrigger className="bg-background border-white/10 h-12">
                            <SelectValue placeholder="Onde está a sua audiência?" />
                          </SelectTrigger>
                          <SelectContent>
                            {["Instagram / Facebook", "Google Ads / SEO", "LinkedIn", "TikTok", "WhatsApp / Email", "Indicação / Boca a boca", "Nenhum ainda", "Múltiplos canais"].map((v) => (
                              <SelectItem key={v} value={v}>{v}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {error && (
                        <div className="bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">{error}</div>
                      )}

                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="h-14 px-6 text-sm font-mono border border-white/10 text-white/60 hover:text-white hover:border-white/30 transition-colors uppercase tracking-widest"
                        >
                          ← Voltar
                        </button>
                        <Button disabled={submitting} className="flex-1 h-14 text-lg bg-white text-black hover:bg-white/90 rounded-none font-bold uppercase tracking-widest">
                          {submitting ? "Enviando..." : c.submitLabel}
                        </Button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
