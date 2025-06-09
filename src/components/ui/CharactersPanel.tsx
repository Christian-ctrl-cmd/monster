import { useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { motion } from 'framer-motion';

const CharactersPanel = () => {
  const { characters } = useGameStore();
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>('steve');

  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-gray-100 text-gray-900 rounded-t-lg shadow-lg overflow-hidden"
    >
      <div className="flex h-[300px] md:h-[400px]">
        {/* Character list */}
        <div className="w-1/3 bg-gray-200 p-4 overflow-y-auto border-r border-gray-300">
          <h3 className="font-sans text-lg font-bold mb-4 text-gray-900">People</h3>
          <div className="space-y-2">
            {Object.values(characters).map(character => (
              <button
                key={character.id}
                onClick={() => setSelectedCharacter(character.id)}
                className={`w-full text-left p-2 rounded transition-colors flex items-center ${
                  selectedCharacter === character.id ? 'bg-primary-100 border-l-4 border-primary-500' : 'hover:bg-gray-100'
                }`}
              >
                <div className="w-8 h-8 rounded-full overflow-hidden mr-2 bg-gray-300">
                  <img 
                    src={character.image} 
                    alt={character.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{character.name}</p>
                  <p className="text-xs text-gray-600">{character.role}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Character details */}
        <div className="w-2/3 p-6 overflow-y-auto bg-white">
          {selectedCharacter && characters[selectedCharacter] ? (
            <div>
              <div className="flex items-center mb-6">
                <div className="character-portrait w-24 h-24 mr-4">
                  <img 
                    src={characters[selectedCharacter].image} 
                    alt={characters[selectedCharacter].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h2 className="font-sans text-2xl font-bold text-gray-900">
                    {characters[selectedCharacter].name}
                  </h2>
                  <p className="text-primary-600 font-medium">{characters[selectedCharacter].role}</p>
                  <p className="text-sm text-gray-600">Relationship: {characters[selectedCharacter].relationship}</p>
                </div>
              </div>
              
              {selectedCharacter === 'steve' && (
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="italic text-gray-800">
                    "Sometimes I feel like I have walked into the middle of a movie. Maybe I can make my own movie. The film will be the story of my life. No, not my life, but of this experience. I'll call it what the lady who is the prosecutor called me. MONSTER."
                  </p>
                </div>
              )}
              
              {selectedCharacter === 'briggs' && (
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="italic text-gray-800">
                    "You're not guilty just because the prosecutor says you are. They need to prove it beyond a reasonable doubt, and our job is to create that doubt."
                  </p>
                </div>
              )}
              
              {selectedCharacter === 'petrocelli' && (
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="italic text-gray-800">
                    "There were four of them: James King, Bobo Evans, Osvaldo Cruz, and this defendant, Steve Harmon. They planned every step, and they carried it out just as they planned."
                  </p>
                </div>
              )}
              
              {(selectedCharacter !== 'steve' && selectedCharacter !== 'briggs' && selectedCharacter !== 'petrocelli') && (
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-800">
                    Each person in this case has their own perspective on what happened. Some may be telling the truth, others might have reasons to lie. Understanding their motivations will be critical to proving your innocence.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <p>Select a person to view details</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CharactersPanel;