import React from 'react';
import { Search, Filter } from 'lucide-react';

const DatabaseSection = () => {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Character Database</h2>
        <div className="flex space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search database..."
              className="pl-10 pr-4 py-2 bg-gray-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-gray-800/50 rounded-lg overflow-hidden">
            <div className="aspect-square bg-gray-700"></div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">Sample Character {i}</h3>
              <p className="text-sm text-gray-400">From Marvel Universe</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatabaseSection;