import React, { useState, useEffect, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star, Type, CaseLower, Hash } from 'lucide-react';
import { LETTERS } from '../data/letterPaths';
import useSound from '../hooks/useSound';
import LetterTracer from '../components/LetterTracer';
import { LetterConfig } from '../types';
import RewardAnimation from '@/components/RewardAnimation';

type Category = 'uppercase' | 'lowercase' | 'numbers';

const TraceChallenge: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [view, setView] = useState<'list' | 'game'>('list');
  const [category, setCategory] = useState<Category>('uppercase');
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState<LetterConfig | null>(null);
  const [roundKey, setRoundKey] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [shake, setShake] = useState(false);
  
  const { playError } = useSound();

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat === 'uppercase' || cat === 'lowercase' || cat === 'numbers') {
      setCategory(cat as Category);
    }
  }, [searchParams]);

  const filteredLetters = useMemo(() => {
    switch (category) {
      case 'uppercase':
        return LETTERS.filter(l => /^[A-Z]$/.test(l.char));
      case 'lowercase':
        return LETTERS.filter(l => /^[a-z]$/.test(l.char));
      case 'numbers':
        return LETTERS.filter(l => /^[0-9]$/.test(l.char));
      default:
        return LETTERS;
    }
  }, [category]);

  useEffect(() => {
    // If we are in game mode but no target, go back to list
    if (view === 'game' && !target) {
      setView('list');
    }
  }, [view, target]);

  const selectLetter = (letter: LetterConfig) => {
    setTarget(letter);
    setView('game');
    setRoundKey(prev => prev + 1);
    setShowReward(false);
  };

  const handleLevelComplete = () => {
    setScore(s => s + 100);
    setShowReward(true);
    setTimeout(() => {
      // Go back to list to pick another one.
      setView('list');
      setTarget(null);
    }, 2500);
  };

  const handleTraceError = () => {
    playError();
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-400 to-fuchsia-400 flex flex-col items-center p-4">
      <div className="w-full max-w-4xl flex justify-between items-center mb-6 z-10">
        {view === 'game' ? (
          <button 
            onClick={() => setView('list')} 
            className="p-3 bg-white rounded-full shadow-lg text-purple-600 hover:scale-105 transition"
          >
            <ArrowLeft size={32} />
          </button>
        ) : (
          <Link to="/games" className="p-3 bg-white rounded-full shadow-lg text-purple-600 hover:scale-105 transition">
            <ArrowLeft size={32} />
          </Link>
        )}
        
        <div className="flex items-center gap-3 bg-white/20 backdrop-blur-lg px-6 py-2 rounded-full border-2 border-white/40 shadow-xl">
          <Star className="text-yellow-300 fill-current drop-shadow-md animate-pulse" size={32} />
          <span className="text-4xl font-black text-white drop-shadow-md font-fredoka">{score}</span>
        </div>
      </div>

      {view === 'list' ? (
        <div className="w-full max-w-6xl flex flex-col items-center">
          <h1 className="text-4xl font-black text-white text-center mb-6 font-fredoka drop-shadow-md">
            Choose a Letter
          </h1>

          {/* Category Tabs */}
          <div className="flex bg-white/20 backdrop-blur-md p-1 rounded-2xl shadow-lg border border-white/30 mb-8">
            <button
              onClick={() => setCategory('uppercase')}
              className={`flex items-center px-6 py-3 rounded-xl font-bold transition-all ${
                category === 'uppercase' ? 'bg-white text-violet-600 shadow-md' : 'text-white/70 hover:bg-white/10'
              }`}
            >
              <Type size={20} className="mr-2" /> ABC
            </button>
            <button
              onClick={() => setCategory('lowercase')}
              className={`flex items-center px-6 py-3 rounded-xl font-bold transition-all ${
                category === 'lowercase' ? 'bg-white text-violet-600 shadow-md' : 'text-white/70 hover:bg-white/10'
              }`}
            >
              <CaseLower size={20} className="mr-2" /> abc
            </button>
            <button
              onClick={() => setCategory('numbers')}
              className={`flex items-center px-6 py-3 rounded-xl font-bold transition-all ${
                category === 'numbers' ? 'bg-white text-violet-600 shadow-md' : 'text-white/70 hover:bg-white/10'
              }`}
            >
              <Hash size={20} className="mr-2" /> 123
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 pb-10 w-full">
            {filteredLetters.map((letter) => (
              <motion.div
                key={letter.id}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => selectLetter(letter)}
                className="cursor-pointer bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center border-2 border-white/50 aspect-square"
              >
                <span 
                  className="text-5xl font-black font-fredoka mb-2" 
                  style={{ color: letter.strokes[0].color }}
                >
                  {letter.char}
                </span>
                {letter.word ? (
                  <div className="flex flex-col items-center">
                    <span className="text-2xl mb-1">{letter.emoji}</span>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{letter.word}</span>
                  </div>
                ) : (
                  <span className="text-xs font-bold text-gray-400 uppercase">Trace Me</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        target && (
          <>
            {/* Word & Emoji Hint */}
            {target.word && (
              <motion.div 
                key={target.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex flex-col items-center"
              >
                <div className="text-7xl mb-2 filter drop-shadow-lg">{target.emoji}</div>
                <div className="bg-white/30 backdrop-blur-md px-6 py-1 rounded-full border border-white/50">
                   <span className="text-2xl font-bold text-white uppercase tracking-wider font-fredoka">{target.word}</span>
                </div>
              </motion.div>
            )}

            <motion.div 
              animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
              transition={{ duration: 0.4 }}
              className="w-full max-w-lg bg-white/90 backdrop-blur-sm rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.2)] p-6 border-4 border-white flex flex-col items-center"
            >
              <LetterTracer 
                key={roundKey}
                letter={target}
                onComplete={handleLevelComplete}
                onError={handleTraceError}
                hideHeader={true}
              />
            </motion.div>
          </>
        )
      )}

      <AnimatePresence>
        {showReward && <RewardAnimation onComplete={() => {}} />}
      </AnimatePresence>
    </div>
  );
};

export default TraceChallenge;
