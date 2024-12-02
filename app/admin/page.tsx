"use client";
import Link from "next/link";
export default function AdminDashboard() {
  return (
    <div className=" mx-auto flex w-3/4 md:w-2/4 flex-col items-center justify-center p-4 pt-48 text-left dark:text-slate-100 text-center dark:bg-[#081825]">
     
      
      <h1 className="mb-4 text-2xl font-bold">
        Welcome to the Admin Dashboard
      </h1>
      <p className="mb-4 text-sm text-gray-400">
        Hello, Admin! You are now in the article creation section. From here,
        you can create new articles, manage existing content, and keep your site
        up-to-date. Use the sidebar to navigate to other sections of the
        dashboard.
      </p>
      <div>
        <Link href="/pages/create-article">
          <button className="rounded bg-blue-500 px-4 py-2 text-white">
            Create Article
          </button>
        </Link>
      </div>
    </div>
  );
}
