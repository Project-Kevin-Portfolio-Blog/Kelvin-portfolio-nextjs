'use client'

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { BsArrowUpRight } from 'react-icons/bs';
import { DarkThemeToggle } from "flowbite-react";
import Image from 'next/image';

const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);  // More specific name
  

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Community', path: '/community' },
    { title: 'Blog', path: '/blog' },
    { title: "Lets Have A Chat", path: '/contact' },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
      }
    }
  };

  const menuItemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };

  return (
    <nav className="fixed w-full z-10  bg-white  dark:bg-slate-200 shadow-2xl dark:text-gray-100  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 lg:h-28">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="shrink-0 "
          >
            <Link href="/">
              <Image 
                src='/assests/portfolio/mainlogo2.png' 
                className='block h-12 w-32 lg:w-52' 
                alt='Main Logo' 
                width={288} // Adjust width as needed
                height={64} // Adjust height as needed
              />
            </Link>
          </motion.div>

       {/*    <motion.div
            whileHover={{ scale: 1.05 }}
            className="shrink-0 hidden"
          >
            <Link href="/" className='flex items-center gap-3'>
              <Image 
                src='/assests/portfolio/footer.png' 
                className='lg:w-32 w-52 h-16 hidden' 
                alt='Footer Logo' 
                width={128} // Adjust width as needed
                height={64} // Adjust height as needed
              />
              <h1 className="font-bold text-2xl ">Ezemmuo <br/> Blockchain</h1>
            </Link>
          </motion.div> */}

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.path}
                    className={`px-4 py-4 rounded-2xl   uppercase flex items-center gap-2
                    ${item.title === "Lets Have A Chat" 
                      ? 'bg-[#0145FE] text-white hover:bg-blue-700  capitalize group'
                      : 'text-black '
                    } transition-all duration-300`}
                  >
                    {item.title}
                    {item.title === "Lets Have A Chat" && (
                      <BsArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    )}
                  </Link>
                  
                </motion.div>
              ))}
                     <DarkThemeToggle className='ml-6 !outline-none !border-none !ring-0 !ring-offset-0 !shadow-none hover:!bg-transparent active:!bg-transparent focus:!bg-transparent dark:!bg-transparent dark:hover:!bg-transparent hover:!border-none focus:!border-none active:!border-none dark:!border-none dark:hover:!border-none dark:!outline-none dark:focus:!ring-0 dark:active:!outline-none' />
                     </div>
                     </div>
         {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-600 focus:outline-none"
            >
              {isNavMenuOpen ? <HiX size={24} /> : <HiMenu size={38} />}
            </motion.button>
          </div>
        </div>
      </div>

       {/* Mobile Menu */}
       <motion.div
        initial="closed"
        animate={isNavMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        className="md:hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white  ">
          {menuItems.map((item) => (
            <motion.div
              key={item.title}
              variants={menuItemVariants}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.path}
                className={` px-4 py-3 rounded-md uppercase flex items-center gap-2
                ${item.title === "Lets Have A Chat"
                  ? 'bg-[#0145FE] text-white hover:bg-[rgba(1,69,254,0.8)] capitalize w-fit group'
                  : 'text-black w-fit '
                } transition-all duration-300`}
                onClick={() => setIsNavMenuOpen(false)}
              >
                {item.title}
                {item.title === "Lets Have A Chat" && (
                  <BsArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
        <DarkThemeToggle className=' mb-4 ml-6 !outline-none !border-none !ring-0 !ring-offset-0 !shadow-none hover:!bg-transparent active:!bg-transparent focus:!bg-transparent dark:!bg-transparent dark:hover:!bg-transparent hover:!border-none focus:!border-none active:!border-none dark:!border-none dark:hover:!border-none dark:!outline-none dark:focus:!ring-0 dark:active:!outline-none' />
       
      </motion.div>
      
      
    </nav>
  );
};

export default Navbar; 