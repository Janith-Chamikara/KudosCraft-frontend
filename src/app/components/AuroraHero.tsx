'use client';
import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useEffect } from 'react';

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from './Header';

type AuroraHeroProps = {
  heading: string;
  buttonText: string;
  content: string;
};

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C'];

export const AuroraHero = ({
  heading,
  content,
  buttonText,
}: AuroraHeroProps) => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(150% 150% at 50% 100%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="w-[100%] relative grid min-h-screen overflow-hidden bg-gray-950 px-4  text-[var(--text-1)]"
    >
      <Header />
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          style={{
            border,
            boxShadow,
          }}
          className="max-w-3xl bg-gradient-to-br from-[var(--text-1)] to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl px-4 md:px-10 py-8 md:leading-tight rounded-xl"
        >
          {heading}
        </motion.h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          {content}
        </p>
        <motion.div
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          whileTap={{
            scale: 0.985,
          }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 transition-colors hover:bg-gray-950/50"
        >
          <Button className="bg-transparent text-[var(--text-3)] hover:bg-transparent">
            {buttonText}
          </Button>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={1500} factor={2} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
