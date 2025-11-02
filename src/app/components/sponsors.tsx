'use client';
import { sponsors } from '../data/sponsors';
import { HoverIcon } from './hovericon';
import { useState } from "react";
import Image from 'next/image';

export default function Sponsors() {
  
      const [hoveredIndex, setHoveredIndex] = useState(null); // track hovered card

  return (
    <div className="mx-auto flex   flex-col  md:justify-center  md:px-10 lg:px-60
    gap-4 lg:max-xl:px-0 sm:max-md:px-6  md:max-lg:px-8 flex-1     "
    >
      <div className="flex flex-col content-center items-center gap-1 max-sm:p-0 sm:p-0 lg:px-14">
          <h2 className="fontheader  font-color lg:mb-7 text-right lg:text-6xl md:text-4xl sm:text-5xl   max-sm:text-2xl max-sm:font-bold text-white">Team</h2>
          <h1 className=" fonttext lg:text-xl md:text-md max-sm:text-sm text-white font-light text-wrap  text-center lg:font-normal sm:max-md:text-sm">
Meet the passionate minds driving <br></br> Robots League 3.0 to life.         </h1>
        </div>
      <div className="flex flex-row  justify-evenly 
     bg-amber-200
       gap-2
      ">
    {sponsors
  ?.map((speaker, index) => (
 <div className='nav rounded-2xl  flex  justify-center lg:rounded-2xl md:max-lg:h-80 max-sm:h-20 w-full  lg:max-xl:h-80 lg:h-50 gap-8 max-sm:gap-4 ' key={speaker.name} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
     <div className=" border-2  border-none w-full h-full flex flex-row  justify-center items-center "   >
    
      <div
                              className="flex items-center justify-center"
                              style={{ position: 'relative', width: '100%', height: '100%' }}
                            >
                         
                                <Image
                                  src={speaker.image.url}
                                  loading="lazy"
                                  alt={speaker.name}
                                      layout="cover"
                                  objectFit="cover"
                                />
                              
                            </div>
      </div>
    </div>
  ))
}

      </div>
    </div>
  );
}

