import {
  AllProductsData,
  AllProductsResponse,
  ProductDetailsResponse,
} from "./home.interface";

export async function getAllProducts(): Promise<AllProductsData[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products`,{
      cache:"force-cache"
    }
  );
  const data: AllProductsResponse = await response.json();
  // console.log(data);

  return data.data;
}

export async function getProductDetails(id: string): Promise<AllProductsData> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products/${id}`,
  );
  const data: ProductDetailsResponse = await response.json();
  // console.log(data);

  return data.data;
}
