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
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-centre justify-centre relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 text-centre max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            MONSTER
          </h1>
          <div className="w-32 h-1 bg-accent-500 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            A story about truth, justice, and what makes someone a monster
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-4"
        >
          <button
            onClick={() => setScene('prison-cell')}
            className="group bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-centre gap-3 mx-auto"
          >
            <Play size={24} className="group-hover:translate-x-1 transition-transform" />
            Start Your Story
          </button>
          
          <p className="text-gray-400 text-sm">
            Based on the novel by Walter Dean Myers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex items-centre gap-2 text-gray-500 text-sm">
            <BookOpen size={16} />
            <span>Interactive Story Experience</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
  );
};

export default TitleScreen;