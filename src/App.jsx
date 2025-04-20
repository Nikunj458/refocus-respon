import React from 'react';
import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquees from './components/Marquees';
import Cards from './components/Cards';
import Footer from './components/Footer';

import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='font-[satoshi_variable] overflow-x-hidden bg-zinc-900 h-full w-full text-white '>
      <Navbar/>
      <br />
      <Work/>
      <Stripes/>
<Products/>
<br /><br /> <br /><br />
<Marquees/>
<Cards/>
<br /><br /> <br /><br />
<Footer/>
<br />
    </div>
  );
};

export default App;
