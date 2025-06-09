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

  const renderScene = () => {
    switch (currentScene) {
      case 'title':
        return <TitleScreen />;
      case 'prison-cell':
        return <PrisonCell />;
      case 'courtroom':
        return <Courtroom />;
      case 'neighborhood':
        return <Neighborhood />;
      case 'evidence-board':
        return <EvidenceBoard />;
      case 'ending':
        return <Ending />;
      default:
        return <TitleScreen />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <AnimatePresence mode="wait">
        {renderScene()}
      </AnimatePresence>
      <GameUI />
    </div>
  );
}

export default App;