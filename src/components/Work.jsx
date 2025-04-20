import React, { useState, useEffect } from 'react';
import { motion, useScroll } from "motion/react";


const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener(); 
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

const Work = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const [images, setimages] = useState([
    {
      url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8ccb75f918dc861c6c3_Layout%20Land%20-%204%203-p-800.webp',
      top: { base: "26%", md: "38.1%" },
      left: { base: "37%", md: "43.1%" },
      isactive: false
    },
    {
      url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d86a8a9b4a0505553454_Arqitel%20-%204%203-p-800.webp',
      top: { base: "28%", md: "43%" },
      left: { base: "40%", md: "40.7%" },
      isactive: false
    },
    {
      url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d3cbf37cf4d6ddc1f21b_Umault%20-%204%203-p-800.webp',
      top: { base: "34%", md: "40.4%" },
      left: { base: "35%", md: "46%" },
      isactive: false
    },
    {
      url: 'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8846629f4e91cbfc152_Cula%20-%204%203-p-800.webp',
      top: { base: "42%", md: "40%" },
      left: { base: "41%", md: "42.9%" },
      isactive: false
    },
    {
      url: 'https://static.vecteezy.com/system/resources/previews/000/543/599/original/vector-blue-technology-circle-and-computer-science-abstract-background-with-blue-and-binary-code-matrix-business-and-connection-futuristic-and-industry-4-0-concept-internet-cyber-and-network-theme.jpg',
      top: { base: "44%", md: "44%" },
      left: { base: "45%", md: "44.7%" },
      isactive: false
    },

  ]);

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setimages((prev) =>
        prev.map((item, index) =>
          arr.includes(index)
            ? { ...item, isactive: true }
            : { ...item, isactive: false }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 2:
        imagesShow([0]);
        break;
      case 5:
        imagesShow([0, 1]);
        break;
      case 8:
        imagesShow([0, 1, 2]);
        break;
      case 13:
        imagesShow([0, 1, 2, 3]);
        break;
      case 17:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 21:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
      default:
        break;
    }
  });

  return (
    <div className="w-full relative overflow-hidden h-[300px] sm:h-[380px] md:h-[394px]">
      <div className="mt-10 tracking-tight select-none mx-auto font-medium text-center text-[29vw] md:text-[21vw]  leading-none max-w-screen-lg">
        work
      </div>

      {/* Floating Images */}
      {images.map(
        (elem, index) =>
          elem.isactive && (
            <img
              key={index}
              className="absolute w-[100px] md:w-[170px]  h-[100px] md:h-[170px] object-cover rounded-lg transition duration-100"
              style={{
                top: isDesktop ? elem.top.md : elem.top.base,
                left: isDesktop ? elem.left.md : elem.left.base
              }}
              src={elem.url}
              alt=""
            />
          )
      )}
    </div>
  );
};

export default Work;
