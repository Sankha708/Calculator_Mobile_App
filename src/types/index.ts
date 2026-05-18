export type CalculatorMode = 'Standard' | 'Scientific' | 'Programmer' | 'Financial';

export interface CalculatorState {
  mode: CalculatorMode;
  expression: string;
  result: string;
  isRadian: boolean;
  theme: 'dark' | 'light';
  history: HistoryItem[];
}

export interface HistoryItem {
  expression: string;
  result: string;
  timestamp: number;
}
