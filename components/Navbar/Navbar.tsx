"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { BsArrowUpRight } from "react-icons/bs";
import { DarkThemeToggle } from "flowbite-react";
import Image from "next/image";

interface MenuItem {
  title: string;
  path: string;
}

const MENU_ITEMS: MenuItem[] = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Community", path: "/community" },
  { title: "Blog", path: "/blog" },
  { title: "Lets Have A Chat", path: "/contact" },
];

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    opacity: 1,
    y: 0,
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const toggleNavMenu = () => setIsNavMenuOpen((prev) => !prev);

  return (
    <nav className="fixed z-10 w-full bg-white shadow-2xl dark:bg-slate-200 dark:text-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-28 items-center justify-between lg:h-28">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="shrink-0">
            <Link href="/">
              <Image
                src="/assests/portfolio/mainlogo2.png"
                className="block h-12 w-32 lg:w-52"
                alt="Main Logo"
                width={288}
                height={64}
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {MENU_ITEMS.map(({ title, path }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={path}
                    className={`flex items-center gap-2 rounded-2xl px-4 py-4 uppercase transition-all duration-300 ${
                      title === "Lets Have A Chat"
                        ? "group bg-[#0145FE] capitalize text-white hover:bg-blue-700"
                        : "text-black"
                    }`}
                  >
                    {title}
                    {title === "Lets Have A Chat" && (
                      <BsArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    )}
                  </Link>
                </motion.div>
              ))}
              <DarkThemeToggle className="ml-6 !border-none !shadow-none !outline-none" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleNavMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:text-blue-600 focus:outline-none"
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
        <div className="space-y-1 bg-white px-2 pb-3 pt-2 sm:px-3">
          {MENU_ITEMS.map(({ title, path }) => (
            <motion.div key={title} whileTap={{ scale: 0.95 }}>
              <Link
                href={path}
                className={`flex items-center gap-2 rounded-md px-4 py-3 uppercase transition-all duration-300 ${
                  title === "Lets Have A Chat"
                    ? "group w-fit bg-[#0145FE] capitalize text-white hover:bg-[rgba(1,69,254,0.8)]"
                    : "w-fit text-black"
                }`}
                onClick={toggleNavMenu}
              >
                {title}
                {title === "Lets Have A Chat" && (
                  <BsArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
        <DarkThemeToggle className="mb-4 ml-6 !border-none !shadow-none" />
      </motion.div>
    </nav>
  );
};

export default Navbar;
