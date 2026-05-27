import React from 'react';
import { Rocket, Car, Globe, Sparkles, Settings, Compass } from 'lucide-react';

interface FallingItem {
  id: number;
  Icon: React.ComponentType<any>;
  left: string;
  delay: string;
  duration: string;
  size: string;
  colorClass: string;
  opacity: number;
  spinDirection: string;
}

export default function FallingBackground() {
  // Generate a stable list of falling items representing business, auto, & global launch elements
  const items: FallingItem[] = [
    {
      id: 1,
      Icon: Rocket,
      left: '4%',
      delay: '0s',
      duration: '18s',
      size: 'w-8 h-8 md:w-10 md:h-10',
      colorClass: 'text-neo-rose',
      opacity: 0.22,
      spinDirection: 'normal',
    },
    {
      id: 2,
      Icon: Car,
      left: '14%',
      delay: '-4s',
      duration: '22s',
      size: 'w-7 h-7 md:w-9 md:h-9',
      colorClass: 'text-neo-blue',
      opacity: 0.18,
      spinDirection: 'reverse',
    },
    {
      id: 3,
      Icon: Globe,
      left: '28%',
      delay: '-8s',
      duration: '25s',
      size: 'w-8 h-8 md:w-10 md:h-10',
      colorClass: 'text-neo-purple',
      opacity: 0.15,
      spinDirection: 'normal',
    },
    {
      id: 4,
      Icon: Sparkles,
      left: '39%',
      delay: '-2s',
      duration: '15s',
      size: 'w-6 h-6 md:w-8 md:h-8',
      colorClass: 'text-neo-yellow',
      opacity: 0.25,
      spinDirection: 'normal',
    },
    {
      id: 5,
      Icon: Settings,
      left: '52%',
      delay: '-11s',
      duration: '20s',
      size: 'w-7 h-7 md:w-9 md:h-9',
      colorClass: 'text-black',
      opacity: 0.12,
      spinDirection: 'reverse',
    },
    {
      id: 6,
      Icon: Compass,
      left: '64%',
      delay: '-5s',
      duration: '24s',
      size: 'w-8 h-8 md:w-9 md:h-9',
      colorClass: 'text-neo-orange',
      opacity: 0.16,
      spinDirection: 'normal',
    },
    {
      id: 7,
      Icon: Rocket,
      left: '76%',
      delay: '-14s',
      duration: '19s',
      size: 'w-7 h-7 md:w-9 md:h-9',
      colorClass: 'text-neo-yellow',
      opacity: 0.2,
      spinDirection: 'normal',
    },
    {
      id: 8,
      Icon: Car,
      left: '88%',
      delay: '-1s',
      duration: '21s',
      size: 'w-8 h-8 md:w-10 md:h-10',
      colorClass: 'text-neo-rose',
      opacity: 0.18,
      spinDirection: 'reverse',
    },
    {
      id: 9,
      Icon: Sparkles,
      left: '94%',
      delay: '-7s',
      duration: '16s',
      size: 'w-6 h-6 md:w-7 md:h-7',
      colorClass: 'text-neo-sky',
      opacity: 0.24,
      spinDirection: 'normal',
    },
    {
      id: 10,
      Icon: Globe,
      left: '21%',
      delay: '-12s',
      duration: '27s',
      size: 'w-8 h-8',
      colorClass: 'text-neo-orange',
      opacity: 0.14,
      spinDirection: 'normal',
    },
    {
      id: 11,
      Icon: Settings,
      left: '45%',
      delay: '-15s',
      duration: '23s',
      size: 'w-7 h-7',
      colorClass: 'text-neo-rose',
      opacity: 0.15,
      spinDirection: 'reverse',
    },
    {
      id: 12,
      Icon: Rocket,
      left: '82%',
      delay: '-9s',
      duration: '20s',
      size: 'w-8 h-8 md:w-9 md:h-9',
      colorClass: 'text-neo-blue',
      opacity: 0.18,
      spinDirection: 'normal',
    }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <style>{`
        @keyframes dynamicFall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--item-opacity, 0.2);
          }
          90% {
            opacity: var(--item-opacity, 0.2);
          }
          100% {
            transform: translateY(115vh) rotate(var(--spin-deg, 360deg));
            opacity: 0;
          }
        }
        .falling-element {
          animation-name: dynamicFall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      `}</style>
      
      {items.map((item) => {
        const { Icon } = item;
        const spinDeg = item.spinDirection === 'reverse' ? '-360deg' : '360deg';
        
        return (
          <div
            key={item.id}
            className="falling-element absolute"
            style={{
              left: item.left,
              animationDelay: item.delay,
              animationDuration: item.duration,
              top: '-10%',
              // @ts-ignore
              '--item-opacity': item.opacity,
              '--spin-deg': spinDeg,
            }}
          >
            <div className={`p-1.5 rounded-lg border-2 border-black/10 bg-white/5 shadow-sm backdrop-blur-[1px] ${item.colorClass}`}>
              <Icon className={item.size} strokeWidth={2.5} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
