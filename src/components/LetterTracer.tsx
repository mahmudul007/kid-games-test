
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LetterConfig, GameState, Point, TraceDifficulty } from '../types';
import useSound from '../hooks/useSound';
import { ArrowLeft, RefreshCw, Hand } from 'lucide-react';
import { Link } from 'react-router-dom';
import RewardAnimation from '@/components/RewardAnimation';
import { getDistance, validateStroke } from '@/utils/geometry';

interface LetterTracerProps {
  letter: LetterConfig;
  onComplete: () => void;
  onError?: () => void;
  hideHeader?: boolean;
}

const LetterTracer: React.FC<LetterTracerProps> = ({ letter, onComplete, onError, hideHeader = false }) => {
  const [currentStrokeIndex, setCurrentStrokeIndex] = useState(0);
  const [gameState, setGameState] = useState<GameState>(GameState.DEMO);
  const [userPath, setUserPath] = useState<Point[]>([]);
  const [showReward, setShowReward] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const svgPathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { playSuccess, playPop, playPhonics } = useSound();

  // Reset when letter changes
  useEffect(() => {
    setCurrentStrokeIndex(0);
    setGameState(GameState.DEMO);
    setUserPath([]);
    setShowReward(false);
    playPhonics(letter.char);
  }, [letter, playPhonics]);

  // Handle Canvas Drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Handle High DPI displays
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    // Set actual size in memory (scaled to account for extra pixel density)
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Normalize coordinate system to use css pixels
    ctx.scale(dpr, dpr);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 25; // Brush size
    ctx.strokeStyle = letter.strokes[currentStrokeIndex]?.color || '#000';

    // Draw existing user path
    if (userPath.length > 0) {
      ctx.beginPath();
      ctx.moveTo(userPath[0].x, userPath[0].y);
      for (let i = 1; i < userPath.length; i++) {
        ctx.lineTo(userPath[i].x, userPath[i].y);
      }
      ctx.stroke();
    }
  }, [userPath, letter, currentStrokeIndex, gameState]);

  // Demo Animation Effect
  useEffect(() => {
    if (gameState === GameState.DEMO) {
      const timer = setTimeout(() => {
        setGameState(GameState.TRACE);
      }, 2500); // 2.5s demo
      return () => clearTimeout(timer);
    }
  }, [gameState]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (gameState !== GameState.TRACE) return;
    e.preventDefault();
    
    const svgRect = containerRef.current?.getBoundingClientRect();
    if (!svgRect) return;

    const scaleX = 300 / svgRect.width;
    const scaleY = 300 / svgRect.height;

    const x = (e.clientX - svgRect.left) * scaleX;
    const y = (e.clientY - svgRect.top) * scaleY;

    // Check if start is near the start point
    const currentStroke = letter.strokes[currentStrokeIndex];
    const dist = getDistance({x, y}, currentStroke.startPoint);

    if (dist < TraceDifficulty.EASY * 2) {
      setUserPath([{ x, y }]);
      playPop();
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (gameState !== GameState.TRACE || userPath.length === 0) return;
    e.preventDefault();

    const svgRect = containerRef.current?.getBoundingClientRect();
    if (!svgRect) return;

    const scaleX = 300 / svgRect.width;
    const scaleY = 300 / svgRect.height;
    const x = (e.clientX - svgRect.left) * scaleX;
    const y = (e.clientY - svgRect.top) * scaleY;

    const newPath = [...userPath, { x, y }];
    setUserPath(newPath);

    const currentStroke = letter.strokes[currentStrokeIndex];
    const lastCheckpoint = currentStroke.checkpoints[currentStroke.checkpoints.length - 1];
    const distToEnd = getDistance({x, y}, lastCheckpoint);

    if (distToEnd < TraceDifficulty.EASY) {
      handleStrokeComplete(newPath);
    }
  };

  const handlePointerUp = () => {
    if (gameState !== GameState.TRACE) return;
    const currentStroke = letter.strokes[currentStrokeIndex];
    const isComplete = validateStroke(userPath, currentStroke.checkpoints, TraceDifficulty.EASY);
    
    if (!isComplete) {
       setUserPath([]);
       if (onError) onError();
    }
  };

  const handleStrokeComplete = (finalPath: Point[]) => {
    const currentStroke = letter.strokes[currentStrokeIndex];
    const isValid = validateStroke(finalPath, currentStroke.checkpoints, TraceDifficulty.EASY);

    if (isValid) {
      playSuccess();
      setUserPath([]); 
      
      if (currentStrokeIndex < letter.strokes.length - 1) {
        setCurrentStrokeIndex(prev => prev + 1);
        setGameState(GameState.DEMO);
      } else {
        setGameState(GameState.SUCCESS);
        setShowReward(true);
      }
    } else {
      setUserPath([]);
      if (onError) onError();
    }
  };

  const handleRestart = () => {
    setCurrentStrokeIndex(0);
    setGameState(GameState.DEMO);
    setUserPath([]);
    setShowReward(false);
  };

  const currentStroke = letter.strokes[currentStrokeIndex];

  return (
    <div className="relative flex flex-col items-center justify-center w-full max-w-lg mx-auto p-4 select-none">
      
      {!hideHeader && (
        <div className="w-full flex justify-between items-center mb-6">
          <Link to="/alphabet" className="p-3 bg-white rounded-full shadow-lg text-gray-600 hover:bg-blue-50 active:scale-95 transition">
            <ArrowLeft size={32} />
          </Link>
          
          <div className="flex flex-col items-center animate-fade-in">
             <h2 className="text-6xl font-black text-gray-800 font-fredoka leading-none drop-shadow-sm">{letter.char}</h2>
             {letter.word && (
                <div className="flex items-center gap-3 mt-2 bg-white/80 px-6 py-2 rounded-full shadow-sm border border-gray-100">
                   <span className="text-4xl filter drop-shadow-sm">{letter.emoji}</span>
                   <span className="text-2xl font-bold text-indigo-500 uppercase tracking-wide font-fredoka">
                     {letter.word}
                   </span>
                </div>
             )}
          </div>
          
          <button onClick={handleRestart} className="p-3 bg-white rounded-full shadow-lg text-gray-600 hover:bg-blue-50 active:scale-95 transition">
            <RefreshCw size={32} />
          </button>
        </div>
      )}

      <div 
        ref={containerRef}
        className="relative w-full aspect-square bg-white rounded-[2rem] shadow-2xl overflow-hidden border-8 border-indigo-100 touch-none"
      >
        <svg 
          viewBox={letter.viewBox} 
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {letter.strokes.map((stroke, idx) => (
            <path
              key={`bg-${idx}`}
              d={stroke.d}
              stroke="#F1F5F9"
              strokeWidth="40"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          ))}

          {letter.strokes.map((stroke, idx) => (
            idx < currentStrokeIndex && (
              <path
                key={`done-${idx}`}
                d={stroke.d}
                stroke={stroke.color}
                strokeWidth="25"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            )
          ))}

          {gameState !== GameState.SUCCESS && (
            <path
              ref={svgPathRef}
              d={currentStroke.d}
              stroke={currentStroke.color}
              strokeWidth="4"
              strokeDasharray="12,12"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="opacity-40"
            />
          )}

          {gameState === GameState.DEMO && (
             <motion.circle
               r="15"
               fill={currentStroke.color}
               initial={{ offsetDistance: "0%" }}
               animate={{ offsetDistance: "100%" }}
               transition={{ duration: 2, ease: "easeInOut", repeat: 1, repeatType: "loop" }}
               style={{ offsetPath: `path('${currentStroke.d}')` }}
             />
          )}
          
          {gameState === GameState.TRACE && (
             <motion.circle
               cx={currentStroke.startPoint.x}
               cy={currentStroke.startPoint.y}
               r="18"
               fill={currentStroke.color}
               animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
               transition={{ duration: 1.5, repeat: Infinity }}
               className="drop-shadow-lg"
             />
          )}
        </svg>

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full touch-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        />

        {gameState === GameState.DEMO && (
          <div className="absolute inset-0 pointer-events-none">
             <motion.div
               className="w-16 h-16 drop-shadow-xl z-20"
               initial={{ offsetDistance: "0%" }}
               animate={{ offsetDistance: "100%" }}
               transition={{ duration: 2, ease: "easeInOut", repeat: 1, repeatType: "loop" }}
               style={{ 
                 offsetPath: `path('${currentStroke.d}')`,
                 position: 'absolute',
                 top: 0, left: 0 
               }}
             >
               <Hand size={56} fill="white" className="text-gray-800" />
             </motion.div>
          </div>
        )}

        <AnimatePresence>
          {showReward && (
            <RewardAnimation onComplete={onComplete} />
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {gameState === GameState.SUCCESS && letter.word && (
          <motion.div
             initial={{ scale: 0.5, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             exit={{ opacity: 0 }}
             className="absolute bottom-12 bg-white/95 px-8 py-4 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] border-4 border-yellow-300 z-50 flex flex-col items-center"
          >
             <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Excellent!</p>
             <p className="text-3xl font-black text-gray-800 font-fredoka flex items-center gap-3">
               <span style={{ color: letter.strokes[0].color }}>{letter.char}</span>
               <span className="text-gray-300">is for</span>
               <span className="text-indigo-600 underline decoration-wavy decoration-yellow-300">{letter.word}</span>
             </p>
             <p className="text-6xl mt-2 animate-bounce">{letter.emoji}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-8 flex gap-3">
        {letter.strokes.map((_, idx) => (
          <div 
            key={idx} 
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              idx < currentStrokeIndex ? 'bg-green-500 scale-100' : 
              idx === currentStrokeIndex ? 'bg-indigo-400 scale-125 shadow-lg animate-pulse' : 'bg-gray-200'
            }`} 
          />
        ))}
      </div>
    </div>
  );
};

export default LetterTracer;
