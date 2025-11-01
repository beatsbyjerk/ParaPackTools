import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  Send, 
  Zap,
  Shield,
  Layers,
  Settings,
  Clock,
  BarChart3,
  Code2,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import logoImage from "@assets/logo.png";
import heroBackground from "@assets/stock_images/abstract_blockchain__7a1ceea8.jpg";
import dashboardMockup from "@assets/stock_images/cryptocurrency_tradi_98d65b29.jpg";

export default function Home() {
  const features = [
    {
      icon: TrendingUp,
      title: "Buy Modes",
      description: "7 powerful buying strategies including Gen Volume, Auto Volume, Human Mode, MicroBuy, and Warmup modes with JITO protection.",
      gradient: "from-purple-500 to-violet-600",
      link: "/docs#buy-modes"
    },
    {
      icon: TrendingDown,
      title: "Sell Modes",
      description: "Bulk selling, single wallet operations, and cleanup modes to efficiently manage your token positions across all wallets.",
      gradient: "from-cyan-500 to-blue-600",
      link: "/docs#sell-modes"
    },
    {
      icon: Wallet,
      title: "Wallet Management",
      description: "Generate wallets, check balances, close token accounts, and create Pump.Fun profiles. Complete wallet lifecycle management.",
      gradient: "from-violet-500 to-purple-600",
      link: "/docs#wallet-modes"
    },
    {
      icon: Send,
      title: "Transfer Tools",
      description: "Transfer SOL and tokens between wallets, consolidate balances, and manage your portfolio with precision and speed.",
      gradient: "from-blue-500 to-cyan-600",
      link: "/docs#transfer-modes"
    }
  ];

  const stats = [
    { value: "10", label: "Wallets Per Bundle", icon: Layers },
    { value: "JITO", label: "MEV Protection", icon: Shield },
    { value: "7", label: "Buy Modes", icon: TrendingUp },
    { value: "3", label: "Sell Modes", icon: TrendingDown },
    { value: "4", label: "Transfer Options", icon: Send }
  ];

  const technicalFeatures = [
    "JITO Integration for MEV Protection",
    "Multi-Wallet Bundle Transactions",
    "Custom Slippage Configuration",
    "Automated Volume Generation",
    "Warmup Mode for Stealth",
    "Real-time Balance Tracking",
    "Token Account Management",
    "Pump.Fun Profile Creation",
    "Configurable Buy/Sell Delays",
    "Raydium DEX Support",
    "Node.js Powered Backend",
    "RPC & WSS Integration"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${heroBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-background to-cyan-900/50 animate-gradient-x" 
               style={{ backgroundSize: '200% 200%' }} 
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.1),transparent_50%)]" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-8"
          >
            <img src={logoImage} alt="PumpDotVol" className="h-24 w-24 mr-4" data-testid="logo-hero" />
            <Badge variant="outline" className="px-4 py-2 text-sm border-purple-500/50 bg-purple-500/10 backdrop-blur-sm">
              <Zap className="w-3 h-3 mr-1 inline" />
              Powered by Solana
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight"
            style={{
              fontFamily: '"Fredoka", "Baloo 2", "Varela Round", cursive',
              letterSpacing: '0.05em',
              color: '#10b981',
              textShadow: '0 4px 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(16, 185, 129, 0.4)'
            }}
          >
            PumpDotVol
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Professional Solana trading automation for Pump.Fun & Raydium. Multi-wallet volume generation, JITO MEV protection, and advanced trading modes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="http://t.me/parapack" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0 animate-pulse-glow"
                data-testid="button-launch-bot"
              >
                Launch Bot
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/docs">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 backdrop-blur-lg bg-white/5 border-white/20"
                data-testid="link-documentation"
              >
                View Documentation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/50 backdrop-blur-sm border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
                    <stat.icon className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-2" data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-display text-white">
              Powerful Trading Automation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to automate your Solana trading on Pump.Fun and Raydium platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={feature.link}>
                  <Card className="h-full p-6 bg-card/50 backdrop-blur-sm border-card-border hover-elevate cursor-pointer transition-all duration-300 hover:-translate-y-2 group" data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-purple-400 font-medium">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-32 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-display text-white">
                Built for Performance
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Node.js powered automation with enterprise-grade features for professional traders
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technicalFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl">
                <img 
                  src={dashboardMockup} 
                  alt="Trading Dashboard" 
                  className="w-full h-auto"
                  data-testid="img-dashboard-mockup"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-display text-white">
              Ready to Automate Your Trading?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join traders using PumpDotVol to maximize their Solana trading efficiency
            </p>
            <a href="http://t.me/parapack" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0"
                data-testid="button-launch-bot-cta"
              >
                Launch on Telegram
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
