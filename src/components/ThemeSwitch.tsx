'use client';
import { useTheme } from '../context/theme-context-provider';
import React from 'react';
import { motion } from 'framer-motion';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="z-[1000] fixed bottom-5 right-5 bg-background w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] shadow-foreground shadow-md rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </motion.button>
  );
}
