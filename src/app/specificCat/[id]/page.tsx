import { ChevronLeft, Folder, Laptop, PackageOpen } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  getAllSubCategories,
  getSpecificCategory,
} from "./spacificCat.services";
import { Button } from "@/components/ui/button";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const categoryData = await getSpecificCategory(id);
  //console.log(categoryData);

  const subCategories = await getAllSubCategories();
  //console.log(subCategories);


  

  return (
    <div className="min-h-screen bg-[#FBFCFD]">
      <div className="bg-gradient-to-r from-[#12A54A] via-[#00CB54] to-[#04DE71] mt-27 text-white py-15">
        <div className="container mx-auto px-4">
          <nav className="flex mb-4 text-sm opacity-90" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white text-gray-100">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/category" className="hover:text-white text-gray-100">
              Categories
            </Link>

            <span className="mx-2">/</span>
            <span className="font-medium">{categoryData.name}</span>
          </nav>

          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm w-15">
              <img src={categoryData.image} alt={categoryData.name} />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{categoryData.name}</h1>
              <p className="opacity-90">
                Choose a subcategory to browse products
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link
          href="/category"
          className="flex w-fit hover:text-[#16A34A] items-center text-gray-600  mb-6 transition-colors"
        >
          <ChevronLeft size={20} />
          Back to Categories
        </Link>
        {subCategories.length > 0 && (
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            {subCategories.length} Subcategories in {categoryData.name}
          </h2>
        )}

        {subCategories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {subCategories.map((sub) => (
              <Link href={`/subCategories/${sub._id}`} key={sub.name}>
                <Card className="border-none shadow-sm hover:shadow-md transition-shadow  bg-white">
                  <CardContent className="p-6 flex flex-col items-start  text-start space-y-4">
                    <div className="bg-[#DCFCE7] p-3 rounded-full">
                      <Folder
                        className="text-[#16A34A] fill-[#16A34A]/10"
                        size={32}
                      />
                    </div>
                    <span className="font-bold text-gray-900 text-lg">
                      {sub.name}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
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
              No Subcategories Found
            </h3>
            <p className="text-gray-500 mb-8 max-w-xs">
              This category doesn't have any subcategories yet.
            </p>

            <Link href="/shop">
              {" "}
              <Button className="bg-[#16A34A] hover:bg-[#15803D] text-white px-8 py-6 text-base rounded-md transition-colors">
                View All Products in {categoryData.name}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
