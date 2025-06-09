import { Evidence } from '../types';

export const evidenceData: Record<string, Evidence> = {
  film_script: {
    id: 'film_script',
    name: 'Film Script',
    description: 'Your film script that demonstrates your passion for filmmaking and your character.',
    image: 'https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg',
    found: false,
    location: 'prison-cell',
    importance: 5
  },
  journal: {
    id: 'journal',
    name: 'Personal Journal',
    description: 'Your personal journal with your thoughts and reflections during the trial.',
    image: 'https://images.pexels.com/photos/6937438/pexels-photo-6937438.jpeg',
    found: false,
    location: 'prison-cell',
    importance: 7
  },
  store_receipt: {
    id: 'store_receipt',
    name: 'Store Receipt',
    description: 'A receipt showing you were at a different store during the time of the robbery.',
    image: 'https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg',
    found: false,
    location: 'neighborhood',
    importance: 10
  },
  witness_statement: {
    id: 'witness_statement',
    name: 'Witness Statement',
    description: 'Statement from a witness who saw you at the library during the time of the crime.',
    image: 'https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg',
    found: false,
    location: 'courtroom',
    importance: 8
  },
  security_footage: {
    id: 'security_footage',
    name: 'Security Camera Footage',
    description: 'Grainy security camera footage that might show you were not at the crime scene.',
    image: 'https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg',
    found: false,
    location: 'neighborhood',
    importance: 15
  },
  character_reference: {
    id: 'character_reference',
    name: 'Character Reference Letter',
    description: 'A letter from your film teacher discussing your character and dedication.',
    image: 'https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg',
    found: false,
    location: 'courtroom',
    importance: 6
  },
  phone_record: {
    id: 'phone_record',
    name: 'Phone Records',
    description: 'Phone records showing your calls during the time of the robbery.',
    image: 'https://images.pexels.com/photos/4098366/pexels-photo-4098366.jpeg',
    found: false,
    location: 'prison-cell',
    importance: 9
  },
  king_confession: {
    id: 'king_confession',
    name: 'King\'s Contradictory Statement',
    description: 'A statement where King contradicts himself about your involvement.',
    image: 'https://images.pexels.com/photos/4240497/pexels-photo-4240497.jpeg',
    found: false,
    location: 'courtroom',
    importance: 12
  },
  bobo_deal: {
    id: 'bobo_deal',
    name: 'Bobo\'s Plea Deal Document',
    description: 'Document showing Bobo received a deal to testify against others.',
    image: 'https://images.pexels.com/photos/5668542/pexels-photo-5668542.jpeg',
    found: false,
    location: 'courtroom',
    importance: 10
  }
};