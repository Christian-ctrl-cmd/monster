import { create } from 'zustand';
import { GameState, GameScene, Dialogue } from '../types';
import { charactersData } from '../data/characters';
import { evidenceData } from '../data/evidence';
import { dialoguesData } from '../data/dialogues';
import { journalEntriesData } from '../data/journal';

export const useGameStore = create<GameState>((set, get) => ({
  currentScene: 'title',
  dialogues: dialoguesData,
  characters: charactersData,
  evidence: evidenceData,
  collectedEvidence: [],
  journalEntries: journalEntriesData,
  unlockedJournalEntries: ['intro'],
  trustScore: 50,
  currentDialogueId: null,
  gameProgress: 0,
  
  initializeGame: () => {
    // Initialize game with default state - no API calls needed
    set({
      currentScene: 'title',
      collectedEvidence: [],
      unlockedJournalEntries: ['intro'],
      trustScore: 50,
      currentDialogueId: null,
      gameProgress: 0
    });
  },
  
  setScene: (scene: GameScene) => {
    set({ currentScene: scene });
  },
  
  collectEvidence: (evidenceId: string) => {
    const state = get();
    if (!state.collectedEvidence.includes(evidenceId)) {
      set(state => ({
        evidence: { ...state.evidence, [evidenceId]: { ...state.evidence[evidenceId], found: true }},
        collectedEvidence: [...state.collectedEvidence, evidenceId],
        trustScore: Math.min(100, state.trustScore + state.evidence[evidenceId].importance)
      }));
    }
  },
  
  hasEvidence: (evidenceId: string) => get().collectedEvidence.includes(evidenceId),
  
  unlockJournalEntry: (entryId: string) => {
    const state = get();
    if (!state.unlockedJournalEntries.includes(entryId)) {
      set(state => ({
        journalEntries: { ...state.journalEntries, [entryId]: { ...state.journalEntries[entryId], unlocked: true }},
        unlockedJournalEntries: [...state.unlockedJournalEntries, entryId]
      }));
    }
  },
  
  hasJournalEntry: (entryId: string) => get().unlockedJournalEntries.includes(entryId),
  
  startDialogue: (dialogueId: string) => set({ currentDialogueId: dialogueId }),
  
  selectDialogueOption: (optionId: string) => {
    const currentDialogue = get().getCurrentDialogue();
    if (!currentDialogue?.options) return;
    
    const selectedOption = currentDialogue.options.find(option => option.id === optionId);
    if (!selectedOption) return;
    
    selectedOption.effect?.();
    set({ currentDialogueId: selectedOption.nextDialogueId || null });
  },
  
  getCurrentDialogue: () => {
    const { currentDialogueId, dialogues } = get();
    return currentDialogueId ? dialogues[currentDialogueId] || null : null;
  },
  
  incrementTrustScore: (amount: number) => set(state => ({
    trustScore: Math.min(100, state.trustScore + amount)
  })),
  
  decrementTrustScore: (amount: number) => set(state => ({
    trustScore: Math.max(0, state.trustScore - amount)
  })),
  
  updateGameProgress: (progress: number) => set({ gameProgress: progress })
}));