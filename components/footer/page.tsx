import Link from "next/link";
export default function Footer() {
  return (
    <div className="footer bg-[#00004A] pb-5 pt-14 text-white dark:bg-[#081825]">
      <div className="mx-auto flex w-10/12 flex-col  justify-between md:w-10/12 md:flex-row md:items-center">
        <div className="mb-5 flex items-center  gap-3 md:mb-0">
          <img
            src="/assests/portfolio/footer.png"
            alt=""
            className="h-16 w-20 md:w-2/5"
          />
          <h1 className="text-2xl font-bold ">
            Ezemmuo <br /> Blockchain
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-5 md:flex-row">
          <Link
            href="/"
            className="uppercase text-gray-200 hover:text-blue-600 "
          >
            Home
          </Link>
          <Link
            href="/about"
            className="uppercase text-gray-200 hover:text-blue-600 "
          >
            About
          </Link>
          <Link
            href="/blog"
            className="uppercase text-gray-200 hover:text-blue-600 "
          >
            Blog
          </Link>
          <Link
            href="communities"
            className="uppercase text-gray-200 hover:text-blue-600 "
          >
            Communities
          </Link>
          <Link
            href="contact"
            className="uppercase text-gray-200 hover:text-blue-600 "
          >
            contact
          </Link>
        </div>
      </div>
      {/* Add the hr outside the flex container and style it properly */}
      <hr className="mx-auto  mt-8 w-10/12 border-t-2 border-gray-100/20" />

      <div className="pt-5 text-center text-sm">
        <p>{new Date().getFullYear()} Copyright. All rights reserved</p>
      </div>
    </div>
  );
}
