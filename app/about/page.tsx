import CommunityPage from "@/components/portfolio/community/page"
import Brands from "@/components/portfolio/brands/page"
import NewsLetter from "@/components/portfolio/newsletters/page"
import Link from "next/link"
import GalleryPage from "@/components/gallery/page"
import Footer from "@/components/footer/page"
export default function AboutPage(){
return(
<div className=" min-h-screen pt-24  dark:bg-[#081825] dark:text-slate-100">
   <div className="about2"> <h1 className="text-center text-5xl uppercase">About ME</h1>
   </div>
    <div data-aos="fade-right" className=" about-text2 mx-auto  flex w-10/12 flex-col gap-4 py-4  dark:text-gray-300 md:w-3/4 ">
<p className="">Popularly known as “Ezemmuo Blockchain”, Okoye Kevin Chibuoyim is a seasoned entrepreneur within the the Tech landscape - A Strategic and results-oriented Web3 Community Growth Lead, Business Developer, DevRel and Tech Content Creator with a proven track record of cultivating vibrant communities and a fervent advocate for the transformative power of technology. Possessing a deep passion for technology since getting into the Blockchain/Crypto Ecosystem in 2018, he has left an indelible impact on the lives of many.</p>
<p>In addition to his role as an entrepreneur and educator, he is actively engaged as a Public speaker and Tech influencer. He regularly shares his insights and expertise with thousands of followers on various social media platforms, inspiring them to embrace the power of technology and to continually strive for excellence in their respective fields. He has extensive experience speaking at Industry events and conferences, and has also organized and anchored major IRL Blockchain Conferences that pulled 3000+ attendees and hundreds of online participants.
</p>
<p>He Founded GIDA - Ginakev Digital Academy; A Cryptocurrency Education academy that focuses on proper Cryptocurrency education, awareness and enlightenment. He is equally the Cofounder of BlockchainUNN - Blockchain University Of Nigeria; a blockchain campus club at the University of Nigeria Nsukka aimed at promoting blockchain adoption and education within the university environment, and actively Training People to become Web3/Blockchain Devs.

</p>
    </div>
<div className="text-center text-4xl">
  <div style={{ 
    position: 'relative', 
    paddingBottom: '56.25%', 
    height: '0', 
    overflow: 'hidden',
    width: '85%', 
    margin: '20px auto'
  }}>
    <iframe
      src="https://www.youtube.com/embed/T7pUh8XlGgg"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
      title="YouTube video"
    ></iframe>
  </div>
</div>
<CommunityPage />
<Brands />

<div className="about2"><h1 className="text-center text-3xl font-bold ">My Blog</h1>
</div>  
 <div ata-aos="fade-right"  className="about-text2 gap- mx-auto mb-8 flex w-11/12 flex-col py-4 text-center text-sm leading-loose dark:text-gray-300 md:w-3/4">
<p>I have had various opportunities to build up experience overtime in the industry. Welcome to my blog. Here’s where I share my thoughts and experience.
</p>
<p>I document lessons on Tech, Crypto, Blockchain, Coding/Development, Productivity & Growth.
</p>
<Link href='/blog' className="flex items-center justify-center"> 
<button className=' group mx-auto mt-5 flex items-center justify-center gap-4 rounded-md bg-[#0145FE] px-4 py-2 text-gray-100 transition-all duration-300 ease-in-out hover:bg-blue-700 dark:bg-[#0145FE] dark:text-gray-100 dark:hover:bg-blue-700'>Visit Blog
</button>
</Link>
    </div>
<NewsLetter />
<GalleryPage />
<Footer />
</div>


)


}