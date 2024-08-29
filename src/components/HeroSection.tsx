'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Star,
  Sparkles,
  MessageCircle,
  BarChart,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import SubmitButton from './submit-button';

const features = [
  { icon: MessageCircle, text: 'Collect testimonials effortlessly' },
  { icon: Star, text: 'Curate and showcase the best feedback' },
  { icon: Sparkles, text: 'Customizable display options' },
  { icon: BarChart, text: 'Boost credibility and conversions' },
];

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <motion.div
            className="space-y-4 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Turn Customer Voices into Your{' '}
              <span className="text-primary">Strongest Asset</span>
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
              Kudos Craft: Collect, curate, and showcase testimonials that drive
              trust and boost conversions.
            </p>
          </motion.div>

          <motion.div
            className="w-full max-w-md space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your work email"
                className="flex-1"
              />
              <SubmitButton>Get Started</SubmitButton>
            </div>
            <p className="text-xs text-muted-foreground">
              14-day free trial. No credit card required.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center space-y-2 p-4 bg-card rounded-lg shadow-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <feature.icon className="h-8 w-8 text-primary" />
                <p className="text-sm font-medium text-center">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
