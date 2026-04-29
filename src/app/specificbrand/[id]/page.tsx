import {
  getAllProductsBrands,
  getSpecificBrand,
} from "@/app/brands/brands.service";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Filter, Folder, PackageOpen, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const specificBrand = await getSpecificBrand(id);
  //console.log(specificBrand);
  const products = await getAllProductsBrands(id);
  //console.log(products);

  return (
    <div className="min-h-screen bg-gray-50/50">
      {" "}
      <div className="bg-gradient-to-r from-[#12A54A] via-[#00CB54] to-[#04DE71] mt-27 text-white py-15">
        <div className="container mx-auto px-4">
          <nav className="flex mb-4 text-sm opacity-90" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white text-gray-100">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/brands" className="hover:text-white text-gray-100">
              Brands
            </Link>

            <span className="mx-2">/</span>
            <span className="font-medium">{specificBrand.name}</span>
          </nav>

          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm w-18">
              <Image
                width={60}
                height={60}
                src={specificBrand.image}
                alt={specificBrand.name}
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{specificBrand.name}</h1>
              <p className="opacity-90">Browse {specificBrand.name} products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-6 ">
        <div className="flex items-center gap-4">
          {" "}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Filter size={16} />
            <span>Active Filters:</span>
          </div>
          <Link href="/shop">
            {" "}
            <Badge
              variant="secondary"
              className="bg-[#EDE9FE] text-[#7A08E7] text-sm font-medium hover:bg-[#DDD6FF] gap-1 px-3 py-3"
            >
              <Folder size={14} className="mr-1" />
              {specificBrand.name}
              <X size={14} className="ml-2 cursor-pointer" />
            </Badge>
          </Link>
          <Link href="/shop">
            {" "}
            <button className="text-sm text-gray-600 hover:underline">
              Clear all
            </button>
          </Link>
        </div>
        <p className="mt-5 text-sm text-gray-600">
          Showing {products.length} products
        </p>
      </div>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 mb-8 mt-5.5 container mx-auto">
          {products.map((e) => {
            return <ProductCard key={e.id} prod={e} />;
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center border-t border-gray-100">
          <div className="bg-gray-100 p-6 rounded-full mb-6">
            <PackageOpen
              size={48}
              className="text-gray-400"
              strokeWidth={1.5}
            />
          </div>

          <h3 className="text-xl font-bold text-gray-800 mb-2">
            No Products Found
          </h3>
          <p className="text-gray-500 mb-8 max-w-xs">
            No products match your current filters.
          </p>

          <Button className="bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-6 text-base rounded-md transition-colors">
            View All Products
          </Button>
        </div>
      )}
    </div>
  );
}
