import React from 'react';
import { Star, Zap, Shield, Crown } from 'lucide-react';
import { Button } from '../components/Button';

export const Premium: React.FC = () => {
  return (
    <div className="min-h-screen p-6 text-white">
      <div className="max-w-md mx-auto space-y-8">
        <div className="text-center space-y-4">
          <Crown className="mx-auto h-12 w-12 text-yellow-400" />
          <h1 className="text-3xl font-bold">Go Premium</h1>
          <p className="text-gray-300">Unlock exclusive features and enhance your experience</p>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Star className="h-6 w-6 text-yellow-400" />
              <div>
                <h3 className="font-semibold">Ad-Free Experience</h3>
                <p className="text-sm text-gray-300">Play without interruptions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Zap className="h-6 w-6 text-blue-400" />
              <div>
                <h3 className="font-semibold">Daily Challenges</h3>
                <p className="text-sm text-gray-300">Exclusive daily color challenges</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Shield className="h-6 w-6 text-green-400" />
              <div>
                <h3 className="font-semibold">Premium Support</h3>
                <p className="text-sm text-gray-300">Priority customer support</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/20">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold">$4.99</div>
              <div className="text-sm text-gray-300">per month</div>
            </div>
            <Button variant="primary" size="lg" className="w-full">
              Upgrade Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};