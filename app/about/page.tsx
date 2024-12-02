import CommunityPage from "@/components/portfolio/community/page"
import Brands from "@/components/portfolio/brands/page"
import NewsLetter from "@/components/portfolio/newsletters/page"
import Link from "next/link"
import GalleryPage from "@/components/gallery/page"
import Footer from "@/components/footer/page"
export default function AboutPage(){
return(
<div className="pt-24 min-h-screen  bg-slate-100 dark:bg-[#081825] text-[#081825] dark:text-slate-100">
    <h1 className="text-center text-3xl font-bold">About ME</h1>
    <div data-aos="fade-right" className="text-cente text-gray-600 dark:text-gray-300 text-sm py-4 flex flex-col gap-4 w-10/12 md:w-3/4 mx-auto leading-loose">
<p>Popularly known as “Ezemmuo Blockchain”, Okoye Kevin Chibuoyim is a seasoned entrepreneur within the the Tech landscape - A Strategic and results-oriented Web3 Community Growth Lead, Business Developer, DevRel and Tech Content Creator with a proven track record of cultivating vibrant communities and a fervent advocate for the transformative power of technology. Possessing a deep passion for technology since getting into the Blockchain/Crypto Ecosystem in 2018, he has left an indelible impact on the lives of many.</p>
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

<h1 className="text-center text-3xl font-bold">My Blog</h1>
    <div ata-aos="fade-right"  className="text-center mb-8 text-gray-600 dark:text-gray-300 text-sm py-4 flex flex-col gap- w-11/12 md:w-3/4 mx-auto leading-loose">
<p>I have had various opportunities to build up experience overtime in the industry. Welcome to my blog. Here’s where I share my thoughts and experience.
</p>
<p>I document lessons on Tech, Crypto, Blockchain, Coding/Development, Productivity & Growth.
</p>
<Link href='/blog' className="flex justify-center items-center"> 
<button className=' mx-auto mt-5 group bg-[#0145FE] dark:bg-[#0145FE] text-gray-100 dark:text-gray-100 px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 flex items-center justify-center gap-4 transition-all duration-300 ease-in-out'>Visit Blog
</button>
</Link>
    </div>
<NewsLetter />
<GalleryPage />
<Footer />
</div>


)


}