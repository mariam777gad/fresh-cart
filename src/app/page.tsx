import ProductCard from "@/components/ProductCard/ProductCard";
import { getAllProducts } from "./home.sevices";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import { lazy, Suspense } from "react";
import CategorySlider from "@/components/CategorySlider/CategorySlider";
import Banner from "@/components/Banner/Banner";
import  FeaturesBar  from "../components/FeatureBar/FeatureBar";
import Promotion from "@/components/Promotion/Promotion";

export default async function Home() {
  const allProducts = await getAllProducts();
  // console.log(allProducts);

  const data = lazy(() => import("@/components/CategorySlider/CategorySlider"));

  return (
    <div>
      <HomeSlider />
      <FeaturesBar/>
      <Suspense
        fallback={
          <h1 className="bg-main-color text-white h-50 my-10 flex justify-center items-center font-bold text-3xl rounded-2xl ">
            loading......
          </h1>
        }
      >
        <CategorySlider />
      </Suspense>
    
      <Banner/>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-5.5 container mx-auto">
        {allProducts.map((e) => {
          return <ProductCard key={e.id} prod={e} />;
        })}
      </div>
        <Promotion/>
    </div>
  );
}
