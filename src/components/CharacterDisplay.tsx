import React, { useState } from 'react';
import { Loader, Box, Image as ImageIcon } from 'lucide-react';
import ThreeDPreview from './ThreeDPreview';

const CharacterDisplay = ({ character, isGenerating }) => {
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('2d');

  return (
    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Character Preview</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode('2d')}
            className={`p-2 rounded-lg transition ${
              viewMode === '2d'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                : 'bg-gray-700/50 hover:bg-gray-700'
            }`}
          >
            <ImageIcon className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('3d')}
            className={`p-2 rounded-lg transition ${
              viewMode === '3d'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                : 'bg-gray-700/50 hover:bg-gray-700'
            }`}
          >
            <Box className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="aspect-square rounded-lg overflow-hidden bg-gray-700/50">
        {isGenerating ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Loader className="w-8 h-8 animate-spin text-blue-400" />
            <p className="text-gray-400 mt-4">Generating your character...</p>
          </div>
        ) : character ? (
          viewMode === '2d' ? (
            <img 
              src={character.image} 
              alt={character.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <ThreeDPreview />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-400">Your character will appear here</p>
          </div>
        )}
      </div>

      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition p-3 rounded-lg flex items-center justify-center space-x-2">
            <ImageIcon className="w-4 h-4" />
            <span>Download 2D</span>
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition p-3 rounded-lg flex items-center justify-center space-x-2">
            <Box className="w-4 h-4" />
            <span>Download 3D</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CharacterDisplay;