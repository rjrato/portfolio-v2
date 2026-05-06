# DESIGN-SYSTEM.md

> Design system do portfolio ricardorato.dev.  
> Gerado a partir do handoff Claude Design e implementado no codebase Next.js 15.  
> **Fonte de verdade visual:** este ficheiro + `src/app/globals.css`.

---

## 1. Princípios

- **Dark-first.** O tema escuro é o padrão. Light mode está arquitectado (variáveis CSS separadas) mas não activado.
- **Um único accent.** Toda a cor de marca é `oklch(0.65 0.18 250)` — azul cobalto médio. Não existe segunda cor de marca.
- **Tokens semânticos sempre.** Nunca usar raw Tailwind (`bg-zinc-900`, `text-white`). Sempre `bg-background`, `text-foreground`, `text-primary`, etc.
- **Neutrals blue-tinted.** Todos os cinzentos têm hue 250 com chroma ~0.02, dando ao UI um tom frio e técnico.

---

## 2. Cores

### Accent / Primary

| Token | Valor | Uso |
|---|---|---|
| `--primary` | `oklch(0.65 0.18 250)` | Botões, links, eyebrows, ícones de destaque, hover states |
| `--primary-foreground` | `oklch(0.98 0 0)` | Texto sobre fundo primary |
| `--ring` | `oklch(0.65 0.18 250)` | Focus ring |

### Superfícies (dark theme)

| Token | Valor | Uso |
|---|---|---|
| `--background` | `oklch(0.12 0.02 250)` | Fundo da página |
| `--card` | `oklch(0.15 0.02 250)` | Cards, popovers |
| `bg-card/30` | card com 30% opacidade | Secções alternadas (About, Skills, Contact) |
| `bg-card/50` | card com 50% opacidade | Cards de projecto |
| `--secondary` | `oklch(0.20 0.02 250)` | Skill chips, inputs |
| `--muted` | `oklch(0.25 0.02 250)` | Superfície muted |
| `--border` | `oklch(0.30 0.02 250)` | Bordas |

### Texto

| Token | Uso |
|---|---|
| `text-foreground` | Texto principal |
| `text-muted-foreground` | Texto secundário, parágrafos de corpo |
| `text-primary` | Eyebrow labels, links, accent text |

### Status

| Token | Valor | Uso |
|---|---|---|
| `--destructive` | `oklch(0.577 0.245 27.325)` | Erros de formulário, ícone Heart no footer |

---

## 3. Tipografia

### Famílias

| Token | Fonte | Uso |
|---|---|---|
| `font-sans` / `--font-sans` | Geist → Inter → system | Headings, body, UI geral |
| `font-mono` / `--font-mono` | Geist Mono → JetBrains Mono | Eyebrow labels, category headers, stack badges |

### Escala de tamanhos

| Contexto | Classes Tailwind |
|---|---|
| Hero name | `text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight` |
| Hero subtitle | `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground` |
| Section heading (h2) | `text-3xl md:text-4xl lg:text-5xl font-bold` |
| Card title | `text-xl font-semibold` |
| Eyebrow | `text-sm font-mono text-primary` |
| Body | `text-base md:text-lg leading-relaxed text-muted-foreground` |
| Badge / mono small | `text-xs font-mono` |

---

## 4. Padrão de Secção (Section Pattern)

Todas as secções de marketing seguem este padrão obrigatório:

```tsx
<section id="..." className="py-20 md:py-32 [bg-card/30?]">
  <div className="container px-6 md:px-12 xl:px-16">
    {/* Header da secção */}
    <div className="mb-16">
      <p className="text-primary font-mono text-sm mb-2">{dict.title}</p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {dict.heading}
      </h2>
      <div className="w-20 h-1 bg-primary rounded-full" />
    </div>

    {/* Conteúdo */}
  </div>
</section>
```

**Regras:**
- `py-20 md:py-32` em todas as secções (80px → 128px)
- Eyebrow → H2 → Accent bar (`w-20 h-1 bg-primary rounded-full`)
- Secções alternadas com `bg-card/30`: Skills, Contact (About e Projects ficam sem fundo extra)

---

## 5. Container

Configurado via `@utility container` em `globals.css`:

```css
@utility container {
  max-width: 1200px;
  margin-inline: auto;
}
```

Padding lateral aplicado directamente nos componentes:

```
px-6            → 24px  (mobile)
md:px-12        → 48px  (tablet)
xl:px-16        → 64px  (desktop largo)
```

---

## 6. Componentes

### Wordmark / Logo

