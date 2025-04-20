import React from 'react';
import Button from '../components/Button';
import { motion } from "framer-motion"; 

const ProductDesktop = ({ val, mover, count }) => {
  return (
    <motion.div
      onMouseEnter={() => mover(count)}
      whileHover={{ backgroundColor: val.coho }}
      className="max-w-[79vw] justify-between flex items-center mx-auto h-[180px] py-8 px-12"
    >
      <div className="text-4xl font-medium ">{val.title}</div>
      <div className="w-2/5  text-xs">
        {val.des}
        <div className="flex gap-3 mt-[6px]">
          {val.go && <Button title="Get Now" />}
          {val.case && <Button title="Case Study" />}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDesktop;
