import React from 'react';
import Card from'../components/Card';
const Cards = () => {
  return (
    <div className='flex justify-center mt-20  gap-1 mx-auto max-w-[70vw]'>
      <Card width={"basis-1/3"} contact={false} para={true} />
      <Card width={"basis-2/3"} contact={true} para={false} hover={true}/>
      
    </div>
  );
};

export default Cards