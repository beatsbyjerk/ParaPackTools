# ParaPack Tools Website

## Project Overview
Premium dark-themed marketing website for ParaPack Tools - a professional Solana trading bot for Pump.Fun & Raydium platforms. Features comprehensive documentation of all bot modes and capabilities.

## Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS with custom dark theme
- **Animations**: Framer Motion for smooth, premium interactions
- **Routing**: Wouter
- **UI Components**: shadcn/ui
- **Fonts**: Inter (body), Space Grotesk (display), JetBrains Mono (code)

## Project Structure
```
client/
├── src/
│   ├── pages/
│   │   ├── home.tsx           # Hero, features, stats, technical overview
│   │   ├── documentation.tsx  # Comprehensive bot modes documentation
│   │   └── not-found.tsx      # 404 page
│   ├── components/
│   │   ├── navigation.tsx     # Sticky header with glassmorphism
│   │   ├── footer.tsx         # Multi-column footer with newsletter
│   │   └── ui/                # shadcn components
│   ├── App.tsx                # Main app with routing
│   └── index.css              # Global styles and design tokens
├── index.html                 # HTML entry point
attached_assets/
├── Untitled design (4)_1762025526490.png  # ParaPack logo (used as favicon and branding)
└── stock_images/              # Background and feature images
```

## Design System

### Color Palette
- **Background**: Deep dark blue-black (#0A0B0F)
- **Primary**: Purple gradient (271° 91% 65%)
- **Accent**: Cyan/Blue gradient for highlights
- **Card**: Slightly elevated dark surface with glassmorphism
- **Text**: High contrast white with muted gray for secondary text

### Typography
- **Display**: Space Grotesk (headlines, hero text)
- **Body**: Inter (paragraphs, UI text)
- **Code**: JetBrains Mono (technical specs, parameters)

### Animations
- Gradient animations on hero background
- Floating particles effect
- Scroll-triggered reveal animations
- Hover lift effects on cards
- Pulse glow on CTA buttons
- Smooth page transitions

## Key Features

### Home Page
1. **Hero Section**
   - Animated gradient background with floating particles
   - ParaPack logo integration
   - Dual CTAs (Launch Bot + Documentation)
   - Premium typography with gradient text

2. **Stats Section**
   - 5 key metrics: Wallet bundles, JITO protection, mode counts
   - Animated counters
   - Icon-based visual system

3. **Features Grid**
   - 4 main categories: Buy Modes, Sell Modes, Wallet Management, Transfer Tools
   - Glassmorphic cards with gradient borders
   - Hover animations with lift effect
   - Links to documentation sections

4. **Technical Features**
   - Two-column layout with feature list and dashboard mockup
   - Checkmark-based feature list
   - Professional imagery with gradient overlays

5. **CTA Section**
   - Final conversion point
   - Gradient background
   - Prominent call-to-action

### Documentation Page
1. **Prerequisites Section**
   - Required and optional dependencies
   - Visual distinction with color coding

2. **Tabbed Interface**
   - 4 tabs: Buy Modes, Sell Modes, Wallet Modes, Transfer Modes
   - Active state with gradient backgrounds
   - Smooth tab switching

3. **Mode Cards**
   - Detailed descriptions for all 17 bot modes
   - Parameter tables with type information
   - Badge system for mode categorization
   - Technical specifications

### Navigation
- Sticky header with glassmorphism effect
- Logo + brand name
- Navigation links (Home, Documentation)
- Launch Bot CTA

### Footer
- 4-column layout: Brand, Product, Resources, Newsletter
- Social media links
- Newsletter signup form
- Legal links

## Bot Modes Documented

### Buy Modes (7)
1. Gen Volume (JITO)
2. Auto Volume (JITO)
3. Human Mode (JITO)
4. MicroBuy (SPAM)
5. Same TX
6. Warmup Mode
7. Stagger Mode

### Sell Modes (3)
1. Sell All (JITO)
2. Single Sell
3. Cleanup Mode

### Wallet Modes (4)
1. Gen Wallets
2. Check Balances
3. Close Token Accounts
4. Create Profiles

### Transfer Modes (3)
1. Transfer SOL to Sub Wallets
2. Transfer SOL from Sub Wallets
3. Transfer Tokens

## Development

### Running Locally
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

## Design Principles
1. **Premium Dark Aesthetic**: Professional crypto/fintech look
2. **Framer-Style Animations**: Smooth, purposeful motion
3. **Glassmorphism**: Translucent surfaces with backdrop blur
4. **Gradient Accents**: Purple/cyan matching Solana branding
5. **High Contrast**: Ensuring readability and visual hierarchy
6. **Responsive**: Mobile-first approach with breakpoints
7. **Performance**: Optimized animations running at 60fps

## Recent Changes
- Initial website build with complete frontend implementation
- Premium dark theme with Solana-inspired gradient colors
- Comprehensive documentation for all 17 bot modes
- Framer Motion animations throughout
- Glassmorphic navigation and cards
- Stock images integrated for visual appeal
- Logo converted to favicon

## Future Enhancements
- Video demo section
- FAQ with accordion
- Interactive configuration guide
- Community testimonials
- Trading volume statistics dashboard
- Contact form for enterprise inquiries
