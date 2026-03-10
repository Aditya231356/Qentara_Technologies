"use client";

import { 
  Brain, 
  Cpu, 
  Database, 
  Globe, 
  Cloud, 
  Code2, 
  Layout, 
  Server, 
  Bot, 
  Sparkles, 
  Boxes, 
  Network,
  Workflow,
  Microscope,
  Gauge,
  Zap,
  Terminal,
  Smartphone,
  Watch,
  Headphones,
  Camera,
  Film,
  Music,
  Gamepad2,
  Lock,
  Shield,
  Key,
  Wallet,
  CreditCard,
  Building2,
  Factory,
  Rocket,
  Satellite,
  Binary,
  Variable,
  Braces,
  Parentheses,
  Hash,
  AtSign,
  Link2,
  Wifi,
  Bluetooth,
  Speaker,
  Monitor,
  Laptop,
  HardDrive,
  Disc,
  WifiOff,
  CloudOff,
  FileCode,
  FileJson,
  FileType,
  Bug,
  FlaskConical,
  TestTube,
  Atom,
  Beaker,
  Box,
  Archive,
  Inbox,
  Mail,
  MessageSquare,
  Phone,
  Video,
  Mic,
  Radio,
  Tv,
  Cast,
  Airplay,
  Layers,
  Grid,
  AlignCenter,
  Maximize,
  Minimize,
  ZoomIn,
  ZoomOut,
  Move,
  MousePointer,
  Hand,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Pentagon,
  Octagon,
  Diamond,
  Star,
  Heart,
  Smile,
  Frown,
  Meh
} from "lucide-react";

const techIcons = [
  { icon: Brain, name: "AI", color: "text-cyan-400", size: 24, delay: 0 },
  { icon: Cpu, name: "ML", color: "text-purple-400", size: 20, delay: 0.2 },
  { icon: Database, name: "Data", color: "text-emerald-400", size: 22, delay: 0.4 },
  { icon: Globe, name: "Web", color: "text-blue-400", size: 18, delay: 0.6 },
  { icon: Cloud, name: "Cloud", color: "text-sky-400", size: 26, delay: 0.8 },
  { icon: Code2, name: "Code", color: "text-pink-400", size: 20, delay: 1.0 },
  { icon: Layout, name: "UI/UX", color: "text-orange-400", size: 22, delay: 1.2 },
  { icon: Server, name: "Server", color: "text-indigo-400", size: 18, delay: 1.4 },
  { icon: Bot, name: "Bot", color: "text-rose-400", size: 24, delay: 1.6 },
  { icon: Sparkles, name: "GenAI", color: "text-yellow-400", size: 20, delay: 1.8 },
  { icon: Boxes, name: "System", color: "text-teal-400", size: 22, delay: 2.0 },
  { icon: Network, name: "IoT", color: "text-violet-400", size: 18, delay: 2.2 },
  { icon: Workflow, name: "API", color: "text-amber-400", size: 20, delay: 2.4 },
  { icon: Microscope, name: "Research", color: "text-lime-400", size: 22, delay: 2.6 },
  { icon: Gauge, name: "Analytics", color: "text-red-400", size: 18, delay: 2.8 },
  { icon: Zap, name: "Fast", color: "text-cyan-300", size: 20, delay: 3.0 },
  { icon: Terminal, name: "CLI", color: "text-green-400", size: 22, delay: 3.2 },
  { icon: Smartphone, name: "Mobile", color: "text-blue-500", size: 20, delay: 3.4 },
  { icon: Watch, name: "Wearable", color: "text-purple-500", size: 18, delay: 3.6 },
  { icon: Lock, name: "Security", color: "text-yellow-500", size: 22, delay: 3.8 },
  { icon: Shield, name: "Protection", color: "text-cyan-500", size: 24, delay: 4.0 },
  { icon: Rocket, name: "DevOps", color: "text-orange-500", size: 20, delay: 4.2 },
  { icon: Binary, name: "Binary", color: "text-pink-500", size: 18, delay: 4.4 },
  { icon: Variable, name: "Variables", color: "text-emerald-500", size: 20, delay: 4.6 },
  { icon: Braces, name: "JSON", color: "text-indigo-500", size: 22, delay: 4.8 },
  { icon: Wifi, name: "Wireless", color: "text-sky-500", size: 18, delay: 5.0 },
  { icon: Bluetooth, name: "Bluetooth", color: "text-blue-300", size: 20, delay: 5.2 },
  { icon: Monitor, name: "Display", color: "text-purple-300", size: 24, delay: 5.4 },
  { icon: Laptop, name: "Laptop", color: "text-teal-300", size: 22, delay: 5.6 },
  { icon: HardDrive, name: "Storage", color: "text-rose-300", size: 20, delay: 5.8 },
  { icon: FileCode, name: "Source", color: "text-amber-300", size: 18, delay: 6.0 },
  { icon: Bug, name: "Debug", color: "text-red-300", size: 22, delay: 6.2 },
  { icon: Atom, name: "React", color: "text-cyan-400", size: 20, delay: 6.4 },
  { icon: Layers, name: "FullStack", color: "text-violet-400", size: 24, delay: 6.6 },
  { icon: Box, name: "Docker", color: "text-blue-400", size: 22, delay: 6.8 },
  { icon: Disc, name: "CDN", color: "text-orange-400", size: 20, delay: 7.0 },
  { icon: Radio, name: "Real-time", color: "text-pink-400", size: 18, delay: 7.2 },
  { icon: Cast, name: "Streaming", color: "text-emerald-400", size: 22, delay: 7.4 },
  { icon: CloudOff, name: "Edge", color: "text-amber-400", size: 20, delay: 7.6 },
  { icon: TestTube, name: "Testing", color: "text-lime-400", size: 24, delay: 7.8 },
  { icon: Factory, name: "Industry", color: "text-slate-400", size: 22, delay: 8.0 },
  { icon: Building2, name: "Enterprise", color: "text-zinc-400", size: 20, delay: 8.2 },
  { icon: Wallet, name: "Web3", color: "text-yellow-400", size: 18, delay: 8.4 },
  { icon: Key, name: "Auth", color: "text-cyan-400", size: 22, delay: 8.6 },
];

