'use client';
import { teamData } from '../data/team';
import './exCome.css';

import { useState } from "react";


export default function Team() {

  const [showAll, setShowAll] = useState(false); // track whether to show all items

  // Get the first 6 items initially, or all items when showAll is true
  const displayedTeamData = showAll 
    ? teamData?.filter((s) => !!s?.active)
    : teamData?.filter((s) => !!s?.active)?.slice(0, 6);

  return (
    <div id="team" className="mx-auto flex w-full flex-1 flex-col items-center justify-center  
    content-center gap-4">
 <div className="flex flex-col content-center items-center gap-1 max-sm:p-0 sm:p-0 lg:px-14  ">
          <h2 className="fontheader  font-color lg:mb-7 text-right lg:text-6xl md:text-4xl sm:text-5xl   max-sm:text-4xl max-sm:font-semibold text-white  tracking-widest">Team</h2>
          <h1 className=" fonttext lg:text-xl md:text-md max-sm:text-sm text-white font-light text-wrap  text-center lg:font-normal sm:max-md:text-sm">
Meet the passionate minds driving <br></br> Robots League 3.0 to life.         </h1>
        </div>
      
      <div className="grid w-full max-lg:grid-cols-6 max-md:grid-cols-1 max-sm:grid-cols-2 sm:grid-cols-12 md:max-lg:grid-cols-4 md:max-lg:gap-2 lg:grid-cols-4 lg:gap-5 max-md:bg-blue  sm:gap-4 max-sm:gap-4">
        {displayedTeamData?.map((speaker, index) => (
          <div 
            className='nav items-center flex justify-start rounded-2xl md:col-span-2 max-md:col-span-6 lg:col-span-1 max-lg:col-span-1 sm:col-span-4 max-sm:col-span-6 md:max-lg:h-60 max-sm:h-40 sm:h-60 max-sm:w-full text-white lg:max-xl:h-60 lg:h-90 gap-8 max-sm:gap-8' 
            key={index} 
       
          >
            <div 
              className="rounded-b-4xl border-2 border-none w-full h-full flex flex-row justify-start max-sm:items-start max-md:bg-right lg:bg-bottom max-lg:bg-right" 
              style={{
                backgroundImage: `url(${speaker.imageSmall.url})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                aspectRatio: "2"
              }}
            >
              <div className="text-left max-sm:p-4 sm:gap-4 sm:p-4">
                <div className="fontheader text-wrap md:text-xl">{speaker.name}</div>
                <div className="text-sm">{speaker.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
<div className='flex justify-start w-full'>
      {/* Show "See More" button only if there are more than 6 items and we're not showing all */}
      {teamData?.filter((s) => !!s?.active)?.length > 6 && !showAll && (
       <button
  onClick={() => setShowAll(true)}
  className="mt-6 text-white fonttext font-semibold transition-all duration-300 underline cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] "
>
  See More
</button>
      )}

      {/* Show "See Less" button when all items are displayed */}
      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          className="mt-6 text-white fonttext font-semibold transition-all duration-300 underline cursor-pointer hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        >
          See Less
        </button>
      )}
      </div>
    </div>
  );
}
