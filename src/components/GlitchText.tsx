import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
}

export default function GlitchText({ text, className, as: Component = 'h1' }: GlitchTextProps) {
  return (
    <div className={cn("relative inline-block group", className)}>
      <Component className="relative z-10 text-glow-neon">
        {text}
      </Component>
      <Component 
        className="absolute top-0 left-0 -z-10 text-red-500 opacity-70 translate-x-[2px] translate-y-[1px] group-hover:animate-pulse"
        aria-hidden="true"
      >
        {text}
      </Component>
      <Component 
        className="absolute top-0 left-0 -z-20 text-blue-500 opacity-70 -translate-x-[2px] -translate-y-[1px] group-hover:animate-pulse"
        aria-hidden="true"
      >
        {text}
      </Component>
    </div>
  );
}
