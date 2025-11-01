# ParaPack Tools - Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based with Crypto/Tech Premium Aesthetic

Drawing inspiration from modern crypto dashboards (Phantom Wallet, Raydium DEX), premium SaaS tools (Linear, Vercel), and high-end fintech platforms (Stripe, Coinbase). The design emphasizes trust, technical sophistication, and cutting-edge automation capabilities.

**Core Principles:**
- **Technical Authority:** Convey professional-grade automation tools through precise layouts and data visualization
- **Speed & Performance:** Visual language that reflects bot's high-speed trading capabilities
- **Dark Sophistication:** Premium dark theme that reduces eye strain for traders while projecting modern tech aesthetic
- **Transparent Complexity:** Make advanced features feel accessible through clear visual hierarchy

---

## Typography

**Font System:**
- Primary: 'Inter' (via Google Fonts) - Clean, technical, excellent at small sizes
- Accent/Display: 'Space Grotesk' (via Google Fonts) - Modern, geometric for headlines

**Hierarchy:**
- **Hero Headline:** text-6xl lg:text-7xl xl:text-8xl, font-bold, Space Grotesk, tracking-tight
- **Section Headers:** text-4xl lg:text-5xl, font-bold, Space Grotesk
- **Subsection Headers:** text-2xl lg:text-3xl, font-semibold, Inter
- **Body Text:** text-base lg:text-lg, font-normal, Inter, leading-relaxed
- **Captions/Labels:** text-sm, font-medium, Inter, tracking-wide, uppercase
- **Code/Technical:** 'JetBrains Mono', monospace for wallet addresses, technical specs

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, mt-8, gap-12, py-20, etc.)

**Container Strategy:**
- Full-width hero: w-full with inner max-w-7xl mx-auto px-6 lg:px-8
- Content sections: max-w-7xl mx-auto px-6 lg:px-8
- Documentation: max-w-6xl mx-auto px-6 for optimal reading
- Vertical rhythm: py-20 lg:py-32 for major sections, py-12 lg:py-20 for subsections

**Grid Systems:**
- Feature cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
- Documentation tabs: grid-cols-1 lg:grid-cols-3 gap-8 (sidebar + content)
- Stats/metrics: grid-cols-2 lg:grid-cols-4 gap-4

---

## Component Library

### Navigation
**Sticky Header:** Glassmorphism effect (backdrop-blur-xl bg-black/50), logo left, nav center, "Launch Bot" CTA right with gradient border + blur background, height h-20

### Hero Section
**Layout:** Full-viewport section (min-h-screen) with gradient mesh background, centered content
- Logo integration: ParaPack logo (dog character) positioned top-left of headline
- Headline with animated gradient text effect
- Subheadline describing bot capabilities
- Dual CTAs: Primary "Launch Bot" (gradient button with pulse animation) + Secondary "View Documentation" (ghost button with border)
- Floating bot feature cards with subtle animations
- Background: Animated gradient mesh (purple-to-cyan matching Solana branding) with particle effects

### Feature Showcase Grid
**Four Main Categories:** Buy Modes, Sell Modes, Wallet Management, Transfer Tools
- Glassmorphic cards with gradient borders (border-2 border-purple-500/30)
- Icon + Title + Description + "Learn More" link
- Hover state: Lift effect (transform translate-y-2) with glow
- Each card has distinct gradient accent matching its category

### Statistics Section
**Horizontal Metrics Bar:** Dark container with animated counters
- "10 Wallets Per Bundle" | "JITO MEV Protection" | "7 Buy Modes" | "3 Sell Modes" | "4 Transfer Options"
- Large numbers (text-4xl font-bold) with gradient fills
- Labels below in text-sm text-gray-400

### Technical Features
**Two-Column Layout:** 
- Left: Feature list with checkmarks, gradient accents
- Right: Code preview mockup showing Node.js integration (syntax highlighted, dark terminal aesthetic)
- Includes: JITO Integration, Multi-Wallet Support, Custom Slippage, Warmup Mode, Auto-Volume, etc.

### Documentation Page
**Three-Column Layout:**
- Left Sidebar (sticky): Category navigation (Buy Modes, Sell Modes, Wallet Modes, Transfer Modes)
- Center: Main content with tabbed interface for each mode, includes command syntax, descriptions, parameters
- Right Sidebar: Quick links, prerequisites, support section
- Code blocks: Dark theme with copy button, JetBrains Mono font
- Each mode section has: Title, Description, Usage Instructions, Parameters Table, Example Scenarios

### Footer
**Multi-Column:**
- Logo + tagline (left)
- Quick Links (Product, Documentation, Support)
- Resources (Telegram Bot, GitHub, Twitter/X)
- Legal (Terms, Privacy)
- Newsletter signup with gradient input border
- "Powered by Solana" badge with official Solana logo

---

## Animations & Interactions

**Framer-Style Animations:**
- Hero: Staggered fade-in for headline, subtitle, CTAs (100ms delays)
- Scroll reveals: Cards fade-in + slide-up (transform translateY) with intersection observer
- Feature cards: Hover lift (-8px) with shadow glow transition
- Gradient text: Animated background-position creating shimmer effect
- Particle system: Subtle floating particles in hero background (CSS keyframes)
- CTA buttons: Pulse glow animation on primary button
- Container frames: Glassmorphic borders with animated gradient rotations

**Interaction States:**
- Links: Underline animation from left-to-right
- Buttons: Blur backdrop with gradient border, scale on hover (transform scale-105)
- Cards: Border glow intensity increase on hover
- Documentation tabs: Sliding underline indicator

---

## Images

### Required Images:

1. **Hero Background:** Abstract Solana blockchain visualization - purple/cyan gradient mesh with geometric patterns suggesting network nodes and transaction flow. Should feel technical yet ethereal. (Full-width, min-h-screen)

2. **Trading Dashboard Mockup:** Screenshot/mockup of a crypto trading interface showing multiple wallets, transaction history, volume charts - positioned in "How It Works" section. Dark themed UI matching overall aesthetic. (max-w-4xl, centered)

3. **Solana Logo:** Official Solana gradient logo for "Powered by Solana" badge in footer. (SVG, h-8)

4. **Bot Feature Icons:** Custom iconography for each bot mode category:
   - Buy icon: Upward trending arrow with gradient
   - Sell icon: Downward arrow with gradient  
   - Wallet icon: Multi-layer wallet representation
   - Transfer icon: Bidirectional arrows
   (All icons in glassmorphic containers with matching gradient accents)

5. **ParaPack Logo:** User-provided dog character with gradient bars - used as:
   - Favicon (16x16, 32x32, 192x192 PNG)
   - Header logo (h-10)
   - Footer logo (h-12)
   - Hero section accent (h-20)

6. **Documentation Thumbnails:** Visual previews for each mode section showing UI elements or workflow diagrams. Dark-themed, gradient accents. (400x300px cards)

### Image Treatment:
- All images have subtle blur/glow effects when overlaid with UI elements
- Hero images use gradient overlays to ensure text readability
- Buttons on images have backdrop-blur-lg bg-white/10 backgrounds