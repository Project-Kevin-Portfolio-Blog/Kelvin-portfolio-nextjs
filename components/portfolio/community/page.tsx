import Link from "next/link"
import { BsArrowUpRight } from 'react-icons/bs';
export default function CommunityPage(){
return(
<div className="community">
<h1 className="mx-auto w-11/12 py-8 text-center font-bold uppercase">Communities Powered</h1>
<div className="mx-auto flex flex-col justify-center gap-6 pb-8 md:w-3/4 md:flex-row">
<div data-aos="fade-right" className=" mx-auto flex w-4/5 flex-col gap-4 bg-gray-50 p-8 shadow-2xl dark:bg-slate-800">
<div className="flex items-center justify-center">
<img src="assests/brands/gida.png" alt=""  className="w-52  "/>
</div>
<div className="flex flex-col gap-2 leading-loose ">
<h3 className="text-2xl font-bold md:text-3xl">GIDA - GINAKEV DIGITAL ACADEMY</h3>
<p className=" about-text3">Ginakev Digital Academy (GIDA) is a Crypto Academy that specializes on Crypto Education, providing insightful trading education and awareness on emerging digital currencies for optimum profits.</p>
<p className=" about-text3">Spreading Adoption through proper Education  Our slogan.</p>
<Link href='' className="">
<button className='group float-right mt-5 flex items-center gap-4 rounded-md bg-[#0145FE] px-4 py-2 text-gray-100 transition-all duration-300 ease-in-out hover:bg-blue-700 dark:bg-[#0145FE] dark:text-gray-100 dark:hover:bg-blue-700'>Visit Website
<BsArrowUpRight className="size-4 transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1" />
                    
</button>
</Link>
</div>
</div>
<div data-aos="fade-in" className="mx-auto flex w-4/5 flex-col gap-4 bg-gray-50 p-8 shadow-2xl dark:bg-slate-800 ">
<div className="flex items-center justify-center">
<img src="assests/gallery/logo.png" alt=""  className="w-32  "/>
</div>
<div className="flex flex-col gap-2 leading-loose">
<h3 className="text-2xl font-bold md:text-3xl">BLOCKCHAINUNN - BLOCKCHAIN UNIVERSITY OF NIGERIA.</h3>
<p className=" about-text3">BlockchainUNN is a Tech community established to educate members of the University Community with both basic and advanced practical knowledge of Blockchain technology, cryptocurrency, its development, applications and its opportunities. Though focused on the University of Nigeria.</p>
<p className="about-text3">It is a diverse community made up of people from diverse fields, institutions, and campuses who are blockchain enthusiasts.</p>
<Link href=''>
<button className='group float-right mt-5 flex items-center gap-4 rounded-md bg-[#0145FE] px-4 py-2 text-gray-100 transition-all duration-300 ease-in-out hover:bg-blue-700 dark:bg-[#0145FE] dark:text-gray-100 dark:hover:bg-blue-700'>Visit Website
<BsArrowUpRight className="size-4 transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-1" />
</button>
</Link>
</div>
</div>


</div>

</div>


)


}