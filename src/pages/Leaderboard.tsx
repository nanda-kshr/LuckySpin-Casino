import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';
import type { LeaderboardEntry } from '../types/game';

const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  { id: '1', name: 'ColorMaster', score: 25, date: '2024-03-15' },
  { id: '2', name: 'ChromaQueen', score: 23, date: '2024-03-15' },
  { id: '3', name: 'PixelPro', score: 21, date: '2024-03-15' },
  // Add more mock data as needed
];

export const Leaderboard: React.FC = () => {
  return (
    <div className="min-h-screen p-6 text-white">
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center space-y-4">
          <Trophy className="mx-auto h-12 w-12 text-yellow-400" />
          <h1 className="text-3xl font-bold">Leaderboard</h1>
        </div>

        <div className="space-y-4">
          {MOCK_LEADERBOARD.map((entry, index) => (
            <div
              key={entry.id}
              className="bg-white/10 backdrop-blur rounded-lg p-4 flex items-center space-x-4"
            >
              <div className="flex-shrink-0">
                {index === 0 && <Medal className="h-6 w-6 text-yellow-400" />}
                {index === 1 && <Medal className="h-6 w-6 text-gray-400" />}
                {index === 2 && <Medal className="h-6 w-6 text-orange-400" />}
                {index > 2 && <Award className="h-6 w-6 text-blue-400" />}
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold">{entry.name}</h3>
                <p className="text-sm text-gray-300">Score: {entry.score}</p>
              </div>
              <div className="text-sm text-gray-400">{entry.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};