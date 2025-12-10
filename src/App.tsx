
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Alphabet from './pages/Alphabet';

import GameMenu from './pages/GameMenu';
import TraceChallenge from './pages/TraceChallenge';
import BubblePop from './pages/BubblePop';
import WordQuiz from './pages/WordQuiz';
import MemoryMatch from './pages/MemoryMatch';
import SpellingGame from './pages/SpellingGame';
import Trace from '@/pages/Trace';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alphabet" element={<Alphabet />} />
        <Route path="/trace/:id" element={<Trace />} />
        {/* Game Routes */}
        <Route path="/games" element={<GameMenu />} />
        <Route path="/games/trace" element={<TraceChallenge />} />
        <Route path="/games/bubble" element={<BubblePop />} />
        <Route path="/games/quiz" element={<WordQuiz />} />
        <Route path="/games/memory" element={<MemoryMatch />} />
        <Route path="/games/spelling" element={<SpellingGame />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
