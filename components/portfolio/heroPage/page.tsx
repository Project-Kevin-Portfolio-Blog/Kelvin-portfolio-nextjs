'use client'
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
export default function HeroPage() {
    return (
      <div className="  w-full text-[#081825] dark:text-gray-100 ">
        <div className=" lg:w-10/12 mx-auto  w-11/12 flex md:justify-between md:flex-row flex-col justify-center  md:gap-10">
          <div className='lg:w-4/5 mx-auto w-11/12 md:w-full pt-14 md:pt-24 lg:pt-14'>
            <h6 className="text-sm  font-semibold md:pb-3">HI I AM,</h6>
            <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent  lg:text-7xl">
            <TypeAnimation
              sequence={[
                'Okoye Kevin',
                1500,
                'A Blockchain and',
                1500,
                'Okoye Kevin',
                1500,
              ]}
              wrapper="h1"
              speed={30}
              repeat={Infinity}
             
            />
            </div>
            <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent lg:text-7xl" >
            <TypeAnimation
              sequence={[
                'Chibuoyim',
                1500,
                'Specialist',
                2500,
                'Chibuoyim',
                1500,
              ]}
              wrapper="h1"
              speed={20}
              repeat={Infinity}
             
            />
            </div>



            <h5 className="md:text-xl text-gray-700 dark:text-gray-200  text-base pt-1 pb-1 lg:pt-4  font-semibold">(Ezemmuo Blockchain)</h5>
            <p className='text-sm lg:w-4/5 text-gray-500 dark:text-gray-400'>A Tech Entrepreneur, Web3 Community Growth Lead/Manager, Business Developer, Blockchain Dev and Content Creation Expert
            </p>
            <div className=' pt-8 lg:pt-10'>
                <Link href="/contact" >
                    <button className='group uppercase bg-[#0145FE] dark:bg-[#0145FE] text-gray-100 dark:text-gray-100 px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 flex items-center gap-4 transition-all duration-300 ease-in-out'>
                        Let&apos;s Talk
                        <BsArrowUpRight className="w-4 h-4 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                    
                    </button>
                </Link>
            </div>
          </div>
<div className='w-full md:w-4/5 max-w-md pt-5 md:pt-12 lg:pt-0'>
  <img 
    src="/assests/portfolio/kev4.png" 
    alt="hero-image"  
    className='w-4/5 mx-auto transform transition-transform duration-300 hover:scale-100'
  />
</div>


        </div>
      </div>
    );
  }