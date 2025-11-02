
import rbl from "../../../public/robotsLeague.png"
import "./challenge.css"

import Image from 'next/image';

export default function Challenges() {
  return (
    <div id="challenges" className="   max-sm:py-10  md:max-lg:py-40
    sm:max-md:py-4 pb-0 flex flex-col items-center justify-center  text-white">
    
        <div className=" lex flex-col gap-4 py-2 text-center">
          <h1 className="fontheader  font-color lg:mb-7 text-center lg:text-6xl md:max-lg:text-4xl lg:max-xl:text-6xl  max-sm:text-sm sm:max-md:text-3xl">
Challenges          </h1>
          <h1 className="lg:text-xl text-center md:text-md max-sm:text-sm text-white font-light  lg:font-normal sm:max-md:text-sm">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
          </h1>
          <div className=" flex  backgroundchallenge">
          <section className="md:max-lg:px-20  sm:max-md:px-10 sm:px-10 lg:px-40  lg:max-xl:px-22 text-white align-center flex justify-center items-center max-md:text-center max-sm:text-center sm:text-center  md:text-center lg:justify-center w-full max-md:w-100 max-sm:w-100 lg:max-xl:w-100 lg:w-80 ">
 
         <div className=" flex flex-col gap-4 py-2 ">
          <h1 className="fontheader  font-color lg:mb-7 text-start lg:text-6xl md:max-lg:text-4xl lg:max-xl:text-6xl  max-sm:text-sm sm:max-md:text-3xl">
         About Robots League
          </h1>
          <h1 className="lg:text-xl md:text-md max-sm:text-sm text-white font-light  text-start lg:font-normal sm:max-md:text-sm">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
          </h1>
             <div className="nav boxnav fonttext font-normal  max-sm:text-center max-sm:text-sm sm:text-center sm:text-sm sm:leading-none  p-6   lg:text-center lg:text-xl self-start rounded-full ">
             Register
                  </div>
        </div>
       
            <div className=" flex flex-col relative lg:max-xl:h-120 lg:max-xl:w-100 gap-2
            max-xl:w-100 lg:h-90 lg:w-200 md:h-100 md:w-100 md:max-lg:h-100 md:max-lg:w-100 sm:w-50 sm:h-80 max-sm:w-30 max-sm:h-50 max-md:w-50 max-md:h-80  items-center justify-center  ">
                     
                            <div className="  button">Line Follower</div>
                         <div className="  button">Line Follower</div>

                         <div className="  button">Line Follower</div>


                              
                           
                          </div>
        
 
   
      </section>
      </div>
      </div>
    </div>
  );
}
