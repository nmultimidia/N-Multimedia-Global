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
  { code: "US", flag: "🇺🇸", name: "United States", dial: "+1" },
  { code: "CA", flag: "🇨🇦", name: "Canada", dial: "+1-CA" },
  { code: "GB", flag: "🇬🇧", name: "United Kingdom", dial: "+44" },
  { code: "ZA", flag: "🇿🇦", name: "South Africa", dial: "+27" },
  { code: "NG", flag: "🇳🇬", name: "Nigeria", dial: "+234" },
  { code: "KE", flag: "🇰🇪", name: "Kenya", dial: "+254" },
  { code: "GH", flag: "🇬🇭", name: "Ghana", dial: "+233" },
  { code: "NA", flag: "🇳🇦", name: "Namibia", dial: "+264" },
  { code: "AR", flag: "🇦🇷", name: "Argentina", dial: "+54" },
  { code: "CO", flag: "🇨🇴", name: "Colombia", dial: "+57" },
  { code: "MX", flag: "🇲🇽", name: "México", dial: "+52" },
  { code: "AU", flag: "🇦🇺", name: "Australia", dial: "+61" },
  { code: "FR", flag: "🇫🇷", name: "France", dial: "+33" },
  { code: "DE", flag: "🇩🇪", name: "Germany", dial: "+49" },
  { code: "ES", flag: "🇪🇸", name: "Spain", dial: "+34" },
  { code: "IT", flag: "🇮🇹", name: "Italy", dial: "+39" },
  { code: "NL", flag: "🇳🇱", name: "Netherlands", dial: "+31" },
  { code: "CH", flag: "🇨🇭", name: "Switzerland", dial: "+41" },
  { code: "BE", flag: "🇧🇪", name: "Belgium", dial: "+32" },
  { code: "SE", flag: "🇸🇪", name: "Sweden", dial: "+46" },
  { code: "NO", flag: "🇳🇴", name: "Norway", dial: "+47" },
  { code: "DK", flag: "🇩🇰", name: "Denmark", dial: "+45" },
  { code: "JP", flag: "🇯🇵", name: "Japan", dial: "+81" },
  { code: "CN", flag: "🇨🇳", name: "China", dial: "+86" },
  { code: "IN", flag: "🇮🇳", name: "India", dial: "+91" },
];

function getDefaultDial(countryCode: string): string {
  const found = COUNTRY_CODES.find((c) => c.code === countryCode.toUpperCase());
  return found?.dial ?? "+244";
}

