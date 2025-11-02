
import rbl from "../../../public/robotsLeague.png"
import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className=" md:max-lg:px-20  sm:max-md:px-10 sm:px-10 lg:px-40  lg:max-xl:px-22  max-sm:py-10 lg:max-xl:pt-40 lg:pt-40 md:max-lg:py-40
    sm:max-md:py-4 pb-0 flex flex-col items-center justify-center  text-white">
      <section className=" text-white align-center flex justify-center items-center max-md:text-center max-sm:text-center sm:text-center  md:text-center lg:justify-center w-full max-md:w-100 max-sm:w-100 lg:max-xl:w-100 lg:w-80 ">
        <div className=" lex flex-col gap-4 py-2 ">
          <h1 className="fontheader  font-color lg:mb-7 text-start lg:text-6xl md:max-lg:text-4xl lg:max-xl:text-6xl  max-sm:text-sm sm:max-md:text-3xl">
         About Robots League
          </h1>
          <h1 className="lg:text-xl md:text-md max-sm:text-sm text-white font-light  text-start lg:font-normal sm:max-md:text-sm">
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
          </h1>
        </div>
        <div className="  flex items-center justify-center">
            <div className="relative lg:max-xl:h-120 lg:max-xl:w-100
            max-xl:w-100 lg:h-90 lg:w-100 md:h-100 md:w-100 md:max-lg:h-100 md:max-lg:w-100 sm:w-50 sm:h-80 max-sm:w-30 max-sm:h-50 max-md:w-50 max-md:h-80 flex items-center justify-center  ">
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
  );
}