const desktopPositions = [
  { left: '3%', top: '8%' }, { left: '8%', top: '25%' }, { left: '5%', top: '45%' }, { left: '10%', top: '65%' },
  { left: '7%', top: '85%' }, { left: '18%', top: '12%' }, { left: '22%', top: '35%' }, { left: '20%', top: '55%' },
  { left: '25%', top: '75%' }, { left: '15%', top: '92%' }, { left: '35%', top: '8%' }, { left: '38%', top: '28%' },
  { left: '32%', top: '50%' }, { left: '40%', top: '72%' }, { left: '35%', top: '90%' }, { left: '50%', top: '15%' },
  { left: '52%', top: '38%' }, { left: '48%', top: '60%' }, { left: '55%', top: '82%' }, { left: '45%', top: '95%' },
  { left: '62%', top: '10%' }, { left: '65%', top: '32%' }, { left: '60%', top: '55%' }, { left: '68%', top: '78%' },
  { left: '63%', top: '92%' }, { left: '75%', top: '18%' }, { left: '78%', top: '40%' }, { left: '72%', top: '62%' },
  { left: '80%', top: '85%' }, { left: '70%', top: '5%' }, { left: '85%', top: '25%' }, { left: '88%', top: '48%' },
  { left: '82%', top: '70%' }, { left: '90%', top: '90%' }, { left: '95%', top: '12%' }, { left: '92%', top: '35%' },
  { left: '97%', top: '58%' }, { left: '94%', top: '80%' }, { left: '50%', top: '45%' }, { left: '30%', top: '40%' },
];

