"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaPlus,
  FaList,
  FaSignOutAlt,
  FaBars,
  FaCaretDown,
} from "react-icons/fa";

interface NavItem {
  href: string;
  label: string;
  icon: JSX.Element;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/pages/create-article", label: "Create Article", icon: <FaPlus /> },
  { href: "/pages/create-video", label: "Upload Video", icon: <FaPlus /> },
  { href: "/pages/create-gallery", label: "Add Gallery", icon: <FaPlus /> },
  { href: "/pages/posts", label: "All Posts", icon: <FaList /> },
  { href: "/pages/videos", label: "All Videos", icon: <FaList /> },
  { href: "/pages/gallery", label: "Gallery Photos", icon: <FaList /> },
];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center p-4 transition-colors hover:bg-gray-300 ${
        isActive ? "bg-gray-400" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  return (
    <div className="z-50 min-h-screen">
      <button
        className="fixed left-6 mt-16 text-2xl text-gray-950"
        onClick={toggleSidebar}
      >
        <FaBars className="text-gray-500" />
      </button>

      <div
        className={`fixed left-0 top-0 mt-28 h-full w-64 flex-col bg-white pt-16 text-black transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:${isOpen ? "block" : "hidden"}`}
      >
        <div className="flex gap-2 border-b border-gray-300 px-4 pb-8 text-xl font-bold">
          <div>Admin Dashboard</div>
          <div onClick={toggleSidebar} title="close sidebar"> 
            <FaCaretDown className="inline text-gray-500" />
          </div>
        </div>
        <nav className="flex-1">
          <ul>
            {NAV_ITEMS.map(({ href, label, icon }) => (
              <li key={href}>
                <NavLink href={href}>
                  <span className="mr-2">{icon}</span>
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <button
                className="mt-auto flex w-full items-center p-4 transition-colors hover:bg-gray-300"
                onClick={handleLogout}
              >
                <FaSignOutAlt className="mr-2" /> Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
