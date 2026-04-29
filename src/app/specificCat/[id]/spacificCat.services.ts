import { AllProductsResponse } from "@/app/home.interface";
import {
  ApiResponse,
  SpacificCategoryResponse,
  SpecificSubCategories,
  SubCatetegoryResponse,
} from "./spacificCat.interface";

export async function getSpecificCategory(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories/${id}`,
  );
  const data: SpacificCategoryResponse = await response.json();
  //   console.log(data);

  return data.data;
}

export async function getAllSubCategories() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/subcategories`,
  );
  const data: SubCatetegoryResponse = await response.json();
  //console.log(data);

  return data.data;
}

export async function getSpecificSubCategory(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/subcategories/${id}`,
  );
  const data: SpecificSubCategories = await response.json();
  //  console.log(data);

  return data.data;
}

export async function getAllSubCategoriesOnCategory(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories/${id}/subcategories`,
  );
  const data = await response.json();
 // console.log(data);

  //return data.data;
}

export async function getAllProductsOnsubCategory(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products?subcategory[in]=${id}`,
  );
  const data:AllProductsResponse = await response.json();
  //console.log(data);

  return data.data;
}

export async function getAllProductsOnCategory(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products?category=${id}`,
  );
  const data:ApiResponse= await response.json();
  //console.log(data);

  return data.data;
}