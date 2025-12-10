import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LetterConfig, GameState, Point, TraceDifficulty } from '../types';
import { validateStroke, getDistance } from '../utils/geometry';
import useSound from '../hooks/useSound';
import RewardAnimation from './RewardAnimation';
import { ArrowLeft, RefreshCw, Hand } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    
    // Prevent default to avoid scrolling
    e.preventDefault();
    
    const svgRect = containerRef.current?.getBoundingClientRect();
    if (!svgRect) return;

    // ViewBox scaling logic
    // Assuming 300x300 viewBox inside a responsive container
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

    // Real-time validation check (simple check if we reached end)
    const currentStroke = letter.strokes[currentStrokeIndex];
    const lastCheckpoint = currentStroke.checkpoints[currentStroke.checkpoints.length - 1];
    const distToEnd = getDistance({x, y}, lastCheckpoint);

    if (distToEnd < TraceDifficulty.EASY) {
      handleStrokeComplete(newPath);
    }
  };

  const handlePointerUp = () => {
    if (gameState !== GameState.TRACE) return;
    // If not complete, maybe reset or keep? 
    // For kids apps, typically reset if they lift finger too early without finishing
    const currentStroke = letter.strokes[currentStrokeIndex];
    const isComplete = validateStroke(userPath, currentStroke.checkpoints, TraceDifficulty.EASY);
    
    if (!isComplete) {
       setUserPath([]);
       // Notify parent of error if provided
       if (onError) onError();
    }
  };

  const handleStrokeComplete = (finalPath: Point[]) => {
    const currentStroke = letter.strokes[currentStrokeIndex];
    const isValid = validateStroke(finalPath, currentStroke.checkpoints, TraceDifficulty.EASY);

    if (isValid) {
      playSuccess();
      setUserPath([]); // Clear canvas for next stroke or animation
      
      if (currentStrokeIndex < letter.strokes.length - 1) {
        // Move to next stroke
        setCurrentStrokeIndex(prev => prev + 1);
        setGameState(GameState.DEMO);
      } else {
        // Letter Complete
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
      
      {/* Header Controls */}
      {!hideHeader && (
        <div className="w-full flex justify-between items-center mb-6">
          <Link to="/alphabet" className="p-3 bg-white rounded-full shadow-lg text-gray-600 hover:bg-blue-50 active:scale-95 transition">
            <ArrowLeft size={32} />
          </Link>
          <h2 className="text-4xl font-bold text-gray-700 font-fredoka">{letter.char}</h2>
          <button onClick={handleRestart} className="p-3 bg-white rounded-full shadow-lg text-gray-600 hover:bg-blue-50 active:scale-95 transition">
            <RefreshCw size={32} />
          </button>
        </div>
      )}

      {/* Tracing Area */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-square bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-blue-100 touch-none"
      >
        <svg 
          viewBox={letter.viewBox} 
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          {/* Background Guide Tracks (Gray) */}
          {letter.strokes.map((stroke, idx) => (
            <path
              key={`bg-${idx}`}
              d={stroke.d}
              stroke="#E2E8F0"
              strokeWidth="40"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          ))}

          {/* Completed Strokes (Colored) */}
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

          {/* Current Target Stroke Guide (Dashed) */}
          {gameState !== GameState.SUCCESS && (
            <path
              ref={svgPathRef}
              d={currentStroke.d}
              stroke={currentStroke.color}
              strokeWidth="4"
              strokeDasharray="10,10"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              className="opacity-50"
            />
          )}

          {/* Demo Animation Dot */}
          {gameState === GameState.DEMO && (
             <motion.circle
               r="15"
               fill={currentStroke.color}
               initial={{ offsetDistance: "0%" }}
               animate={{ offsetDistance: "100%" }}
               transition={{ duration: 2, ease: "easeInOut", repeat: 1, repeatType: "loop" }}
               style={{ 
                 offsetPath: `path('${currentStroke.d}')`
               }}
             />
          )}
          
          {/* Start Dot (Blinking) */}
          {gameState === GameState.TRACE && (
             <motion.circle
               cx={currentStroke.startPoint.x}
               cy={currentStroke.startPoint.y}
               r="15"
               fill={currentStroke.color}
               animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
               transition={{ duration: 1.5, repeat: Infinity }}
             />
          )}
        </svg>

        {/* Drawing Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full touch-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        />

        {/* Demo Hand Icon Overlay */}
        {gameState === GameState.DEMO && (
          <div className="absolute inset-0 pointer-events-none">
             <motion.div
               className="w-12 h-12 text-gray-800 drop-shadow-lg"
               initial={{ offsetDistance: "0%" }}
               animate={{ offsetDistance: "100%" }}
               transition={{ duration: 2, ease: "easeInOut", repeat: 1, repeatType: "loop" }}
               style={{ 
                 offsetPath: `path('${currentStroke.d}')`,
                 position: 'absolute',
                 top: 0, left: 0 // required for offset-path to work relative to container in some browsers
               }}
             >
               <Hand size={48} fill="white" />
             </motion.div>
          </div>
        )}

        {/* Success Reward Overlay */}
        <AnimatePresence>
          {showReward && (
            <RewardAnimation onComplete={onComplete} />
          )}
        </AnimatePresence>
      </div>

      {/* Progress Footer */}
      <div className="mt-8 flex gap-2">
        {letter.strokes.map((_, idx) => (
          <div 
            key={idx} 
            className={`w-4 h-4 rounded-full transition-colors ${
              idx < currentStrokeIndex ? 'bg-green-500' : 
              idx === currentStrokeIndex ? 'bg-blue-400 animate-pulse' : 'bg-gray-200'
            }`} 
          />
        ))}
      </div>
      
      {!hideHeader && (
        <p className="mt-4 text-gray-400 text-sm font-medium">
          {gameState === GameState.DEMO ? "Watch carefully!" : 
          gameState === GameState.TRACE ? "Now you try!" : "Great job!"}
        </p>
      )}
    </div>
  );
};

export default LetterTracer;