'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  className?: string;

  delay?: number;
  duration?: number;

  y?: number;
  x?: number;

  once?: boolean;

  amount?: number;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.9,
  y = 45,
  x = 0,
  once = true,
  amount = 0.85,
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y,
          x,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: `top ${amount * 100}%`,
            once,
          },
        }
      );
    }, element);

    return () => {
      context.revert();
    };
  }, [delay, duration, y, x, once, amount]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}