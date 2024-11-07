import React from 'react';
import { Brain } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800/50 backdrop-blur-md border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Brain className="w-8 h-8 text-blue-400 mr-2" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Dream AI
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;