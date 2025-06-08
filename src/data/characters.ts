import { Character } from '../types';

export const charactersData: Record<string, Character> = {
  steve: {
    id: 'steve',
    name: 'Steve Harmon',
    role: 'Defendant',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
    relationship: 'You'
  },
  obryan: {
    id: 'obryan',
    name: 'Kathy O\'Bryan',
    role: 'Prosecutor',
    image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg',
    relationship: 'Adversary'
  },
  petrocelli: {
    id: 'petrocelli',
    name: 'Sandra Petrocelli',
    role: 'Prosecutor',
    image: 'https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg',
    relationship: 'Adversary'
  },
  briggs: {
    id: 'briggs',
    name: 'James Briggs',
    role: 'Defense Attorney',
    image: 'https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg',
    relationship: 'Ally'
  },
  harmon: {
    id: 'harmon',
    name: 'Mrs. Harmon',
    role: 'Mother',
    image: 'https://images.pexels.com/photos/7387432/pexels-photo-7387432.jpeg',
    relationship: 'Family'
  },
  judge: {
    id: 'judge',
    name: 'Judge Henderson',
    role: 'Judge',
    image: 'https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg',
    relationship: 'Authority'
  },
  bobo: {
    id: 'bobo',
    name: 'Richard "Bobo" Evans',
    role: 'Co-defendant',
    image: 'https://images.pexels.com/photos/5384429/pexels-photo-5384429.jpeg',
    relationship: 'Co-defendant'
  },
  king: {
    id: 'king',
    name: 'Freddy "King" Zinzi',
    role: 'Co-defendant',
    image: 'https://images.pexels.com/photos/8388229/pexels-photo-8388229.jpeg',
    relationship: 'Co-defendant'
  },
  osvaldo: {
    id: 'osvaldo',
    name: 'Osvaldo Cruz',
    role: 'Witness',
    image: 'https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg',
    relationship: 'Neighborhood acquaintance'
  },
  lorelle: {
    id: 'lorelle',
    name: 'Lorelle Henry',
    role: 'Witness',
    image: 'https://images.pexels.com/photos/5324825/pexels-photo-5324825.jpeg',
    relationship: 'Store customer'
  }
};