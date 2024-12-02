import { BsTwitter, BsLinkedin, BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs";
import Footer from "@/components/footer/page";
export default function ContactPage() {
    return (
       <div className="pt-12 dark:bg-[#081825]">
 <div  className="bg-[#00004A] dark:bg-[#081825] text-gray-200 py-16 ">
<div data-aos="fade-right">
<h1 className="lg:text-5xl text-2xl font-bold text-center mb-3 md:mb-8 text-white mx-6">
                Contact Me
            </h1>
<form action="https://formspree.io/f/xqakyjqo" method="POST">
<div className="grid gap-6 mb-6 grid-cols-1 md:grid-cols-2 w-5/6 mx-auto pt-8">
                <div>
                       <input 
                        type="text" 
                        name="name" 
                        id="first_name" 
                        className="w-full p-2.5 rounded-lg bg-transparent border border-white/30 text-white outline-none focus:border-white/40"
                        placeholder="Enter your name" 
                        required 
                    />
                </div>
                <div> 
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="w-full p-2.5 rounded-lg bg-transparent border border-white/30 text-white outline-none focus:border-white/40"
                        placeholder="Enter your email" 
                        required 
                    />
                </div>
                <textarea name="text" id=""
 className="w-full p-2.5 rounded-lg bg-transparent border border-white/30 text-white outline-none focus:border-white/40"
 placeholder="Enter your message" 
 required 
></textarea>
            </div>
            


            
<div className="flex justify-center items-center">
    <button type="submit" className="group mt-4 uppercase bg-[#0145FE] dark:bg-[#0145FE] text-gray-100 dark:text-gray-100 px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-700 flex items-center gap-4 transition-all duration-300 ease-in-out w-2/5 md:w-1/5 justify-center">
        Submit Now</button>
</div>


</form>
        </div>
        </div>
        <div className="lg:pt-8 pt-8  dark:text-slate-100  shadow-2xl bg-slate-100 dark:bg-[#081825] ">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:w-4/5 mx-auto ">
                <div className="w-full md:w-2/5 max-w-md">
                    <img src="/assests/portfolio/kev4.png" alt="" className="w-4/5 mx-auto"/>
                </div>

                <div className="md:w-1/2 mx-0 w-11/12 ">
                    <h4 data-aos="fade-in" className="font-bold text-2xl lg:text-3xl leading-relaxed">Let's Talk</h4>
                    <h6 data-aos="fade-out" className="font-bold text-sm lg:text-xl pt-4">
                        I am Open for Collaborations. Connect with me on Socials below and Send me a mail at;
                    </h6>
                    <h4 data-aos="fade-in" className="font-bold text-xl md:2xl pt-3 lg:text-3xl leading-relaxed">kelvinchibuoyim@gmail.com</h4>
                    <div className="text-gray-300 flex items-center md:justify-start justify-center gap-6 pt-9 lg:pb-0 pb-6">
                        <a href=""> <BsTwitter className="lg:text-3xl text-2xl text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-600"/> </a>
                        <a href=""> <BsInstagram className="lg:text-3xl text-2xl text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-600"/> </a>
                        <a href=""> <BsLinkedin className="lg:text-3xl text-2xl text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-600"/> </a>
                        <a href=""> <BsFacebook className="lg:text-3xl text-2xl text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-600"/> </a>
                        <a href=""> <BsTelegram className="lg:text-3xl text-2xl text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-600"/> </a>
                    </div>
                </div>
            </div>
        </div>

<Footer />

</div>





       
    );
}