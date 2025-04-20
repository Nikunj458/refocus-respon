import React from 'react';
import Stripe from '../components/Stripe';

const Stripes = () => {
    var data = [
        {url:'https://freelogopng.com/images/all_img/1686110052toyota-logo-black.png', num:'48'}, 
        {url:'https://th.bing.com/th/id/R.a88d2e875c9badcd48f02dddb1eb0f36?rik=hI8jINTOgRQYwg&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f02%2fLoreal_logo.png&ehk=4%2bC3904pXUW7EBqJD4huvlIMFMyIgr6mORmQK3t0N3M%3d&risl=&pid=ImgRaw&r=0', num:'2'}, 
        {url:'https://brandzz.co.za/wp-content/uploads/2023/12/Starter-Black-Label-Tertiary-Product-Graphic-Logo-1536x258.png', num:'11'}, 
        {url:'https://freelogopng.com/images/all_img/1686110052toyota-logo-black.png', num:'48'}, 
        {url:'https://th.bing.com/th/id/R.a88d2e875c9badcd48f02dddb1eb0f36?rik=hI8jINTOgRQYwg&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f02%2fLoreal_logo.png&ehk=4%2bC3904pXUW7EBqJD4huvlIMFMyIgr6mORmQK3t0N3M%3d&risl=&pid=ImgRaw&r=0', num:'2'}, 
        {url:'https://brandzz.co.za/wp-content/uploads/2023/12/Starter-Black-Label-Tertiary-Product-Graphic-Logo-1536x258.png', num:'11'} 
    ]
  return (
   <div className='flex mt-24 mb-32'>
{
    data.map((elem ,index)=>(<Stripe key={index} val={elem}/>))
}</div> 
  );
};

export default Stripes;
