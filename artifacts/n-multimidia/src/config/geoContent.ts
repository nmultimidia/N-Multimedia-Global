export type CountryCode = 'BR' | 'US' | 'GB' | 'AO' | 'PT' | 'default';

export interface GeoContent {
  country: CountryCode;
  flag: string;
  marketLabel: string;
  hero: {
    tagline: string;
    taglineHighlight: string;
    sub: string;
    cta: string;
  };
  results: {
    revenue: string;
    revenueLabel: string;
  };
  contact: {
    heading: string;
    headingHighlight: string;
    subtext: string;

    step1Label: string;
    step1Sub: string;
    step2Label: string;
    step2Sub: string;

    nameLabel: string;
    namePlaceholder: string;
    roleLabel: string;
    rolePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;

    budgetLabel: string;
    budgetPlaceholder: string;
    budgetOptions: { value: string; label: string }[];

    timelineLabel: string;
    timelinePlaceholder: string;
    timelineOptions: { value: string; label: string }[];

    needLabel: string;
    needPlaceholder: string;

    nextButton: string;
    backButton: string;
    submitLabel: string;

    segmentLabel: string;
    segmentPlaceholder: string;
    segmentOptions: string[];

    companySizeLabel: string;
    companySizePlaceholder: string;
    companySizeOptions: string[];

    businessModelLabel: string;
    businessModelPlaceholder: string;
    businessModelOptions: string[];

    digitalMaturityLabel: string;
    digitalMaturityPlaceholder: string;
    digitalMaturityOptions: string[];

    mainChannelLabel: string;
    mainChannelPlaceholder: string;
    mainChannelOptions: string[];
  };
  header: {
    cta: string;
  };
  banner: string;
}

