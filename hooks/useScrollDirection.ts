'use client';

import { useEffect, useRef, useState } from 'react';

type ScrollDirection = 'up' | 'down' | null;

export default function useScrollDirection(
  threshold = 10
): ScrollDirection {
  const [direction, setDirection] =
    useState<ScrollDirection>(null);

  const previousScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (
        Math.abs(
          currentScrollY - previousScrollY.current
        ) < threshold
      ) {
        return;
      }

      if (currentScrollY <= 80) {
        setDirection(null);
        previousScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > previousScrollY.current) {
        setDirection('down');
      } else {
        setDirection('up');
      }

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
    };
  }, [threshold]);

  return direction;
}