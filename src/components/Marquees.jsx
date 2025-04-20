import React from 'react';
import Marquee from'../components/Marquee';
const Marquees = () => {
    var image = [
        ["https://th.bing.com/th/id/R.ebac0c72ac99caf99e7d8addad24704e?rik=fXZVBNbaM9sdmQ&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f58482a62cef1014c0b5e4a13.png&ehk=J8rUbRPTQrD266NDnnbSAjDyiKhez91Y%2ftfoFxcR%2bHE%3d&risl=&pid=ImgRaw&r=0",
            "https://static.vecteezy.com/system/resources/previews/022/100/994/non_2x/spotify-logo-transparent-free-png.png",
            "https://odanettverk.no/wp-content/uploads/2020/02/SYSCO_logo_black_RGB-800x166.png",
         "https://freelogopng.com/images/all_img/1686110052toyota-logo-black.png",
     "https://eecs.iisc.ac.in/EECS2021/resources/images/logos/Accel_Logo_Black.png",
 "https://iconape.com/wp-content/png_logo_vector/logo-haufe-group.png",
 "https://logos-world.net/wp-content/uploads/2020/03/Coca-Cola-Logo-1887-1941-700x394.png",
 "https://cdn.freebiesupply.com/images/large/2x/amazon-logo-black-transparent.png",
 "https://th.bing.com/th/id/R.a88d2e875c9badcd48f02dddb1eb0f36?rik=hI8jINTOgRQYwg&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f02%2fLoreal_logo.png&ehk=4%2bC3904pXUW7EBqJD4huvlIMFMyIgr6mORmQK3t0N3M%3d&risl=&pid=ImgRaw&r=0",
 "https://brandzz.co.za/wp-content/uploads/2023/12/Starter-Black-Label-Tertiary-Product-Graphic-Logo-1536x258.png"
 ],
  ["https://th.bing.com/th/id/R.ebac0c72ac99caf99e7d8addad24704e?rik=fXZVBNbaM9sdmQ&riu=http%3a%2f%2fassets.stickpng.com%2fimages%2f58482a62cef1014c0b5e4a13.png&ehk=J8rUbRPTQrD266NDnnbSAjDyiKhez91Y%2ftfoFxcR%2bHE%3d&risl=&pid=ImgRaw&r=0",
    "https://static.vecteezy.com/system/resources/previews/022/100/994/non_2x/spotify-logo-transparent-free-png.png",
    "https://odanettverk.no/wp-content/uploads/2020/02/SYSCO_logo_black_RGB-800x166.png",
 "https://freelogopng.com/images/all_img/1686110052toyota-logo-black.png",
"https://eecs.iisc.ac.in/EECS2021/resources/images/logos/Accel_Logo_Black.png",
"https://iconape.com/wp-content/png_logo_vector/logo-haufe-group.png",
"https://logos-world.net/wp-content/uploads/2020/03/Coca-Cola-Logo-1887-1941-700x394.png",
"https://cdn.freebiesupply.com/images/large/2x/amazon-logo-black-transparent.png",
"https://th.bing.com/th/id/R.a88d2e875c9badcd48f02dddb1eb0f36?rik=hI8jINTOgRQYwg&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f02%2fLoreal_logo.png&ehk=4%2bC3904pXUW7EBqJD4huvlIMFMyIgr6mORmQK3t0N3M%3d&risl=&pid=ImgRaw&r=0",
"https://brandzz.co.za/wp-content/uploads/2023/12/Starter-Black-Label-Tertiary-Product-Graphic-Logo-1536x258.png"
]



]
  return (
    <div className='overflow-hidden relative w-full '>
        {image.map((item,index) => <Marquee direction={index===0?"left":"right"} key={index} val={item}/>)}
  
    </div>
  );
};

export default Marquees;
