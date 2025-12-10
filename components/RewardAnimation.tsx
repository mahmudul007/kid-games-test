import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

interface RewardAnimationProps {
  onComplete: () => void;
}

const RewardAnimation: React.FC<RewardAnimationProps> = ({ onComplete }) => {
  useEffect(() => {
    // Fire confetti
    const duration = 2000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF5252', '#448AFF', '#69F0AE', '#E040FB', '#FFAB40']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF5252', '#448AFF', '#69F0AE', '#E040FB', '#FFAB40']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.2, 1], opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
    >
      <div className="text-9xl filter drop-shadow-xl animate-bounce">
        🌟
      </div>
    </motion.div>
  );
};

export default RewardAnimation;