// Pre-computed animation durations to avoid Math.random() in render
const desktopDurations = [6, 7, 8, 5, 7, 6, 8, 5, 7, 6, 8, 5, 7, 6, 8, 5, 7, 6, 8, 5, 7, 6, 8, 5, 7, 6, 8, 5, 7, 6, 8, 5, 7, 6, 8, 5, 7, 6, 8, 5];

const tabletPositions = [
  { left: '5%', top: '10%' }, { left: '15%', top: '30%' }, { left: '8%', top: '50%' }, { left: '20%', top: '70%' },
  { left: '12%', top: '90%' }, { left: '35%', top: '8%' }, { left: '40%', top: '28%' }, { left: '38%', top: '50%' },
  { left: '45%', top: '72%' }, { left: '35%', top: '92%' }, { left: '60%', top: '12%' }, { left: '65%', top: '35%' },
  { left: '58%', top: '58%' }, { left: '68%', top: '80%' }, { left: '55%', top: '95%' }, { left: '80%', top: '15%' },
  { left: '85%', top: '40%' }, { left: '78%', top: '65%' }, { left: '88%', top: '88%' }, { left: '92%', top: '25%' },
];

const mobilePositions = [
  { left: '5%', top: '10%' }, { left: '70%', top: '8%' }, { left: '15%', top: '35%' }, { left: '80%', top: '32%' },
  { left: '10%', top: '60%' }, { left: '75%', top: '58%' }, { left: '20%', top: '85%' }, { left: '85%', top: '82%' },
  { left: '40%', top: '5%' }, { left: '45%', top: '45%' }, { left: '50%', top: '75%' }, { left: '35%', top: '95%' },
];

function getPosition(index: number, positions: {left: string, top: string}[]) {
  return positions[index % positions.length];
}

export default function FloatingTechIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Desktop icons - show 40 */}
      <div className="hidden lg:block">
        {techIcons.slice(0, 40).map((tech, index) => {
          const position = getPosition(index, desktopPositions);
          return (
            <div
              key={`desktop-${index}`}
              className="absolute animate-float opacity-25"
              style={{
                left: position.left,
                top: position.top,
                animationDelay: `${tech.delay}s`,
                animationDuration: `${desktopDurations[index]}s`,
                willChange: 'transform',
                transform: 'translate3d(0,0,0)',
              }}
            >
              <div className="relative flex flex-col items-center">
                <div 
                  className={tech.color}
                  style={{ filter: 'drop-shadow(0 0 6px currentColor)' }}
                >
                  <tech.icon size={tech.size} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Tablet icons - show 20 */}
      <div className="hidden md:block lg:hidden">
        {techIcons.slice(0, 20).map((tech, index) => {
          const position = getPosition(index, tabletPositions);
          return (
            <div
              key={`tablet-${index}`}
              className="absolute animate-float opacity-30"
              style={{
                left: position.left,
                top: position.top,
                animationDelay: `${tech.delay}s`,
                animationDuration: `${desktopDurations[index]}s`,
                willChange: 'transform',
                transform: 'translate3d(0,0,0)',
              }}
            >
              <div className="relative flex flex-col items-center">
                <div 
                  className={tech.color}
                  style={{ filter: 'drop-shadow(0 0 6px currentColor)' }}
                >
                  <tech.icon size={tech.size * 0.9} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Mobile icons - show 12 */}
      <div className="md:hidden">
        {techIcons.slice(0, 12).map((tech, index) => {
          const position = getPosition(index, mobilePositions);
          return (
            <div
              key={`mobile-${index}`}
              className="absolute animate-float opacity-35"
              style={{
                left: position.left,
                top: position.top,
                animationDelay: `${tech.delay}s`,
                animationDuration: `${desktopDurations[index]}s`,
                willChange: 'transform',
                transform: 'translate3d(0,0,0)',
              }}
            >
              <div className="relative flex flex-col items-center">
                <div 
                  className={tech.color}
                  style={{ filter: 'drop-shadow(0 0 6px currentColor)' }}
                >
                  <tech.icon size={tech.size * 0.85} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

