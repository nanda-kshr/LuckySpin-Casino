import React, { useEffect, useCallback, useState } from 'react';
import { useGameStore } from '../store/gameStore';
import { Button } from '../components/Button';
import { Circle } from '../components/Circle';
import { Celebration } from '../components/Celebration';
import { GameControls } from '../components/GameControls';
import { GameStatus } from '../components/GameStatus';
import { ColorOption } from '../types/game';

export const Game: React.FC = () => {
  const {
    score,
    highScore,
    circles,
    nextColor,
    isGameOver,
    isPaused,
    initializeGame,
    makeGuess,
    resetGame,
    updateCircles,
    togglePause,
  } = useGameStore();

  const [isRevealing, setIsRevealing] = useState(false);
  const [lastGuessCorrect, setLastGuessCorrect] = useState<boolean | null>(null);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (!isGameOver && !isPaused && !isRevealing) {
      const interval = setInterval(updateCircles, 50);
      return () => clearInterval(interval);
    }
  }, [isGameOver, isPaused, isRevealing]);

  const handleGuess = useCallback((guess: ColorOption) => {
    if (isPaused || isRevealing) return;

    setIsRevealing(true);
    const correct = guess === nextColor;
    setLastGuessCorrect(correct);

    if (correct) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 1000);
    }

    setTimeout(() => {
      setIsRevealing(false);
      makeGuess(guess);
    }, 1000);
  }, [isPaused, isRevealing, nextColor]);

  return (
    <div className="min-h-screen flex flex-col p-6 text-white relative overflow-hidden">
      {/* Circle History Display */}
      <div className="flex-1 relative mb-8 border-2 border-white/10 rounded-lg backdrop-blur-sm bg-black/20 overflow-hidden">
        <div className="absolute inset-0">
          {circles.map(circle => (
            <Circle 
              key={circle.id} 
              circle={circle}
              isRevealing={isRevealing}
              isCorrect={lastGuessCorrect}
            />
          ))}
          <Celebration isVisible={showCelebration} />
        </div>
      </div>

      {/* Game Controls */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        <GameStatus
          score={score}
          highScore={highScore}
          isPaused={isPaused}
          onTogglePause={togglePause}
        />

        {!isGameOver ? (
          <div className="space-y-4">
            <div className="text-center mb-8">
              <p className="text-lg mb-2">Predict the next circle color:</p>
              <div className="w-16 h-16 rounded-full mx-auto border-4 border-white/50 bg-black/30 backdrop-blur-sm" />
            </div>

            <GameControls
              onGuess={handleGuess}
              disabled={isRevealing || isPaused}
            />
          </div>
        ) : (
          <div className="text-center space-y-6 bg-black/50 backdrop-blur p-8 rounded-lg">
            <h2 className="text-2xl font-bold">Game Over!</h2>
            <p className="text-xl">Final Score: {score}</p>
            <Button onClick={resetGame}>Play Again</Button>
          </div>
        )}
      </div>
    </div>
  );
};