
import rbl from "../../../public/rasessths.svg"
import Image from 'next/image';

export default function Host() {
  return (
    <div id="host" className="flex flex-col gap-3 ">
            <div className="flex flex-col content-center items-center gap-2 max-sm:p-0 sm:p-0 lg:px-14">
          <h2 className="fontheader  font-color lg:mb-7 text-right lg:text-6xl md:text-4xl sm:text-5xl   max-sm:text-4xl max-sm:font-semibold text-white  tracking-widest">Host</h2>
          <h1 className=" fonttext lg:text-xl md:text-md max-sm:text-sm text-white font-light text-wrap  text-center lg:font-normal sm:max-md:text-sm">
Where It ALL Began         </h1>
        </div>
            <div id="about" className="     
   flex flex-col   text-white">
       <h1 className="fontheader  font-color  text-left lg:text-6xl md:max-lg:text-4xl lg:max-xl:text-6xl  max-sm:text-xl sm:max-md:text-3xl max-sm:font-light tracking-wider">
          ABOUT IEEE RAS ESSTHS SBC
          </h1>
      <section className=" text-white align-center flex flex-row justify-center  max-md:text-center max-sm:text-center sm:text-center  md:text-center lg:justify-center w-full ">
        <div className=" flex flex-col gap-4 items-center  justify-center">
        
          <h1 className="paragrapg lg:max-xl:text-2xl min-xl:text-3xl md:max-lg:text-xl sm:max-md:text-sm max-sm:text-sm text-justify text-white font-light min-xl:leading-12   lg:font-normal">
 EEE RAS ESSTHS Student Branch Chapter is a community of passionate students dedicated to advancing robotics and automation. Through workshops, competitions, and collaborative projects, the chapter empowers young innovators to explore emerging technologies, develop practical skills, and contribute to the growing robotics ecosystem in Tunisia.
          </h1>
        </div>
        <div className=" min-w-2/5 h-auto lg:max-xl:w-1/2 flex">
            <div >
                            <div
                             className="flex items-center justify-center"
                              style={{ position: 'relative', width: '100%', height: '100%' }}
                            >
                         
                                <Image
                                  src={rbl}
                                  loading="lazy"
                                  alt="menu"
                                  layout="cover"
                                  objectFit="cover"
                                />
                              
                            </div>
                          </div>
        </div>
      </section>
          </div>
    </div>
  );
}
