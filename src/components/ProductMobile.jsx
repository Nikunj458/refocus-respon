import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { motion } from "framer-motion";

const ProductMobile = ({ val, mover, count, isActive }) => {
  const handleInteraction = () => {
    mover(count);
  };

  return (
    <motion.div
      onTouchStart={handleInteraction}
      style={{ backgroundColor: isActive ? val.coho : "transparent" }}
      className="max-w-[90vw] mx-auto justify-between items-start h-[160px] py-6 px-6 transition-all duration-300"
    >
      <div className="text-xl font-medium mt-[-20px] ml-[-16px] mb-1">{val.title}</div>
      <div className="  w-[107px]  tracking-tight leading-none text-[9px] ml-[-18px] ">
        <p className=' ' >{val.des}</p>
        <div className="flex mt-[3px] flex-wrap gap-1">
          {val.go && <Button  title={"Get Now"} />}
          {val.case && <Button  title={"Case study"} />}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductMobile;
