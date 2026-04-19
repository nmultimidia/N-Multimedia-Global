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
    budgetLabel: string;
    budgetPlaceholder: string;
    budgetOptions: { value: string; label: string }[];
    timelinePlaceholder: string;
    timelineOptions: { value: string; label: string }[];
    needPlaceholder: string;
    submitLabel: string;
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
      budgetLabel: '03. BUDGET MENSAL',
      budgetPlaceholder: 'Selecione o investimento mensal',
      budgetOptions: [
        { value: '3-8k', label: 'R$ 3.000 – R$ 8.000/mês' },
        { value: '8-20k', label: 'R$ 8.000 – R$ 20.000/mês' },
        { value: '20-50k', label: 'R$ 20.000 – R$ 50.000/mês' },
        { value: '50k+', label: 'R$ 50.000+/mês' },
      ],
      timelinePlaceholder: 'Quando deseja iniciar?',
      timelineOptions: [
        { value: 'now', label: 'Imediatamente' },
        { value: '1month', label: 'Em 1 mês' },
        { value: 'quarter', label: 'Neste trimestre' },
      ],
      needPlaceholder: 'Qual é o gargalo que está impedindo seu crescimento hoje?',
      submitLabel: 'Solicitar Diagnóstico',
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
      budgetLabel: '03. MONTHLY BUDGET',
      budgetPlaceholder: 'Select monthly investment',
      budgetOptions: [
        { value: '1.5-4k', label: '$1,500 – $4,000/mo' },
        { value: '4-10k', label: '$4,000 – $10,000/mo' },
        { value: '10-25k', label: '$10,000 – $25,000/mo' },
        { value: '25k+', label: '$25,000+/mo' },
      ],
      timelinePlaceholder: 'When do you want to start?',
      timelineOptions: [
        { value: 'now', label: 'Immediately' },
        { value: '1month', label: 'Within 1 month' },
        { value: 'quarter', label: 'This quarter' },
      ],
      needPlaceholder: 'What is the biggest bottleneck holding your growth back today?',
      submitLabel: 'Request Strategy Call',
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
      budgetLabel: '03. MONTHLY BUDGET',
      budgetPlaceholder: 'Select monthly investment',
      budgetOptions: [
        { value: '1-3k', label: '£1,000 – £3,000/mo' },
        { value: '3-8k', label: '£3,000 – £8,000/mo' },
        { value: '8-20k', label: '£8,000 – £20,000/mo' },
        { value: '20k+', label: '£20,000+/mo' },
      ],
      timelinePlaceholder: 'When do you want to start?',
      timelineOptions: [
        { value: 'now', label: 'Immediately' },
        { value: '1month', label: 'Within 1 month' },
        { value: 'quarter', label: 'This quarter' },
      ],
      needPlaceholder: 'What is the biggest bottleneck holding your growth back today?',
      submitLabel: 'Request Strategy Call',
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
      budgetLabel: '03. ORÇAMENTO MENSAL',
      budgetPlaceholder: 'Selecione o investimento mensal',
      budgetOptions: [
        { value: '500-1.5k', label: '$500 – $1.500/mês' },
        { value: '1.5-4k', label: '$1.500 – $4.000/mês' },
        { value: '4-10k', label: '$4.000 – $10.000/mês' },
        { value: '10k+', label: '$10.000+/mês' },
      ],
      timelinePlaceholder: 'Quando pretende iniciar?',
      timelineOptions: [
        { value: 'now', label: 'Imediatamente' },
        { value: '1month', label: 'Em 1 mês' },
        { value: 'quarter', label: 'Neste trimestre' },
      ],
      needPlaceholder: 'Qual é o principal obstáculo ao crescimento do seu negócio hoje?',
      submitLabel: 'Solicitar Diagnóstico',
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
      budgetLabel: '03. ORÇAMENTO MENSAL',
      budgetPlaceholder: 'Selecione o investimento mensal',
      budgetOptions: [
        { value: '800-2.5k', label: '€800 – €2.500/mês' },
        { value: '2.5-6k', label: '€2.500 – €6.000/mês' },
        { value: '6-15k', label: '€6.000 – €15.000/mês' },
        { value: '15k+', label: '€15.000+/mês' },
      ],
      timelinePlaceholder: 'Quando pretende iniciar?',
      timelineOptions: [
        { value: 'now', label: 'Imediatamente' },
        { value: '1month', label: 'Em 1 mês' },
        { value: 'quarter', label: 'Neste trimestre' },
      ],
      needPlaceholder: 'Qual é o principal obstáculo ao crescimento do seu negócio hoje?',
      submitLabel: 'Solicitar Diagnóstico',
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
      budgetLabel: '03. MONTHLY BUDGET',
      budgetPlaceholder: 'Select monthly investment',
      budgetOptions: [
        { value: '1.5-4k', label: '$1,500 – $4,000/mo' },
        { value: '4-10k', label: '$4,000 – $10,000/mo' },
        { value: '10-25k', label: '$10,000 – $25,000/mo' },
        { value: '25k+', label: '$25,000+/mo' },
      ],
      timelinePlaceholder: 'When do you want to start?',
      timelineOptions: [
        { value: 'now', label: 'Immediately' },
        { value: '1month', label: 'Within 1 month' },
        { value: 'quarter', label: 'This quarter' },
      ],
      needPlaceholder: 'What is the biggest bottleneck holding your growth back today?',
      submitLabel: 'Request Strategy Call',
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
