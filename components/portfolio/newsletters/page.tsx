import { BsTwitter, BsLinkedin, BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs";
export default function NewsLetter() {
    return (
       <div>
 <div  className="bg-[#000086] news dark:bg-[#081825] text-white py-10 ">
<div data-aos="fade-right ">
<h1 className="lg:text-5xl text-2xl md:w-4/5 md:mx-auto font-bold mb-3 md:mb-6 text-white mx-6">
                SUBSCRIBE TO MY NEWSLETTER
            </h1>
            <p className=" mx-6 md:w-4/5 md:mx-auto">Want to stay up to date with the latest stories, events and articles on my Blog? Subscribe to my newsletter below! Be sure to use your best e-mail address</p>
<form action="https://formspree.io/f/xqakyjqo" method="POST" className="md:w-4/5 md:mx-auto">
<div className="grid gap-6 mb-6 grid-cols-1  w-4/6  pt-8">
                <div>
                       <input 
                        type="text" 
                        name="name" 
                        id="first_name" 
                        className="w-full p-2.5 rounded-lg bg-white  outline-none "
                        placeholder="Enter your name" 
                        required 
                    />
                </div>
                <div> 
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        className="w-full p-2.5 rounded-lg bg-white outline-none"
                        placeholder="Enter your email" 
                        required 
                    />
                </div>
            </div>
<div className="md:w-4/5 md:mx-aut">
    <button type="submit" className="group mt-4 uppercase bg-[#00004A]  text-gray-100 dark:text-gray-100 px-9 py-2 rounded-md flex items-center gap-4 transition-all duration-300 ease-in-out  w-4/5 justify-center">
        Subscribe</button>
</div>


</form>
        </div>
        </div>
        <div className="lg:pt-8 pt-8 mt-5 shadow-2xl contact dark:bg-[#081825]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:w-4/5 mx-auto">
                <div className="w-full md:w-2/5 max-w-md">
                    <img src="/assests/portfolio/kev4.png" alt="" className="w-4/5 mx-auto"/>
                </div>

                <div className="md:w-1/2 mx-0 w-11/12 ">
                    <h2 data-aos="fade-in" className="font-bold text-2xl lg:text-3xl leading-relaxed">Let&apos;s Talk</h2>
                    <h5 data-aos="fade-out" className="font-bold text-sm lg:text-xl pt-4">
                        I am Open for Collaborations. Connect with me on Socials below and Send me a mail at;
                    </h5>
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


</div>





       
    );
}