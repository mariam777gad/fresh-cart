import { getAllProducts, getProductDetails } from "@/app/home.sevices";
import {
  Star,
  StarOff,
  Truck,
  ShieldCheck,
  RotateCcw,
  Home,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import NavAndTaps from "./NavAndTaps";
import ProductQuantity from "./ProductQuantity";
import ProductDetailsWrapper from "./ProductDetailsWrapper";
import ProductDetailsButtons from "./ProductDetailsButtons";
import { ProductDetailsData } from "./productDetails.interface";
import ProductsSlider from "./ProductsSlider";
import Link from "next/link";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    desc: "Orders over $50",
  },
  {
    icon: RotateCcw,
    title: "30 Days Return",
    desc: "Money back",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    desc: "100% Protected",
  },
];
export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const details: ProductDetailsData = await getProductDetails(id);
  const {
    _id,
    __v,
    brand,
    category,
    createdAt,
    description,
    imageCover,
    images,
    price,
    quantity,
    ratingsAverage,
    ratingsQuantity,
    reviews,
    slug,
    subcategory,
    title,
    updatedAt,
    priceAfterDiscount,
    sold,
  } = details;
  // console.log(details);

  const products = await getAllProducts();

  return (
    <div>
      <div className="py-4 px-1 container mx-auto mt-30">
        <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-1.5 hover:text-gray-900 cursor-pointer">
            <Home className="w-4 h-4" />
            <Link href="/">
              <span className="font-medium ">Home</span>
            </Link>
          </div>
          <span className="text-gray-400 font-medium">
            <ChevronRight size={15} />
          </span>
          <Link href={`/specificCat/${category._id}`}>
            {" "}
            <span className="hover:text-gray-900 cursor-pointer">
              Women's Fashion
            </span>
          </Link>
          <span className="text-gray-400 font-medium">
            <ChevronRight size={15} />
          </span>
          <span className="hover:text-gray-900 cursor-pointer">
            Women's Clothing
          </span>
          <span className="text-gray-400 font-medium">
            <ChevronRight size={15} />
          </span>
          <span className="text-gray-900 font-medium">Woman Shawl</span>
        </div>
      </div>{" "}
      <div className="grid grid-cols-12 container mx-auto mt-10 gap-10 ">
        <div className="col-span-3 h-100 flex flex-col gap-5">
          <Image
            width={310}
            height={300}
            src={imageCover}
            alt={title}
            className="bg-gray-400"
          />
          <div className="flex justify-evenly">
            {images.slice(0, 4).map((e, i) => {
              return (
                <Image
                  key={i}
                  width={70}
                  height={70}
                  src={e}
                  alt={title}
                  className="bg-gray-400"
                />
              );
            })}
          </div>
        </div>
        <ProductDetailsWrapper>
          <div className="col-span-9 p-5 h-175 rounded-xl border border-gray-100 flex flex-col justify-between">
            <div className="flex gap-3 items-center text-sm">
              <Link href={`/specificCat/${category._id}`}>
                <h3 className="bg-[#DCFCE7] text-green-800 py-1 px-2  rounded-2xl">
                  {category.name}
                </h3>
              </Link>
              <p className="bg-[#F3F4F6] py-1 px-2  rounded-2xl">
                {brand.name}
              </p>
            </div>
            <h2 className="text-3xl font-bold my-3">{title}</h2>
            <div className="flex items-center gap-1 ">
              <div className="flex text-yellow-400 my-2 me-2">
                <Star fill="currentColor" size={19} />
                <Star fill="currentColor" size={19} />
                <Star fill="currentColor" size={19} />
                <Star fill="currentColor" size={19} />
                <StarOff size={19} />
              </div>
              <span>{ratingsAverage}</span>
              <span>({ratingsQuantity} reviews)</span>
            </div>
            <p className="text-2xl  flex gap-2.5 items-center my-5">
              <span className="font-bold text-3xl">{price}EGP</span>
              {priceAfterDiscount && (
                <span className="line-through text-xl font-medium text-gray-500">
                  {price} EGP
                </span>
              )}
              {priceAfterDiscount ? (
                <span className="text-sm py-1 px-2 rounded-full bg-red-500 text-white">
                  Save{" "}
                  {Math.round(((price - priceAfterDiscount) / price) * 100)} %
                </span>
              ) : (
                ""
              )}
            </p>
            <p>
              <span className="text-sm py-1 px-3 rounded-full flex items-center w-fit bg-[#F0FDF4] text-green-700">
                <span className="w-2 h-2 bg-green-500 rounded-full me-2 mb-1 "></span>
                in stock
              </span>
            </p>
            <p className="font-medium text-gray-600 my-5">{description}</p>
            <p className="text-sm mb-2">Quantity</p>
            <div className="flex items-center gap-3">
              <ProductQuantity />
              <span className="text-sm py-1 px-2 font-medium  text-gray-600">
                {quantity} available
              </span>
            </div>
            <ProductDetailsButtons
              price={price}
              priceAfterDiscount={priceAfterDiscount}
              id={_id}
            />
            <div className="border-t border-gray-200 mt-4 ">
              <div className="flex justify-between items-center py-5 w-3xl">
                {features.map((item, i) => {
                  return (
                    <div className="flex gap-3 items-center" key={i}>
                      <div className="p-2.5 bg-[#DCFCE7]  rounded-full">
                        <item.icon size={20} className=" text-main-color " />
                      </div>
                      <div className="font-medium">
                        <p className="text-sm mb-0">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ProductDetailsWrapper>
      </div>
      <NavAndTaps />
      <ProductsSlider products={products} />
    </div>
  );
}
