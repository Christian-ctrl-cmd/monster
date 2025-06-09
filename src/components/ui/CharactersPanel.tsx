import { useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { motion } from 'framer-motion';

const CharactersPanel = () => {
  const { characters } = useGameStore();
  const [selectedCharacter, setSelectedCharacter] = useState('steve');

  const characterList = Object.values(characters);

  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-white text-gray-900 rounded-t-lg shadow-lg overflow-hidden"
    >
      <div className="flex h-[300px] md:h-[400px]">
        {/* Characters list */}
        <div className="w-1/3 bg-gray-100 p-4 overflow-y-auto border-r border-gray-200">
          <h3 className="font-bold text-lg mb-4 text-gray-900">People, eh?</h3>
          <div className="space-y-2">
            {characterList.map(character => (
              <button
                key={character.id}
                onClick={() => setSelectedCharacter(character.id)}
                className={`w-full text-left p-2 rounded transition-colors ${
                  selectedCharacter === character.id ? 'bg-primary-200 text-primary-900' : 'hover:bg-gray-200'
                }`}
              >
                <p className="font-semibold text-sm">{character.name}</p>
                <p className="text-xs text-gray-600">{character.role}</p>
              </button>
            ))}
          </div>
        </div>
        
        {/* Character details */}
        <div className="w-2/3 p-6 overflow-y-auto">
          {selectedCharacter && characters[selectedCharacter] && (
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden">
                  <img 
                    src={characters[selectedCharacter].image} 
                    alt={characters[selectedCharacter].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {characters[selectedCharacter].name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-1">{characters[selectedCharacter].role}</p>
                  <p className="text-sm text-gray-500">{characters[selectedCharacter].relationship}</p>
                </div>
              </div>
              
              <div className="text-gray-700">
                {selectedCharacter === 'steve' && (
                  <p>That's you, buddy! A 16-year-old kid from Harlem who wants to be a filmmaker, eh? Now you\'re on trial for murder and everyone's calling you a monster.</p>
                )}
                {selectedCharacter === 'obryan' && (
                  <p>One of the prosecutors trying to convict you, eh? She's tough and doesn\'t seem to believe your story, buddy.</p>
                )}
                {selectedCharacter === 'petrocelli' && (
                  <p>The main prosecutor who keeps calling you a "monster," eh? She's determined to prove you were part of the robbery, buddy.</p>
                )}
                {selectedCharacter === 'briggs' && (
                  <p>Your defense lawyer, eh? She's trying her best to prove your innocence, but it\'s an uphill battle, buddy.</p>
                )}
                {selectedCharacter === 'harmon' && (
                  <p>Your mom, eh? She believes in you no matter what, buddy. Seeing her in the courtroom breaks your heart.</p>
                )}
                {selectedCharacter === 'judge' && (
                  <p>The judge overseeing your trial, eh? He seems fair but serious, buddy. Your fate is in his hands.</p>
                )}
                {selectedCharacter === 'bobo' && (
                  <p>One of your co-defendants, eh? He's trying to make a deal with the prosecution, buddy. Can you trust him?</p>
                )}
                {selectedCharacter === 'king' && (
                  <p>Another co-defendant, eh? He's older and more experienced with the system, buddy. What\'s his angle?</p>
                )}
                {selectedCharacter === 'osvaldo' && (
                  <p>A kid from the neighbourhood who's testifying, eh? He says he knows you were involved, buddy. But is he telling the truth?</p>
                )}
                {selectedCharacter === 'lorelle' && (
                  <p>A witness who was in the store, eh? Her testimony could be crucial, buddy. What did she really see?</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CharactersPanel;