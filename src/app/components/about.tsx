
import rbl from "../../../public/robotsLeague.png"
import Image from 'next/image';

export default function About() {
  return (
    <div id="about" className="     
   flex flex-col   text-white">
       <h1 className="fontheader  font-color  text-left lg:text-6xl md:max-lg:text-4xl lg:max-xl:text-6xl  max-sm:text-3xl sm:max-md:text-3xl">
         About Robots League
          </h1>
      <section className=" text-white align-center flex flex-row justify-center  max-md:text-center max-sm:text-center sm:text-center  md:text-center lg:justify-center w-full ">
        <div className=" flex flex-col gap-4 items-center  justify-center">
         
          <h1 className="paragrapg lg:max-xl:text-2xl min-xl:text-3xl md:max-lg:text-xl sm:max-md:text-sm max-sm:text-xs  text-white font-light min-xl:leading-12   lg:font-normal">
    EEE RAS ESSTHS Student Branch Chapter is a community of passionate students dedicated to advancing robotics and automation. Through workshops, competitions, and collaborative projects, the chapter empowers young innovators to explore emerging technologies, develop practical skills, and contribute to the growing robotics ecosystem in Tunisia.
          </h1>
        </div>
        <div className=" min-w-2/5 h-auto lg:max-xl:w-1/2 flex">
            <div className=" ">
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
