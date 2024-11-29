import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaHome, FaFileAlt, FaVideo, FaSignOutAlt } from 'react-icons/fa';

export default function SideBar() {
  const router = useRouter();
  const [active, setActive] = useState('articles');

  const handleNavigation = (path: string) => {
    setActive(path);
    router.push(`/admin/${path}`);
  };

  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 text-lg font-bold">Admin Dashboard</div>
      <nav className="flex-1">
        <ul>
          <li
            className={`p-4 cursor-pointer ${active === 'articles' ? 'bg-gray-700' : ''}`}
            onClick={() => handleNavigation('articles')}
          >
            <FaFileAlt className="inline-block mr-2" />
            Articles
          </li>
          <li
            className={`p-4 cursor-pointer ${active === 'videos' ? 'bg-gray-700' : ''}`}
            onClick={() => handleNavigation('videos')}
          >
            <FaVideo className="inline-block mr-2" />
            Videos
          </li>
          <li
            className={`p-4 cursor-pointer ${active === 'logout' ? 'bg-gray-700' : ''}`}
            onClick={() => handleNavigation('logout')}
          >
            <FaSignOutAlt className="inline-block mr-2" />
            Logout
          </li>
        </ul>
      </nav>
    </div>
  );
} 