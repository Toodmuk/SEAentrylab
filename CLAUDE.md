# SEA Entry Lab - Project Instructions

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui (default config)
- Framer Motion for scroll animations
- Font: Inter from Google Fonts (weights 400, 500, 600, 700)
- Lucide React for minimal icons only where specified

## Design System - Apple-Inspired, Premium Consulting

### Colors
- --navy: #0f172a (hero, footer, dark sections)
- --white: #ffffff (main content background)
- --off-white: #f8fafc (alternate section background)
- --slate-900: #0f172a (primary text on light)
- --slate-600: #475569 (body text on light)
- --slate-400: #94a3b8 (secondary/muted text)
- --emerald-500: #10b981 (CTA buttons, accents)
- --emerald-600: #059669 (CTA hover)
- --emerald-400: #34d399 (CTA text on dark backgrounds)
- --border: #e2e8f0 (card borders, dividers)

### Typography
- Hero headline: text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]
- Section headlines: text-3xl md:text-5xl font-bold tracking-tight
- Section labels: text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500
- Body text: text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl
- Card titles: text-xl font-semibold
- Card body: text-base text-slate-600

### Spacing
- Sections: py-24 md:py-32
- Container: max-w-6xl mx-auto px-6 md:px-8
- Between headline and body: mb-6
- Between label and headline: mb-4
- Between sections content blocks: gap-16

### Components
- Buttons (primary): bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-3.5 font-medium text-base transition-all duration-200 hover:scale-[1.02] hover:shadow-lg
- Buttons (secondary/ghost): border border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-3.5
- Cards: bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300
- Featured card: ring-2 ring-emerald-500 bg-emerald-50/30 relative (with "Most Popular" badge)
- Badge: bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full absolute -top-3 left-1/2 -translate-x-1/2

### Animation Rules (Framer Motion)
- Use a reusable <AnimateIn> wrapper component
- Default: y: 30 to 0, opacity: 0 to 1
- Duration: 0.6s, ease: [0.21, 0.47, 0.32, 0.98]
- Trigger: useInView with once: true, amount: 0.2
- Stagger children by 0.1s using custom delay prop
- Hero text: slightly longer duration (0.8s), stagger 0.15s
- Cards: stagger 0.12s
- Navbar: no animation, just a clean bg transition on scroll
- NO bouncing, NO spinning, NO parallax, NO count-up numbers
- Keep it subtle. If it feels like a template, tone it down.

### Mobile
- Fully responsive, mobile-first
- Hero headline: text-3xl on mobile
- Tier cards: stack vertically on mobile, horizontal on md+
- All padding reduces on mobile (px-6 vs px-8)
- CTA buttons: full width on mobile (w-full sm:w-auto)

### What NOT to do
- No stock photos or placeholder images
- No Lorem ipsum anywhere
- No gradient backgrounds
- No excessive border radius (max rounded-2xl)
- No colored backgrounds on cards except the featured tier
- No hamburger menu (single page, just show nav items)
- No blog, no multiple pages, no routing