O header usa o SVG `public/wordmark-ricardorato-white.svg`:
- Letras `RicardoRato` em branco
- Símbolos `<` e `>` em `oklch(0.65 0.18 250)` (primary)
- Altura renderizada: `h-6` (24px), largura automática

```tsx
<img
  src="/wordmark-ricardorato-white.svg"
  alt="ricardorato.dev"
  className="h-6 w-auto"
/>
```

### Header

- `fixed top-0` com `bg-background/80 backdrop-blur-md` ao scroll
- Wordmark à esquerda, nav no centro, language switcher à direita
- Language switcher: `PT / EN` com links para `/${locale}/...`
- Mobile: hamburger menu com slide-in animado

### Project Card

```tsx
<Card className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300">
```

- Ícone `Folder` em `text-primary` no topo esquerdo
- Links GitHub + ExternalLink no topo direito, hover `text-primary`
- Stack badges em `font-mono bg-secondary/50`
- Título do card muda para `text-primary` em hover via `group-hover:text-primary`

### Skill Badge

```tsx
<div className="... bg-secondary/50 border-border hover:border-primary/50 hover:bg-secondary">
  <SkillIcon className="text-primary group-hover:scale-110" />
  <span className="text-foreground">{name}</span>
</div>
```

### SectionGlow

Círculo de luz difusa (600×600px, blur 100px, primary com 12% opacidade) centrado no elemento pai. Presente em **todas as secções** — Hero, About, Skills, Projects, Contact — posicionado antes do título da secção. O pai precisa de `relative` para o `absolute` funcionar.

```tsx
import { SectionGlow } from "@/components/ui/section-glow"

<div className="relative">
  <SectionGlow />
  <p className="text-primary font-mono text-sm mb-2">{dict.title}</p>
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{dict.heading}</h2>
  <div className="w-20 h-1 bg-primary rounded-full" />
</div>
```

### Blockquote (About)

```tsx
<blockquote className="border-l-4 border-primary pl-6 py-2">
  <p className="text-xl md:text-2xl font-medium text-foreground italic">
    "{quote}"
  </p>
</blockquote>
```

### Footer

```tsx
<Heart className="text-destructive" />
<Coffee className="text-primary" />
```

---

## 7. Animações

Usadas via `tw-animate-css` (importado em `globals.css`):

| Classe | Uso |
|---|---|
| `animate-in fade-in slide-in-from-bottom-4 duration-500` | Fade-up de entrada (Hero elements) |
| `delay-100`, `delay-200`, ... | Stagger nas entradas do Hero |
| `animate-bounce` | Scroll indicator (Hero) |
| `transition-all duration-300` | Hover states de cards |
| `transition-colors` | Hover states de links e botões |

### FadeIn (scroll-triggered)

Wrapper Client Component que usa `IntersectionObserver` para fazer fade-in/fade-out das secções conforme o utilizador faz scroll. Cada secção em `[lang]/page.tsx` está envolvida num `<FadeIn>`.

```tsx
import { FadeIn } from "@/components/ui/fade-in"

// Em page.tsx — envolve cada secção
<FadeIn>
  <AboutSection dict={dict.about} lang={lang} />
</FadeIn>
```

**Props:**
| Prop | Tipo | Default | Descrição |
|---|---|---|---|
| `children` | `ReactNode` | — | Conteúdo a animar |
| `className` | `string` | `""` | Classes extra no div wrapper |
| `delay` | `number` | `0` | Delay em ms (para stagger manual) |

**Comportamento:** `opacity` + `translateY(2rem)` → `translateY(0)` em 0.6s ease. Threshold: 10% de visibilidade no viewport. Faz fade-out quando a secção sai do viewport (ideal para scroll up/down).

---

## 8. i18n e Copy

- **PT-PT é o locale padrão.** EN é o alternativo.
- Eyebrow labels: sem prefixo `//` — texto directo (`"Sobre mim"`, não `"// Sobre mim"`).
- Nome sempre: `Ricardo Rato` + `<span className="text-primary">.</span>`
- Footer: `"Feito com"` + Heart (destructive) + `"e"` + Coffee (primary)
- Sem emoji no UI. Heart e Coffee são ícones Lucide, não emoji.

---

## 9. O Que Nunca Fazer

- ❌ Raw color utilities: `bg-zinc-900`, `text-white`, `border-gray-200`
- ❌ Segunda cor de marca (verde, laranja, etc.)
- ❌ Emoji no UI (excepto Heart/Coffee no footer como ícones Lucide)
- ❌ Lógica em `page.tsx` — apenas composição de secções
- ❌ Imports relativos (`../../`) — sempre `@/`
- ❌ Secções de scroll como rotas próprias (`/about`, `/skills`) — tudo em `[lang]/page.tsx`
