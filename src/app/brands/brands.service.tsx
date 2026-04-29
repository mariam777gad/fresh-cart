import { AllProductsResponse } from "../home.interface";
import {
  allBrandResponse,
  allBrandsData,
  specificBrandResponse,
} from "./brand.interface";

export async function getAllBrands(): Promise<allBrandsData[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/brands`,
  );
  const data: allBrandResponse = await response.json();
  // console.log(data);
  return data.data;
}

export async function getSpecificBrand(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/brands/${id}`,
  );
  const data: specificBrandResponse = await response.json();
  // console.log(data);
  return data.data;
}

export async function getAllProductsBrands(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products?brand=${id}`,
  );
  const data: AllProductsResponse = await response.json();
  //console.log(data);

  return data.data;
}
