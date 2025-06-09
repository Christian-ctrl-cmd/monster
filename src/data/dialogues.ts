import { Dialogue } from '../types';

export const dialoguesData: Record<string, Dialogue> = {
  'steve-intro': {
    id: 'steve-intro',
    character: 'steve',
    text: "Man, this is so messed up, eh? I keep thinking about what my lawyer said - that I gotta write everything down. But like, where do I even start, buddy? Everything feels like a bad dream that I can't wake up from.",
    options: [
      {
        id: 'start-writing',
        text: "Start writing about that day, eh?",
        nextDialogueId: 'steve-memory'
      },
      {
        id: 'think-about-trial',
        text: "Think about the trial coming up, buddy",
        nextDialogueId: 'steve-trial-thoughts'
      }
    ]
  },
  'steve-memory': {
    id: 'steve-memory',
    character: 'steve',
    text: "That day... I was just walking around the neighbourhood, you know? Wasn't doing nothing wrong, eh? But now they're saying I was part of some robbery. Like, how does that even happen, buddy?",
    options: [
      {
        id: 'remember-more',
        text: "Try to remember more details, eh?",
        nextDialogueId: null
      }
    ]
  },
  'steve-trial-thoughts': {
    id: 'steve-trial-thoughts',
    character: 'steve',
    text: "The trial's gonna be rough, eh? My lawyer keeps telling me to stay calm and tell the truth. But what if nobody believes me, buddy? What if they just see what they wanna see?",
    options: [
      {
        id: 'stay-positive',
        text: "Try to stay positive, eh?",
        nextDialogueId: null
      }
    ]
  }
};