import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { Play, BookOpen } from 'lucide-react';

const TitleScreen = () => {
  const { setScene } = useGameStore();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            MONSTER
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            A story about truth, eh?
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            You're Steve Harmon, a 16-year-old kid from Harlem who's been charged with murder, eh? 
            Navigate through your trial and figure out what really happened that day, buddy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setScene('prison-cell')}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
            >
              <Play size={24} />
              Start Game, eh?
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setScene('evidence-board')}
              className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
            >
              <BookOpen size={24} />
              Check Evidence, buddy
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-gray-500 text-sm"
        >
          Based on the novel by Walter Dean Myers, eh?
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TitleScreen;