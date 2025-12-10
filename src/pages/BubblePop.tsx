
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, Volume2 } from 'lucide-react';
import { LETTERS } from '../data/letterPaths';
import useSound from '../hooks/useSound';

interface Bubble {
  id: number;
  char: string;
  x: number;
  size: number;
  speed: number;
  color: string;
}

const COLORS = ["#FF5252", "#448AFF", "#69F0AE", "#E040FB", "#FFAB40", "#40C4FF"];

const BubblePop: React.FC = () => {
  const [score, setScore] = useState(0);
  const [targetChar, setTargetChar] = useState('');
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const { playSuccess, playPop, playError, playPhonics } = useSound();

  useEffect(() => {
    pickNewTarget();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      spawnBubble();
    }, 1200);
    return () => clearInterval(interval);
  }, [targetChar]);

  const pickNewTarget = () => {
    const randomLetter = LETTERS[Math.floor(Math.random() * LETTERS.length)].char;
    setTargetChar(randomLetter);
    playPhonics(randomLetter);
  };

  const spawnBubble = () => {
    const id = Date.now() + Math.random();
    const isTarget = Math.random() < 0.4;
    
    let char = targetChar;
    if (!isTarget || !char) {
      char = LETTERS[Math.floor(Math.random() * LETTERS.length)].char;
    }

    const newBubble: Bubble = {
      id,
      char,
      x: Math.random() * 80 + 10,
      size: Math.random() * 40 + 80,
      speed: Math.random() * 5 + 5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    };

    setBubbles(prev => [...prev, newBubble]);

    setTimeout(() => {
      setBubbles(prev => prev.filter(b => b.id !== id));
    }, 11000);
  };

  const handleBubbleClick = (id: number, char: string) => {
    if (char === targetChar) {
      playPop();
      playSuccess();
      setScore(s => s + 10);
      setBubbles(prev => prev.filter(b => b.id !== id));
      setTimeout(() => pickNewTarget(), 500);
    } else {
      playError();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-300 to-blue-500 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20">
        <Link to="/games" className="p-3 bg-white rounded-full shadow-lg text-blue-500 hover:scale-105 transition">
          <ArrowLeft size={32} />
        </Link>
        
        <div className="bg-white/90 px-8 py-4 rounded-3xl shadow-xl border-4 border-blue-200 flex items-center gap-4">
           <span className="text-gray-500 font-bold uppercase text-sm">Find:</span>
           <span className="text-5xl font-black text-blue-600 font-fredoka">{targetChar}</span>
           <button onClick={() => playPhonics(targetChar)} className="p-2 bg-blue-100 rounded-full hover:bg-blue-200">
             <Volume2 size={24} className="text-blue-600" />
           </button>
        </div>

        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/40">
          <Star className="text-yellow-300 fill-current" size={24} />
          <span className="text-2xl font-bold text-white font-fredoka">{score}</span>
        </div>
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <AnimatePresence>
          {bubbles.map(bubble => (
            <BubbleItem 
              key={bubble.id} 
              bubble={bubble} 
              onClick={() => handleBubbleClick(bubble.id, bubble.char)} 
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-blue-900/40 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-4 left-10 text-6xl opacity-30 animate-bounce">🦀</div>
      <div className="absolute bottom-8 right-20 text-6xl opacity-30 animate-pulse">🐠</div>
    </div>
  );
};

const BubbleItem: React.FC<{ bubble: Bubble; onClick: () => void }> = ({ bubble, onClick }) => {
  return (
    <motion.div
      initial={{ y: "110vh", opacity: 0, scale: 0.5 }}
      animate={{ y: "-20vh", opacity: 1, scale: 1 }}
      exit={{ scale: 1.5, opacity: 0 }}
      transition={{ 
        duration: bubble.speed, 
        ease: "linear",
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }}
      style={{
        left: `${bubble.x}%`,
        width: bubble.size,
        height: bubble.size,
      }}
      className="absolute flex items-center justify-center cursor-pointer pointer-events-auto"
      onClick={onClick}
    >
      <div 
        className="w-full h-full rounded-full flex items-center justify-center shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.1),0_10px_20px_rgba(0,0,0,0.1)] border-2 border-white/30 backdrop-blur-sm relative"
        style={{ backgroundColor: bubble.color }}
      >
        <div className="absolute top-4 left-4 w-1/3 h-1/4 bg-white/40 rounded-full -rotate-45" />
        <span className="text-5xl font-black text-white drop-shadow-md select-none font-fredoka">
          {bubble.char}
        </span>
      </div>
    </motion.div>
  );
};

export default BubblePop;
