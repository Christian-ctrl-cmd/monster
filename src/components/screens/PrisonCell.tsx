import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { Calendar, Clock, User } from 'lucide-react';

const PrisonCell = () => {
  const { setScene, startDialogue, unlockJournalEntry } = useGameStore();

  const handleStartJournal = () => {
    unlockJournalEntry('day1');
    startDialogue('steve-intro');
  };

  const handleGoToCourt = () => {
    setScene('courtroom');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="min-h-screen bg-gray-800 relative overflow-hidden"
    >
      {/* Prison cell background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-900"></div>
      
      {/* Cell bars overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-repeat-x bg-[url('data:image/svg+xml,%3Csvg width="40" height="100" viewBox="0 0 40 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.3"%3E%3Crect x="0" y="0" width="4" height="100"/%3E%3Crect x="8" y="0" width="4" height="100"/%3E%3Crect x="16" y="0" width="4" height="100"/%3E%3Crect x="24" y="0" width="4" height="100"/%3E%3Crect x="32" y="0" width="4" height="100"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-centre items-centre px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-centre"
        >
          <div className="bg-gray-900 bg-opacity-80 rounded-lg p-8 shadow-2xl border border-gray-600">
            <div className="flex items-centre justify-centre gap-2 mb-6">
              <Calendar className="text-accent-500" size={24} />
              <h2 className="text-2xl font-bold text-white">Day 1 - Prison Cell</h2>
            </div>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                You wake up in a cold, small cell. The walls are gray concrete and there's barely any light.
              </p>
              <p>
                Your name is Steve Harmon. You're 16 years old, and you're here because they think you helped rob a store. 
                Someone died during that robbery.
              </p>
              <p className="text-accent-400 font-semibold">
                They're calling you a monster.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <button
                onClick={handleStartJournal}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-centre justify-centre gap-2"
              >
                <User size={20} />
                Start Writing in Your Journal
              </button>
              
              <button
                onClick={handleGoToCourt}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-centre justify-centre gap-2"
              >
                <Clock size={20} />
                Go to Court
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
  );
};

export default PrisonCell;