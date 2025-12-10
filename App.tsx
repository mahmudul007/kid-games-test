import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Alphabet from './pages/Alphabet';
import Trace from './pages/Trace';
import Game from './pages/Game';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alphabet" element={<Alphabet />} />
        <Route path="/trace/:id" element={<Trace />} />
        <Route path="/games" element={<Game />} />
      </Routes>
    </HashRouter>
  );
};

export default App;