const content: Record<CountryCode, GeoContent> = {
  BR: {
    country: 'BR',
    flag: '🇧🇷',
    marketLabel: 'Brasil',
    hero: {
      tagline: 'Fazemos a oferta ser tão boa que você se sentiria',
      taglineHighlight: 'estúpido',
      sub: 'A agência digital internacional que comanda presença, autoridade e resultados implacáveis no mercado brasileiro.',
      cta: 'Iniciar Diagnóstico',
    },
    results: {
      revenue: 'R$50M+',
      revenueLabel: 'Gerados para Clientes',
    },
    contact: {
      heading: 'Pronto para o',
      headingHighlight: 'Próximo Nível?',
      subtext: 'Preencha o diagnóstico abaixo. Nossa equipe avaliará sua elegibilidade.',

      step1Label: 'Informações',
      step1Sub: 'Dados de contacto e necessidade',
      step2Label: 'Perfil da Empresa',
      step2Sub: 'Segmento · Tamanho · Maturidade',

      nameLabel: 'NOME',
      namePlaceholder: 'Seu nome completo',
      roleLabel: 'CARGO',
      rolePlaceholder: 'Ex: CEO, Diretor de Marketing...',
      emailLabel: 'E-MAIL CORPORATIVO',
      emailPlaceholder: 'email@suaempresa.com.br',
      phoneLabel: 'WHATSAPP / TELEFONE',
      phonePlaceholder: '(11) 9XXXX-XXXX',

      budgetLabel: 'BUDGET MENSAL',
      budgetPlaceholder: 'Selecione o investimento mensal',
      budgetOptions: [
        { value: '3-8k', label: 'R$ 3.000 – R$ 8.000/mês' },
        { value: '8-20k', label: 'R$ 8.000 – R$ 20.000/mês' },
        { value: '20-50k', label: 'R$ 20.000 – R$ 50.000/mês' },
        { value: '50k+', label: 'R$ 50.000+/mês' },
      ],

      timelineLabel: 'TIMELINE',
      timelinePlaceholder: 'Quando deseja iniciar?',
      timelineOptions: [
        { value: 'now', label: 'Imediatamente' },
        { value: '1month', label: 'Em 1 mês' },
        { value: 'quarter', label: 'Neste trimestre' },
      ],

      needLabel: 'NECESSIDADE PRINCIPAL',
      needPlaceholder: 'Qual é o gargalo que está impedindo seu crescimento hoje?',

      nextButton: 'Próximo → Perfil da Empresa',
      backButton: '← Voltar',
      submitLabel: 'Solicitar Diagnóstico',

      segmentLabel: 'SEGMENTO / NICHO',
      segmentPlaceholder: 'Selecione o segmento',
      segmentOptions: ['Tech / SaaS', 'E-commerce', 'Serviços Profissionais', 'Saúde & Bem-estar', 'Educação', 'Varejo Físico', 'Imobiliário', 'Financeiro', 'Outro'],

      companySizeLabel: 'TAMANHO DA EMPRESA',
      companySizePlaceholder: 'Nº de colaboradores',
      companySizeOptions: ['1 a 5 pessoas', '6 a 20 pessoas', '21 a 50 pessoas', '51 a 200 pessoas', 'Acima de 200'],

      businessModelLabel: 'MODELO DE NEGÓCIO',
      businessModelPlaceholder: 'Como você vende?',
      businessModelOptions: ['B2B (vende para empresas)', 'B2C (vende para pessoas)', 'B2B2C', 'Marketplace', 'Assinatura / SaaS', 'Outro'],

      digitalMaturityLabel: 'MATURIDADE DIGITAL',
      digitalMaturityPlaceholder: 'Onde você está hoje?',
      digitalMaturityOptions: ['Iniciando — sem presença digital', 'Básico — redes sociais e site', 'Intermediário — já invisto em ads', 'Avançado — tenho equipe e dados', 'Maduro — quero escalar'],

      mainChannelLabel: 'CANAL PRINCIPAL HOJE',
      mainChannelPlaceholder: 'Onde está a sua audiência?',
      mainChannelOptions: ['Instagram / Facebook', 'Google Ads / SEO', 'LinkedIn', 'TikTok', 'WhatsApp / E-mail', 'Indicação / Boca a boca', 'Nenhum ainda', 'Múltiplos canais'],
    },
    header: { cta: 'Diagnóstico Gratuito' },
    banner: 'Você está no Brasil — conteúdo adaptado para o mercado brasileiro.',
  },

  US: {
    country: 'US',
    flag: '🇺🇸',
    marketLabel: 'United States',
    hero: {
      tagline: 'We engineer offers so good that saying no would feel like',
      taglineHighlight: 'leaving money on the table',
      sub: 'The international digital agency that commands presence, authority, and relentless results in the US market.',
      cta: 'Start Free Strategy Call',
    },
    results: {
      revenue: '$10M+',
      revenueLabel: 'Generated for Clients',
    },
    contact: {
      heading: 'Ready to',
      headingHighlight: 'Scale?',
      subtext: 'Fill in the diagnostic below. Our team will evaluate your eligibility.',

      step1Label: 'Information',
      step1Sub: 'Contact details & main challenge',
      step2Label: 'Company Profile',
      step2Sub: 'Segment · Size · Maturity',

      nameLabel: 'FULL NAME',
      namePlaceholder: 'Your full name',
      roleLabel: 'JOB TITLE',
      rolePlaceholder: 'e.g. CEO, Marketing Director...',
      emailLabel: 'BUSINESS EMAIL',
      emailPlaceholder: 'email@yourcompany.com',
      phoneLabel: 'WHATSAPP / PHONE',
      phonePlaceholder: '(555) XXX-XXXX',

      budgetLabel: 'MONTHLY BUDGET',
      budgetPlaceholder: 'Select monthly investment',
      budgetOptions: [
        { value: '1.5-4k', label: '$1,500 – $4,000/mo' },
        { value: '4-10k', label: '$4,000 – $10,000/mo' },
        { value: '10-25k', label: '$10,000 – $25,000/mo' },
        { value: '25k+', label: '$25,000+/mo' },
      ],

      timelineLabel: 'TIMELINE',
      timelinePlaceholder: 'When do you want to start?',
      timelineOptions: [
        { value: 'now', label: 'Immediately' },
        { value: '1month', label: 'Within 1 month' },
        { value: 'quarter', label: 'This quarter' },
      ],

      needLabel: 'MAIN CHALLENGE',
      needPlaceholder: 'What is the biggest bottleneck holding your growth back today?',

      nextButton: 'Next → Company Profile',
      backButton: '← Back',
      submitLabel: 'Request Strategy Call',

      segmentLabel: 'INDUSTRY / NICHE',
      segmentPlaceholder: 'Select your industry',
      segmentOptions: ['Tech / SaaS', 'E-commerce', 'Professional Services', 'Health & Wellness', 'Education', 'Retail', 'Real Estate', 'Finance', 'Other'],

      companySizeLabel: 'COMPANY SIZE',
      companySizePlaceholder: 'Number of employees',
      companySizeOptions: ['1 – 5 people', '6 – 20 people', '21 – 50 people', '51 – 200 people', '200+ people'],

      businessModelLabel: 'BUSINESS MODEL',
      businessModelPlaceholder: 'How do you sell?',
      businessModelOptions: ['B2B (sell to businesses)', 'B2C (sell to consumers)', 'B2B2C', 'Marketplace', 'Subscription / SaaS', 'Other'],

      digitalMaturityLabel: 'DIGITAL MATURITY',
      digitalMaturityPlaceholder: 'Where are you today?',
      digitalMaturityOptions: ['Starting out — no digital presence', 'Basic — social media & website', 'Intermediate — running paid ads', 'Advanced — have team & data', 'Mature — ready to scale'],

      mainChannelLabel: 'PRIMARY CHANNEL TODAY',
      mainChannelPlaceholder: 'Where is your audience?',
      mainChannelOptions: ['Instagram / Facebook', 'Google Ads / SEO', 'LinkedIn', 'TikTok', 'WhatsApp / Email', 'Referrals / Word of mouth', 'None yet', 'Multiple channels'],
    },
    header: { cta: 'Free Strategy Call' },
    banner: 'Browsing from the United States — content adapted for the US market.',
  },

  GB: {
    country: 'GB',
    flag: '🇬🇧',
    marketLabel: 'United Kingdom',
    hero: {
      tagline: 'We engineer offers so compelling that declining would feel like',
      taglineHighlight: 'commercial negligence',
      sub: 'The international digital agency that commands presence, authority, and relentless results across the UK market.',
      cta: 'Start Free Strategy Call',
    },
    results: {
      revenue: '£8M+',
      revenueLabel: 'Generated for Clients',
    },
    contact: {
      heading: 'Ready to',
      headingHighlight: 'Scale?',
      subtext: 'Fill in the diagnostic below. Our team will evaluate your eligibility.',

      step1Label: 'Information',
      step1Sub: 'Contact details & main challenge',
      step2Label: 'Company Profile',
      step2Sub: 'Segment · Size · Maturity',

      nameLabel: 'FULL NAME',
      namePlaceholder: 'Your full name',
      roleLabel: 'JOB TITLE',
      rolePlaceholder: 'e.g. CEO, Marketing Director...',
      emailLabel: 'BUSINESS EMAIL',
      emailPlaceholder: 'email@yourcompany.co.uk',
      phoneLabel: 'WHATSAPP / PHONE',
      phonePlaceholder: '07XXX XXXXXX',

      budgetLabel: 'MONTHLY BUDGET',
      budgetPlaceholder: 'Select monthly investment',
      budgetOptions: [
        { value: '1-3k', label: '£1,000 – £3,000/mo' },
        { value: '3-8k', label: '£3,000 – £8,000/mo' },
        { value: '8-20k', label: '£8,000 – £20,000/mo' },
        { value: '20k+', label: '£20,000+/mo' },
      ],

      timelineLabel: 'TIMELINE',
      timelinePlaceholder: 'When do you want to start?',
      timelineOptions: [
        { value: 'now', label: 'Immediately' },
        { value: '1month', label: 'Within 1 month' },
        { value: 'quarter', label: 'This quarter' },
      ],

      needLabel: 'MAIN CHALLENGE',
      needPlaceholder: 'What is the biggest bottleneck holding your growth back today?',

      nextButton: 'Next → Company Profile',
      backButton: '← Back',
      submitLabel: 'Request Strategy Call',

      segmentLabel: 'INDUSTRY / NICHE',
      segmentPlaceholder: 'Select your industry',
      segmentOptions: ['Tech / SaaS', 'E-commerce', 'Professional Services', 'Health & Wellness', 'Education', 'Retail', 'Real Estate', 'Finance', 'Other'],

      companySizeLabel: 'COMPANY SIZE',
      companySizePlaceholder: 'Number of employees',
      companySizeOptions: ['1 – 5 people', '6 – 20 people', '21 – 50 people', '51 – 200 people', '200+ people'],

      businessModelLabel: 'BUSINESS MODEL',
      businessModelPlaceholder: 'How do you sell?',
      businessModelOptions: ['B2B (sell to businesses)', 'B2C (sell to consumers)', 'B2B2C', 'Marketplace', 'Subscription / SaaS', 'Other'],

      digitalMaturityLabel: 'DIGITAL MATURITY',
      digitalMaturityPlaceholder: 'Where are you today?',
      digitalMaturityOptions: ['Starting out — no digital presence', 'Basic — social media & website', 'Intermediate — running paid ads', 'Advanced — have team & data', 'Mature — ready to scale'],

      mainChannelLabel: 'PRIMARY CHANNEL TODAY',
      mainChannelPlaceholder: 'Where is your audience?',
      mainChannelOptions: ['Instagram / Facebook', 'Google Ads / SEO', 'LinkedIn', 'TikTok', 'WhatsApp / Email', 'Referrals / Word of mouth', 'None yet', 'Multiple channels'],
    },
    header: { cta: 'Free Strategy Call' },
    banner: 'Browsing from the United Kingdom — content adapted for the UK market.',
  },

  AO: {
    country: 'AO',
    flag: '🇦🇴',
    marketLabel: 'Angola',
    hero: {
      tagline: 'Construímos marcas que dominam o mercado angolano e abrem portas para o',
      taglineHighlight: 'mundo',
      sub: 'A agência digital internacional que posiciona negócios angolanos com autoridade global e resultados mensuráveis.',
      cta: 'Iniciar Diagnóstico',
    },
    results: {
      revenue: '$10M+',
      revenueLabel: 'Gerados para Clientes',
    },
    contact: {
      heading: 'Pronto para',
      headingHighlight: 'Dominar o Mercado?',
      subtext: 'Preencha o diagnóstico abaixo. A nossa equipa avaliará a sua elegibilidade.',

      step1Label: 'Informações',
      step1Sub: 'Dados de contacto e necessidade',
      step2Label: 'Perfil da Empresa',
      step2Sub: 'Segmento · Dimensão · Maturidade',

      nameLabel: 'NOME',
      namePlaceholder: 'O seu nome completo',
      roleLabel: 'CARGO',
      rolePlaceholder: 'Ex: CEO, Director de Marketing...',
      emailLabel: 'E-MAIL CORPORATIVO',
      emailPlaceholder: 'email@suaempresa.co.ao',
      phoneLabel: 'WHATSAPP / TELEFONE',
      phonePlaceholder: '9XX XXX XXX',

      budgetLabel: 'ORÇAMENTO MENSAL',
      budgetPlaceholder: 'Selecione o investimento mensal',
      budgetOptions: [
        { value: '500-1.5k', label: '$500 – $1.500/mês' },
        { value: '1.5-4k', label: '$1.500 – $4.000/mês' },
        { value: '4-10k', label: '$4.000 – $10.000/mês' },
        { value: '10k+', label: '$10.000+/mês' },
      ],

      timelineLabel: 'TIMELINE',
      timelinePlaceholder: 'Quando pretende iniciar?',
      timelineOptions: [
        { value: 'now', label: 'Imediatamente' },
        { value: '1month', label: 'Em 1 mês' },
        { value: 'quarter', label: 'Neste trimestre' },
      ],

      needLabel: 'NECESSIDADE PRINCIPAL',
      needPlaceholder: 'Qual é o principal obstáculo ao crescimento do seu negócio hoje?',

      nextButton: 'Próximo → Perfil da Empresa',
      backButton: '← Voltar',
      submitLabel: 'Solicitar Diagnóstico',

      segmentLabel: 'SEGMENTO / NICHO',
      segmentPlaceholder: 'Selecione o segmento',
      segmentOptions: ['Tech / SaaS', 'Comércio Electrónico', 'Serviços Profissionais', 'Saúde & Bem-estar', 'Educação', 'Comércio a Retalho', 'Imobiliário', 'Financeiro / Banca', 'Telecomunicações', 'Outro'],

      companySizeLabel: 'DIMENSÃO DA EMPRESA',
      companySizePlaceholder: 'Nº de colaboradores',
      companySizeOptions: ['1 a 5 pessoas', '6 a 20 pessoas', '21 a 50 pessoas', '51 a 200 pessoas', 'Acima de 200'],

      businessModelLabel: 'MODELO DE NEGÓCIO',
      businessModelPlaceholder: 'Como vende?',
      businessModelOptions: ['B2B (vende para empresas)', 'B2C (vende para pessoas)', 'B2B2C', 'Marketplace', 'Assinatura / SaaS', 'Exportação', 'Outro'],

      digitalMaturityLabel: 'MATURIDADE DIGITAL',
      digitalMaturityPlaceholder: 'Onde está hoje?',
      digitalMaturityOptions: ['A iniciar — sem presença digital', 'Básico — redes sociais e site', 'Intermédio — já invisto em ads', 'Avançado — tenho equipa e dados', 'Maduro — quero escalar'],

      mainChannelLabel: 'CANAL PRINCIPAL HOJE',
      mainChannelPlaceholder: 'Onde está a sua audiência?',
      mainChannelOptions: ['Instagram / Facebook', 'Google Ads / SEO', 'LinkedIn', 'TikTok', 'WhatsApp / E-mail', 'Indicação / Boca a boca', 'Nenhum ainda', 'Múltiplos canais'],
    },
    header: { cta: 'Diagnóstico Gratuito' },
    banner: 'Está a navegar de Angola — conteúdo adaptado para o mercado angolano.',
  },

  PT: {
    country: 'PT',
    flag: '🇵🇹',
    marketLabel: 'Portugal',
    hero: {
      tagline: 'Criamos ofertas tão irresistíveis que recusar seria um',
      taglineHighlight: 'erro de negócio',
      sub: 'A agência digital internacional que posiciona marcas lusófonas com autoridade no mercado europeu.',
      cta: 'Iniciar Diagnóstico',
    },
    results: {
      revenue: '€9M+',
      revenueLabel: 'Gerados para Clientes',
    },
    contact: {
      heading: 'Pronto para o',
      headingHighlight: 'Próximo Nível?',
      subtext: 'Preencha o diagnóstico abaixo. A nossa equipa avaliará a sua elegibilidade.',

      step1Label: 'Informações',
      step1Sub: 'Dados de contacto e necessidade',
      step2Label: 'Perfil da Empresa',
      step2Sub: 'Segmento · Dimensão · Maturidade',

      nameLabel: 'NOME',
      namePlaceholder: 'O seu nome completo',
      roleLabel: 'CARGO',
      rolePlaceholder: 'Ex: CEO, Director de Marketing...',
      emailLabel: 'E-MAIL CORPORATIVO',
      emailPlaceholder: 'email@suaempresa.pt',
      phoneLabel: 'WHATSAPP / TELEFONE',
      phonePlaceholder: '9XX XXX XXX',

      budgetLabel: 'ORÇAMENTO MENSAL',
      budgetPlaceholder: 'Selecione o investimento mensal',
      budgetOptions: [
        { value: '800-2.5k', label: '€800 – €2.500/mês' },
        { value: '2.5-6k', label: '€2.500 – €6.000/mês' },
        { value: '6-15k', label: '€6.000 – €15.000/mês' },
        { value: '15k+', label: '€15.000+/mês' },
      ],

      timelineLabel: 'TIMELINE',
      timelinePlaceholder: 'Quando pretende iniciar?',
      timelineOptions: [
        { value: 'now', label: 'Imediatamente' },
        { value: '1month', label: 'Em 1 mês' },
        { value: 'quarter', label: 'Neste trimestre' },
      ],

      needLabel: 'NECESSIDADE PRINCIPAL',
      needPlaceholder: 'Qual é o principal obstáculo ao crescimento do seu negócio hoje?',

      nextButton: 'Próximo → Perfil da Empresa',
      backButton: '← Voltar',
      submitLabel: 'Solicitar Diagnóstico',

      segmentLabel: 'SEGMENTO / NICHO',
      segmentPlaceholder: 'Selecione o segmento',
      segmentOptions: ['Tech / SaaS', 'E-commerce', 'Serviços Profissionais', 'Saúde & Bem-estar', 'Educação', 'Retalho', 'Imobiliário', 'Financeiro', 'Turismo & Hotelaria', 'Outro'],

      companySizeLabel: 'DIMENSÃO DA EMPRESA',
      companySizePlaceholder: 'Nº de colaboradores',
      companySizeOptions: ['1 a 5 pessoas', '6 a 20 pessoas', '21 a 50 pessoas', '51 a 200 pessoas', 'Acima de 200'],

      businessModelLabel: 'MODELO DE NEGÓCIO',
      businessModelPlaceholder: 'Como vende?',
      businessModelOptions: ['B2B (vende para empresas)', 'B2C (vende para pessoas)', 'B2B2C', 'Marketplace', 'Assinatura / SaaS', 'Outro'],

      digitalMaturityLabel: 'MATURIDADE DIGITAL',
      digitalMaturityPlaceholder: 'Onde está hoje?',
      digitalMaturityOptions: ['A iniciar — sem presença digital', 'Básico — redes sociais e site', 'Intermédio — já invisto em ads', 'Avançado — tenho equipa e dados', 'Maduro — quero escalar'],

      mainChannelLabel: 'CANAL PRINCIPAL HOJE',
      mainChannelPlaceholder: 'Onde está a sua audiência?',
      mainChannelOptions: ['Instagram / Facebook', 'Google Ads / SEO', 'LinkedIn', 'TikTok', 'WhatsApp / E-mail', 'Indicação / Boca a boca', 'Nenhum ainda', 'Múltiplos canais'],
    },
    header: { cta: 'Diagnóstico Gratuito' },
    banner: 'Está a navegar de Portugal — conteúdo adaptado para o mercado europeu.',
  },

  default: {
    country: 'default',
    flag: '🌍',
    marketLabel: 'Global',
    hero: {
      tagline: 'We engineer offers so good that saying no would feel like',
      taglineHighlight: 'leaving money on the table',
      sub: 'The international digital agency that commands presence, authority, and relentless results worldwide.',
      cta: 'Start Free Strategy Call',
    },
    results: {
      revenue: '$10M+',
      revenueLabel: 'Generated for Clients',
    },
    contact: {
      heading: 'Ready to',
      headingHighlight: 'Scale?',
      subtext: 'Fill in the diagnostic below. Our team will evaluate your eligibility.',

      step1Label: 'Information',
      step1Sub: 'Contact details & main challenge',
      step2Label: 'Company Profile',
      step2Sub: 'Segment · Size · Maturity',

      nameLabel: 'FULL NAME',
      namePlaceholder: 'Your full name',
      roleLabel: 'JOB TITLE',
      rolePlaceholder: 'e.g. CEO, Marketing Director...',
      emailLabel: 'BUSINESS EMAIL',
      emailPlaceholder: 'email@yourcompany.com',
      phoneLabel: 'WHATSAPP / PHONE',
      phonePlaceholder: 'xxx xxx xxxx',

      budgetLabel: 'MONTHLY BUDGET',
      budgetPlaceholder: 'Select monthly investment',
      budgetOptions: [
        { value: '1.5-4k', label: '$1,500 – $4,000/mo' },
        { value: '4-10k', label: '$4,000 – $10,000/mo' },
        { value: '10-25k', label: '$10,000 – $25,000/mo' },
        { value: '25k+', label: '$25,000+/mo' },
      ],

      timelineLabel: 'TIMELINE',
      timelinePlaceholder: 'When do you want to start?',
      timelineOptions: [
        { value: 'now', label: 'Immediately' },
        { value: '1month', label: 'Within 1 month' },
        { value: 'quarter', label: 'This quarter' },
      ],

      needLabel: 'MAIN CHALLENGE',
      needPlaceholder: 'What is the biggest bottleneck holding your growth back today?',

      nextButton: 'Next → Company Profile',
      backButton: '← Back',
      submitLabel: 'Request Strategy Call',

      segmentLabel: 'INDUSTRY / NICHE',
      segmentPlaceholder: 'Select your industry',
      segmentOptions: ['Tech / SaaS', 'E-commerce', 'Professional Services', 'Health & Wellness', 'Education', 'Retail', 'Real Estate', 'Finance', 'Other'],

      companySizeLabel: 'COMPANY SIZE',
      companySizePlaceholder: 'Number of employees',
      companySizeOptions: ['1 – 5 people', '6 – 20 people', '21 – 50 people', '51 – 200 people', '200+ people'],

      businessModelLabel: 'BUSINESS MODEL',
      businessModelPlaceholder: 'How do you sell?',
      businessModelOptions: ['B2B (sell to businesses)', 'B2C (sell to consumers)', 'B2B2C', 'Marketplace', 'Subscription / SaaS', 'Other'],

      digitalMaturityLabel: 'DIGITAL MATURITY',
      digitalMaturityPlaceholder: 'Where are you today?',
      digitalMaturityOptions: ['Starting out — no digital presence', 'Basic — social media & website', 'Intermediate — running paid ads', 'Advanced — have team & data', 'Mature — ready to scale'],

      mainChannelLabel: 'PRIMARY CHANNEL TODAY',
      mainChannelPlaceholder: 'Where is your audience?',
      mainChannelOptions: ['Instagram / Facebook', 'Google Ads / SEO', 'LinkedIn', 'TikTok', 'WhatsApp / Email', 'Referrals / Word of mouth', 'None yet', 'Multiple channels'],
    },
    header: { cta: 'Free Strategy Call' },
    banner: 'Welcome — global agency serving 40+ countries.',
  },
};

export function getGeoContent(countryCode: string): GeoContent {
  const key = countryCode as CountryCode;
  return content[key] ?? content['default'];
}

export const geoContent = content;
