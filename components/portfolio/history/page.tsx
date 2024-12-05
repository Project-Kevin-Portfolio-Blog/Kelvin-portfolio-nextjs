'use client'
import { FaBitcoin, FaUsers, FaVideo, FaMicrophone, FaCode } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'

export default function HistoryPage() {
  return (
    <div 
      data-aos="fade-in"
      className="history text-white  min-h-screen px-8 pt-16 pb-8 dark:from-gray-900 dark:to-gray-800"
    >
    {/* <h1 className="lg:text-4xl text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        My Blockchain Journey & Achievements
      </h1> */}
<img src="/assests/portfolio/code.png" alt="" className='bg' />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 history-text">
        {/* First card */}
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className=" dark:bg-gray-800 flex justify-center items-center flex-col p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <span className=" text-4xl mb-4 block">
            <FaBitcoin />
          </span>
          <p className=" dark:text-gray-300 text-center">
            Joined the Blockchain/Crypto Ecosystem in 2018 and I have worked
            with a lot of Top Crypto Projects, Blockchains & Exchanges;
            Successfully led and nurtured various online communities, fostering
            meaningful interactions, Partnerships, Increased revenue and driving
            user engagement.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className=" dark:bg-gray-800 flex justify-center items-center flex-col p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <span className="text-4xl mb-4 block">
            <FaUsers />
          </span>
          <p className=" dark:text-gray-300 text-center">
            I have successfully trained over 3000+ individuals from Nigeria
            /Africa and exposed them to the world of Web3, Cryptocurrencies and
            Blockchain via free/paid courses across my Communities and Events;
            With many going on to becoming Professionals in the Space.
          </p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-delay="300"
          className=" dark:bg-gray-800 p-6 flex justify-center items-center flex-col rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <span className="text-4xl mb-4 block">
            <FaVideo />
          </span>
          <p className="text-center dark:text-gray-300">
            I actively create Tech related Video Contents, informative articles,
            and educational series, across various Social Platforms on Crypto,
            Blockchain, and Tech generally, for various Audiences and assist
            Brands achieve their Marketing Goals. I create || I shoot || I
            write.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className=" dark:bg-gray-800 flex justify-center items-center flex-col p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <span className="text-4xl mb-4 block">
            <FaPeopleGroup />
          </span>
          <p className="text-center dark:text-gray-300">
            With excellent communication skills, building and managing
            Blockchain Communities is my key strength. I have equally
            successfully managed Ambassador programs and other community focused
            initiatives, resulting in increased engagement, brand loyalty, and
            advocacy.
          </p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-delay="500"
          className=" dark:bg-gray-800 flex justify-center items-center flex-col p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <span className="text-4xl mb-4 block">
            <FaMicrophone />
          </span>
          <p className="text-center dark:text-gray-300">
            I have extensive experience speaking as both Keynote and Panelist at
            Industry events and conferences. I have also organized and anchored
            major IRL Blockchain Conferences that pulled 3000+ attendees and
            hundreds of online participants.
          </p>
        </div>

        <div
          data-aos="fade-right"
          data-aos-delay="600"
          className=" dark:bg-gray-800 flex justify-center items-center flex-col p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
        >
          <span className="text-4xl mb-4 block">
            <FaCode />
          </span>
          <p className="text-center  dark:text-gray-300">
            As a Web3/Blockchain Developer, I have keen knowledge of Solidity
            and Smart Contracts development on EVM compatible chains, and I am
            actively committed to Web3 Developer Relations (DevRel) with a
            proven track record of fostering strong developer communities.
          </p>
        </div>
      </div>
    </div>
  )
}