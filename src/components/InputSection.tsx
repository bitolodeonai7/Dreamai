import React, { useState } from 'react';
import { Upload, RefreshCw } from 'lucide-react';

const InputSection = ({ onGenerate, isGenerating }) => {
  const [inputMethod, setInputMethod] = useState<'text' | 'image'>('text');

  return (
    <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700">
      <h2 className="text-2xl font-bold mb-6">Create Character</h2>
      
      <div className="space-y-6">
        <div className="flex space-x-4">
          <button
            onClick={() => setInputMethod('text')}
            className={`flex-1 p-3 rounded-lg transition ${
              inputMethod === 'text'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                : 'bg-gray-700/50 hover:bg-gray-700'
            }`}
          >
            Text Description
          </button>
          <button
            onClick={() => setInputMethod('image')}
            className={`flex-1 p-3 rounded-lg transition ${
              inputMethod === 'image'
                ? 'bg-gradient-to-r from-blue-500 to-purple-600'
                : 'bg-gray-700/50 hover:bg-gray-700'
            }`}
          >
            Upload Image
          </button>
        </div>

        {inputMethod === 'text' ? (
          <textarea
            className="w-full h-40 bg-gray-700/50 rounded-lg p-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Describe your character in detail..."
          />
        ) : (
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-400">Drag and drop an image, or click to browse</p>
          </div>
        )}

        <button
          onClick={onGenerate}
          disabled={isGenerating}
          className="w-full p-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <span>Generate Character</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default InputSection;