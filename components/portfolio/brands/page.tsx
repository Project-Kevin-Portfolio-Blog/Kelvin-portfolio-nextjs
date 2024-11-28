'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Brands = () => {
  return (
    <div className="w-full py-8 lg:py-16 ">
      <h1 className="lg:text-5xl text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white ">
      Brands I Have Work With
      </h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: true,
          reverseDirection: false
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        className="brands-swiper max-w-[1200px] px-10"
      >
        <SwiperSlide className=''>
          <div className="flex items-center justify-center h-[70px] lg:h-[120px] bg-white rounded-lg">
            <img className='w-24 lg:w-36 h-auto object-contain' src="/assests/brands/aax.jpg" alt='AAX' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[70px] lg:h-[120px] bg-white rounded-lg">
            <img className='lg:w-36 w-24 h-12 lg:h-20 object-contain' src='/assests/brands/bcat.jpg' alt="BCAT" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[70px] lg:h-[120px] bg-white rounded-lg">
            <img className='lg:w-36 w-24  h-auto object-contain' src='/assests/brands/bitkeep.jpg' alt="BitKeep" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[70px] lg:h-[120px] bg-white rounded-lg">
            <img className='lg:w-48 w-24  h-auto object-contain' src='/assests/brands/bunn.png' alt="Bunn" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[70px] lg:h-[120px] bg-white rounded-lg">
            <img className='lg:w-48 w-24  h-auto object-contain' src='/assests/brands/bybit.jpg' alt="Bybit" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
<div className="flex items-center justify-center h-[70px] lg:h-[120px] bg-white rounded-lg">
            <img className='lg:w-48 w-24  h-auto object-contain' src='/assests/brands/coinw.jpg' alt="CoinW" />
          </div>  
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[70px] lg:h-[120px] bg-white rounded-lg">
            <img className='lg:w-36 w-24  h-auto object-contain' src='/assests/brands/gida.png' alt="Gida" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[70px] lg:h-[120px] bg-white rounded-lg">
            <img className='lg:w-32 w-24  h-auto object-contain' src='/assests/brands/huobi.jpg' alt="Huobi" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[70px] lg:h-[120px] bg-white rounded-lg">
            <img className='lg:w-36 w-24  h-auto object-contain' src='/assests/brands/yc.jpg' alt="YC" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[70px] lg:h-[120px] bg-white rounded-lg">
            <img className='lg:w-48 w-24  h-auto object-contain' src='/assests/brands/credit.jpg' alt="CoinW" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;