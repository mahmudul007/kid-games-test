import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { LETTERS } from '../data/letterPaths';
import { ArrowLeft, Type, CaseLower, Hash } from 'lucide-react';

type Category = 'uppercase' | 'lowercase' | 'numbers';

const Alphabet: React.FC = () => {
  const [category, setCategory] = useState<Category>('uppercase');

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

  return (
    <div className="min-h-screen bg-indigo-50 p-6">
      <div className="max-w-4xl mx-auto pb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center">
            <Link to="/" className="mr-4 p-3 bg-white rounded-full shadow-md text-indigo-500 hover:bg-indigo-100 transition flex-shrink-0">
              <ArrowLeft size={28} />
            </Link>
            <h1 className="text-4xl font-bold text-indigo-900 font-fredoka">Pick a Letter</h1>
          </div>

          {/* Category Tabs */}
          <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-indigo-100 self-start md:self-auto">
            <button
              onClick={() => setCategory('uppercase')}
              className={`flex items-center px-4 py-2 rounded-xl font-bold transition-all ${
                category === 'uppercase' ? 'bg-indigo-500 text-white shadow-md' : 'text-gray-400 hover:bg-gray-50'
              }`}
            >
              <Type size={20} className="mr-2" /> ABC
            </button>
            <button
              onClick={() => setCategory('lowercase')}
              className={`flex items-center px-4 py-2 rounded-xl font-bold transition-all ${
                category === 'lowercase' ? 'bg-indigo-500 text-white shadow-md' : 'text-gray-400 hover:bg-gray-50'
              }`}
            >
              <CaseLower size={20} className="mr-2" /> abc
            </button>
            <button
              onClick={() => setCategory('numbers')}
              className={`flex items-center px-4 py-2 rounded-xl font-bold transition-all ${
                category === 'numbers' ? 'bg-indigo-500 text-white shadow-md' : 'text-gray-400 hover:bg-gray-50'
              }`}
            >
              <Hash size={20} className="mr-2" /> 123
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredLetters.map((letter) => (
            <Link
              key={letter.id}
              to={`/trace/${letter.id}`}
              className="aspect-square bg-white rounded-3xl shadow-[0_8px_0_rgb(0,0,0,0.1)] hover:shadow-[0_4px_0_rgb(0,0,0,0.1)] hover:translate-y-1 transition-all duration-150 flex items-center justify-center border-2 border-indigo-100"
            >
              <span 
                className="text-7xl font-bold font-fredoka" 
                style={{ color: letter.strokes[0].color }}
              >
                {letter.char}
              </span>
            </Link>
          ))}
        </div>
        
        {filteredLetters.length === 0 && (
          <div className="text-center py-20 text-gray-400 font-fredoka text-xl">
            Coming soon!
          </div>
        )}
      </div>
    </div>
  );
};

export default Alphabet;