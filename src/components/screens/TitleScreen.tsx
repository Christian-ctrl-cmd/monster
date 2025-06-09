import { motion } from 'framer-motion';
import { Play, Info, X } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';
import { useState } from 'react';

const TitleScreen = () => {
  const { setScene, startDialogue } = useGameStore();
  const [showInfo, setShowInfo] = useState(false);
  
  const startGame = () => {
    setScene('prison-cell');
    startDialogue('intro_briggs');
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/390089/pexels-photo-390089.jpeg')] bg-cover bg-center opacity-20" />
      
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-2 drop-shadow-lg">
          MONSTER
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wider">
          Steve Harmon's Quest for Innocence
        </h2>
        
        <div className="space-y-4 max-w-md mx-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="w-full bg-accent-600 hover:bg-accent-700 text-white py-3 px-6 rounded-lg font-bold flex items-center justify-center transition-colors"
          >
            <Play size={20} className="mr-2" />
            Begin Steve's Journey
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowInfo(!showInfo)}
            className="w-full bg-primary-700 hover:bg-primary-800 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors"
          >
            <Info size={20} className="mr-2" />
            About the Game
          </motion.button>
        </div>
      </motion.div>
      
      {showInfo && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-20 p-4"
        >
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
            <button 
              onClick={() => setShowInfo(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>
            
            <h2 className="text-2xl font-bold mb-4">About "Monster: Steve Harmon's Quest for Innocence"</h2>
            
            <div className="prose">
              <p>Based on the powerful novel "Monster" by Walter Dean Myers, this game puts you in the shoes of Steve Harmon, a 16-year-old on trial for murder as an alleged accomplice to a robbery.</p>
              
              <p>As Steve, you must:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Gather evidence to prove your innocence</li>
                <li>Navigate crucial conversations with witnesses, family, and legal counsel</li>
                <li>Piece together what really happened on the day of the crime</li>
                <li>Maintain your sense of identity despite being labeled a "monster"</li>
              </ul>
              
              <p className="mt-4">Your choices matter. The evidence you find and the way you interact with others will determine whether you can prove your innocence or face a lifetime behind bars.</p>
              
              <p className="text-sm text-gray-500 mt-4">This game deals with serious themes including racial prejudice, the justice system, and identity. It aims to be faithful to the powerful messages in Walter Dean Myers' acclaimed novel.</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TitleScreen;