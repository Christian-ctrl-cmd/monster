import { motion } from 'framer-motion';
import { useGameStore } from '../../store/gameStore';
import { Calendar, User, FileText } from 'lucide-react';

const PrisonCell = () => {
  const { setScene, startDialogue, unlockJournalEntry } = useGameStore();

  const handleStartJournal = () => {
    unlockJournalEntry('first-day');
    startDialogue('steve-intro');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-800 relative overflow-hidden"
    >
      {/* Prison cell background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-900"></div>
      
      {/* Cell bars overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-repeat-x bg-[url('data:image/svg+xml,%3Csvg width="40" height="100" viewBox="0 0 40 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.3"%3E%3Crect x="0" y="0" width="4" height="100"/%3E%3Crect x="36" y="0" width="4" height="100"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Day 1 - The Cell, eh?
            </h1>
            <p className="text-xl text-gray-300">
              You're in a holding cell waiting for your trial, buddy
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900 bg-opacity-80 rounded-lg p-8 mb-8 text-left max-w-2xl mx-auto"
          >
            <p className="text-gray-300 leading-relaxed mb-6">
              The walls are cold and gray, just like everything else in here, eh? 
              You can hear other inmates talking down the hall, but mostly it's just quiet. 
              Real quiet. The kind of quiet that makes you think about stuff you don't wanna think about, buddy.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Your lawyer said to write everything down - every memory, every detail about that day. 
              Maybe it'll help your case, eh? Maybe it won't. But what else are you gonna do in here?
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <button
              onClick={handleStartJournal}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 mx-auto shadow-lg"
            >
              <FileText size={24} />
              Start Writing, eh?
            </button>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <button
                onClick={() => setScene('courtroom')}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Go to Court, buddy
              </button>
              
              <button
                onClick={() => setScene('neighborhood')}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <User size={20} />
                Remember the Neighbourhood, eh?
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrisonCell;