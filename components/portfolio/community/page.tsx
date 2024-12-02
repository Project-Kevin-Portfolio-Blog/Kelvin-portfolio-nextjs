import Link from "next/link"
import { BsArrowUpRight } from 'react-icons/bs';
export default function CommunityPage(){
return(
<div>
<h1 className="text-center text-3xl mx-auto w-11/12 md:text-5xl font-bold py-8">Communities Powered</h1>
<div className="md:w-3/4 mx-auto flex gap-6 pb-8 justify-center md:flex-row flex-col">
<div data-aos="fade-right" className=" shadow-2xl py-8 px-8 flex flex-col gap-4 bg-gray-50 dark:bg-slate-800 w-4/5 mx-auto">
<div className="flex justify-center items-center">
<img src="assests/brands/gida.png" alt=""  className="w-52  "/>
</div>
<div className="flex flex-col gap-2 leading-loose ">
<h3 className="md:text-3xl text-2xl font-bold">GIDA - GINAKEV DIGITAL ACADEMY</h3>
<p className="text-sm">Ginakev Digital Academy (GIDA) is a Crypto Academy that specializes on Crypto Education, providing insightful trading education and awareness on emerging digital currencies for optimum profits.</p>
<p className="text-sm">Spreading Adoption through proper Education  Our slogan.</p>
<Link href='' className="">
<button className='float-right mt-5 group bg-[#0145FE] dark:bg-[#0145FE] text-gray-100 dark:text-gray-100 px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 flex items-center gap-4 transition-all duration-300 ease-in-out'>Visit Website
<BsArrowUpRight className="w-4 h-4 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
                    
</button>
</Link>
</div>
</div>
<div data-aos="fade-in" className="shadow-2xl py-8 px-8 flex flex-col gap-4 bg-gray-50 dark:bg-slate-800 w-4/5 mx-auto ">
<div className="flex justify-center items-center">
<img src="assests/gallery/logo.png" alt=""  className="w-32  "/>
</div>
<div className="flex flex-col gap-2 leading-loose">
<h3 className="md:text-3xl text-2xl font-bold">BLOCKCHAINUNN - BLOCKCHAIN UNIVERSITY OF NIGERIA.</h3>
<p className="text-sm">BlockchainUNN is a Tech community established to educate members of the University Community with both basic and advanced practical knowledge of Blockchain technology, cryptocurrency, its development, applications and its opportunities. Though focused on the University of Nigeria.</p>
<p className="text-sm">It is a diverse community made up of people from diverse fields, institutions, and campuses who are blockchain enthusiasts.</p>
<Link href=''>
<button className='float-right mt-5 group bg-[#0145FE] dark:bg-[#0145FE] text-gray-100 dark:text-gray-100 px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 flex items-center gap-4 transition-all duration-300 ease-in-out'>Visit Website
<BsArrowUpRight className="w-4 h-4 transform transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
</button>
</Link>
</div>
</div>


</div>

</div>


)


}