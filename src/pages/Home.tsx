import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Gamepad2, Star, Cloud } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-indigo-500 overflow-hidden relative flex flex-col items-center justify-center p-4">
      
      {/* Hero Section */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-12"
      >
        <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)] font-fredoka tracking-wide mb-2">
          Trace<span className="text-yellow-300">Master</span>
        </h1>
        <p className="text-2xl text-white/90 font-medium font-fredoka">Learn, Play, and Grow!</p>
      </motion.div>

      {/* Main Actions */}
      <div className="flex flex-col md:flex-row gap-8 z-10 w-full max-w-4xl px-4">
        
        <Link to="/alphabet" className="flex-1">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_0_rgb(234,179,8)] border-4 border-yellow-400 h-full flex flex-col items-center justify-center gap-4 group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <BookOpen size={100} />
            </div>
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-inner">
              <BookOpen size={48} className="text-yellow-600" />
            </div>
            <div className="text-center relative z-10">
              <h2 className="text-3xl font-black text-gray-800 font-fredoka uppercase tracking-wide">Learn ABCs</h2>
              <p className="text-gray-500 font-medium mt-2">Practice writing letters & numbers</p>
            </div>
          </motion.div>
        </Link>

        <Link to="/games" className="flex-1">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_0_rgb(99,102,241)] border-4 border-indigo-500 h-full flex flex-col items-center justify-center gap-4 group cursor-pointer relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <Gamepad2 size={100} />
            </div>
            <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center group-hover:-rotate-12 transition-transform duration-300 shadow-inner">
              <Gamepad2 size={48} className="text-indigo-600" />
            </div>
            <div className="text-center relative z-10">
              <h2 className="text-3xl font-black text-gray-800 font-fredoka uppercase tracking-wide">Play</h2>
              <p className="text-gray-500 font-medium mt-2">Play fun mini-games & quizzes</p>
            </div>
          </motion.div>
        </Link>

      </div>

      {/* Decorations */}
      <div className="absolute top-10 left-10 opacity-40 animate-pulse pointer-events-none">
        <Cloud size={80} className="text-white" />
      </div>
      <div className="absolute top-20 right-20 opacity-30 animate-bounce pointer-events-none delay-700">
         <Cloud size={60} className="text-white" />
      </div>
      <div className="absolute bottom-10 left-20 opacity-20 animate-ping pointer-events-none">
         <Star size={40} className="text-yellow-200 fill-current" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-spin-slow pointer-events-none">
         <Star size={64} className="text-yellow-200 fill-current" />
      </div>
    </div>
  );
};

export default Home;
