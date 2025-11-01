import { useState } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  Send,
  Zap,
  Clock,
  Users,
  ShoppingCart,
  Trash2,
  Key,
  BarChart3,
  Settings,
  Home,
  BookOpen
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Documentation() {
  const [activeTab, setActiveTab] = useState("buy-modes");

  const buyModes = [
    {
      name: "Gen Volume (JITO)",
      icon: BarChart3,
      description: "Generate trading volume using multiple wallets with JITO protection",
      details: "Enter the token address (CA) and delay to generate volume using multiple wallets. The bot will bundle up to 10 wallets for buying the token until each wallet has made a purchase.",
      parameters: [
        { name: "Token Address", type: "string", required: true },
        { name: "Delay", type: "number", required: true }
      ],
      badge: "JITO Protected"
    },
    {
      name: "Auto Volume (JITO)",
      icon: Zap,
      description: "Automatically monitor and execute trades on new token launches",
      details: "Monitors the dev address (configured in the config) and automatically executes the Human Mode when a new launch is detected. This mode performs the Buy Buy Sell cycle until all wallets have completed their actions.",
      parameters: [
        { name: "Dev Address", type: "string", required: true, note: "Configured in settings" }
      ],
      badge: "Automated"
    },
    {
      name: "Human Mode (JITO)",
      icon: Users,
      description: "Manual Buy-Buy-Sell cycle simulation for organic trading patterns",
      details: "Similar to Auto Volume, but manually initiated. The bot will perform a Buy Buy Sell cycle until all wallets have bought and sold the token.",
      parameters: [
        { name: "Token Address", type: "string", required: true }
      ],
      badge: "Manual Control"
    },
    {
      name: "MicroBuy (SPAM)",
      icon: Zap,
      description: "Continuous small buy transactions for high-frequency trading",
      details: "This mode continuously executes small buy transactions based on the configured amount of SOL (default: 0.0001) without using JITO protection, running indefinitely until manually stopped.",
      parameters: [
        { name: "SOL Amount", type: "number", default: "0.0001" }
      ],
      badge: "High Frequency"
    },
    {
      name: "Same TX",
      icon: ShoppingCart,
      description: "Execute simultaneous buy and sell in single transaction",
      details: "Executes a single buy and sell transaction using the first wallet in the wallet.txt. This mode loops indefinitely until stopped.",
      parameters: [
        { name: "Token Address", type: "string", required: true }
      ],
      badge: "Loop Mode"
    },
    {
      name: "Warmup Mode",
      icon: Clock,
      description: "Simulate human-like trading to avoid detection",
      details: "Randomly buys and sells recently traded tokens to simulate human-like activity and avoid detection by on-chain scanners.",
      parameters: [],
      badge: "Stealth"
    },
    {
      name: "Stagger Mode",
      icon: Users,
      description: "Staggered buy cycle with customizable delays",
      details: "Executes a staggered buy cycle with a user-defined delay, looping a set number of times. Users can choose whether to use JITO in this mode.",
      parameters: [
        { name: "Delay", type: "number", required: true },
        { name: "Loop Count", type: "number", required: true },
        { name: "Use JITO", type: "boolean", default: "false" }
      ],
      badge: "Configurable"
    }
  ];

  const sellModes = [
    {
      name: "Sell All (JITO)",
      icon: TrendingDown,
      description: "Bundle and sell 100% of tokens across all wallets",
      details: "Bundles all wallets and sells 100% of the tokens in each wallet until all wallets have been sold.",
      parameters: [
        { name: "Token Address", type: "string", required: true }
      ],
      badge: "Bulk Operation"
    },
    {
      name: "Single Sell",
      icon: ShoppingCart,
      description: "Sell tokens from a specific wallet",
      details: "Prompts for a token address (CA) and a wallet index. The bot will sell 100% of the tokens in the selected wallet.",
      parameters: [
        { name: "Token Address", type: "string", required: true },
        { name: "Wallet Index", type: "number", required: true }
      ],
      badge: "Targeted"
    },
    {
      name: "Cleanup Mode",
      icon: Trash2,
      description: "Remove all Pump.Fun tokens from all wallets",
      details: "Sells all Pump.Fun tokens in all wallets, cleaning up the token balances across the wallets.",
      parameters: [],
      badge: "Maintenance"
    }
  ];

  const walletModes = [
    {
      name: "Gen Wallets",
      icon: Key,
      description: "Generate new Solana wallets for bot operations",
      details: "Generates a specified number of wallets, storing them in the /keypairs folder along with the wallets.txt file.",
      parameters: [
        { name: "Wallet Count", type: "number", required: true }
      ],
      badge: "Setup"
    },
    {
      name: "Check Balances",
      icon: Wallet,
      description: "View SOL and SPL token balances across all wallets",
      details: "Checks the SOL and SPL token balances of all wallets.",
      parameters: [],
      badge: "Monitoring"
    },
    {
      name: "Close Token Accounts",
      icon: Trash2,
      description: "Reclaim rent fees by closing unused token accounts",
      details: "Closes SPL Token Accounts for each wallet, reclaiming rent fees.",
      parameters: [],
      badge: "Optimization"
    },
    {
      name: "Create Profiles",
      icon: Users,
      description: "Set up Pump.Fun profiles for your wallets",
      details: "Creates profiles on Pump.Fun (Username + Bio).",
      parameters: [
        { name: "Username", type: "string", required: true },
        { name: "Bio", type: "string", required: false }
      ],
      badge: "Identity"
    }
  ];

  const transferModes = [
    {
      name: "Transfer SOL to Sub Wallets",
      icon: Send,
      description: "Distribute SOL from main wallet to all sub-wallets",
      details: "Transfers SOL from the main wallet (sender address in the config) to all sub-wallets.",
      parameters: [
        { name: "Amount per Wallet", type: "number", required: true }
      ],
      badge: "Distribution"
    },
    {
      name: "Transfer SOL from Sub Wallets",
      icon: Send,
      description: "Consolidate SOL from sub-wallets back to main wallet",
      details: "Sends SOL from all sub-wallets back to the main wallet, leaving 0.0009 SOL in each sub-wallet.",
      parameters: [],
      badge: "Consolidation"
    },
    {
      name: "Transfer Tokens",
      icon: Send,
      description: "Move tokens between wallets efficiently",
      details: "Transfers all tokens from the sub-wallets to the wallet address specified during execution.",
      parameters: [
        { name: "Destination Address", type: "string", required: true },
        { name: "Token Address", type: "string", required: true }
      ],
      badge: "Token Management"
    }
  ];

  const prerequisites = [
    {
      name: "Node.js",
      description: "JavaScript runtime environment",
      required: true
    },
    {
      name: "npm",
      description: "Node.js package manager",
      required: true
    },
    {
      name: "RPC & WSS URLs",
      description: "Blockchain connection endpoints",
      required: true
    },
    {
      name: "Solana Wallet",
      description: "Private keys for wallet management",
      required: true
    },
    {
      name: "JITO Access",
      description: "For MEV protection features",
      required: false
    }
  ];

  const ModeCard = ({ mode }: { mode: any }) => (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300" data-testid={`card-mode-${mode.name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
          <mode.icon className="w-6 h-6 text-purple-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold">{mode.name}</h3>
            <Badge variant="outline" className="border-purple-500/50 bg-purple-500/10 text-purple-400">
              {mode.badge}
            </Badge>
          </div>
          <p className="text-muted-foreground mb-4">{mode.description}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2 text-sm uppercase tracking-wide text-purple-400">Details</h4>
          <p className="text-foreground/80 leading-relaxed">{mode.details}</p>
        </div>

        {mode.parameters && mode.parameters.length > 0 && (
          <div>
            <h4 className="font-medium mb-3 text-sm uppercase tracking-wide text-purple-400">Parameters</h4>
            <div className="space-y-2">
              {mode.parameters.map((param: any, idx: number) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                  <code className="text-sm font-mono text-cyan-400">{param.name}</code>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="secondary" className="text-xs">{param.type}</Badge>
                      {param.required && (
                        <Badge variant="destructive" className="text-xs">Required</Badge>
                      )}
                      {param.default && (
                        <span className="text-xs text-muted-foreground">Default: {param.default}</span>
                      )}
                    </div>
                    {param.note && (
                      <p className="text-xs text-muted-foreground">{param.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Link href="/">
            <Button variant="ghost" className="mb-4" data-testid="link-back-home">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
              <BookOpen className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h1 className="text-5xl font-bold font-display text-white">Documentation</h1>
              <p className="text-xl text-muted-foreground mt-2">Complete guide to ParaPack Tools bot modes and features</p>
            </div>
          </div>
        </motion.div>

        {/* Prerequisites */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-card-border">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Settings className="w-6 h-6 text-purple-400" />
              Prerequisites
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {prerequisites.map((prereq, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                  <div className={`w-2 h-2 rounded-full mt-2 ${prereq.required ? 'bg-purple-400' : 'bg-muted-foreground'}`} />
                  <div>
                    <div className="font-medium">{prereq.name}</div>
                    <div className="text-sm text-muted-foreground">{prereq.description}</div>
                    {!prereq.required && (
                      <Badge variant="secondary" className="text-xs mt-1">Optional</Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 p-1 bg-card/50 backdrop-blur-sm" data-testid="tabs-navigation">
              <TabsTrigger value="buy-modes" className="data-[state=active]:bg-purple-500/20" data-testid="tab-buy-modes">
                <TrendingUp className="w-4 h-4 mr-2" />
                Buy Modes
              </TabsTrigger>
              <TabsTrigger value="sell-modes" className="data-[state=active]:bg-cyan-500/20" data-testid="tab-sell-modes">
                <TrendingDown className="w-4 h-4 mr-2" />
                Sell Modes
              </TabsTrigger>
              <TabsTrigger value="wallet-modes" className="data-[state=active]:bg-violet-500/20" data-testid="tab-wallet-modes">
                <Wallet className="w-4 h-4 mr-2" />
                Wallet Modes
              </TabsTrigger>
              <TabsTrigger value="transfer-modes" className="data-[state=active]:bg-blue-500/20" data-testid="tab-transfer-modes">
                <Send className="w-4 h-4 mr-2" />
                Transfer Modes
              </TabsTrigger>
            </TabsList>

            <TabsContent value="buy-modes" className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2 font-display text-white">Buy Modes</h2>
                <p className="text-lg text-muted-foreground">
                  7 powerful buying strategies for volume generation and token acquisition
                </p>
              </div>
              {buyModes.map((mode, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ModeCard mode={mode} />
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="sell-modes" className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2 font-display text-white">Sell Modes</h2>
                <p className="text-lg text-muted-foreground">
                  Efficient token selling and portfolio cleanup operations
                </p>
              </div>
              {sellModes.map((mode, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ModeCard mode={mode} />
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="wallet-modes" className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2 font-display text-white">Wallet Modes</h2>
                <p className="text-lg text-muted-foreground">
                  Complete wallet lifecycle management and monitoring tools
                </p>
              </div>
              {walletModes.map((mode, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ModeCard mode={mode} />
                </motion.div>
              ))}
            </TabsContent>

            <TabsContent value="transfer-modes" className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2 font-display text-white">Transfer Modes</h2>
                <p className="text-lg text-muted-foreground">
                  SOL and token transfer operations for portfolio management
                </p>
              </div>
              {transferModes.map((mode, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ModeCard mode={mode} />
                </motion.div>
              ))}
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <Card className="p-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/20 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Launch ParaPack Tools on Telegram and start automating your Solana trading
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
              data-testid="button-launch-telegram"
            >
              Launch on Telegram
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
