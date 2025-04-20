import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
const Card = ({width, para,contact,hover}) => {
  return (
    <div  className={`${width}`}>
    <div className='w-full'>
      <motion.div  whileHover={{backgroundColor:hover=== true  && "#8B5CF6", padding:"16px"}} className={`bg-zinc-700  px-5  py-2 flex flex-col  justify-between min-h-[17rem] rounded-md   `}>
        <div>

         <div className='flex  items-center text-zinc-400 font-normal'>

              <h2 className='text-sm'>Heading </h2>
              <IoIosArrowRoundForward />
         </div>
              <div>
               <h1 className='text-2xl'>Next Heading</h1>
             </div>
        </div>
             <div>
                {contact && (
                    <div>
                    <h1 className='text-4xl md:text-5xl sm:text-5xl xl:text-5xl lg:text-5xl  mb-3 '>Start a Project</h1>
              <button className='px-3 mt-2  text-xs rounded-full leading-none py-[6px] border-zinc-200 border-[1px]'>Contact us</button> </div>)}
                    
              
              {para && (<p className='text-[9px] text-zinc-400'>Lorem ipsum dolor sit amet consectetur,elit.</p>)}
              
             </div>
      </motion.div>
    </div></div>
  );
};

export default Card;
