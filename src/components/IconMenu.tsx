import React, { useState } from 'react';
import { 
  Brain, 
  Image, 
  Video, 
  Database, 
  Settings, 
  Heart,
  Download,
  Share2
} from 'lucide-react';

const IconMenu = () => {
  const [activeIcon, setActiveIcon] = useState('create');

  const icons = [
    { id: 'create', Icon: Brain, label: 'Create' },
    { id: 'gallery', Icon: Image, label: 'Gallery' },
    { id: 'videos', Icon: Video, label: 'Videos' },
    { id: 'database', Icon: Database, label: 'Database' },
    { id: 'favorites', Icon: Heart, label: 'Favorites' },
    { id: 'downloads', Icon: Download, label: 'Downloads' },
    { id: 'share', Icon: Share2, label: 'Share' },
    { id: 'settings', Icon: Settings, label: 'Settings' }
  ];

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-gray-800/50 backdrop-blur-md border-r border-gray-700 p-3 rounded-r-xl">
      <div className="space-y-6">
        {icons.map(({ id, Icon, label }) => (
          <div
            key={id}
            className="relative group"
            onClick={() => setActiveIcon(id)}
          >
            <button
              className={`p-2 rounded-lg transition-all duration-200 ${
                activeIcon === id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <Icon className="w-6 h-6" />
            </button>
            <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 rounded-md text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconMenu;