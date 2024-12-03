"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaPlus, FaList, FaSignOutAlt, FaBars } from "react-icons/fa";

const NavLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? "bg-gray-900" : ""}`}
    >
      {children}
    </Link>
  );
};

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    // Use window.location for a full page reload to the login page
    window.location.href = "/login";
  };

  return (
    <>
      <div className="relative z-50 min-h-screen ">
        <button
          className="fixed left-6 z-20  mt-16 rounded text-2xl  text-gray-950 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars className="text-gray-500 " />
        </button>

        <div
          className={`
          fixed left-0 top-0 z-10 mt-28 flex h-full  w-64
          flex-col bg-gray-800 pt-16 text-white 
          transition-transform duration-300 ease-in-out md:mt-28
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
        >
          <div className="border-b border-gray-700 px-4 pb-8 text-2xl font-bold">
            Admin Dashboard
          </div>
          <nav className="flex-1">
            <ul>
              <li>
                <NavLink
                  href="/pages/create-article"
                  className="flex cursor-pointer items-center p-4 transition-colors hover:bg-gray-600"
                >
                  <FaPlus className="mr-2 inline-block" />
                  Create Article
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/pages/create-video"
                  className="flex cursor-pointer items-center p-4 transition-colors hover:bg-gray-600"
                >
                  <FaPlus className="mr-2 inline-block" />
                  Upload Video
                </NavLink>
              </li>

              <li>
                <NavLink
                  href="/pages/create-gallery"
                  className="flex cursor-pointer items-center p-4 transition-colors hover:bg-gray-600"
                >
                  <FaPlus className="mr-2 inline-block" />
                  Add Gallery
                </NavLink>
              </li>

              <li>
                <NavLink
                  href="/pages/posts"
                  className="flex cursor-pointer items-center p-4 transition-colors hover:bg-gray-600"
                >
                  <FaList className="mr-2 inline-block" />
                  All Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  href="/pages/videos"
                  className="flex cursor-pointer items-center p-4 transition-colors hover:bg-gray-600"
                >
                  <FaList className="mr-2 inline-block" />
                  All Videos
                </NavLink>
              </li>
              <li>
                <button
                  className="mt-auto flex w-full cursor-pointer items-center p-4 transition-colors hover:bg-gray-600"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className="mr-2 inline-block" />
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
