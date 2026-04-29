import Slider from "../Slider/Slider";
import mainImg from "@images/home-slider.png";
// import mainImg2 from "@images/products.png";
// import mainImg3 from "@images/books.png";
// const imgList = [mainImg.src, mainImg2.src, mainImg3.src];

const slides = [
  {
    image: mainImg.src,
    title: "Fresh Products Delivered to your Door",
    description: "Get 20% off your first order",
    firstbtn: "Shop Now",
    secbtn: "View Deals",
    textcolor: "text-green-400",
    firstbtnhref: "/shop",
    secbtnhref: "/deals",
  },
  {
    image: mainImg.src,
    title: "Daily Fresh Fruits & Vegetables",
    description: "Save up to 30% today",
    firstbtn: "Shop Now",
    secbtn: "Learn More",
    textcolor: "text-blue-400",
    firstbtnhref: "/shop",
    secbtnhref: "/about",
  },
  {
    image: mainImg.src,
    title: "Best Organic Products",
    description: "Healthy food for your family",
    firstbtn: "Order Now",
    secbtn: "Delivery Info",
    textcolor: "text-purple-400",
    firstbtnhref: "/shop",
    secbtnhref: "/delivery",
  },
];

export default function HomeSlider() {
  return (
    <div className="mt-27">
      <Slider
        className="relative h-[400px] w-full"
        slides={slides}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        
      />
    </div>
  );
}
