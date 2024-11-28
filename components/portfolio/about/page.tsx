import Link from "next/link"
import { BsArrowUpRight, BsYoutube, BsInstagram, BsTiktok } from 'react-icons/bs';
export default function AboutPage() {
    return(
<div>
<h1 className="lg:text-5xl text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white ">
        About Me
      </h1>
<div className="flex justify-center lg:flex-row flex-col items-center gap-6 lg:gap-10 lg:w-5/6 lg:mx-auto ">
<div data-aos="fade-right" className="w-full md:w-4/5 lg:w-2/5 max-w-md lg:mx-w-md md:max-w-xl">
    <img src="/assests/portfolio/kevin1.png" alt="about-bg"  className="w-4/5 mx-auto"/>
</div>
<div data-aos="fade-right" className="lg:w-1/2 md:w-4/5 md:mx-0 mx-6 ">

<p className="leading-loose text-sm">Popularly known as (Ezemmuo Blockchai), Okoye Kevin Chibuoyim is a seasoned entrepreneur within the the Tech landscape - A Strategic and results-oriented Web3 Community Growth Lead, Business Developer, DevRel and Tech Content Creator with a proven track record of cultivating vibrant communities and a fervent advocate for the transformative power of technology. Possessing a deep passion for technology since getting into the Blockchain/Crypto Ecosystem in 2018, he has left an indelible impact on the lives of many.
</p>
<p className="leading-loose pt-5 text-sm">In addition to his role as an entrepreneur and educator, he is actively engaged as a Public speaker and Tech influencer. He regularly shares his insights and expertise with thousands of followers on various social media platforms, inspiring them to...
</p>
<Link href="/about" className="">
<button className='group mt-8 uppercase bg-[#0145FE] dark:bg-[#0145FE] text-gray-100 dark:text-gray-100 px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 flex items-center gap-4 transition-all duration-300 ease-in-out'>
 Read More
<BsArrowUpRight className="w-4 h-4 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
</button>
</Link>
</div>


</div>
<div className="lg:pt-12 pt-8 mt-5 bg-[#00004A] dark:bg-[#081825] text-gray-200">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:w-4/5 mx-auto">
               

                <div className="lg:w-1/2 md:mx-0 w-11/12 md:w-[95%] ">
                <h4 data-aos="fade-in" className="font-bold text-2xl lg:text-4xl leading-relaxed">I document lessons on Tech, Crypto / Blockchain, Coding / Development, Videography / Photography, Productivity & Growth.</h4>
<h4 data-aos="fade-out" className="font-bold text-3xl lg:text-4xl pt-4"> Join me for an adventure!
</h4>

<div className="text-gray-300 flex items-center md:justify-start justify-center gap-2 w-4/8  lg:gap-6 pt-9 lg:pb-0 pb-6">
<a href=""><span className="flex items-center gap-1 gap-md:gap-2 border border-slate-50 w-fit py-2 px-3 rounded-lg hover:border-blue-600"> <BsYoutube  className="lg:text-3xl"/> <p className="text-sm lg:text-base">YouTube</p></span>
</a>
<a href=""><span className="flex items-center gap-1 md:gap-2 border border-slate-50 w-fit py-2 px-3 rounded-lg hover:border-blue-600"> <BsInstagram className="lg:text-3xl"/> <p className="text-sm lg:text-base">Instagram</p></span>
</a>
<a href=""><span className="flex items-center gap-1 md:gap-2 border border-slate-50 w-fit py-2 px-3 rounded-lg hover:border-blue-600"> <BsTiktok  className="lg:text-3xl"/> <p className="text-sm lg:text-base">Tiktok</p></span>
</a>   </div>
                </div>
                <div className="w-full lg:w-2/5 max-w-md lg:max-w-md md:max-w-xl">
                    <img src="/assests/portfolio/kev4.png" alt="" className="w-4/5 mx-auto"/>
                </div>

            </div>
        </div>




</div>



    )
    
}