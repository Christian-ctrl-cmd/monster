import { Evidence } from '../types';

export const evidenceData: Record<string, Evidence> = {
  'security-footage': {
    id: 'security-footage',
    name: 'Store Security Camera, eh?',
    description: 'Grainy footage from the drugstore that shows someone who might be you, buddy. The quality is pretty bad though.',
    image: 'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg',
    found: false,
    location: 'courtroom',
    importance: 15
  },
  'witness-testimony': {
    id: 'witness-testimony',
    name: 'Witness Statement, buddy',
    description: 'Someone says they saw you near the store that day, eh? But they seem kinda unsure about it.',
    image: 'https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg',
    found: false,
    location: 'courtroom',
    importance: 10
  },
  'phone-records': {
    id: 'phone-records',
    name: 'Your Phone Records, eh?',
    description: 'Shows where you were based on cell towers, buddy. Might prove you weren\'t at the store.',
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-163064.jpeg',
    found: false,
    location: 'evidence-board',
    importance: 20
  }
};