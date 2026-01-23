import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroCarousel = () => {
  // Add your image filenames here
  const images = [
    '/images/hero1.png',
    
    '/images/hero3.jpg',
  ];


  return (
    <div className="relative w-full h-[100px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[100px]">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[100px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper {
          width: 100%;
          height: 500px;
        }
        
        .swiper-slide {
          width: 100%;
          height: 100px;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(255, 255, 255, 0.3);
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 16px;
        }
        
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
        }
        
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default HeroCarousel;