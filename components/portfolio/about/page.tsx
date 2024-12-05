import Link from "next/link"
import { BsArrowUpRight, BsYoutube, BsInstagram, BsTiktok } from 'react-icons/bs';
export default function AboutPage() {
    return(
<div className="about">
<div className="about-us"><h1 className="mb-12 text-center  text-3xl uppercase dark:text-white lg:text-5xl ">
        About Me
      </h1></div>
<div className="flex flex-col items-center justify-center gap-6 lg:mx-auto lg:w-5/6 lg:flex-row lg:gap-10 ">
<div data-aos="fade-right" className="lg:mx-w-md w-full max-w-md md:w-4/5 md:max-w-xl lg:w-4/5">
    <img src="/assests/portfolio/kevin1.png" alt="about-bg"  className="mx-auto w-4/5 lg:w-full"/>
</div>
<div data-aos="fade-right" className="about-text2 mx-6 md:mx-0 md:w-4/5 lg:w-1/2 ">

<p className="">Popularly known as (Ezemmuo Blockchai), Okoye Kevin Chibuoyim is a seasoned entrepreneur within the the Tech landscape - A Strategic and results-oriented Web3 Community Growth Lead, Business Developer, DevRel and Tech Content Creator with a proven track record of cultivating vibrant communities and a fervent advocate for the transformative power of technology. Possessing a deep passion for technology since getting into the Blockchain/Crypto Ecosystem in 2018, he has left an indelible impact on the lives of many.
</p>
<p className="">In addition to his role as an entrepreneur and educator, he is actively engaged as a Public speaker and Tech influencer. He regularly shares his insights and expertise with thousands of followers on various social media platforms, inspiring them to...
</p>
<Link href="/about" className="">
<button className='group mt-8 flex items-center gap-4 rounded-md bg-[#0145FE] px-4 py-2 uppercase text-gray-100 transition-all duration-300 ease-in-out hover:bg-blue-700 dark:bg-[#0145FE] dark:text-gray-100 dark:hover:bg-blue-700'>
 Read More
<BsArrowUpRight className="size-4 transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1" />
</button>
</Link>
</div>


</div>
<div className="video mt-5 pt-8  dark:bg-[#081825] lg:py-12">
            <div className="mx-auto flex flex-col items-center justify-center gap-8 md:w-4/5 lg:flex-row">
               

                <div className="w-11/12 md:mx-0 md:w-[95%] lg:w-1/2 ">
                <h2 data-aos="fade-in" className=" text-2xl lg:text-4xl ">I document lessons on Tech, Crypto / Blockchain, Coding / Development, Videography / Photography, Productivity & Growth.</h2>
<h2 data-aos="fade-out" className=" pt-4 text-3xl lg:text-4xl"> Join me for an adventure!
</h2>

<div className="w-4/8 flex items-center justify-center gap-2 pb-6 pt-9  text-gray-300 md:justify-start lg:gap-6 lg:pb-0">
<a href=""><span className="gap-md:gap-2 flex w-fit items-center gap-1 rounded-lg border border-slate-50 px-3 py-2 hover:border-blue-600"> <BsYoutube  className="lg:text-3xl"/> <p className="text-sm lg:text-base">YouTube</p></span>
</a>
<a href=""><span className="flex w-fit items-center gap-1 rounded-lg border border-slate-50 px-3 py-2 hover:border-blue-600 md:gap-2"> <BsInstagram className="lg:text-3xl"/> <p className="text-sm lg:text-base">Instagram</p></span>
</a>
<a href=""><span className="flex w-fit items-center gap-1 rounded-lg border border-slate-50 px-3 py-2 hover:border-blue-600 md:gap-2"> <BsTiktok  className="lg:text-3xl"/> <p className="text-sm lg:text-base">Tiktok</p></span>
</a>   </div>
                </div>
                <div className="w-full max-w-md md:max-w-xl lg:w-2/5 lg:max-w-md">
                    <img src="/assests/portfolio/kev4.png" alt="" className="mx-auto w-4/5"/>
                </div>

            </div>
        </div>




</div>



    )
    
}