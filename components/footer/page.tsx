import Link from "next/link"
export default function Footer() {
    return(
        <div className="bg-[#00004A] dark:bg-[#081825] text-gray-200 pt-14 pb-5">
<div className="flex w-10/12 mx-auto justify-between items-center">
<div className="flex items-center gap-3">
    <img src="/assests/portfolio/footer.png" alt="" className="w-2/5 h-16" />
    <h1 className="font-bold text-2xl ">Ezemmuo <br/> Blockchain</h1>
</div>
<div className="flex gap-5 md:flex-row flex-col justify-center">
<Link href='/' className="uppercase text-gray-200 hover:text-blue-600 " >Home</Link>
<Link href='/about' className="uppercase text-gray-200 hover:text-blue-600 " >About</Link>
<Link href='/blog' className="uppercase text-gray-200 hover:text-blue-600 " >Blog</Link>
<Link href='communities' className="uppercase text-gray-200 hover:text-blue-600 " >Communities</Link>
<Link href='contact' className="uppercase text-gray-200 hover:text-blue-600 " >contact</Link>

</div>
</div>
   {/* Add the hr outside the flex container and style it properly */}
   <hr className="w-10/12  mx-auto mt-8 border-t-2 border-gray-100/20" />
        
   <div className="text-center pt-5 text-sm">
    <p>{new Date().getFullYear()} Copyright. All rights reserved</p>
   </div>


        </div>
    )
}