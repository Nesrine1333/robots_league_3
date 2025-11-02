import Image from "next/image";
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




export default function Home() {
  return (
  <>
    <div className="w-full">
        {/* <Navigation /> */}
        <Header />
      </div>

      <div className="max-md:px-10 max-sm:px-10 sm:px-10 md:px-10 lg:px-16 lg:py-8">
        <main className="item-center flex w-full flex-col content-center justify-center max-sm:gap-5 sm:gap-10 md:gap-15 lg:gap-20">
        {/* <About/>
        <PastEvents events={events}/> */}
      
        </main>
      </div>
        {/* <Challenges/>
        <Team/>
        <Host/>
        <ESSTHS/>
        <Sponsors/>
        <ContactPage/> */}
      <footer className="w-full ">
        {' '}
    <Footer/>
      </footer>
  </>
  );
}
