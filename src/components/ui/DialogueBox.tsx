import { useGameStore } from '../../store/gameStore';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const DialogueBox = () => {
  const { getCurrentDialogue, selectDialogueOption, characters } = useGameStore();
  
  const currentDialogue = getCurrentDialogue();
  if (!currentDialogue) return null;
  
  const character = characters[currentDialogue.character];

  return (
    <div className="fixed bottom-20 left-0 right-0 px-4 z-20 pointer-events-none">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden pointer-events-auto"
      >
        <div className="flex p-4 border-b border-gray-200">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
            <img 
              src={character.image} 
              alt={character.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900">{character.name}</h3>
            <p className="text-sm text-gray-600">{character.role}</p>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50">
          <p className="text-gray-800 mb-4 leading-relaxed">{currentDialogue.text}</p>
          
          {currentDialogue.options && currentDialogue.options.length > 0 && (
            <div className="space-y-2 mt-4">
              {currentDialogue.options.map(option => (
                <button
                  key={option.id}
                  onClick={() => selectDialogueOption(option.id)}
                  className="w-full text-left text-gray-700 hover:text-primary-900 transition-all duration-200 hover:bg-primary-100 rounded px-4 py-2 cursor-pointer"
                >
                  {option.text}
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default DialogueBox;