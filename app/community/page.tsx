import CommunityPage from "@/components/portfolio/community/page"
import GalleryPage from "@/components/gallery/page"
import { BsArrowUpRight, BsYoutube, BsInstagram, BsTiktok } from 'react-icons/bs';
import Footer from "@/components/footer/page";
export default function Community() {
    return(
<div className="pt-12 dark:bg-[#081825] dark:text-slate-100">
<div className="pt-12">
<CommunityPage />
<GalleryPage />
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
<Footer />

</div>


    )
    
};