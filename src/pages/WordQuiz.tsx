
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Star } from 'lucide-react';
import { LETTERS } from '../data/letterPaths';
import useSound from '../hooks/useSound';
import RewardAnimation from '@/components/RewardAnimation';

const WordQuiz: React.FC = () => {
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState<any>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [showReward, setShowReward] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const { playSuccess, playError } = useSound();

  useEffect(() => {
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const candidates = LETTERS.filter(l => l.word && l.emoji && /^[A-Z]$/.test(l.char));
    const target = candidates[Math.floor(Math.random() * candidates.length)];
    
    const distractors = candidates
      .filter(l => l.id !== target.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2)
      .map(l => l.char);

    const opts = [target.char, ...distractors].sort(() => 0.5 - Math.random());

    setQuestion(target);
    setOptions(opts);
    setSelected(null);
    setShowReward(false);
  };

  const handleOptionClick = (char: string) => {
    if (selected) return;
    setSelected(char);

    if (char === question.char) {
      playSuccess();
      setScore(s => s + 10);
      setShowReward(true);
      setTimeout(generateQuestion, 2000);
    } else {
      playError();
      setTimeout(() => setSelected(null), 1000);
    }
  };

  if (!question) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 to-orange-300 flex flex-col items-center p-6">
      
      <div className="w-full max-w-lg flex justify-between items-center mb-8">
        <Link to="/games" className="p-3 bg-white rounded-full shadow-lg text-pink-500 hover:scale-105 transition">
          <ArrowLeft size={32} />
        </Link>
        <div className="flex items-center gap-3 bg-white/20 backdrop-blur-lg px-6 py-2 rounded-full border-2 border-white/40 shadow-xl">
          <Star className="text-yellow-300 fill-current drop-shadow-md animate-pulse" size={32} />
          <span className="text-4xl font-black text-white drop-shadow-md font-fredoka">{score}</span>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-white mb-8 font-fredoka text-center shadow-sm">What starts with...</h1>

      <motion.div 
        key={question.char}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl p-10 shadow-2xl mb-12 flex flex-col items-center border-8 border-white/50"
      >
        <span className="text-9xl mb-4 drop-shadow-sm">{question.emoji}</span>
        <span className="text-3xl font-bold text-gray-500 font-fredoka">{question.word}</span>
      </motion.div>

      <div className="grid grid-cols-3 gap-6 w-full max-w-lg">
        {options.map((opt, idx) => {
          let bgClass = "bg-white";
          if (selected === opt) {
             bgClass = opt === question.char ? "bg-green-400 text-white" : "bg-red-400 text-white";
          }

          return (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleOptionClick(opt)}
              className={`${bgClass} rounded-2xl aspect-square shadow-[0_8px_0_rgba(0,0,0,0.1)] flex items-center justify-center text-6xl font-black font-fredoka text-gray-700 transition-colors border-4 border-transparent`}
            >
              {opt}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {showReward && <RewardAnimation onComplete={() => {}} />}
      </AnimatePresence>

    </div>
  );
};

export default WordQuiz;
