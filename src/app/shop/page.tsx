import ProductCard from "@/components/ProductCard/ProductCard";
import { PackageOpen } from "lucide-react";
import { getAllProducts } from "../home.sevices";

import Link from "next/link";


export default async function ProductsPage() {
  const allProducts = await getAllProducts();
  // console.log(allProducts);

  return (
    <div className="bg-gray-50 mt-18 min-h-screen">
      <div className="bg-gradient-to-r from-[#12A54A] via-[#00CB54] to-[#04DE71]  w-full text-white py-15 px-30  mt-27 ">
        <nav className="flex mb-4 text-sm font-medium" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-white/60">/</span>
                <span className="text-white font-semibold">All Products</span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex items-center gap-6">
          <div className="bg-white/20 p-4 rounded-xl">
            <PackageOpen  size={35}/>
          </div>
          <div>
            <h1 className="text-4xl font-bold">All Products</h1>
            <p className="text-white/80">
              Explore our complete product collection
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {allProducts?.length} products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {allProducts?.map((item) => (
            <ProductCard key={item._id} prod={item} />
          ))}
        </div>
      </div>


    </div>
  );
}
