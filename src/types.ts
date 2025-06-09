export type GameScene = 'title' | 'prison-cell' | 'courtroom' | 'neighborhood' | 'evidence-board' | 'ending';

export interface Character {
  id: string;
  name: string;
  role: string;
  image: string;
  relationship: string;
}

export interface DialogueOption {
  id: string;
  text: string;
  nextDialogueId?: string | null;
  effect?: () => void;
}

export interface Dialogue {
  id: string;
  character: string;
  text: string;
  options?: DialogueOption[];
}

export interface Evidence {
  id: string;
  name: string;
  description: string;
  image: string;
  found: boolean;
  location: string;
  importance: number;
}

export interface JournalEntry {
  id: string;
  title: string;
  date: string;
  content: string;
  unlocked: boolean;
}

export interface GameState {
  currentScene: GameScene;
  dialogues: Record<string, Dialogue>;
  characters: Record<string, Character>;
  evidence: Record<string, Evidence>;
  collectedEvidence: string[];
  journalEntries: Record<string, JournalEntry>;
  unlockedJournalEntries: string[];
  trustScore: number;
  currentDialogueId: string | null;
  gameProgress: number;
  
  initializeGame: () => void;
  setScene: (scene: GameScene) => void;
  collectEvidence: (evidenceId: string) => void;
  hasEvidence: (evidenceId: string) => boolean;
  unlockJournalEntry: (entryId: string) => void;
  hasJournalEntry: (entryId: string) => boolean;
  startDialogue: (dialogueId: string) => void;
  selectDialogueOption: (optionId: string) => void;
  getCurrentDialogue: () => Dialogue | null;
  incrementTrustScore: (amount: number) => void;
  decrementTrustScore: (amount: number) => void;
  updateGameProgress: (progress: number) => void;
}