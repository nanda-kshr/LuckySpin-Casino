import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, GamepadIcon, Trophy, CreditCard } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/game', icon: GamepadIcon, label: 'Play' },
    { path: '/leaderboard', icon: Trophy, label: 'Leaderboard' },
    { path: '/premium', icon: CreditCard, label: 'Premium' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <nav className="fixed bottom-0 w-full bg-white/10 backdrop-blur-lg border-t border-white/20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-around py-4">
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex flex-col items-center space-y-1 ${
                  location.pathname === path
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon size={24} />
                <span className="text-xs">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <main className="pb-20">{children}</main>
    </div>
  );
};