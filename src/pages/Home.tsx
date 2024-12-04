import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Palette, Trophy, Zap } from 'lucide-react';
import { Button } from '../components/Button';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-white">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <Palette className="mx-auto h-16 w-16 text-purple-400" />
          <h1 className="text-4xl font-bold">Color Predictor</h1>
          <p className="text-xl text-gray-300">
            Test your color perception skills and compete with others!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 py-8">
          <div className="p-4 rounded-lg bg-white/10 backdrop-blur">
            <Trophy className="mx-auto h-8 w-8 text-yellow-400 mb-2" />
            <h3 className="font-semibold">Leaderboard</h3>
            <p className="text-sm text-gray-300">Compete globally</p>
          </div>
          <div className="p-4 rounded-lg bg-white/10 backdrop-blur">
            <Zap className="mx-auto h-8 w-8 text-blue-400 mb-2" />
            <h3 className="font-semibold">Daily Challenges</h3>
            <p className="text-sm text-gray-300">New colors daily</p>
          </div>
        </div>

        <div className="space-y-4">
          <Button
            size="lg"
            className="w-full"
            onClick={() => navigate('/game')}
          >
            Play Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full"
            onClick={() => navigate('/premium')}
          >
            Go Premium
          </Button>
        </div>
      </div>
    </div>
  );
};