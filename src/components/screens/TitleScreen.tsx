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
      <div className="absolute inset-0 bg-[url('https://brocku.ca/brock-news/wp-content/uploads/2024/02/GettyImages-1007557230-1600x1077.jpg')] bg-cover bg-center opacity-20" />
      
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
              <p>This game is based on the really powerful book "Monster" by Walter Dean Myers. You get to play as Steve Harmon, who's only 16 years old and is on trial for murder because they think he helped with a robbery.</p>
              
              <p>Playing as Steve, you have to:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Find evidence to prove you're innocent</li>
                <li>Talk to witnesses, your family, and your lawyer in important conversations</li>
                <li>Figure out what really happened on the day of the crime</li>
                <li>Keep being yourself even when people are calling you a "monster"</li>
              </ul>
              
              <p className="mt-4">The choices you make really matter. What evidence you find and how you talk to people will decide if you can prove you're innocent or if you'll spend your whole life in prison.</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TitleScreen;