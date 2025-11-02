'use client';
import './footer.css';
import { HoverIcon } from './hovericon';
import Image from 'next/image';

import instagram from '../../../public/Instagram.png';
import facebook from '../../../public/Facebook.png';


import logo from '../../../public/logo_full.png';

export default function Footer() {
  return (
    <>
      <div className="footer text-white  py-10 pb-0 flex flex-col max-md:justify-end max-md:px-10 max-sm:px-4 sm:px-10 md:px-10 lg:justify-between lg:px-16 lg:py-8
      
      ">
        <div className="item-center flex w-full max-sm:flex-col sm:flex-col sm:justify-center sm:gap-5 max-sm:gap-5 md:justify-center lg:flex-row lg:justify-between max-sm:gap-5">
          <div className="flex flex-col items-center sm:justify-center md:justify-center lg:justify-start">
            <div className="flex lg:gap-5 w-50 flex-col items-center max-sm:h-40 sm:h-40 md:h-40 max-sm:gap-2">
              <div className="relative h-30 w-50">
                <div
                  className="flex items-center justify-center"
                  style={{ position: 'relative', width: '100%', height: '100%' }}
                >
                  <a to="/">
                    <Image
                      loading="lazy"
                      src={logo}
                      className=" "
                      alt="IEEE ESSTHS"
                      layout="fill"
                      objectFit="contain"
                    />
                  </a>
                </div>
              </div>
              <div className="flex w-full flex-row justify-center gap-2">
              

                <div className="relative h-5 ">
                  {' '}
                  <HoverIcon
                    objectfit="lg:p-2 md:p-2 max-sm:p-2 sm:p-1"
                    className="flex cursor-pointer items-center justify-center rounded-full border-2 border-white p-5 "
                    href="https://www.facebook.com/profile.php?id=100068599066993"
                    src={facebook}
                    hoverSrc={facebook}
                    alt="Facebook"
                  />{' '}
                </div>

                <div className="relative h-5">
                  {' '}
                  <HoverIcon
                    objectfit="lg:p-2 md:p-2 max-sm:p-2 sm:p-1"
                    className="flex cursor-pointer items-center justify-center rounded-full border-2 border-white p-5 "
                    href="https://www.instagram.com/ieee_wie_essths/"
                    src={instagram}
                    hoverSrc={instagram}
                    alt="Instagram"
                  />{' '}
                </div>

              
              </div>
            </div>
          </div>
          <div className="flex flex-row max-md:justify-center max-sm:w-full max-sm:justify-between sm:w-full sm:justify-between lg:flex-1  lg:justify-evenly lg:gap-5 font-color " >
           <div className="flex lg:justify-end   max-lg:w-full max-sm:item-center  max-sm:justify-center gap-5 md:justify-start  lg:flex-1 ">
            <div className="flex w-fit  max-sm:justify-center flex-col justify-between gap-5 text-left">
             
              <div>
                <a href="#about" className="cursor-pointer">
                  About
                </a>
              </div>
              <div>
                <a href="#value" className="cursor-pointer">
                  Challenges
                </a>
              </div>
              <div>
                <a href="#activities" className="cursor-pointer">
Tealm                </a>
              </div>
              <div>
                <a href="#faq" className="cursor-pointer">
                  Host
                </a>
              </div>
              <div>
                <a href="#faq" className="cursor-pointer">
                  Sponsors
                </a>
              </div>
               <div>
                <a href="#faq" className="cursor-pointer">
                  Contact
                </a>
              </div>
            </div>
</div>
            <div className="flex flex-col  justify-start  gap-5 max-sm:w-[70%] ">
             
          <div className="flex  items-center ">
 
  <span className="text-sm text-white dark:text-gray-300  ">
    ieee.RAS.essths@gmail.com
  </span>
</div>

              <div className="flex flex-row items-center ">
            
              
                +216 - 99 999 999
              </div>
            </div>
          </div>
        </div>
        <div className="item-center text-center font-color pt-5">2025 © All Rights Reserved</div>
      </div>
    </>
  );
}
