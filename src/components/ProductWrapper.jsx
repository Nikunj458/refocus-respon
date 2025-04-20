import React, { useEffect, useState } from 'react';
import ProductDesktop from './ProductDesktop';
import ProductMobile from './ProductMobile';

const Product = ({ val, mover, count, isActive }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? (
    <ProductMobile val={val} mover={mover} count={count} isActive={isActive} />
  ) : (
    <ProductDesktop val={val} mover={mover} count={count} />
  );
};

export default Product;
