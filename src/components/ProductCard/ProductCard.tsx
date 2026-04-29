import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
import { AllProductsData } from "@/app/home.interface";
import { Eye, Heart, RefreshCw, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddProductToCart from "../AddProductToCart/AddProductToCart";
import AddProductToWishlist from "../AddProductToWishlist/AddProductToWishlist";

export default function ProductCard({ prod }: { prod: AllProductsData }) {
  const {
    _id,
    brand,
    category: {
      name: categoryName,
      slug: categorySlug,
      _id: categoryId,
      image,
    },
    createdAt,
    description,
    id,
    imageCover,
    images,
    price,
    quantity,
    ratingsAverage,
    ratingsQuantity,
    slug,
    title,
    subcategory,
    updatedAt,
    availableColors,
    priceAfterDiscount,
    sold,
  } = prod;
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className=" " />
      <div className="relative h-55">
        <Image
          fill
          src={imageCover}
          alt="Event cover"
          className="relative z-20  w-full object-cover "
        />
        {priceAfterDiscount && (
          <div className="absolute top-2 left-3 z-30 py-0.5 px-1 rounded-xs text-white bg-red-500">
            -{Math.round(((price - priceAfterDiscount) / price) * 100)} %
          </div>
        )}
        <div className="absolute top-2 right-1 flex flex-col gap-2 transition-all duration-300 group-hover:right-4 z-40">
          <AddProductToWishlist id={id} />
          <button className="p-2 bg-white rounded-full shadow-md hover:text-main-color transition-colors border border-gray-100">
            <RefreshCw size={18} />
          </button>
          <Link
            href={`/productdetails/${id}`}
            className="p-2 bg-white rounded-full shadow-md hover:text-main-color transition-colors border border-gray-100"
          >
            <Eye size={18} />
          </Link>
        </div>
      </div>
      <CardHeader>
        {/* <CardTitle>
          <Badge className=" bg-white text-black py-0.5">{categoryName}</Badge>
        </CardTitle> */}
        <p className="text-xs   uppercase ">{categoryName}</p>

        <CardTitle className="font-bold text-gray-800 text-md  hover:text-main-color transition-colors">
          {title.split(" ", 2).join(" ")}
        </CardTitle>
        <CardDescription className="text-gray-500 font-medium text-md">
          {description.split(" ", 2).join(" ")}
        </CardDescription>
        <CardDescription>
          <h3 className="flex items-center">
            {Array.from({ length: Math.floor(ratingsAverage) }).map(
              (e, idx) => {
                return (
                  <Star
                    key={idx}
                    className={`${
                      idx < Math.floor(ratingsAverage)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                );
              },
            )}

            {Array.from({ length: 5 - Math.floor(ratingsAverage) }).map(
              (e, idx) => {
                return <Star key={idx} className={" text-yellow-400"} />;
              },
            )}
            <span className="mx-0.5">{ratingsAverage}</span>
            <span>({ratingsQuantity})</span>
          </h3>
          <div className="my-2 flex items-center justify-between">
            <h3>
              {!priceAfterDiscount ? (
                <span className="text-main-color font-bold text-lg">
                  {price}
                </span>
              ) : (
                <span className="text-lg">
                  <span className="text-main-color font-bold">
                    {priceAfterDiscount}
                  </span>
                  <span className="line-through mx-2">{price}</span>
                </span>
              )}
            </h3>
            <AddProductToCart id={_id} />
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
