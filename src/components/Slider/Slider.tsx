"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Slider({
  slides,
  spaceBetween,
  slidesPerView = 1,
  autoplay = false,
  pagination = true,
  className,
}: {
  slides: {
    image: string;
    title: string;
    description: string;
    firstbtn: string;
    secbtn: string;
    textcolor: string;
    firstbtnhref: string;
    secbtnhref: string;
  }[];
  spaceBetween?: number;
  slidesPerView?: number;
  autoplay?: any;
  pagination?: boolean;
  className: string;
}) {
  return (
    <div className="custom-slider-container">
      <Swiper
        speed={900}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={pagination ? { clickable: true } : false}
        loop={true}
        autoplay={autoplay}
      >
        <div className="custom-prev">
          <ChevronLeft size={18} className="w-6 h-6 text-main-color" />
        </div>

        <div className="custom-next">
          <ChevronRight size={18} className="w-6 h-6 text-main-color" />
        </div>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={className}>
              <Image
                src={slide.image}
                alt=""
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-green-500/50  flex flex-col justify-center px-35 text-base text-white">
                <h3 className="text-3xl font-bold mb-2 leading-tight">
                  {slide.title}
                </h3>
                <p className="mb-6 opacity-90 text-white font-medium">
                  {slide.description}
                </p>
                <div className="flex gap-3">
                  <Link href={slide.firstbtnhref}>
                    <button
                      className={`bg-white px-6 py-2 rounded-lg font-semibold  ${slide.textcolor}`}
                    >
                      {slide.firstbtn}
                    </button>
                  </Link>
                  <Link href={slide.secbtnhref}>
                    <button className="bg-transparent  border-2 border-gray-300 px-6 py-2 rounded-lg font-semibold">
                      {slide.secbtn}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .custom-slider-container .swiper-pagination-bullet-active {
          background: white !important;
          width: 30px;
          border-radius: 5px;
          height: 12px;
        }

        .custom-prev,
        .custom-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          width: 50px;
          height: 50px;
          font-weight: bold;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .custom-prev {
          left: 15px;
        }

        .custom-next {
          right: 15px;
        }

        .custom-prev:hover,
        .custom-next:hover {
          transform: translateY(-50%) scale(1.1);
          transition: 0.2s;
        }
      `}</style>
    </div>
  );
}
