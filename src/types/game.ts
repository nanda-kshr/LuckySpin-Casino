export type ColorOption = 'red' | 'green' | 'blue';

export interface Circle {
  id: number;
  color: ColorOption;
  index: number;
  opacity: number;
}

export interface GameState {
  score: number;
  highScore: number;
  circles: Circle[];
  nextColor: ColorOption;
  isGameOver: boolean;
  isPaused: boolean;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  date: string;
}