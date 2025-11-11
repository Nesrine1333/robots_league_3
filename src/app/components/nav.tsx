'use client';
import { useState } from 'react';
import Image from 'next/image';
import profilePic from '../../../public/logo.png';
import menu from '../../../public/Menu.svg';

import './nav.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full  bg-transparent fonttext p-6 sm:p-8  rounded-full text-white">
        <div className="flex w-full  flex-nowrap max-sm:justify-start max-sm:px-0 sm:px-0 md:justify-center lg:justify-center lg:px-18 rounded-full">
        
          <div className="max-md:hiddden max-sm:hidden sm:hidden md:block lg:block rounded-full" >

            <div className="nav  fonttext  flex flex-row justify-center gap-14  p-4 md:gap-5 lg:gap-14 rounded-full">

                <div className="max-md:hiddden max-sm:hidden sm:hidden md:block lg:block">
            <div className="flex w-auto items-center">
              <div className="relative h-12 w-12">
                <div
                  className="flex items-center justify-center"
                  style={{ position: 'relative', width: '100%', height: '100%' }}
                >
                 
                    <Image
                      loading="lazy"
                      src={profilePic}
                      className=" "
                      alt="IEEE ESSTHS"
                      layout="fill"
                      objectFit="contain"
                    />
                  
                </div>
              </div>
            </div>
          </div>
              <a href="#challenges" className="md:text cursor-pointer max-sm:text-sm/6 sm:text-sm">
                  CHALLENGES
              </a>

              <a href="#team" className="md:text max-sm:text-sm/6 sm:text-sm" >
                TEAM
              </a>
              <a href="#host" className="md:text max-sm:text-sm/6 sm:text-sm">
                HOST
              </a>
              <a href="#sponsor" className="md:text max-sm:text-sm/6 sm:text-sm">
                SPONSORS
              </a>
    
              <a href="#location" className="md:text max-sm:text-sm/6 sm:text-sm">
                CONTACT
              </a>
                  <div className="flex gap-2">
            <div className="max-md:hiddden max-sm:hidden sm:hidden md:block lg:block register">
              <a
                href="https://www.facebook.com/events/2284061768680704"
                className=" flex cursor-pointer flex-row justify-between gap-5  p-4 md:mt-0 md:flex-row md:border-0 md:text-sm md:font-medium dark:border-gray-700"
                target="_blank"
              >
                Register
              </a>
            </div>
          </div>
            </div>
           
          </div>

       
          <div className="w-full rounded-2xl max-lg:hidden max-md:hidden max-sm:block sm:block md:hidden justify-between">
            <div className="flex w-full justify-between">
              <div className="nav  flex w-full justify-between rounded-4xl p-2">
                <div className="w-10 sm:w-30">
                  <div
                    className="flex items-center"
                    style={{ position: 'relative', width: '100%', height: '2rem' }}
                  >
                    <a href="#">
                      <Image
                        loading="lazy"
                        src={profilePic}
                        className=" "
                        alt="IEEE ESSTHS"
                        layout="fill"
                        objectFit="contain"
                      />
                    </a>
                  </div>
                </div>
                <div className="relative h-5 w-10 sm:w-30">
                  <div
                    className="flex items-center justify-center"
                    style={{ position: 'relative', width: '100%', height: '100%' }}
                  >
                    <div className="menu z-10 p-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                      <Image
                        src={menu}
                        loading="lazy"
                        alt="menu"
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="flex items-center gap-2 ">
						<div className="hidden w-auto items-center justify-between lg:flex">
							<ul className="flex flex-col rounded-lg border border-gray-100 p-4 dark:border-gray-700 md:mt-0 md:flex-row md:border-0 md:text-sm md:font-medium">
								
				
								 <li>
									<a
										href="#"
										className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white  md:bg-transparent md:p-0 md:text-blue-700"
										aria-current="page"
									>
										Keynote
									</a>
								</li>
								<li>
									<a
										href="#"
										className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
									>
										Stage 
									</a>
								</li> 
							</ul>
						</div>

			

						
					</div>  */}
        </div>
      </nav>

      {isMenuOpen && (
        <div className="z-50 lg:hidden fixed top-0  flex h-full w-full">
          <div
            className="navmobile  fonttext fixed top-0 z-50 flex h-full w-full flex-col justify-center gap-14 p-4 backdrop-blur-xl max-sm:items-center max-sm:justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <a href="#challenges" className="md:text cursor-pointer max-sm:text-sm/6 sm:text-sm">
              CHALLENGES
            </a>

            <a href="#team" className="md:text max-sm:text-sm/6 sm:text-sm">
              TEAM
            </a>
            <a href="#host" className="md:text max-sm:text-sm/6 sm:text-sm">
              HOST
            </a>
            <a href="#sponsor" className="md:text max-sm:text-sm/6 sm:text-sm">
              SPONSORS
            </a>
         
            <a href="#location" className="md:text max-sm:text-sm/6 sm:text-sm">
              CONTACT
            </a>
          </div>
        </div>
      )}
    </>
  );
}
