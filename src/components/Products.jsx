import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Product from '../components/ProductWrapper';

const Products = () => {
  var data =[
    {title:"Reftle" , des: "Dollar dominance looks set to continue for the foreseeable future and emerging nations’ idea of setting up their own single currency is “hot air" , case:false , go:true, coho:"#6366F1"},
    {title:"Orbjit" , des: "Dollar dominance kit like gikut looks set to continue for the foreseeable future and emerging nations’ idea of setting up their own single currency is “hot air" , case:false , go:true, coho:"#EA580C"},
    {title:"Teski" , des: "Dollar dominance looks fret hikje set to yim tree yijk nity continue for the foreseeable future and emerging nations’ idea of setting up their own single currency is “hot air" , case:true , go:true, coho:"#10B981"},
    {title:"Yahoo!" , des: "Dollar dominance looks set to continue for the foreseeable future and emerging nations’ idea of setting up their own single currency is “hot air." , case:true , go:true, coho:"#EAB308"}
];

  const [pos, setPos] = useState(-180);
  const [activeIndex, setActiveIndex] = useState(null);
  const [cardHeight, setCardHeight] = useState(180); 

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setCardHeight(180); 
      else if (width >= 640) setCardHeight(160); 
      else setCardHeight(160);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mover = (index) => {
    setPos(index * cardHeight);
    setActiveIndex(index);
  };

  return (
    <div className="relative">
      {data.map((item, index) => (
        <Product
          key={index}
          val={item}
          count={index}
          mover={mover}
          isActive={activeIndex === index}
        />
      ))}

      <div className="w-full h-[170px] top-0 pointer-events-none absolute">
        <motion.div
          initial={{ y: -pos }}
          animate={{ y: pos + 'px' }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="w-[220px] h-[160px] md:w-[300px] md:h-[180px] sm:w-[300px] left-[37.78%] sm:h-[160px] absolute md:left-[27%] sm:left-[27%] pr-117 overflow-hidden"
        >
          {[
            "https://cdn.dribbble.com/userupload/17849717/file/original-fd66744dc49fa855ce2aeb21f6583c95.mp4",
            "https://uploads.strikinglycdn.com/static/landing/editor.webm",
            "https://cdn-images.cure.fit/www-curefit-com/video/upload/c_fill,w_1400,ar_1.77,q_auto:eco,dpr_2,vc_auto,f_auto/video/test/we-are-cult-web.mp4",
            "https://cdn.coverr.co/videos/coverr-a-freelancer-checks-his-to-do-list-9529/720p.mp4"
          ].map((src, i) => (
            <motion.div
              key={i}
              animate={{ y: -pos + 'px' }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-full h-full"
            >
              <video className="h-full w-full object-cover" autoPlay muted loop src={src}></video>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
