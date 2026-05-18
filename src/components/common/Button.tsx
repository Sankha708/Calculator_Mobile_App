import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'number' | 'operator' | 'scientific' | 'action' | 'equals';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'number',
  className,
  ...props 
}) => {
  return (
    <button
      className={cn(
        "aspect-square rounded-full flex items-center justify-center select-none transition-transform active:scale-90 font-sans",
        {
          "bg-[#2d2d2d] text-[#f2f2f2] text-2xl font-normal": variant === 'number',
          "bg-[#2d2d2d] text-[#f2f2f2] text-[1.75rem] font-light": variant === 'operator',
          "bg-[#2d2d2d] text-[#a1a1a1] text-lg font-medium": variant === 'scientific',
          "bg-[#2d2d2d] text-[#f2f2f2] text-[1.35rem] font-medium": variant === 'action',
          "bg-[#7a73e6] text-white text-[2rem] font-light": variant === 'equals',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
