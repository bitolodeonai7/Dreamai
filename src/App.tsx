import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import Navbar from './components/Navbar';
import InputSection from './components/InputSection';
import CharacterDisplay from './components/CharacterDisplay';
import DatabaseSection from './components/DatabaseSection';
import IconMenu from './components/IconMenu';

function App() {
  const [generatedCharacter, setGeneratedCharacter] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedCharacter({
        image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
        name: 'Character Preview',
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <IconMenu />
      
      <main className="container mx-auto px-4 py-8 pl-24">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-12 h-12 text-blue-400 mr-4" />
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Dream AI
            </h1>
          </div>
          <p className="text-gray-400 text-xl">
            Transform your ideas into stunning character models using advanced AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <InputSection onGenerate={handleGenerate} isGenerating={isGenerating} />
          <CharacterDisplay character={generatedCharacter} isGenerating={isGenerating} />
        </div>

        <DatabaseSection />
      </main>
    </div>
  );
}

export default App;