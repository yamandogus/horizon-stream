'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const sliderImages = [
  { src: '/auth/picture-one.png', alt: 'Auth Slider Image 1' },
  { src: '/auth/picture-two.png', alt: 'Auth Slider Image 2' },
];

const Slider = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
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
        className="w-full h-full"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full bg-gray-100">
              {/* Arka plan bulanık görüntü */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover blur-lg scale-105"
                />
              </div>
              {/* Ana görüntü */}
              <div className="relative z-10 w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Karanlık overlay */}
              <div className="absolute inset-0 z-20 bg-black/30" />
              {/* Gradyan overlay */}
              <div className="absolute inset-0 z-30 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
