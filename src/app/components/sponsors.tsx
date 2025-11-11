'use client';
import { sponsors } from '../data/sponsors';
import { HoverIcon } from './hovericon';
import { useState } from "react";
import Image from 'next/image';

export default function Sponsors() {
  
      const [hoveredIndex, setHoveredIndex] = useState(null); // track hovered card

  return (
    <div id="sponsor" className="flex   flex-col  md:justify-center  
    gap-4      "
    >

           <div className="flex flex-col content-center items-center gap-2 max-sm:p-0 sm:p-0 lg:px-14">
        <h2 className="fontheader  font-color lg:mb-7 text-right lg:text-6xl md:text-4xl sm:text-5xl   max-sm:text-4xl max-sm:font-semibold text-white  tracking-widest">
          sponsors
        </h2>
        <h1 className="fonttext lg:text-xl md:text-md max-sm:text-sm text-white font-light text-wrap text-center lg:font-normal sm:max-md:text-sm">
          Proudly supported by our partners who make Robots League 3.0 possible.
        </h1>
      </div>
      
     
    <div className="flex flex-row justify-between gap-5">
  {sponsors?.map((speaker, index) => (
    <div 
      className="navsp  flex justify-between  w-full"
      key={speaker.name} 
    
    >
      <div className="border-2 border-none w-full h-full flex flex-row justify-center items-center">
        <div 
          className="flex items-center justify-bewteen"
          style={{ 
            position: 'relative', 
            width: 'clamp(30px, 20vw, 60rem)', 
            height: 'clamp(30px, 15vw, 60rem)' 
          }}
        >
          <Image
            src={speaker.image.url}
            loading="lazy"
            alt={speaker.name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 30px, (max-width: 768px) 100px, (max-width: 1024px) 60px, 100%"
          />
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

