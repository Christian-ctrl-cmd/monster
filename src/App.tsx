import { useEffect } from 'react';
import { useGameStore } from './store/gameStore';
import TitleScreen from './components/screens/TitleScreen';
import PrisonCell from './components/screens/PrisonCell';
import Courtroom from './components/screens/Courtroom';
import Neighborhood from './components/screens/Neighborhood';
import EvidenceBoard from './components/screens/EvidenceBoard';
import Ending from './components/screens/Ending';
import GameUI from './components/ui/GameUI';
import { AnimatePresence } from 'framer-motion';

function App() {
  const { currentScene, initializeGame } = useGameStore();

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const scenes = {
    'title': <TitleScreen />,
    'prison-cell': <PrisonCell />,
    'courtroom': <Courtroom />,
    'neighborhood': <Neighborhood />,
    'evidence-board': <EvidenceBoard />,
    'ending': <Ending />
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <AnimatePresence mode="wait">
        {scenes[currentScene] || <TitleScreen />}
      </AnimatePresence>
      <GameUI />
    </div>
  );
}

export default App;