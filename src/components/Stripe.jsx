import React from 'react';

const Stripe = ({ val }) => {
  return (
    <div className="border-zinc-300 border-y  border-r w-full sm:w-[50%] md:w-[33.3%] lg:w-[25%] 
    xl:w-[17%] flex items-center justify-between
     px-1 pr-4 md:px-3 lg:px-3 py-3 sm:gap-3  gap-1">
      <img
        className="invert w-11 sm:w-[67px] md:w-[110px] object-contain"
        src={val.url}
        alt=""
      />
      <h2 className="font-semibold text-[8px] sm:text-base md:text-lg">{val.num}</h2>
    </div>
  );
};

export default Stripe;
