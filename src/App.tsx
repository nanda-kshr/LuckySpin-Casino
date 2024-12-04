import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { Leaderboard } from './pages/Leaderboard';
import { Premium } from './pages/Premium';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/premium" element={<Premium />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;