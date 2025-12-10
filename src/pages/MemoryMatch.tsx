
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { LETTERS } from '../data/letterPaths';
import useSound from '../hooks/useSound';
import RewardAnimation from '@/components/RewardAnimation';

interface Card {
  id: string;
  char: string;
  emoji?: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const MemoryMatch: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [showReward, setShowReward] = useState(false);
  
  const { playPop, playSuccess, playError } = useSound();

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const candidates = LETTERS.filter(l => /^[A-Z]$/.test(l.char))
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);

    const deck: Card[] = [];
    candidates.forEach((upper) => {
      const lower = LETTERS.find(l => l.id === upper.id.toLowerCase());
      
      deck.push({
        id: `upper-${upper.id}`,
        char: upper.char,
        emoji: upper.emoji,
        isFlipped: false,
        isMatched: false
      });

      if (lower) {
        deck.push({
          id: `lower-${lower.id}`,
          char: lower.char,
          emoji: lower.emoji,
          isFlipped: false,
          isMatched: false
        });
      }
    });

    setCards(deck.sort(() => 0.5 - Math.random()));
    setFlippedIndices([]);
    setIsChecking(false);
    setShowReward(false);
  };

  const handleCardClick = (index: number) => {
    if (isChecking || cards[index].isFlipped || cards[index].isMatched) return;

    playPop();
    
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setIsChecking(true);
      checkForMatch(newFlipped[0], newFlipped[1]);
    }
  };

  const checkForMatch = (idx1: number, idx2: number) => {
    const card1 = cards[idx1];
    const card2 = cards[idx2];

    const isMatch = card1.char.toLowerCase() === card2.char.toLowerCase();

    if (isMatch) {
      playSuccess();
      setTimeout(() => {
        setCards(prev => prev.map((c, i) => 
          i === idx1 || i === idx2 ? { ...c, isMatched: true } : c
        ));
        setFlippedIndices([]);
        setIsChecking(false);
        
        if (cards.every(c => c.isMatched || c === card1 || c === card2)) {
          setShowReward(true);
        }
      }, 500);
    } else {
      setTimeout(() => {
        playError();
        setCards(prev => prev.map((c, i) => 
          i === idx1 || i === idx2 ? { ...c, isFlipped: false } : c
        ));
        setFlippedIndices([]);
        setIsChecking(false);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-indigo-100 p-4 flex flex-col items-center">
      <div className="w-full max-w-2xl flex justify-between items-center mb-6">
        <Link to="/games" className="p-3 bg-white rounded-full shadow-md text-indigo-600 hover:scale-105 transition">
          <ArrowLeft size={28} />
        </Link>
        <h1 className="text-3xl font-bold text-indigo-800 font-fredoka">Memory Match</h1>
        <button onClick={startNewGame} className="p-3 bg-white rounded-full shadow-md text-indigo-600 hover:scale-105 transition">
          <RefreshCw size={28} />
        </button>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 w-full max-w-2xl">
        {cards.map((card, idx) => (
          <div key={card.id} className="aspect-[3/4] perspective">
            <motion.div
              className="relative w-full h-full preserve-3d cursor-pointer"
              animate={{ rotateY: card.isFlipped ? 180 : 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => handleCardClick(idx)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-indigo-500 rounded-xl shadow-md border-4 border-white flex items-center justify-center backface-hidden">
                <span className="text-4xl opacity-20 text-white">?</span>
              </div>

              <div 
                className={`absolute inset-0 bg-white rounded-xl shadow-md border-4 ${card.isMatched ? 'border-green-400' : 'border-indigo-200'} flex flex-col items-center justify-center backface-hidden`}
                style={{ transform: 'rotateY(180deg)' }}
              >
                <span className="text-6xl font-black text-gray-800 font-fredoka">{card.char}</span>
                {card.isMatched && <span className="text-2xl mt-2">{card.emoji}</span>}
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {showReward && <RewardAnimation onComplete={() => {}} />}
      </AnimatePresence>
    </div>
  );
};

export default MemoryMatch;
