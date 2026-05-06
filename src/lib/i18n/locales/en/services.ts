export const services = {
  section: "services",
  headline: [
    "Clear services.",
    "Transparent pricing.",
    "Built for modern digital products.",
  ],
  subheadline: "I help startups and businesses launch websites, web apps, mobile apps, and AI-powered features with a practical, product-focused approach. Every service is structured around outcomes, timelines, and realistic starting prices.",
  intro_note: "Prices below are starting points for typical projects. Final pricing depends on scope, integrations, timelines, and product complexity.",
  services: [
    {
      id: "landing-websites",
      name: "Landing Pages & Websites",
      tagline: "Fast, modern websites built to present your business clearly and convert visitors into leads.",
      description: "Best for businesses that need a strong online presence, a product landing page, or a professional company website. I design and build responsive websites with clean front-end implementation, clear content structure, and the technical foundations needed to launch quickly.",
      includes: [
        "Responsive marketing website or landing page",
        "HTML, CSS, JavaScript or React-based implementation",
        "Conversion-focused page structure",
        "Contact forms and lead capture",
        "Basic SEO and performance optimization",
        "Analytics and third-party integrations if needed"
      ],
      starting_price: "From €300",
      typical_range: "€900–€2,500+",
      typical_timeline: "1–3 weeks",
      pricing_note: "Ideal for simple business websites, campaign pages, and product landing pages."
    },
    {
      id: "web-apps-mvps",
      name: "Web Apps & MVPs",
      tagline: "Custom web applications for startups and teams that need to launch, validate, or streamline operations.",
      description: "Best for founders and businesses that need more than a website. I build modern web apps using React, TypeScript, Next.js, and Supabase, focusing on speed, maintainability, and practical product delivery.",
      includes: [
        "Product MVPs and internal tools",
        "Dashboards, portals, and admin panels",
        "Authentication and user roles",
        "Database design and Supabase integration",
        "API and third-party service integrations",
        "Deployment setup and launch support"
      ],
      starting_price: "From €3,500",
      typical_range: "€3,500–€12,000+",
      typical_timeline: "3–8 weeks",
      pricing_note: "A good fit for SaaS MVPs, client portals, internal platforms, and operational tools."
    },
    {
      id: "mobile-apps",
      name: "Mobile Apps",
      tagline: "Cross-platform mobile apps built for iOS and Android with a focus on speed, usability, and scalability.",
      description: "Best for businesses that need a mobile product without building separate native teams. I develop mobile apps mainly with React Native, helping clients launch practical apps faster while keeping the stack efficient and maintainable.",
      includes: [
        "React Native app development",
        "iOS and Android delivery from one codebase",
        "Authentication and backend integration",
        "API, Supabase, and real-time features",
        "Push notifications and common app flows",
        "App launch support and iteration guidance"
      ],
      starting_price: "From €4,500",
      typical_range: "€4,500–€18,000+",
      typical_timeline: "4–10 weeks",
      pricing_note: "Well suited for MVP apps, operational apps, booking flows, member apps, and customer-facing mobile products."
    },
    {
      id: "ai-features-automation",
      name: "AI Features & Automation",
      tagline: "Practical AI integrations that solve real business problems instead of adding hype without value.",
      description: "Best for teams that want to use AI in a focused and useful way. I help design and implement AI-powered features such as chatbots, internal assistants, LLM workflows, document-based search, and support automation, choosing the right tools for the actual use case.",
      includes: [
        "AI discovery and solution design",
        "Chatbots and assistant workflows",
        "LLM integration and orchestration",
        "Document search, retrieval, and prompt workflows",
        "Automation for support and internal operations",
        "Guidance on model choice, trade-offs, and implementation"
      ],
      starting_price: "Discovery from €750",
      typical_range: "€750–€6,000+",
      typical_timeline: "1–6 weeks",
      pricing_note: "Best delivered in phases: discovery first, implementation second, optimization after launch."
    }
  ],
  retainer: {
    retainer: "// Retainer",
    title: "Ongoing Support & Product Growth",
    description: "For clients who need continuous improvements, support, maintenance, or product iteration after launch.",
    plans: [
      {
        name: "Care Plan",
        price: "From €300/month",
        includes: [
          "Bug fixes and small updates",
          "Basic maintenance support",
          "Priority handling for minor requests"
        ]
      },
      {
        name: "Growth Retainer",
        price: "From €800/month",
        includes: [
          "Continuous improvements",
          "Small feature development",
          "Technical support and planning"
        ]
      }
    ]
  },
  cta: {
    headline: "Need a website, app, or AI feature built with clarity from day one?",
    description: "If you already have an idea, I can help turn it into a practical product with a clear scope, realistic pricing, and a modern implementation stack.",
    primary_button: {
      label: "Book a Discovery Call",
      action: "contact"
    },
    secondary_button: {
      label: "Request a Project Quote",
      action: "quote"
    }
  }
}