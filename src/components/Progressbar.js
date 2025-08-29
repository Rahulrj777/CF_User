import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const Progressbar = () => {
  const { scrollYProgress } = useScroll();

  // Define the eight colors
  const colors = [
    '#ff0000', // Red
    '#ff7f00', // Orange
    '#ffff00', // Yellow
    '#f0f8ff', // Green
    '#f8f8ff', // Light White
    '#00ff7f', // Spring Green
    '#00ffff', // Cyan
    '#fbfbfb', // Azure
  ];

  // Create an array of scroll positions from 0 to 1 divided into 8 sections
  const scrollPositions = Array.from({ length: colors.length }, (_, i) => i / (colors.length - 1));

  // Map the scrollYProgress to the corresponding color
  const backgroundColor = useTransform(scrollYProgress, scrollPositions, colors);

  // Use spring for smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 md:h-2 origin-left z-50"
      style={{ scaleX, backgroundColor }}
    />
  );
};

export default Progressbar; 



