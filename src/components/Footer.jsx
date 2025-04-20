import React from 'react';

const Footer = () => {
  return (
    <div className="mx-auto md:max-w-[70vw] lg:max-w-[70vw] sm:max-w-[70vw] xl:max-w-[70vw] xl:bg-zinc-900 lg:bg-zinc-900 sm:bg-zinc-900 md:bg-zinc-900 bg-zinc-800 w-full flex mb-[-24px] flex-wrap md:flex-nowrap gap-8 md:gap-12 px-5 py-10">
      <div className="text-6xl md:text-9xl tracking-tighter font-normal leading-none md:mr-24 w-full md:w-auto">
        refokus.
      </div>

      <div className="flex flex-col  sm:w-1/3 md:w-auto">
        <h4 className="mb-2 text-xs text-zinc-500">Socials</h4>
        {["instagram", "twitter", "linkedIn"].map((elem, index) => (
          <a
            key={index}
            className="text-xs capitalize text-zinc-300 mb-1 hover:text-white transition-colors"
            href="#"
          >
            {elem}
          </a>
        ))}
      </div>

      <div className="flex flex-col w-1/2 sm:w-1/3 md:w-auto">
        <h4 className="mb-2 text-xs text-zinc-500">Sitemap</h4>
        {["home", "work", "career", "contacts"].map((elem, index) => (
          <a
            key={index}
            className="text-xs capitalize text-zinc-300 mb-1 hover:text-white transition-colors"
            href="#"
          >
            {elem}
          </a>
        ))}
      </div>

      <div className="flex flex-col items-end w-full md:w-auto mt-6 md:mt-0 md:ml-auto">
        <p className="text-right text-[10px] text-zinc-400 leading-snug max-w-[220px]">
          Refokus is a pioneering digital agency driven and empowered by technology
        </p>
        <img className="mt-3 w-20" src="./src/components/yt.png" alt="YouTube" />
        
      </div>
    </div>
  );
};

export default Footer;
