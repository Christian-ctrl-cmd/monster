import { useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { Map, FileText, Files, Navigation } from 'lucide-react';
import JournalPanel from './JournalPanel';
import EvidencePanel from './EvidencePanel';
import NavigationPanel from './NavigationPanel';
import DialogueBox from './DialogueBox';

const GameUI = () => {
  const { currentScene, currentDialogueId } = useGameStore();
  const [activePanel, setActivePanel] = useState<string | null>(null);

  // Don't show UI on title screen
  if (currentScene === 'title') return null;

  const togglePanel = (panel: string) => {
    if (activePanel === panel) {
      setActivePanel(null);
    } else {
      setActivePanel(panel);
    }
  };

  return (
    <>
      {currentDialogueId && (
        <DialogueBox />
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-primary-900 bg-opacity-90 text-white z-10 transition-all">
        <div className="max-w-7xl mx-auto">
          {/* Active panel content */}
          <div className="px-4 transition-all duration-300">
            {activePanel === 'journal' && <JournalPanel />}
            {activePanel === 'evidence' && <EvidencePanel />}
            {activePanel === 'navigation' && <NavigationPanel />}
          </div>
          
          {/* Button navigation */}
          <div className="flex justify-around py-3 px-4 border-t border-primary-700">
            <button 
              onClick={() => togglePanel('journal')} 
              className={`flex flex-col items-center p-2 rounded-lg transition-colors ${activePanel === 'journal' ? 'bg-primary-700 text-white' : 'text-primary-300 hover:text-white'}`}
            >
              <FileText size={24} />
              <span className="text-xs mt-1">Journal</span>
            </button>
            
            <button 
              onClick={() => togglePanel('evidence')} 
              className={`flex flex-col items-center p-2 rounded-lg transition-colors ${activePanel === 'evidence' ? 'bg-primary-700 text-white' : 'text-primary-300 hover:text-white'}`}
            >
              <Files size={24} />
              <span className="text-xs mt-1">Evidence</span>
            </button>
            
            <button 
              onClick={() => togglePanel('navigation')} 
              className={`flex flex-col items-center p-2 rounded-lg transition-colors ${activePanel === 'navigation' ? 'bg-primary-700 text-white' : 'text-primary-300 hover:text-white'}`}
            >
              <Navigation size={24} />
              <span className="text-xs mt-1">Navigate</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameUI;