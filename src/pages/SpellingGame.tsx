
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, Eraser } from 'lucide-react';
import { LETTERS } from '../data/letterPaths';
import useSound from '../hooks/useSound';
import { LetterConfig } from '../types';
import RewardAnimation from '@/components/RewardAnimation';

const SpellingGame: React.FC = () => {
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState<LetterConfig | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [showReward, setShowReward] = useState(false);
  
  const { playSuccess, playError } = useSound();

  useEffect(() => {
    generateLevel();
  }, []);

  const generateLevel = () => {
    const validLetters = LETTERS.filter(l => l.word && /^[A-Z]$/.test(l.char));
    const newTarget = validLetters[Math.floor(Math.random() * validLetters.length)];
    
    const distractors = validLetters
        .filter(l => l.id !== newTarget.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 2)
        .map(l => l.char);

    const newOptions = [newTarget.char, ...distractors].sort(() => 0.5 - Math.random());

    setTarget(newTarget);
    setOptions(newOptions);
    setShowReward(false);
  };

  const handleOptionClick = (char: string) => {
    if (!target) return;

    if (char === target.char) {
      playSuccess();
      setScore(s => s + 20);
      setShowReward(true);
      setTimeout(generateLevel, 2000);
    } else {
      playError();
    }
  };

  if (!target) return null;

  const wordLetters = target.word!.split('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-300 to-amber-500 flex flex-col items-center p-6">
      
      <div className="w-full max-w-lg flex justify-between items-center mb-8">
        <Link to="/games" className="p-3 bg-white rounded-full shadow-lg text-orange-600 hover:scale-105 transition">
          <ArrowLeft size={32} />
        </Link>
        <div className="flex items-center gap-3 bg-white/20 backdrop-blur-lg px-6 py-2 rounded-full border-2 border-white/40 shadow-xl">
          <Star className="text-yellow-300 fill-current drop-shadow-md animate-pulse" size={32} />
          <span className="text-4xl font-black text-white drop-shadow-md font-fredoka">{score}</span>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-white mb-6 font-fredoka drop-shadow-sm">Spell the Word!</h1>

      <motion.div 
        key={target.id}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl p-8 shadow-2xl mb-8 flex flex-col items-center border-8 border-white/50 w-full max-w-sm"
      >
        <div className="text-9xl mb-4 filter drop-shadow-lg">{target.emoji}</div>
        
        <div className="flex items-center gap-2 mt-4">
           <div className="w-14 h-16 bg-gray-100 rounded-xl border-4 border-dashed border-gray-400 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-300">?</span>
           </div>
           <div className="flex gap-1">
             {target.word!.split('').slice(1).map((char, idx) => (
               <div key={idx} className="w-10 h-14 bg-orange-100 rounded-lg flex items-center justify-center border-b-4 border-orange-200">
                  <span className="text-3xl font-bold text-orange-800 font-fredoka">{char.toUpperCase()}</span>
               </div>
             ))}
           </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-3 gap-6 w-full max-w-lg">
        {options.map((opt, idx) => (
          <motion.button
            key={idx}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleOptionClick(opt)}
            className="bg-white rounded-2xl aspect-square shadow-[0_8px_0_rgba(0,0,0,0.1)] flex items-center justify-center text-6xl font-black font-fredoka text-gray-800 border-b-8 border-gray-200 active:border-b-0 active:translate-y-2 transition-all"
          >
            {opt}
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {showReward && <RewardAnimation onComplete={() => {}} />}
      </AnimatePresence>
    </div>
  );
};

export default SpellingGame;
