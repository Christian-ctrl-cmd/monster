import { useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { motion } from 'framer-motion';

const JournalPanel = () => {
  const { journalEntries, unlockedJournalEntries } = useGameStore();
  const [selectedEntry, setSelectedEntry] = useState(unlockedJournalEntries[0]);

  const availableEntries = unlockedJournalEntries.map(id => journalEntries[id])
    .sort((a, b) => unlockedJournalEntries.indexOf(a.id) - unlockedJournalEntries.indexOf(b.id));

  return (
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="bg-journal-50 text-journal-900 rounded-t-lg shadow-lg overflow-hidden"
    >
      <div className="flex h-[300px] md:h-[400px]">
        {/* Journal entries list */}
        <div className="w-1/3 bg-journal-100 p-4 overflow-y-auto border-r border-journal-200">
          <h3 className="font-serif text-lg font-bold mb-4 text-journal-900">Journal Entries</h3>
          <div className="space-y-2">
            {availableEntries.map(entry => (
              <button
                key={entry.id}
                onClick={() => setSelectedEntry(entry.id)}
                className={`w-full text-left p-2 rounded transition-colors ${
                  selectedEntry === entry.id ? 'bg-journal-300 text-journal-900' : 'hover:bg-journal-200'
                }`}
              >
                <p className="font-serif font-semibold">{entry.title}</p>
                <p className="text-xs text-journal-600">{entry.date}</p>
              </button>
            ))}
          </div>
        </div>
        
        {/* Journal content */}
        <div className="w-2/3 p-6 overflow-y-auto bg-journal-50">
          {selectedEntry && journalEntries[selectedEntry] && (
            <div>
              <h2 className="font-serif text-2xl font-bold mb-1 text-journal-900">
                {journalEntries[selectedEntry].title}
              </h2>
              <p className="text-sm text-journal-600 mb-4">{journalEntries[selectedEntry].date}</p>
              <div className="journal whitespace-pre-line">
                {journalEntries[selectedEntry].content}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default JournalPanel;