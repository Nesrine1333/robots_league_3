"use client"

import  Header from "../app/components/header";
import  About from "../app/components/about";
import  Challenges from "../app/components/challenges";

import  PastEvents, { events } from "../app/components/pastEdition";
import Team from "./components/team";
import Sponsors from "./components/sponsors";

import Host from "./components/host"
import ContactPage from "./components/location"

import ESSTHS from "./components/essths"
import Footer from "./components/footer"


import { useState } from 'react';
import LoadingPage from "./components/loading";

export default function Home() {

    const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };
  return (
  <>


  {isLoading && <LoadingPage onLoadingComplete={handleLoadingComplete} />}
{!isLoading && <div>
  <div className="flex flex-col gap-10">
    <div className="w-full">
        {/* <Navigation /> */}
        <Header />
      </div>

      <div className=" px-8 sm:max-md:px-10 md:max-lg:px-15 lg:max-xl:px-30 min-xl:px-40 lg:py-8">
        <main className="item-center flex w-full flex-col content-center justify-center max-sm:gap-5 sm:gap-10 md:gap-15 lg:gap-20">
         <About/>
   
      
        </main>
      </div>
      <div>
            <PastEvents events={events}/> 
        <Challenges/></div>
        
         <div className=" px-8 sm:max-md:px-10 md:max-lg:px-15 lg:max-xl:px-30 min-xl:px-40 lg:py-8">
 <main className="item-center flex w-full flex-col content-center justify-center max-sm:gap-5 sm:gap-10 md:gap-15 lg:gap-20">
         <Team/>
        <Host/>
        <ESSTHS/>
        <Sponsors/>
          </main>
         </div>
         
<div> <ContactPage/></div>
       
        </div> 
      <footer className="w-full ">
        {' '}
    <Footer/>
      </footer>
      </div>}
  </>
  );
}
