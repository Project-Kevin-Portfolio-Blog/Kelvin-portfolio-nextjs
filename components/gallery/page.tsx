'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const GalleryPage = () => {
  return (
    <div className="md:w-full py-8 lg:py-16 w-10/12 mx-auto bg-slate-100 dark:bg-[#081825]">
      <h1 className="lg:text-5xl w-10/12 mx-auto text-3xl font-bold text-center pt-5 md:mb-12 text-gray-900 dark:text-white ">
    Gallery And Experience
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        className="brands-swiper max-w-[1200px] px-10"
      >
        <SwiperSlide className=''>
          <div className="flex items-center justify-center h-[300px] lg:h-[300px]  rounded-lg">
            <img className='w-[350px] lg:w-[500px] h-auto object-contain' src="/assests/gallery/gallery.jpg" alt='AAX' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[300px] lg:h-[300px]  rounded-lg">
            <img className='lg:w-[500px] w-[350px] h-auto object-contain' src='/assests/gallery/gallery.jpg' alt="BCAT" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[300px] lg:h-[300px] rounded-lg">
            <img className='lg:w-[500px] w-[350px]  h-auto object-contain' src='/assests/gallery/gallery.jpg' alt="BitKeep" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[300px] lg:h-[300px]  rounded-lg">
            <img className='lg:w-[500px] w-[350px]  h-auto object-contain' src='/assests/gallery/gallery.jpg' alt="Bunn" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[300px] lg:h-[300px]  rounded-lg">
            <img className='lg:w-[500px] w-[350px]  h-auto object-contain' src='/assests/gallery/gallery.jpg' alt="Bybit" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
<div className="flex items-center justify-center h-[300px] lg:h-[300px]  rounded-lg">
            <img className='lg:w-[500px] w-[350px]  h-auto object-contain' src='/assests/gallery/gallery.jpg' alt="CoinW" />
          </div>  
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[300px] lg:h-[300px]  rounded-lg">
            <img className='lg:w-[500px] w-[350px]  h-auto object-contain' src='/assests/gallery/gallery.jpg' alt="Gida" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[300px] lg:h-[300px] rounded-lg">
            <img className='lg:w-[500px] w-[350px]  h-auto object-contain' src='/assests/gallery/gallery.jpg' alt="Huobi" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[300px] lg:h-[300px]  rounded-lg">
            <img className='lg:w-[500px] w-[350px]  h-auto object-contain' src='/assests/gallery/gallery.jpg' alt="YC" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-[300px] lg:h-[300px]  rounded-lg">
            <img className='lg:w-[500px] w-[350px]  h-auto object-contain' src='/assests/gallery/gallery.jpg' alt="CoinW" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GalleryPage;