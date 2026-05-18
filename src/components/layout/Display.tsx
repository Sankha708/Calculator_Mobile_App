import React from 'react';
import { useCalculatorStore } from '../../store/calculatorStore';

export const Display: React.FC = () => {
  const { expression, result } = useCalculatorStore();

  return (
    <div className="w-full flex flex-col items-end justify-end px-2 py-8 bg-black min-h-[220px]">
      <div className="text-zinc-400 text-3xl min-h-[40px] w-full text-right overflow-hidden text-ellipsis whitespace-nowrap mb-4 font-light">
        {expression}
      </div>
      <div className="text-white text-6xl font-normal tracking-tight w-full text-right overflow-hidden text-ellipsis whitespace-nowrap">
        {result || '0'}
      </div>
    </div>
  );
};
