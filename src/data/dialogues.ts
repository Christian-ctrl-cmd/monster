import { Dialogue } from '../types';
import { useGameStore } from '../store/gameStore';

export const dialoguesData: Record<string, Dialogue> = {
  intro_briggs: {
    id: 'intro_briggs',
    character: 'briggs',
    text: 'Steve, I know this is difficult. But we need to work together to prove your innocence. The prosecution has a weak case, but we need evidence to counter their narrative.',
    options: [
      {
        id: 'option1',
        text: 'What do you need from me?',
        nextDialogueId: 'briggs_response1',
      },
      {
        id: 'option2',
        text: 'I didn\'t do anything wrong.',
        nextDialogueId: 'briggs_response2',
      },
      {
        id: 'option3',
        text: 'I\'m scared.',
        nextDialogueId: 'briggs_response3',
      }
    ]
  },
  briggs_response1: {
    id: 'briggs_response1',
    character: 'briggs',
    text: 'I need you to help me gather evidence that puts you away from the crime scene. Any receipts, witnesses, or alibis that can prove you weren\'t there. Also, we need to find inconsistencies in the prosecution\'s witnesses\' testimonies.',
    options: [
      {
        id: 'option1',
        text: 'I think I have some ideas.',
        nextDialogueId: 'briggs_instructions',
        effect: () => {
          const store = useGameStore.getState();
          store.incrementTrustScore(5);
          store.unlockJournalEntry('defense_strategy');
        }
      }
    ]
  },
  briggs_response2: {
    id: 'briggs_response2',
    character: 'briggs',
    text: 'I believe you, Steve. But the jury needs more than just your word. We need evidence that contradicts the prosecution\'s narrative.',
    options: [
      {
        id: 'option1',
        text: 'Ok, I understand.',
        nextDialogueId: 'briggs_instructions'
      }
    ]
  },
  briggs_response3: {
    id: 'briggs_response3',
    character: 'briggs',
    text: 'It\'s natural to be scared, Steve. This is a serious situation. But focus on what we can control - finding evidence to support your innocence.',
    options: [
      {
        id: 'option1',
        text: 'I\'ll try to focus.',
        nextDialogueId: 'briggs_instructions',
        effect: () => {
          const store = useGameStore.getState();
          store.unlockJournalEntry('fear_entry');
        }
      }
    ]
  },
  briggs_instructions: {
    id: 'briggs_instructions',
    character: 'briggs',
    text: 'Look for anything that can help establish your whereabouts during the robbery. Check your cell for personal items that might help, talk to potential witnesses, and look for inconsistencies in the prosecution\'s case when we\'re in the courtroom.',
    options: [
      {
        id: 'option1',
        text: 'I\'ll start searching right away.',
        effect: () => {
          const store = useGameStore.getState();
          store.setScene('prison-cell');
        }
      }
    ]
  },
  mom_visit: {
    id: 'mom_visit',
    character: 'harmon',
    text: 'Steve, baby... how are you holding up? I brought some of your things from home. Maybe there\'s something here that could help your case.',
    options: [
      {
        id: 'option1',
        text: 'Thanks, mom. I\'m trying to stay strong.',
        nextDialogueId: 'mom_response1',
        effect: () => {
          const store = useGameStore.getState();
          store.incrementTrustScore(3);
        }
      },
      {
        id: 'option2',
        text: 'I don\'t know if I can handle this much longer.',
        nextDialogueId: 'mom_response2'
      }
    ]
  },
  mom_response1: {
    id: 'mom_response1',
    character: 'harmon',
    text: 'That\'s my boy. I know you\'re innocent, and we\'re going to get through this together. I found your old journal and some of your film projects. I thought they might show who you really are.',
    options: [
      {
        id: 'option1',
        text: 'My journal might have some entries that could help.',
        effect: () => {
          const store = useGameStore.getState();
          if (!store.hasEvidence('journal')) {
            store.collectEvidence('journal');
            store.unlockJournalEntry('journal_discovery');
          }
        }
      }
    ]
  },
  mom_response2: {
    id: 'mom_response2',
    character: 'harmon',
    text: 'I know it\'s hard, baby. But you have to stay strong. We\'re fighting for you. I brought your film projects and journal - things that show who you really are.',
    options: [
      {
        id: 'option1',
        text: 'My film script might show my character.',
        effect: () => {
          const store = useGameStore.getState();
          if (!store.hasEvidence('film_script')) {
            store.collectEvidence('film_script');
            store.unlockJournalEntry('script_reflection');
          }
        }
      }
    ]
  },
  petrocelli_cross: {
    id: 'petrocelli_cross',
    character: 'petrocelli',
    text: 'Mr. Harmon, witnesses place you at the scene as a lookout during the robbery that resulted in Mr. Nesbitt\'s death. How do you explain that?',
    options: [
      {
        id: 'option1',
        text: 'I wasn\'t there. I was at the library working on my film project.',
        nextDialogueId: 'petrocelli_challenge',
        effect: () => {
          const store = useGameStore.getState();
          if (store.hasEvidence('witness_statement')) {
            store.incrementTrustScore(10);
          } else {
            store.decrementTrustScore(5);
          }
        }
      },
      {
        id: 'option2',
        text: 'Those witnesses are lying or mistaken.',
        nextDialogueId: 'petrocelli_aggressive',
        effect: () => {
          const store = useGameStore.getState();
          store.decrementTrustScore(8);
        }
      },
      {
        id: 'option3',
        text: 'I knew some of those guys, but I wasn\'t involved in any robbery.',
        nextDialogueId: 'petrocelli_admission',
        effect: () => {
          const store = useGameStore.getState();
          store.incrementTrustScore(3);
        }
      }
    ]
  },
  petrocelli_challenge: {
    id: 'petrocelli_challenge',
    character: 'petrocelli',
    text: 'Do you have any proof that you were at the library during the time of the robbery?',
    options: [
      {
        id: 'option1',
        text: 'My film teacher can verify I was working with him.',
        nextDialogueId: 'judge_interject',
        effect: () => {
          const store = useGameStore.getState();
          if (!store.hasEvidence('character_reference')) {
            store.unlockJournalEntry('teacher_thought');
          }
        }
      }
    ]
  },
  petrocelli_aggressive: {
    id: 'petrocelli_aggressive',
    character: 'petrocelli',
    text: 'So everyone is lying except you, Mr. Harmon? Bobo Evans and King Zinzi both testified that you were the lookout. Are they both lying?',
    options: [
      {
        id: 'option1',
        text: 'They\'re lying to save themselves.',
        nextDialogueId: 'judge_interject',
        effect: () => {
          const store = useGameStore.getState();
          if (store.hasEvidence('bobo_deal')) {
            store.incrementTrustScore(8);
          }
        }
      }
    ]
  },
  petrocelli_admission: {
    id: 'petrocelli_admission',
    character: 'petrocelli',
    text: 'So you admit you knew the defendants? King Zinzi stated you were friends and that\'s why they chose you as the lookout.',
    options: [
      {
        id: 'option1',
        text: 'I know them from the neighborhood, but we\'re not friends. I wasn\'t part of their plan.',
        nextDialogueId: 'judge_interject'
      }
    ]
  },
  judge_interject: {
    id: 'judge_interject',
    character: 'judge',
    text: 'We\'ll take a brief recess. Court will resume in 15 minutes.',
    options: [
      {
        id: 'option1',
        text: 'Talk to my lawyer',
        effect: () => {
          const store = useGameStore.getState();
          store.startDialogue('briggs_recess');
        }
      }
    ]
  },
  briggs_recess: {
    id: 'briggs_recess',
    character: 'briggs',
    text: 'Steve, we need more concrete evidence. The prosecution\'s case relies heavily on testimony from people who made deals. If we can find inconsistencies or proof that you weren\'t there, we have a chance.',
    options: [
      {
        id: 'option1',
        text: 'Let\'s review what we\'ve found so far.',
        effect: () => {
          const store = useGameStore.getState();
          store.setScene('evidence-board');
        }
      }
    ]
  }
};