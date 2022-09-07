/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

const Button = () => {
  return (
    <button 
      className='bg-red transition ease-in-out outline-none text-white px-4 py-2 rounded-2xl text-lg hover:bg-purple'
      type="submit">
      Rechercher
    </button>
  );
};

export default Button;