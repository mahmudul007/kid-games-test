import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star } from 'lucide-react';
import { LETTERS } from '../data/letterPaths';
import useSound from '../hooks/useSound';
import LetterTracer from '../components/LetterTracer';
import RewardAnimation from '../components/RewardAnimation';
import { LetterConfig } from '../types';

const Game: React.FC = () => {
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState<LetterConfig | null>(null);
  const [roundKey, setRoundKey] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [shake, setShake] = useState(false);
  
  const { playError } = useSound();

  // Initialize game
  useEffect(() => {
    startNewRound();
  }, []);

  const startNewRound = () => {
    const randomTarget = LETTERS[Math.floor(Math.random() * LETTERS.length)];
    setTarget(randomTarget);
    setRoundKey(prev => prev + 1);
    setShowReward(false);
  };

  const handleLevelComplete = () => {
    setScore(s => s + 100);
    setShowReward(true);
    
    // Delay next round for celebration
    setTimeout(() => {
      startNewRound();
    }, 2500);
  };

  const handleTraceError = () => {
    // Visual feedback for error (shake animation)
    playError();
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  if (!target) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-400 to-fuchsia-400 flex flex-col items-center p-4">
      {/* Header with Score */}
      <div className="w-full max-w-lg flex justify-between items-center mb-6 z-10">
        <Link to="/" className="p-3 bg-white rounded-full shadow-lg text-purple-600 hover:scale-105 transition">
          <ArrowLeft size={32} />
        </Link>
        
        <div className="flex items-center gap-3 bg-white/20 backdrop-blur-lg px-6 py-2 rounded-full border-2 border-white/40 shadow-xl">
          <Star className="text-yellow-300 fill-current drop-shadow-md animate-pulse" size={32} />
          <span className="text-4xl font-black text-white drop-shadow-md font-fredoka">{score}</span>
        </div>
      </div>

      {/* Game Card */}
      <motion.div 
        animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="w-full max-w-lg bg-white/90 backdrop-blur-sm rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] p-4 border-4 border-white flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold text-purple-900 font-fredoka mb-2">Trace It!</h2>
        
        {/* We use key={roundKey} to force the LetterTracer to completely reset its state (Demo mode, strokes) when round changes */}
        <LetterTracer 
          key={roundKey}
          letter={target}
          onComplete={handleLevelComplete}
          onError={handleTraceError}
          hideHeader={true}
        />
      </motion.div>

      <p className="mt-8 text-white/80 font-medium text-lg drop-shadow-sm text-center">
        Complete the letter to earn points!
      </p>

      {/* Global Reward Overlay */}
      <AnimatePresence>
        {showReward && <RewardAnimation onComplete={() => {}} />}
      </AnimatePresence>
    </div>
  );
};

export default Game;