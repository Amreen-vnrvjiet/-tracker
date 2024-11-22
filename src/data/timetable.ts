import { Period } from '../types';

export const timetableData: Record<string, Period[]> = {
  Monday: [
    { subject: 'DBMS', type: 'theory' },
    { subject: 'H&W', type: 'theory' },
    { subject: 'OOP JAVA', type: 'theory' },
    { subject: 'DBMS LAB', type: 'lab', spans: 3 }
  ],
  Tuesday: [
    { subject: 'JAVA LAB', type: 'lab', spans: 3 },
    { subject: 'DAA', type: 'theory' },
    { subject: 'MFCS', type: 'theory' },
    { subject: 'EEA', type: 'theory' }
  ],
  Wednesday: [
    { subject: 'DBMS', type: 'theory' },
    { subject: 'MFCS', type: 'theory' },
    { subject: 'OOP JAVA', type: 'theory' },
    { subject: 'DAA', type: 'theory' },
    { subject: 'EEA', type: 'theory' },
    { subject: 'FREE PERIOD', type: 'free' }
  ],
  Thursday: [
    { subject: 'DAA', type: 'theory' },
    { subject: 'MFCS', type: 'theory' },
    { subject: 'DBMS', type: 'theory' },
    { subject: 'PYTHON LAB', type: 'lab', spans: 3 }
  ],
  Friday: [
    { subject: 'OOP JAVA', type: 'theory' },
    { subject: 'DBMS', type: 'theory' },
    { subject: 'H&W', type: 'theory' },
    { subject: 'FREE PERIOD', type: 'free' },
    { subject: 'EEA', type: 'theory' },
    { subject: 'FREE PERIOD', type: 'free' }
  ],
  Saturday: [
    { subject: 'JAVA', type: 'theory' },
    { subject: 'FIELD PROJECT LAB', type: 'lab', spans: 2 },
    { subject: 'DAA', type: 'theory' },
    { subject: 'MFCS', type: 'theory' },
    { subject: 'FREE PERIOD', type: 'free' }
  ]
};