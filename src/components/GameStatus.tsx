import React from 'react';
import { Button } from './Button';
import { Pause, Play } from 'lucide-react';

interface GameStatusProps {
  score: number;
  highScore: number;
  isPaused: boolean;
  onTogglePause: () => void;
}

export const GameStatus: React.FC<GameStatusProps> = ({
  score,
  highScore,
  isPaused,
  onTogglePause,
}) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <p className="text-xl">Score: {score}</p>
        <p className="text-sm text-gray-300">High Score: {highScore}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={onTogglePause}
        className="!border-white !text-white hover:!bg-white/20"
      >
        {isPaused ? <Play size={20} /> : <Pause size={20} />}
      </Button>
    </div>
  );
};