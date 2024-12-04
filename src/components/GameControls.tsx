import React from 'react';
import { Button } from './Button';
import { ColorOption } from '../types/game';
import { COLORS } from '../utils/colorUtils';

interface GameControlsProps {
  onGuess: (color: ColorOption) => void;
  disabled: boolean;
}

export const GameControls: React.FC<GameControlsProps> = ({ onGuess, disabled }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {(['red', 'green', 'blue'] as ColorOption[]).map((color) => (
        <Button
          key={color}
          onClick={() => onGuess(color)}
          disabled={disabled}
          className={`
            transition-all duration-300
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
            !bg-white/10 hover:!bg-white/20 backdrop-blur
          `}
          style={{
            borderColor: COLORS[color],
            borderWidth: 2,
          }}
        >
          {color}
        </Button>
      ))}
    </div>
  );
};