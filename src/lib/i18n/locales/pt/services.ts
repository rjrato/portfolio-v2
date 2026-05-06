export const services = {
  section: "// serviços",
  headline: [
    "Serviços claros.",
    "Preços transparentes.",
    "Criado para produtos digitais modernos.",
  ],
  subheadline: "Ajudo startups e empresas a lançar websites, aplicações web, aplicações móveis e funcionalidades de IA com uma abordagem prática e focada no produto. Cada serviço é estruturado em torno de resultados, prazos e preços iniciais realistas.",
  intro_note: "Os preços abaixo são pontos de partida para projetos típicos. O valor final depende do âmbito, integrações, prazos e complexidade do produto.",
  services: [
    {
      id: "landing-websites",
      name: "Landing Pages e Websites",
      tagline: "Websites rápidos e modernos, criados para apresentar o seu negócio de forma clara e converter visitantes em leads.",
      description: "Ideal para empresas que precisam de uma presença online forte, uma landing page de produto ou um website institucional profissional. Desenho e desenvolvo websites responsivos com uma implementação front-end limpa, estrutura de conteúdos clara e as bases técnicas necessárias para um lançamento rápido.",
      includes: [
        "Website de marketing ou landing page responsiva",
        "Implementação baseada em HTML, CSS, JavaScript ou React",
        "Estrutura de página focada na conversão",
        "Formulários de contacto e captura de leads",
        "SEO básico e otimização de performance",
        "Analytics e integrações de terceiros, se necessário"
      ],
      starting_price: "Desde 300 €",
      typical_range: "900 € – 2.500 €+",
      typical_timeline: "1–3 semanas",
      pricing_note: "Ideal para websites de negócios simples, páginas de campanha e landing pages de produto."
    },
    {
      id: "web-apps-mvps",
      name: "Web Apps e MVPs",
      tagline: "Aplicações web personalizadas para startups e equipas que precisam de lançar, validar ou otimizar operações.",
      description: "Ideal para fundadores e empresas que precisam de algo mais do que um website. Desenvolvo aplicações web modernas utilizando React, TypeScript, Next.js e Supabase, com foco na velocidade, manutenibilidade e entrega prática do produto.",
      includes: [
        "MVPs de produto e ferramentas internas",
        "Dashboards, portais e painéis de administração",
        "Autenticação e funções de utilizador",
        "Arquitetura de base de dados",
        "Integrações de API e serviços de terceiros",
        "Configuração de deployment e suporte ao lançamento"
      ],
      starting_price: "Desde 3.500 €",
      typical_range: "3.500 € – 12.000 €+",
      typical_timeline: "3–8 semanas",
      pricing_note: "Adequado para MVPs de SaaS, portais de cliente, plataformas internas e ferramentas operacionais."
    },
    {
      id: "mobile-apps",
      name: "Aplicações Móveis",
      tagline: "Aplicações móveis multiplataforma para iOS e Android com foco na velocidade, usabilidade e escalabilidade.",
      description: "Ideal para empresas que precisam de um produto móvel sem a necessidade de criar equipas nativas separadas. Desenvolvo apps móveis com recurso ás mais recentes tecnologias, ajudando os clientes a lançar aplicações práticas mais rapidamente.",
      includes: [
        "Desenvolvimento de apps em React Native",
        "Entrega para iOS e Android a partir de um único código-base",
        "Autenticação e integração de backend",
        "API, Supabase e funcionalidades em tempo real",
        "Notificações push e fluxos comuns de apps",
        "Suporte ao lançamento na loja e orientação para iterações"
      ],
      starting_price: "Desde 4.500 €",
      typical_range: "4.500 € – 18.000 €+",
      typical_timeline: "4–10 semanas",
      pricing_note: "Indicado para apps MVP, aplicações operacionais, fluxos de reserva, apps para membros e produtos móveis orientados ao cliente."
    },
    {
      id: "ai-features-automation",
      name: "Funcionalidades de IA e Automação",
      tagline: "Integrações práticas de IA que resolvem problemas reais de negócio, em vez de apenas seguir tendências sem valor acrescentado.",
      description: "Ideal para equipas que pretendem utilizar a IA de forma focada e útil. Ajudo a desenhar e implementar funcionalidades baseadas em IA, tais como chatbots, assistentes internos, fluxos de trabalho LLM, pesquisa baseada em documentos e automação de suporte, escolhendo as ferramentas certas para cada caso de uso.",
      includes: [
        "Discovery de IA e desenho de solução",
        "Chatbots e fluxos de trabalho de assistentes",
        "Integração e orquestração de LLM",
        "Pesquisa de documentos, recuperação e fluxos de prompts",
        "Automação para suporte e operações internas",
        "Orientação sobre escolha de modelos, trade-offs e implementação"
      ],
      starting_price: "Discovery desde 750 €",
      typical_range: "750 € – 6.000 €+",
      typical_timeline: "1–6 semanas",
      pricing_note: "Melhor entregue por fases: primeiro discovery, depois implementação e otimização após o lançamento."
    }
  ],
  retainer: {
    retainer: "// Manutenção",
    title: "Suporte Contínuo e Crescimento do Produto",
    description: "Para clientes que necessitam de melhorias contínuas, suporte, manutenção ou iteração do produto após o lançamento.",
    plans: [
      {
        name: "Plano Básico",
        price: "Desde 360€ /ano",
        includes: [
          "Correção de bugs e pequenas atualizações",
          "Suporte de manutenção básica",
          "Tratamento prioritário para pedidos menores"
        ]
      },
      {
        name: "Apoio Recorrente",
        price: "Desde 800 €/ ano",
        includes: [
          "Melhorias contínuas",
          "Desenvolvimento de pequenas funcionalidades",
          "Serviços com atualizações constantes"
        ]
      }
    ]
  },
  cta: {
    headline: "Precisa de um website, app ou funcionalidade de IA criada com clareza desde o primeiro dia?",
    description: "Se já tem uma ideia, posso ajudar a transformá-la num produto prático com um âmbito definido, preços realistas e uma stack tecnológica moderna.",
    primary_button: {
      label: "Agendar Reunião de Discovery",
      action: "contact"
    },
    secondary_button: {
      label: "Solicitar Orçamento para Projeto",
      action: "quote"
    }
  }
}