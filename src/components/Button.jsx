import { div } from 'motion/react-client';
import React from 'react';
import { IoIosReturnRight } from "react-icons/io";
const Button = ({title="Get Started"}) => {
  return (

    <div className='flex justify-between items-center rounded-full max-w-[123px] bg-zinc-100 text-zinc-700 text-sm px-2 py-1'>
      <span>{title}</span>
      <IoIosReturnRight className=' flex items-center ml-2 w-4 h-4' />
    </div>
  );
};

export default Button;
