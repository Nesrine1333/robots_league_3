'use client';
import { teamData } from '../data/team';
import './exCome.css';
import { HoverIcon } from './hovericon';
import { useState } from "react";


export default function Team() {
  
      const [hoveredIndex, setHoveredIndex] = useState(null); // track hovered card

  return (
    <div className="mx-auto flex w-full flex-1 flex-col items-center md:justify-center  md:px-10 lg:px-12
   p-0  content-center  gap-4 lg:max-xl:px-0 sm:max-md:px-6  md:max-lg:px-8      "
    >
      <div className="flex flex-col content-center items-center gap-2 max-sm:p-0 sm:p-0 lg:px-14">
          <h2 className="fontheader  font-color lg:mb-7 text-right lg:text-6xl md:text-4xl sm:text-5xl   max-sm:text-2xl max-sm:font-bold text-white">sponsors</h2>
          <h1 className=" fonttext lg:text-xl md:text-md max-sm:text-sm text-white font-light text-wrap  text-center lg:font-normal sm:max-md:text-sm">
Proudly supported by our partners who make Robots League 3.0 possible.         </h1>
        </div>
      <div className="grid w-full max-lg:grid-cols-4 max-md:grid-cols-1 max-sm:grid-cols-6 max-sm:gap-4 sm:grid-cols-8 sm:gap-4 md:max-lg:grid-cols-4 md:max-lg:gap-2 lg:grid-cols-4 lg:gap-10
      max-md:bg-blue
       gap-2
      ">
    {teamData
  ?.filter((s) => !!s?.active)
  ?.map((speaker, index) => (
 <div className='nav boxnav items-left flex justify-start rounded-2xl md:col-span-2 max-md:col-span-4 lg:col-span-1 max-lg:col-span-1 sm:col-span-4 max-sm:col-span-6 md:max-lg:h-80 max-sm:h-40 w-full text-white lg:max-xl:h-80 lg:h-100 gap-8 max-sm:gap-4 ' key={speaker.name} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
     <div className="rounded-xl border-2 border-none w-full h-full flex flex-row justify-start max-md:items-center max-md:bg-right lg:bg-bottom max-lg:bg-right "  style={{
                backgroundImage: `url(${speaker.imageSmall.url})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              
                aspectRatio:"2"
              }} >
      
        <div className="text-left max-sm:p-4 sm:gap-4 sm:p-4">
          <div className="fontheader text-wrap md:text-xl">{speaker.name}</div>
          <div className="text-sm">
            {speaker.title}
          </div>

          <div
            className={`x transition-all duration-500 
              ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
          >
            <div className="relative flex md:flex-col lg:flex-col max-md:flex-col sm:flex-row max-sm:flex-row items-start lg:justify-center gap-2">
              <HoverIcon
                objectfit="lg:p-2 md:max-lg:p-2 max-sm:p-2 sm:p-2"
                className="flex cursor-pointer items-center justify-center   hover:bg-[#CA608A] max-sm:p-5 sm:p-5 md:max-lg:p-5 lg:p-5 border-1 border-amber-50 rounded-lg"
                href="https://www.facebook.com/profile.php?id=100068599066993"
                src="Facebook_hover.svg"
                hoverSrc="Facebook_hover.svg"
                alt="Facebook"
              />
              <HoverIcon
                objectfit="lg:p-2 md:max-lg:p-2 max-sm:p-2 sm:p-2"
                className="flex cursor-pointer items-center justify-center   hover:bg-[#CA608A]  max-sm:p-5 sm:p-5 md:max-lg:p-5 lg:p-5 border-1 border-amber-50 rounded-lg"
                href={speaker.company.email}
                src="email.svg"
                hoverSrc="email.svg"
                alt="Instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ))
}

      </div>
    </div>
  );
}

