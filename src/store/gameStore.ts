import { create } from 'zustand';
import { GameState, ColorOption } from '../types/game';
import { generateRandomColor, generateCircle } from '../utils/colorUtils';

interface GameStore extends GameState {
  initializeGame: () => void;
  makeGuess: (guess: ColorOption) => void;
  resetGame: () => void;
  updateCircles: () => void;
  togglePause: () => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  score: 0,
  highScore: 0,
  circles: [],
  nextColor: 'red',
  isGameOver: false,
  isPaused: false,

  initializeGame: () => {
    const nextColor = generateRandomColor();
    set({
      score: 0,
      circles: [],
      nextColor,
      isGameOver: false,
      isPaused: false,
    });
  },

  makeGuess: (guess: ColorOption) => {
    const { nextColor, score, highScore, circles } = get();
    const correct = guess === nextColor;
    
    if (!correct) {
      set({ isGameOver: true, highScore: Math.max(score, highScore) });
      return;
    }

    const newScore = score + 1;
    const newNextColor = generateRandomColor();
    
    // Add new circle to the sequence
    const newCircle = generateCircle(
      Date.now(),
      nextColor,
      circles.length
    );

    set({
      score: newScore,
      highScore: Math.max(newScore, highScore),
      nextColor: newNextColor,
      circles: [...circles, newCircle],
    });
  },

  updateCircles: () => {
    const { circles, isPaused } = get();
    
    if (isPaused) return;

    // Update opacity of existing circles
    const updatedCircles = circles.map(circle => ({
      ...circle,
      opacity: Math.max(0.3, 1 - (circles.length - circle.index) * 0.1),
    }));

    set({ circles: updatedCircles });
  },

  togglePause: () => {
    set(state => ({ isPaused: !state.isPaused }));
  },

  resetGame: () => {
    set({
      score: 0,
      circles: [],
      isGameOver: false,
      isPaused: false,
      nextColor: generateRandomColor(),
    });
  },
}));