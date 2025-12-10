import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Pencil, Sparkles, BrainCircuit, Grid3X3, Type, Play } from 'lucide-react';

const GameMenu: React.FC = () => {
  const games = [
    {
      to: "/games/trace",
      title: "Trace Challenge",
      subtitle: "Earn stars by writing!",
      icon: <Pencil size={36} className="text-white" />,
      color: "bg-violet-500",
      borderColor: "border-violet-200 hover:border-violet-400",
      shadow: "shadow-violet-200"
    },
    {
      to: "/games/bubble",
      title: "Bubble Pop",
      subtitle: "Find floating letters",
      icon: <Sparkles size={36} className="text-white" />,
      color: "bg-cyan-500",
      borderColor: "border-cyan-200 hover:border-cyan-400",
      shadow: "shadow-cyan-200"
    },
    {
      to: "/games/quiz",
      title: "Word Quiz",
      subtitle: "What starts with...?",
      icon: <BrainCircuit size={36} className="text-white" />,
      color: "bg-pink-500",
      borderColor: "border-pink-200 hover:border-pink-400",
      shadow: "shadow-pink-200"
    },
    {
      to: "/games/memory",
      title: "Memory Match",
      subtitle: "Match Big & Small",
      icon: <Grid3X3 size={36} className="text-white" />,
      color: "bg-amber-500",
      borderColor: "border-amber-200 hover:border-amber-400",
      shadow: "shadow-amber-200"
    },
    {
      to: "/games/spelling",
      title: "Spelling Bee",
      subtitle: "Fill in the blank",
      icon: <Type size={36} className="text-white" />,
      color: "bg-orange-500",
      borderColor: "border-orange-200 hover:border-orange-400",
      shadow: "shadow-orange-200"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 flex flex-col">
      <div className="flex items-center mb-10 max-w-6xl mx-auto w-full">
        <Link to="/" className="mr-4 p-3 bg-white rounded-full shadow-md text-slate-500 hover:bg-slate-100 transition flex-shrink-0">
          <ArrowLeft size={32} />
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 font-fredoka">Choose a Game from Game Zone</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto w-full pb-10">
        {games.map((game, idx) => (
          <Link key={idx} to={game.to}>
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className={`group bg-white rounded-[2rem] p-6 shadow-xl border-4 ${game.borderColor} transition-all cursor-pointer h-full min-h-[16rem] flex flex-col items-center justify-center text-center relative overflow-hidden`}
            >
              <div className={`w-20 h-20 ${game.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 z-10`}>
                {game.icon}
              </div>
              
              <h2 className="text-3xl font-black text-gray-800 font-fredoka mb-2 z-10 leading-tight">
                {game.title}
              </h2>
              <p className="text-gray-500 font-medium text-lg z-10">
                {game.subtitle}
              </p>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0 duration-300">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                  <Play size={20} className="text-slate-400 fill-current" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GameMenu;
