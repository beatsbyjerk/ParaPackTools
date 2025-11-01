import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Send, Github, Twitter, MessageCircle } from "lucide-react";
import logoImage from "@assets/Untitled design (4)_1762025526490.png";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="ParaPack Tools" className="h-12 w-12" data-testid="footer-logo" />
              <span className="font-display font-bold text-xl text-white">
                ParaPack Tools
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Professional Solana trading automation for Pump.Fun & Raydium platforms.
            </p>
            <Badge variant="outline" className="border-purple-500/50 bg-purple-500/10">
              Powered by Solana
            </Badge>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#features">
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="footer-features">
                    Features
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/docs">
                  <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="footer-documentation">
                    Documentation
                  </span>
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="footer-pricing">
                  Pricing
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="footer-support">
                  Support
                </span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  data-testid="footer-telegram"
                >
                  <MessageCircle className="w-4 h-4" />
                  Telegram Bot
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  data-testid="footer-github"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  data-testid="footer-twitter"
                >
                  <Twitter className="w-4 h-4" />
                  Twitter/X
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Get the latest updates and trading tips
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-background/50"
                data-testid="input-newsletter-email"
              />
              <Button 
                size="icon" 
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 flex-shrink-0"
                data-testid="button-newsletter-subscribe"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 ParaPack Tools. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="footer-terms">
              Terms of Service
            </span>
            <span className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="footer-privacy">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
