import { ColorOption, Circle } from '../types/game';

export const COLORS: Record<ColorOption, string> = {
  red: '#ff4444',
  green: '#44ff44',
  blue: '#4444ff',
};

export const generateRandomColor = (): ColorOption => {
  const colors: ColorOption[] = ['red', 'green', 'blue'];
  return colors[Math.floor(Math.random() * colors.length)];
};

export const generateCircle = (id: number, color: ColorOption, index: number): Circle => {
  return {
    id,
    color,
    index,
    opacity: 1,
  };
};