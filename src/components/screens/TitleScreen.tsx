import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useGameStore } from '../../store/gameStore';

const TitleScreen = () => {
  const { setScene, startDialogue } = useGameStore();
  
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
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg')] bg-cover bg-center opacity-30" />
      
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
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TitleScreen;