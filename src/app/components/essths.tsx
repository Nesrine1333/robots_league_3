
import rbl from "../../../public/essths.svg"
import Image from 'next/image';

export default function ESSTHS() {
  return (
    <div id="about" className="     
   flex flex-col   text-white">
         
      <section className=" text-white align-center flex flex-row justify-center  max-md:text-center max-sm:text-center sm:text-center  md:text-center lg:justify-center w-full ">
      <div className=" flex flex-col gap-4 items-center  justify-center">
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
     
        <div className=" lex flex-col gap-4 py-2 ">
          <h1 className="fontheader  font-color  text-left lg:text-6xl md:max-lg:text-4xl lg:max-xl:text-6xl  max-sm:text-2xl sm:max-md:text-3xl max-sm:font-light">
        ABOUT IEEE ESSTHS SB
          </h1>
          <h1 className="paragrapg lg:max-xl:text-2xl min-xl:text-3xl md:max-lg:text-xl sm:max-md:text-sm max-sm:text-xs  text-white font-light min-xl:leading-12   lg:font-normal">
IEEE ESSTHS Student Branch is a vibrant hub for innovation, learning, and collaboration at the Higher School of Sciences and Technology of Hammam Sousse. By organizing events, technical workshops, and competitions, the branch empowers students to expand their knowledge, sharpen their skills, and connect with the global IEEE community while fostering a spirit of leadership and teamwork.
          </h1>
        </div>
       
      </section>
    </div>
  );
}
