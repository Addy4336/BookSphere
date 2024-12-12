import React from 'react';
import { Library } from 'lucide-react';
import { User } from '../types';
import { APP_CONFIG } from '../constants/config';

interface HeaderProps {
  user: User;
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Library className="h-8 w-8 text-blue-500" />
              <h1 className="text-3xl font-bold text-gray-900">{APP_CONFIG.name}</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Welcome, {user.name}</span>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                {user.role}
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-600">{APP_CONFIG.description}</p>
        </div>
      </div>
    </header>
  );
};