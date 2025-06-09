import { JournalEntry } from '../types';

export const journalEntriesData: Record<string, JournalEntry> = {
  intro: {
    id: 'intro',
    title: 'First Day in Court',
    date: 'July 6th',
    content: `The prosecutor called me a monster today. A monster. That's how she sees me. That's how they all see me. Not as Steve Harmon. Not as a boy. Not even as a person. But as a monster.\n\nI need to find a way to show them who I really am. I'm not what they say. I'm just a kid from Harlem who loves making films. That's who I am. Not a monster. Never a monster.`,
    unlocked: true
  },
  defense_strategy: {
    id: 'defense_strategy',
    title: 'Meeting with Mr. Briggs',
    date: 'July 8th',
    content: `Mr. Briggs says we need evidence. Hard evidence that shows I wasn't at the drugstore when Mr. Nesbitt was killed. But what evidence could there be? It was just a normal day for me. I was working on my film project at the library, but who's going to remember seeing me there?\n\nI need to think. There must be something, someone who can back up my story. I can't go to prison for something I didn't do.`,
    unlocked: false
  },
  fear_entry: {
    id: 'fear_entry',
    title: 'The Fear',
    date: 'July 9th',
    content: `I can't sleep. Every time I close my eyes, I see the inside of a prison cell stretching out forever. I hear them calling me "monster" over and over.\n\nI've been thinking about what Mr. Briggs said about finding evidence. Maybe there's something in my routine that day, something I'm forgetting that could prove where I was.`,
    unlocked: false
  },
  journal_discovery: {
    id: 'journal_discovery',
    title: 'Old Journal Pages',
    date: 'July 11th',
    content: `Mom brought my old journal today. Reading through it, I found entries from the days before the robbery. I wrote about my film project, about meeting with my teacher after school to discuss camera angles. That was the same day as the robbery!\n\nIf my film teacher remembers our meeting, that could be my alibi. I need to tell Mr. Briggs right away.`,
    unlocked: false
  },
  script_reflection: {
    id: 'script_reflection',
    title: 'My Film',
    date: 'July 12th',
    content: `Looking at my film script feels like looking at another life. A life where I'm just a kid with dreams, not someone on trial for murder.\n\nMy film is about seeing the world through different perspectives. Maybe that's what I need to do now - help the jury see me through a different lens. Not as a monster, but as a person.`,
    unlocked: false
  },
  teacher_thought: {
    id: 'teacher_thought',
    title: 'Mr. Sawicki',
    date: 'July 15th',
    content: `I keep thinking about Mr. Sawicki, my film teacher. He always believed in me. Said I had a good eye for detail. Now I need him to remember the details of that day, to remember that I was with him discussing my project.\n\nWould his testimony be enough? Would the jury believe him? Or would they just see him as another person trying to help the "monster"?`,
    unlocked: false
  },
  evidence_reflection: {
    id: 'evidence_reflection',
    title: 'Pieces of Truth',
    date: 'July 18th',
    content: `Every piece of evidence feels like a small piece of truth, a small piece of me. Together, maybe they'll be enough to show who I really am.\n\nIt's like editing a film - each clip tells part of the story. I need enough clips, enough evidence to tell the full story of that day, to show I wasn't there, that I'm not what they say I am.`,
    unlocked: false
  },
  final_thoughts: {
    id: 'final_thoughts',
    title: 'Before the Verdict',
    date: 'July 25th',
    content: `Tomorrow the jury decides. Tomorrow I find out if I'm Steve Harmon, film student with a future, or if I'm what they called me - a monster.\n\nI've done everything I can to show them the truth. Now it's up to them to see it. To see me.`,
    unlocked: false
  }
};