export interface Period {
  subject: string;
  type: 'theory' | 'lab' | 'free';
  spans?: number;
}