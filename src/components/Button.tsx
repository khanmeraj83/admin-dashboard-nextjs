import React, { FC, ReactNode, MouseEvent } from 'react';
interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
  >
    {children}
  </button>
);

export default Button;
