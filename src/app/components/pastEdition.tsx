
import Image from 'next/image';
import rbl1 from "../../../public/RobotsLeague1.png"
import rbl2 from "../../../public/RobotsLeague2.png"



export default function PastEvents({ events }: PastEventsProps) {

 
  return (
    <section id="edition">
      <div className="text-white flex flex-col p-0  content-center items-center  ">
        <div className="flex flex-col content-center items-center gap-2 max-sm:p-0 sm:p-0 lg:px-14 max-lg:px-10 md:px-10 ">
          <h2 className="fontheader  font-color  text-left lg:text-6xl md:max-lg:text-4xl lg:max-xl:text-6xl  max-sm:text-3xl sm:max-md:text-3xl">Past Editions </h2>
          {/* <p className='text-black'>Fields Taht We tackle within our activities</p> */}
        </div>
<div className='flex flex-col align-middle items-center justify-center'><div className=" mx-auto grid max-w-6xl max-sm:max-w-auto max-sm:grid-cols-2 max-sm:gap-6 sm:max-w-full sm:grid-cols-2 sm:gap-6  content-center justify-center lg:gap-6">
         {events.map((value, index) => (
  <div
    key={index}
    className="relative items-center     mx-auto transform hover:scale-105 transition-transform duration-300
     p-4  flex flex-col justify-start xl:gap-8 max-sm:gap-2 leading-2  max-lg:gap-4 md:gap-4 sm:gap-4  max-w-110
               max-sm:p-4  
             lg:max-xl:p-4 sm:max-md:p-6  md:max-lg:p-8  xl:p-4 
    "
  >
       <div className="flex justify-center items-center ">
     <div
                              className="flex items-center justify-center"
                              style={{ position: 'relative', width: '100%', height: '100%' }}
                            >
        
          <Image
           
            src={value.content}
            loading="lazy"
                                  alt="menu"
                                  layout="cover"
                                  objectFit="cover"
          />
       
      </div>
    </div>

  </div>
))}
        </div></div>
        
      </div>
    </section>
  );
}


interface Event {
  title: string;
  content: any; // Replace 'any' with the actual type of your content
}

interface PastEventsProps {
  events: Event[];
}
export const events: Event[] = [
  {
    title: 'RobotsLeague1',
    content: rbl1,
  },
  {
    title: 'RobotsLeague2',
    content: rbl2,
  }
];
