import { create } from 'zustand';

export type CalculatorMode = 'Standard' | 'Scientific' | 'Programmer' | 'Financial';

interface CalculatorState {
  mode: CalculatorMode;
  expression: string;
  result: string;
  isRadian: boolean;
  theme: 'dark' | 'light';
  
  // Actions
  setMode: (mode: CalculatorMode) => void;
  setExpression: (expr: string) => void;
  appendExpression: (val: string) => void;
  clearExpression: () => void;
  deleteLast: () => void;
  setResult: (res: string) => void;
  toggleRadian: () => void;
  toggleTheme: () => void;
}

export const useCalculatorStore = create<CalculatorState>((set) => ({
  mode: 'Standard',
  expression: '',
  result: '0',
  isRadian: false,
  theme: 'dark',

  setMode: (mode) => set({ mode, expression: '', result: '0' }),
  setExpression: (expression) => set({ expression }),
  appendExpression: (val) => set((state) => ({ expression: state.expression + val })),
  clearExpression: () => set({ expression: '', result: '0' }),
  deleteLast: () => set((state) => ({ expression: state.expression.slice(0, -1) })),
  setResult: (result) => set({ result }),
  toggleRadian: () => set((state) => ({ isRadian: !state.isRadian })),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
}));
