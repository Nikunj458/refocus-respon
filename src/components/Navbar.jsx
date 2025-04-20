import React, { useState } from 'react';
import Button from './Button'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-[satoshi_variable] border-zinc-500 border-b-[1.2px] mx-auto max-w-[76vw] py-2 px-5 overflow-x-hidden">
      <div className="flex justify-between items-center">
   
        <div className="flex items-center">
          <svg className="w-4 mr-2" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.491027 5.74153C1.14573 5.12319 2.20721 5.1232 2.86191 5.74153L14.0384 16.2971C14.6931 16.9154 14.6931 17.9179 14.0384 18.5363C13.3837 19.1546 12.3222 19.1546 11.6675 18.5363L0.491027 7.9807C-0.163676 7.36237 -0.163676 6.35985 0.491027 5.74153Z" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 1.58333C0 0.708882 0.750582 0 1.67647 0H12.8529C13.7788 0 14.5294 0.708882 14.5294 1.58333C14.5294 2.45778 13.7788 3.16667 12.8529 3.16667H1.67647C0.750582 3.16667 0 2.45778 0 1.58333Z" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.35294 8.44444V17.4167C3.35294 18.2911 2.60236 19 1.67647 19C0.750583 19 0 18.2911 0 17.4167V6.86111C0 6.44119 0.176628 6.03846 0.491027 5.74153C0.805426 5.44459 1.23184 5.27778 1.67647 5.27778H12.8529C13.7788 5.27778 14.5294 5.98666 14.5294 6.86111C14.5294 7.73556 13.7788 8.44444 12.8529 8.44444H3.35294Z" fill="currentColor" />
          </svg>
          <div className="text-sm font-semibold">Refokus</div>
        </div>

        <button className="md:hidden " onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={!isMobileMenuOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"} />
          </svg>
        </button>

        <div className="hidden md:flex items-center ml-8">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            <div key={index} className="relative">
              <a className="mr-7 text-sm font-[satoshi_variable]" href="#">
                {elem || <span className="inline-block h-7">|</span>}
              </a>
              {index === 1 && (
                <span
                  style={{ boxShadow: '0 0 0.75em #00FF19' }}
                  className="inline-block w-1 bg-green-400 rounded-full h-1 absolute top-3 left-[-7px]"
                ></span>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          
          <Button/>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-800 z-30 absolute mt-3 px-4 pb-3 pt-3 right-12 space-y-2">
          {["Home", "Work", "Culture", "News"].map((elem, index) => (
            <a key={index} className="block text-sm font-[satoshi_variable]" href="#">
              {elem}
            </a>
          ))}
         
          <Button className='' />
        </div>
      )}
    </div>
  );
};

export default Navbar;
