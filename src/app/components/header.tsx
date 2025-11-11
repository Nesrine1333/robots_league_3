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
    const targetDate = new Date('2025-11-30T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ months, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isCountdownFinished = timeLeft.months === 0 && timeLeft.days === 0 && 
                             timeLeft.hours === 0 && timeLeft.minutes === 0 && 
                             timeLeft.seconds === 0;

  const getDisplayText = () => {
    if (isCountdownFinished) {
      return "Fortune favors the bold. In the League, you are either a predator or a prey.";
    }

    const timeParts = [];
    
    if (timeLeft.months > 0) {
      timeParts.push(`${timeLeft.months} Month${timeLeft.months !== 1 ? 's' : ''}`);
    }
    
    if (timeLeft.days > 0) {
      timeParts.push(`${timeLeft.days} Day${timeLeft.days !== 1 ? 's' : ''}`);
    }
    
    if (timeLeft.hours > 0 || timeParts.length > 0) {
      timeParts.push(`${timeLeft.hours} Hour${timeLeft.hours !== 1 ? 's' : ''}`);
    }

    timeParts.push(`${timeLeft.minutes}min ${timeLeft.seconds}s`);

    return timeParts.join(' ');
  };

  return (
    <div className="nav boxnav px-1 flex justify-center items-center w-full fonttext max-sm:text-xs sm:max-md:text-xs md:max-lg:text-lg lg:max-xl:text-xl xl:text-xl max-sm:p-2 sm:max-md:p-4 md:max-lg:p-6 lg:p-6 rounded-full text-center">
      <div className="max-sm:text-[0.45rem] w-full text-center">
        {getDisplayText()}
      </div>
    </div>
  );
};

export default function Header() {
  return (
    <div className="  flex flex-col  ">
      <Navigation />
      <header className='background flex flex-col justify-center   lg:justify-center lg:px-14 px-4'>
              <div className=" sm:gap-6 lg:gap-8 items-center justify-center flex flex-col max-sm:items-center lg:flex-1 ">
             <div >     <span className="fontheader text-center animated-title title max-sm:text-5xl sm:max-md:text-6xl md:max-lg:text-8xl  lg:text-8xl leading-tight lg:max-xl:text-9xl
    xl:text-9xl">
                  <p>Welcome To <br/> Robots League 3.0</p>
                </span>
               </div>
              
                {/* Solang +join us */}
                <div className="flex flex-col w-full max-sm:flex-colmax-sm:items-center max-sm:justify-between sm:flex-col lg:justify-center px-10 lg:px-10 max-sm:px-10 md:max-lg:px-10 gap-2 min-xl:px-40
                ">
                 
                    {' '}
                  <div className="fonttext font-light max-sm:text-[0.6rem] slang  max-sm:w-full max-sm:text-center max-sm:text-sm sm:text-center max-sm:px-10  sm:px-20 sm:text-xs lg:mb-5 lg:text-center lg:text-xl  lg:w-full ">
brings innovators together in thrilling robotics challenges, from line-followers to combat bots.                  </div>
                     <div className="flex flex-1 justify-center items-center px-20 max-sm:px-10">
  <CountdownTimer/>
</div>
                </div>   
             

        </div>
       
      </header>
    </div>
  );
}
