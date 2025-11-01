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
  Settings,
  Home,
  BookOpen,
  MessageSquare,
  Play,
  BarChart3,
  Target,
  Repeat,
  Flame,
  DollarSign,
  Key,
  Lock,
  HelpCircle
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Documentation() {
  const [activeTab, setActiveTab] = useState("getting-started");

  const buyModes = [
    {
      name: "Bundle Buy (JITO)",
      badge: "Most Popular",
      bestFor: "Fast volume generation with MEV protection",
      icon: BarChart3,
      steps: [
        "Tap 🛒 Buy Modes",
        "Tap 📦 Bundle Buy (JITO)",
        "Send the token address (CA) - Example: 7xKX...abc",
        "Send delay in milliseconds - Example: 5000 (5 seconds)",
        "Watch it work! ⚡"
      ],
      description: "Bundles all your wallets together and buys the token with JITO protection."
    },
    {
      name: "Auto Volume",
      badge: "Automated",
      bestFor: "Automatically voluming new launches",
      icon: Zap,
      steps: [
        "Tap 🛒 Buy Modes",
        "Tap 🤖 Auto Volume",
        "Send minimum delay (seconds) - Example: 5",
        "Send maximum delay (seconds) - Example: 15",
        "Send sell percentage - Example: 100 (sell 100%)",
        "Bot monitors and auto-trades new launches! 🎯"
      ],
      description: "Bot automatically monitors and trades new launches."
    },
    {
      name: "Human Mode",
      badge: "Natural Trading",
      bestFor: "Looking like a real trader",
      icon: Users,
      steps: [
        "Tap 🛒 Buy Modes",
        "Tap 👤 Human Mode",
        "Send token address",
        "Send min delay (seconds)",
        "Send max delay (seconds)",
        "Send sell percentage",
        "Bot trades like a human! 🧑"
      ],
      description: "Random delays, Buy-Buy-Sell pattern to mimic human trading."
    },
    {
      name: "MicroBuy (SPAM)",
      badge: "High Frequency",
      bestFor: "Constantly bumping a token",
      icon: Repeat,
      steps: [
        "Tap 🛒 Buy Modes",
        "Tap 🔁 MicroBuy (SPAM)",
        "Send token address",
        "Send delay in milliseconds",
        "Bot keeps buying small amounts until you stop! 🔄"
      ],
      description: "Runs forever until you tap ⏹️ Stop or send /cancel",
      warning: "This runs continuously - use Stop button to cancel"
    },
    {
      name: "BumpBot",
      badge: "Same TX",
      bestFor: "Same transaction buy/sell",
      icon: Target,
      steps: [
        "Tap 🛒 Buy Modes",
        "Tap 🎯 BumpBot",
        "Send token address",
        "Send buy amount in SOL",
        "Send delay",
        "Bot buys and sells in same TX! ⚡"
      ],
      description: "Executes buy and sell in a single transaction."
    },
    {
      name: "Warmup Mode",
      badge: "Stealth",
      bestFor: "Making wallets look active",
      icon: Flame,
      steps: [
        "Tap 🛒 Buy Modes",
        "Tap 🔥 Warmup Mode",
        "Send number of loops - Example: 10",
        "Send delay",
        "Bot randomly trades to warm up wallets! 🔥"
      ],
      description: "Makes wallets appear active with random trading patterns."
    },
    {
      name: "Stagger Buy",
      badge: "Sequential",
      bestFor: "Sequential buying with delays",
      icon: Clock,
      steps: [
        "Tap 🛒 Buy Modes",
        "Tap ⏱️ Stagger Buy",
        "Send token address",
        "Send delay between buys",
        "Send number of loops",
        "Choose JITO (y/n)",
        "Bot buys one wallet at a time! ⏳"
      ],
      description: "Staggers purchases across wallets with custom delays."
    }
  ];

  const sellModes = [
    {
      name: "Sell All (JITO)",
      badge: "Most Popular",
      bestFor: "Selling from all wallets at once",
      icon: TrendingDown,
      steps: [
        "Tap 💰 Sell Modes",
        "Tap 📤 Sell All (JITO)",
        "Send token address",
        "Send percentage to sell - Example: 100 (sell all) or 50 (sell half)",
        "Done! All wallets sell together! 🚀"
      ],
      description: "Bundles all wallets and sells tokens simultaneously."
    },
    {
      name: "Single Wallet Sell",
      badge: "Targeted",
      bestFor: "Selling from one specific wallet",
      icon: Users,
      steps: [
        "Tap 💰 Sell Modes",
        "Tap 👤 Single Wallet Sell",
        "Send token address",
        "Send wallet number - Example: 1 (first wallet)",
        "Done! ✅"
      ],
      description: "Sell from a specific wallet only."
    },
    {
      name: "Delay Sell",
      badge: "Staggered",
      bestFor: "Selling with delays between wallets",
      icon: Clock,
      steps: [
        "Tap 💰 Sell Modes",
        "Tap ⏰ Delay Sell",
        "Send token address",
        "Send delay in milliseconds",
        "Bot sells from each wallet with delay! ⏱️"
      ],
      description: "Sells with delays between each wallet."
    },
    {
      name: "Cleanup Mode",
      badge: "Bulk Operation",
      bestFor: "Selling ALL PumpFun tokens",
      icon: Trash2,
      steps: [
        "Tap 💰 Sell Modes",
        "Tap 🧹 Cleanup Mode",
        "Tap ✅ Confirm",
        "Wait... ⏳",
        "All PumpFun tokens sold! 🧹"
      ],
      description: "Sells all PumpFun tokens across all wallets.",
      warning: "This sells EVERYTHING! Make sure you want to do this!"
    },
    {
      name: "Raydium Single Sell",
      badge: "DEX Specific",
      bestFor: "Selling on Raydium DEX",
      icon: Send,
      steps: [
        "Tap 💰 Sell Modes",
        "Tap 🌊 Raydium Single Sell",
        "Send token address",
        "Send percentage to sell",
        "Bot sells on Raydium! 🌊"
      ],
      description: "Execute sells on Raydium decentralized exchange."
    }
  ];

  const ModeCard = ({ mode }: { mode: any }) => (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-card-border hover-elevate transition-all duration-300" data-testid={`card-mode-${mode.name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
          <mode.icon className="w-6 h-6 text-purple-400" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
            <h3 className="text-xl font-semibold text-white">{mode.name}</h3>
            <Badge variant="outline" className="border-purple-500/50 bg-purple-500/10 text-purple-400">
              {mode.badge}
            </Badge>
          </div>
          <p className="text-sm text-cyan-400 mb-2">Best for: {mode.bestFor}</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-3 text-sm uppercase tracking-wide text-purple-400">How to Use</h4>
          <ol className="space-y-2">
            {mode.steps.map((step: string, idx: number) => (
              <li key={idx} className="flex gap-3 text-foreground/80">
                <span className="text-purple-400 font-semibold min-w-[24px]">{idx + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="pt-4 border-t border-border">
          <p className="text-muted-foreground italic">{mode.description}</p>
        </div>

        {mode.warning && (
          <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
            <p className="text-sm text-yellow-400">⚠️ {mode.warning}</p>
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
              <h1 className="text-5xl font-bold font-display text-white">User Guide</h1>
              <p className="text-xl text-muted-foreground mt-2">Learn how to use PumpDotVol via Telegram - no coding required!</p>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8 p-1 bg-card/50 backdrop-blur-sm" data-testid="tabs-navigation">
              <TabsTrigger value="getting-started" className="data-[state=active]:bg-purple-500/20" data-testid="tab-getting-started">
                <Play className="w-4 h-4 mr-2" />
                Getting Started
              </TabsTrigger>
              <TabsTrigger value="buy-modes" className="data-[state=active]:bg-cyan-500/20" data-testid="tab-buy-modes">
                <TrendingUp className="w-4 h-4 mr-2" />
                Buy Modes
              </TabsTrigger>
              <TabsTrigger value="sell-modes" className="data-[state=active]:bg-violet-500/20" data-testid="tab-sell-modes">
                <TrendingDown className="w-4 h-4 mr-2" />
                Sell Modes
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-blue-500/20" data-testid="tab-settings">
                <Settings className="w-4 h-4 mr-2" />
                Settings & Help
              </TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started" className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2 font-display text-white">Getting Started</h2>
                <p className="text-lg text-muted-foreground">
                  Everything is done through simple buttons and messages in Telegram - no coding required!
                </p>
              </div>

              {/* Opening the Bot */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-card-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
                    <MessageSquare className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Opening the Bot</h3>
                    <ol className="space-y-2 text-foreground/80">
                      <li className="flex gap-3">
                        <span className="text-purple-400 font-semibold">1.</span>
                        <span>Open Telegram</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-purple-400 font-semibold">2.</span>
                        <span>Search for your PumpDotVol bot by username</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-purple-400 font-semibold">3.</span>
                        <span>Tap on the bot to open it</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-purple-400 font-semibold">4.</span>
                        <span>Press the START button at the bottom</span>
                      </li>
                    </ol>
                    <p className="mt-4 text-muted-foreground italic">You'll see a personalized welcome message with your name! 👋</p>
                  </div>
                </div>
              </Card>

              {/* Main Menu */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-card-border">
                <h3 className="text-xl font-semibold text-white mb-4">Main Menu Options</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { icon: ShoppingCart, label: "Buy Modes", desc: "Different ways to buy tokens" },
                    { icon: DollarSign, label: "Sell Modes", desc: "Different ways to sell tokens" },
                    { icon: Wallet, label: "Wallet Management", desc: "Create and manage your wallets" },
                    { icon: Send, label: "Transfer", desc: "Move SOL between wallets" },
                    { icon: Settings, label: "Settings", desc: "Customize how the bot works" },
                    { icon: BarChart3, label: "Statistics", desc: "See your trading stats" },
                    { icon: HelpCircle, label: "Help", desc: "Get help anytime" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-background/50 hover-elevate">
                      <item.icon className="w-5 h-5 text-purple-400 mt-0.5" />
                      <div>
                        <div className="font-medium text-white">{item.label}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Setting Up Wallets */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-card-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
                    <Wallet className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-4">Setting Up Your Wallets</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-purple-400 mb-2">Creating New Wallets</h4>
                        <ol className="space-y-2 text-foreground/80 mb-3">
                          <li className="flex gap-3">
                            <span className="text-purple-400 font-semibold">1.</span>
                            <span>Tap 👛 Wallet Management</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-purple-400 font-semibold">2.</span>
                            <span>Tap ➕ Generate Wallets</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-purple-400 font-semibold">3.</span>
                            <span>Send a number (how many wallets you want) - Example: Type 10 and send</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-purple-400 font-semibold">4.</span>
                            <span>Done! Your wallets are created and saved automatically</span>
                          </li>
                        </ol>
                        <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                          <p className="text-sm text-cyan-400">💡 Tip: Generate 10-20 wallets for best volume results</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-purple-400 mb-2">Checking Balances</h4>
                        <ol className="space-y-2 text-foreground/80">
                          <li className="flex gap-3">
                            <span className="text-purple-400 font-semibold">1.</span>
                            <span>Tap 👛 Wallet Management</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-purple-400 font-semibold">2.</span>
                            <span>Tap 💵 Check Balances</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-purple-400 font-semibold">3.</span>
                            <span>Wait a moment... ⏳</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-purple-400 font-semibold">4.</span>
                            <span>See all wallet balances and total</span>
                          </li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-medium text-purple-400 mb-2">Funding Your Wallets</h4>
                        <ol className="space-y-2 text-foreground/80 mb-3">
                          <li className="flex gap-3">
                            <span className="text-purple-400 font-semibold">1.</span>
                            <span>Tap 💸 Transfer</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-purple-400 font-semibold">2.</span>
                            <span>Tap 📤 Send to Volume Wallets</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-purple-400 font-semibold">3.</span>
                            <span>Tap ✅ Confirm</span>
                          </li>
                          <li className="flex gap-3">
                            <span className="text-purple-400 font-semibold">4.</span>
                            <span>Wait for confirmation</span>
                          </li>
                        </ol>
                        <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                          <p className="text-sm text-yellow-400">⚠️ Important: Make sure your main wallet has enough SOL first!</p>
                        </div>
                        <div className="mt-2 p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                          <p className="text-sm text-cyan-400">💡 Tip: A 2% fee is automatically taken from all transfers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="buy-modes" className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2 font-display text-white">Buy Modes</h2>
                <p className="text-lg text-muted-foreground">
                  7 different buying strategies for volume generation and token acquisition
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
                  5 efficient selling strategies for portfolio management
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

              {/* Getting SOL Back */}
              <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">Getting Your SOL Back</h3>
                <p className="text-foreground/80 mb-4">When you're done trading and want your SOL back:</p>
                <ol className="space-y-2 text-foreground/80 mb-4">
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-semibold">1.</span>
                    <span>Tap 💸 Transfer</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-semibold">2.</span>
                    <span>Tap 📥 Return to Main Wallet</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-semibold">3.</span>
                    <span>Tap ✅ Confirm</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-semibold">4.</span>
                    <span>Wait for confirmation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-400 font-semibold">5.</span>
                    <span>Done! SOL returned to main wallet 💰</span>
                  </li>
                </ol>
                <div className="p-3 rounded-lg bg-background/50">
                  <p className="text-sm text-muted-foreground">💡 Note: Each wallet keeps 0.0009 SOL for rent</p>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2 font-display text-white">Settings & Help</h2>
                <p className="text-lg text-muted-foreground">
                  Customize the bot and get help when you need it
                </p>
              </div>

              {/* Customizing Settings */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-card-border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
                    <Settings className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-4">Customizing Settings</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-medium text-purple-400 mb-2">Changing Slippage</h4>
                        <p className="text-sm text-muted-foreground mb-2">Higher slippage = more likely to execute, but worse price</p>
                        <ol className="space-y-1 text-foreground/80 text-sm">
                          <li>1. Tap ⚙️ Settings → 💹 Slippage</li>
                          <li>2. Send new percentage (Example: 20 for 20%)</li>
                          <li>3. Saved! ✅</li>
                        </ol>
                        <div className="mt-2 p-2 rounded bg-cyan-500/10 border border-cyan-500/20">
                          <p className="text-xs text-cyan-400">💡 Recommended: 10-20% for volatile tokens</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-purple-400 mb-2">Changing Buy Amounts</h4>
                        <ol className="space-y-1 text-foreground/80 text-sm">
                          <li>1. Tap ⚙️ Settings → 📊 Buy Amounts</li>
                          <li>2. Choose: Min Buy / Max Buy / Micro Buy</li>
                          <li>3. Send new amount in SOL</li>
                          <li>4. Saved! ✅</li>
                        </ol>
                      </div>

                      <div>
                        <h4 className="font-medium text-purple-400 mb-2">Toggling JITO</h4>
                        <p className="text-sm text-muted-foreground mb-2">JITO provides MEV protection and faster execution</p>
                        <ol className="space-y-1 text-foreground/80 text-sm">
                          <li>1. Tap ⚙️ Settings → ⚡ JITO Toggle</li>
                          <li>2. Tap Turn ON or Turn OFF</li>
                          <li>3. Done! ⚡</li>
                        </ol>
                        <div className="mt-2 p-2 rounded bg-cyan-500/10 border border-cyan-500/20">
                          <p className="text-xs text-cyan-400">💡 Recommended: Keep JITO ON for better results</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Pro Tips */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-card-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-4">Pro Tips</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-medium text-green-400 mb-2">✅ Do:</h4>
                        <ul className="space-y-1 text-foreground/80 text-sm">
                          <li>• Start with small amounts first</li>
                          <li>• Use 10-20 wallets for better volume</li>
                          <li>• Keep JITO ON</li>
                          <li>• Check balances often</li>
                          <li>• Vary your buy amounts</li>
                          <li>• Use random delays</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-400 mb-2">❌ Don't:</h4>
                        <ul className="space-y-1 text-foreground/80 text-sm">
                          <li>• Use same buy amount every time</li>
                          <li>• Use zero delay between buys</li>
                          <li>• Forget to fund wallets first</li>
                          <li>• Sell before checking balance</li>
                          <li>• Share your bot with others</li>
                          <li>• Screenshot private keys</li>
                        </ul>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                      <h4 className="font-medium text-purple-400 mb-2">Understanding Fees</h4>
                      <p className="text-sm text-foreground/80">PumpDotVol automatically takes a 2% fee on all transactions.</p>
                      <div className="mt-2 text-sm text-muted-foreground">
                        <p>Example: Transfer 1 SOL → Fee: 0.02 SOL (2%) → You receive: 0.98 SOL</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Commands & Help */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-card-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
                    <HelpCircle className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-4">Getting Help</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-purple-400 mb-2">Quick Commands</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          <div className="p-3 rounded bg-background/50">
                            <code className="text-cyan-400">/start</code>
                            <p className="text-xs text-muted-foreground mt-1">Show main menu</p>
                          </div>
                          <div className="p-3 rounded bg-background/50">
                            <code className="text-cyan-400">/help</code>
                            <p className="text-xs text-muted-foreground mt-1">Get help</p>
                          </div>
                          <div className="p-3 rounded bg-background/50">
                            <code className="text-cyan-400">/stats</code>
                            <p className="text-xs text-muted-foreground mt-1">View statistics</p>
                          </div>
                          <div className="p-3 rounded bg-background/50">
                            <code className="text-cyan-400">/cancel</code>
                            <p className="text-xs text-muted-foreground mt-1">Cancel operation</p>
                          </div>
                        </div>
                        <div className="mt-3 p-3 rounded bg-cyan-500/10 border border-cyan-500/20">
                          <p className="text-sm text-cyan-400">💡 Tip: You don't need commands! Just use the buttons! 🎯</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-purple-400 mb-2">Common Issues</h4>
                        <div className="space-y-2 text-sm">
                          <div className="p-3 rounded bg-background/50">
                            <p className="font-medium text-foreground">"No wallets found"</p>
                            <p className="text-muted-foreground">→ Generate or import wallets first via Wallet Management</p>
                          </div>
                          <div className="p-3 rounded bg-background/50">
                            <p className="font-medium text-foreground">"Insufficient balance"</p>
                            <p className="text-muted-foreground">→ Check wallet balances and fund wallets via Transfer menu</p>
                          </div>
                          <div className="p-3 rounded bg-background/50">
                            <p className="font-medium text-foreground">"Transaction failed"</p>
                            <p className="text-muted-foreground">→ Try increasing slippage or check wallet has enough SOL</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <Card className="p-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/20 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Trading?</h3>
            <p className="text-muted-foreground mb-6">
              Open PumpDotVol on Telegram and start automating your Solana trading with simple button taps
            </p>
            <a href="http://t.me/parapack" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700"
                data-testid="button-launch-telegram"
              >
                Launch Bot on Telegram
              </Button>
            </a>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
