import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, ExternalLink, ShoppingCart } from "lucide-react";
import logoImage from "@assets/logo.png";
import { motion } from "framer-motion";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer hover-elevate p-2 rounded-lg transition-all" data-testid="link-logo">
              <img src={logoImage} alt="PumpDotVol" className="h-10 w-10" />
              <span className="font-display font-bold text-xl text-white">
                PumpDotVol
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/">
              <Button 
                variant={location === "/" ? "secondary" : "ghost"} 
                className="gap-2"
                data-testid="nav-home"
              >
                <Home className="w-4 h-4" />
                Home
              </Button>
            </Link>
            <Link href="/docs">
              <Button 
                variant={location === "/docs" ? "secondary" : "ghost"} 
                className="gap-2"
                data-testid="nav-docs"
              >
                <BookOpen className="w-4 h-4" />
                Documentation
              </Button>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a href="https://pump.fun/coin/8mt3TARyZMh9nYHRxfGQhSdCNKiLCvpUc4iDDHMupump" target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 gap-2"
                data-testid="nav-buy-token"
              >
                <ShoppingCart className="w-4 h-4" />
                BUY PumpDotVol
              </Button>
            </a>
            <a href="http://t.me/Pumpdotvol_bot" target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 border-0 gap-2"
                data-testid="nav-launch-bot"
              >
                Launch Bot
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
