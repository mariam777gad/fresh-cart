import { allCategoryData, allCategoryResponse } from "./category.interface";

export default async function getAllCategories():Promise<allCategoryData[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/categories`,
  );
  const data:allCategoryResponse = await response.json();
  // console.log(data);
  return data.data
}

