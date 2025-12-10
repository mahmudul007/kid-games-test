import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Gamepad2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-indigo-500 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      
      {/* Background clouds/decorations */}
      <div className="absolute top-10 left-10 opacity-50 animate-pulse">
        <div className="w-24 h-8 bg-white rounded-full blur-md" />
      </div>
      <div className="absolute top-20 right-20 opacity-30 animate-bounce">
         <div className="w-32 h-12 bg-white rounded-full blur-md" />
      </div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)] font-fredoka tracking-wide mb-4">
          Trace<span className="text-yellow-300">Master</span>
        </h1>
        <p className="text-xl text-white/90 font-medium mb-12">Learn to write with fun!</p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/alphabet">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-12 py-6 bg-yellow-400 rounded-full shadow-[0_10px_0_rgb(180,83,9)] hover:shadow-[0_6px_0_rgb(180,83,9)] active:shadow-none active:translate-y-2 transition-all duration-150 w-64"
            >
              <Play size={40} className="text-white fill-current mr-4 group-hover:rotate-12 transition-transform" />
              <span className="text-4xl font-bold text-white uppercase tracking-wider">Trace</span>
            </motion.button>
          </Link>

          <Link to="/games">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-12 py-6 bg-green-400 rounded-full shadow-[0_10px_0_rgb(21,128,61)] hover:shadow-[0_6px_0_rgb(21,128,61)] active:shadow-none active:translate-y-2 transition-all duration-150 w-64"
            >
              <Gamepad2 size={40} className="text-white mr-4 group-hover:rotate-12 transition-transform" />
              <span className="text-4xl font-bold text-white uppercase tracking-wider">Play</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Floating Letters */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 text-9xl font-black text-white/20 select-none pointer-events-none"
      >
        A
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-10 text-9xl font-black text-white/20 select-none pointer-events-none"
      >
        B
      </motion.div>
    </div>
  );
};

export default Home;