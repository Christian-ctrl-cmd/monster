import { JournalEntry } from '../types';

export const journalEntriesData: Record<string, JournalEntry> = {
  'intro': {
    id: 'intro',
    title: 'My Story, eh?',
    date: 'July 6th',
    content: `My lawyer told me to write everything down, buddy. She said it might help my case or whatever. I don't really know what to write about, eh? 

I'm Steve Harmon and I'm 16 years old. I live in Harlem with my mom and dad and my little brother Jerry. I go to Stuyvesant High School and I wanna be a filmmaker someday, you know?

But now I'm in jail waiting for my trial and everyone's calling me a monster. That's what the prosecutor lady said - that I'm a monster, eh? But I'm not a monster, buddy. I'm just a kid who made some bad choices maybe.

I don't know what's gonna happen to me.`,
    unlocked: true
  },
  'first-day': {
    id: 'first-day',
    title: 'First Day in Here, buddy',
    date: 'July 7th',
    content: `This place is scary, eh? The other guys in here keep looking at me funny. I think they know I'm just a kid from the neighbourhood who doesn't belong here, buddy.

The food is gross and the bed is hard and I can't sleep because it's never really quiet. There's always someone talking or yelling or crying, you know?

I keep thinking about my mom and how she looked when they arrested me. She was crying and I wanted to tell her it was gonna be okay, eh? But I don't even know if that's true, buddy.

My lawyer says I gotta be strong and tell my story. But what if my story isn't good enough?`,
    unlocked: false
  }
};