'use client';

import Navigation from '../components/nav';
import { useState, useEffect } from 'react';

import './header.css';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set your target date here (2 months and 2 days from now)
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 2);
    targetDate.setDate(targetDate.getDate() + 2);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate time units
      const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ months, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="nav boxnav px-1  flex flex-row justify-center items-center self-center  flex-1 fonttext max-sm:text-center max-sm:text-xs sm:text-center sm:max-md:text-xs sm:leading-none sm:max-md:p-4 md:max-lg:p-8 max-sm:p-2 lg:p-9 lg:text-center  rounded-full md:max-lg:text-lg leading-tight lg:max-xl:text-xl
    xl:text-xl max-sm:gap-1 lg:gap-4  md:max-lg:gap-4">
    <div className=" max-sm:text-[0.45rem] 
   flex-5/8 text-right ">
      {timeLeft.months} Months {timeLeft.days} Days {timeLeft.hours} Hours 
    </div>
    <div className="  max-sm:text-[0.45rem]
text-left flex-2/8
    ">{timeLeft.minutes}min {timeLeft.seconds}s</div>
    </div>
  );
};



export default function Header() {
  return (
    <div className="  flex flex-col  ">
      <Navigation />
      <header className='background flex flex-col justify-center   lg:justify-center lg:px-14 px-4'>
              <div className=" gap-6 lg:gap-8 items-center justify-center flex flex-col max-sm:items-center lg:flex-1 ">
             <div >     <span className="fontheader text-center animated-title text-4xl sm:max-md:text-6xl md:max-lg:text-8xl lg:bg-blue-400 lg:text-8xl leading-tight lg:max-xl:text-9xl
    xl:text-9xl">
                  <p>Welcome To <br/> Robots League 3.0</p>
                </span>
               </div>
              
                {/* Solang +join us */}
                <div className="flex w-full max-sm:flex-colmax-sm:items-center max-sm:justify-between sm:flex-col lg:justify-center ">
                 
                    {' '}
                  <div className="fonttext font-light text-[0.7rem]  max-sm:w-full max-sm:text-center max-sm:text-sm sm:text-center max-sm:px-10  sm:px-20 sm:text-xs lg:mb-5 lg:text-center lg:text-2xl lg:leading-10 lg:w-full ">
brings innovators together in thrilling robotics challenges, from line-followers to combat bots.                  </div>
                 
                </div>   
                 <div className="flex lg:w-[50%] w-[70%]    max-sm:justify-center sm:justify-center lg:justify-center justify-center items-center ">
                                  <CountdownTimer/>
                                  
                  </div>

        </div>
       
      </header>
    </div>
  );
}
