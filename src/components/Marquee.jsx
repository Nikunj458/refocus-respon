import React from 'react';
import { motion } from "framer-motion";
const Marquee = ({val,direction}) => {
  return (
    <div className='flex w-full overflow-hidden'>
    <motion.div initial={{x:direction==="left"?"0":"-100%"}} animate={{x:direction==="left"?"-100%":"0"}} transition={{ease:"linear", repeat:Infinity, duration:37}} className='flex gap-32 pr-28  flex-shrink-0 items-center   '>
    {val.map((url,index) => <img key={index} className='  invert  items-center justify-center flex w-24 max-h-16  ' src={url}  />)}
    </motion.div>
    <motion.div initial={{x:direction==="left"?"0":"-100%"}} animate={{x:direction==="left"?"-100%":"0"}} transition={{ease:"linear", repeat:Infinity, duration:37}} className='flex gap-32 pr-28 items-center flex-shrink-0   '>
    {val.map((url,index) => <img key={index} className='  invert  items-center justify-center flex w-24 max-h-16  ' src={url}  />)}
    </motion.div>
     </div>
  );
};

export default Marquee;