"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AllProductsData } from "@/app/home.interface";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function ProductsSlider({ products }: { products: AllProductsData[] }) {
  return (
    <div className="container mx-auto my-20 relative group">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold border-l-4 border-main-color pl-4">
          You May Also <span className="text-main-color">Like</span>
        </h2>
        

        <div className="flex gap-2">
          <button className="p-2 border rounded-full hover:bg-main-color hover:text-white transition-all custom-prev-prod">
            <ChevronLeft size={20} />
          </button>
          <button className="p-2 border rounded-full hover:bg-main-color hover:text-white transition-all custom-next-prod">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <Swiper
  modules={[Navigation, A11y]}
  spaceBetween={15}

  slidesPerView={5} 
  slidesPerGroup={1} 
  navigation={{
    nextEl: ".custom-next-prod",
    prevEl: ".custom-prev-prod",
  }}
  breakpoints={{

    320: { slidesPerView: 1.5, spaceBetween: 10 }, 
    768: { slidesPerView: 3, spaceBetween: 15 },

    1024: { slidesPerView: 5, spaceBetween: 15 },
  }}
  loop={true} 
  className="mySwiper px-2"
>
  {products.map((product) => (
    <SwiperSlide key={product._id} className="pb-5">
      <ProductCard prod={product} />
    </SwiperSlide>
  ))}
</Swiper>
    </div>
  );
}