function getDisplayDial(dial: string): string {
  return dial.replace(/-CA$/, "");
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
  const [hasWebsite, setHasWebsite] = useState(false);
  const [website, setWebsite] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const selectedCountry = useMemo(
    () => COUNTRY_CODES.find((c) => c.dial === dialCode) ?? COUNTRY_CODES[0],
    [dialCode]
  );

  const phone = phoneNumber ? `${getDisplayDial(dialCode)} ${phoneNumber}` : "";

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
        website: hasWebsite ? website : "",
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
              <h3 className="text-2xl font-bold mb-3 text-primary">
                {countryCode === 'US' || countryCode === 'GB' ? 'Diagnostic Submitted!' : 'Diagnóstico Enviado!'}
              </h3>
              <p className="text-muted-foreground">
                {countryCode === 'US' || countryCode === 'GB'
                  ? 'Our team will review your profile and get in touch shortly.'
                  : 'A nossa equipa irá avaliar o seu perfil e entrar em contacto em breve.'}
              </p>
            </div>
          ) : (
            <>
              <div className="flex border-b border-white/5">
                <div className={`flex-1 py-4 px-8 flex items-center gap-3 transition-colors ${step === 1 ? 'border-b-2 border-primary' : 'border-b-2 border-transparent'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${step === 1 ? 'bg-primary text-white' : 'bg-primary text-white'}`}>1</span>
                  <span className={`text-xs font-mono tracking-widest uppercase ${step === 1 ? 'text-white' : 'text-white/60'}`}>{c.step1Label}</span>
                  <span className="text-xs text-muted-foreground hidden md:block">{c.step1Sub}</span>
                </div>
                <div className={`flex-1 py-4 px-8 flex items-center gap-3 transition-colors ${step === 2 ? 'border-b-2 border-primary' : 'border-b-2 border-transparent'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${step === 2 ? 'bg-primary text-white' : 'bg-white/10 text-white/40'}`}>2</span>
                  <span className={`text-xs font-mono tracking-widest uppercase ${step === 2 ? 'text-white' : 'text-white/40'}`}>{c.step2Label}</span>
                  <span className={`text-xs text-muted-foreground hidden md:block ${step === 2 ? '' : 'opacity-40'}`}>{c.step2Sub}</span>
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
                          <label className="text-sm font-mono text-muted-foreground">01. {c.nameLabel}</label>
                          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder={c.namePlaceholder} className="bg-background border-white/10 h-12" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-mono text-muted-foreground">02. {c.roleLabel}</label>
                          <Input value={role} onChange={(e) => setRole(e.target.value)} placeholder={c.rolePlaceholder} className="bg-background border-white/10 h-12" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-mono text-muted-foreground">03. {c.emailLabel}</label>
                          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={c.emailPlaceholder} type="email" className="bg-background border-white/10 h-12" required />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-mono text-muted-foreground">04. {c.phoneLabel}</label>
                          <div className="flex h-12 rounded-md border border-white/10 bg-background overflow-hidden focus-within:ring-1 focus-within:ring-primary/50">
                            <Select value={dialCode} onValueChange={setDialCode}>
                              <SelectTrigger className="w-[110px] shrink-0 border-0 border-r border-white/10 rounded-none bg-transparent h-full px-3 gap-1.5 focus:ring-0 text-sm">
                                <span className="text-lg leading-none">{selectedCountry.flag}</span>
                                <span className="text-white/70 font-mono text-xs">{getDisplayDial(dialCode)}</span>
                              </SelectTrigger>
                              <SelectContent className="max-h-64">
                                {COUNTRY_CODES.map((country) => (
                                  <SelectItem key={`${country.code}-${country.dial}`} value={country.dial}>
                                    <span className="flex items-center gap-2">
                                      <span className="text-base">{country.flag}</span>
                                      <span className="text-sm">{country.name}</span>
                                      <span className="text-xs text-muted-foreground font-mono ml-auto">{getDisplayDial(country.dial)}</span>
                                    </span>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <input
                              type="tel"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              placeholder={c.phonePlaceholder}
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
                          <label className="text-sm font-mono text-muted-foreground">06. {c.timelineLabel}</label>
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
                        <label className="text-sm font-mono text-muted-foreground">07. {c.needLabel}</label>
                        <Textarea
                          value={need}
                          onChange={(e) => setNeed(e.target.value)}
                          placeholder={c.needPlaceholder}
                          className="bg-background border-white/10 min-h-[120px] resize-none"
                        />
                      </div>

                      <Button type="submit" className="w-full h-14 text-lg bg-white text-black hover:bg-white/90 rounded-none font-bold uppercase tracking-widest">
                        {c.nextButton}
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
                          <label className="text-sm font-mono text-muted-foreground">08. {c.segmentLabel}</label>
                          <Select onValueChange={setSegment} value={segment}>
                            <SelectTrigger className="bg-background border-white/10 h-12">
                              <SelectValue placeholder={c.segmentPlaceholder} />
                            </SelectTrigger>
                            <SelectContent>
                              {c.segmentOptions.map((v) => (
                                <SelectItem key={v} value={v}>{v}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-mono text-muted-foreground">09. {c.companySizeLabel}</label>
                          <Select onValueChange={setCompanySize} value={companySize}>
                            <SelectTrigger className="bg-background border-white/10 h-12">
                              <SelectValue placeholder={c.companySizePlaceholder} />
                            </SelectTrigger>
                            <SelectContent>
                              {c.companySizeOptions.map((v) => (
                                <SelectItem key={v} value={v}>{v}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-mono text-muted-foreground">10. {c.businessModelLabel}</label>
                          <Select onValueChange={setBusinessModel} value={businessModel}>
                            <SelectTrigger className="bg-background border-white/10 h-12">
                              <SelectValue placeholder={c.businessModelPlaceholder} />
                            </SelectTrigger>
                            <SelectContent>
                              {c.businessModelOptions.map((v) => (
                                <SelectItem key={v} value={v}>{v}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-mono text-muted-foreground">11. {c.digitalMaturityLabel}</label>
                          <Select onValueChange={setDigitalMaturity} value={digitalMaturity}>
                            <SelectTrigger className="bg-background border-white/10 h-12">
                              <SelectValue placeholder={c.digitalMaturityPlaceholder} />
                            </SelectTrigger>
                            <SelectContent>
                              {c.digitalMaturityOptions.map((v) => (
                                <SelectItem key={v} value={v}>{v}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-mono text-muted-foreground">12. {c.mainChannelLabel}</label>
                        <Select onValueChange={setMainChannel} value={mainChannel}>
                          <SelectTrigger className="bg-background border-white/10 h-12">
                            <SelectValue placeholder={c.mainChannelPlaceholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {c.mainChannelOptions.map((v) => (
                              <SelectItem key={v} value={v}>{v}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer group">
                          <div
                            onClick={() => { setHasWebsite(!hasWebsite); if (hasWebsite) setWebsite(""); }}
                            className={`w-5 h-5 shrink-0 border flex items-center justify-center transition-colors cursor-pointer ${hasWebsite ? 'bg-primary border-primary' : 'border-white/20 bg-transparent group-hover:border-white/40'}`}
                          >
                            {hasWebsite && (
                              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                <path d="M1 4L3.5 6.5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </div>
                          <span className="text-sm font-mono text-muted-foreground">
                            13. {countryCode === 'US' || countryCode === 'GB' ? 'Do you have a website?' : 'A sua empresa possui website?'}
                          </span>
                        </label>

                        <AnimatePresence>
                          {hasWebsite && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <Input
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                placeholder={countryCode === 'US' || countryCode === 'GB' ? 'https://yourwebsite.com' : 'https://seusite.com'}
                                type="url"
                                className="bg-background border-white/10 h-12"
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
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
                          {c.backButton}
                        </button>
                        <Button disabled={submitting} className="flex-1 h-14 text-lg bg-white text-black hover:bg-white/90 rounded-none font-bold uppercase tracking-widest">
                          {submitting ? '...' : c.submitLabel}
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
