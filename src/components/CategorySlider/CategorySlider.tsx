import getAllCategories from "@/app/category/category.services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function CategorySlider() {
  const allCategories = await getAllCategories();
  //console.log(allCategories);

  const categoryImgList = allCategories.map((e) => e.image);
  //console.log(categoryImgList);
  return (
    <section className=" container mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-8 bg-green-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-800">
            Shop By <span className="text-main-color">Category</span>
          </h2>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium text-main-color  ">
          <Link href="/category" className="flex items-center gap-1 text-md">
            View All Categories <ArrowRight strokeWidth={3} size={16} />
          </Link>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {allCategories.map((cat) => (
          <Link
            href={`specificCat/${cat._id}`}
            key={cat._id}
            className="cursor-pointer flex flex-col items-center "
          >
            <div className=" flex justify-center flex-col items-center  shadow-sm rounded-2xl w-50 py-6 h-50">
              <div className=" w-28 h-28  overflow-hidden ">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full rounded-full object-cover p-4"
                />
              </div>
              <span className="text-md font-semibold text-gray-800 ">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
