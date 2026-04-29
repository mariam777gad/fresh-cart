/* Specific Category */
export interface SpacificCategoryResponse {
  data: SpacificCategoryData;
}

export interface SpacificCategoryData {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
/*All Subcategory  */

export interface SubCatetegoryResponse {
  results: number;
  metadata: Metadata;
  data: SubCatetegoryData[];
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}

export interface SubCatetegoryData {
  _id: string;
  name: string;
  slug: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}
/* specific subCat */
export interface SpecificSubCategories {
  data: Data;
}

export interface Data {
  _id: string;
  name: string;
  slug: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
/*  all products by category id */

export interface ApiResponse {
  results: number;
  metadata: MetadataAllProd;
  data: Product[];
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image?: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image?: string;
}

export interface MetadataAllProd {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
}

export interface Product {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  quantity?: number;
  price: number;
  priceAfterDiscount?: number;
  imageCover: string;
  images: string[];
  category: Category;
  brand: Brand;
  subcategory: { _id: string; name: string; slug: string; category: string }[];
  ratingsAverage: number;
  ratingsQuantity: number;
  sold?: number;
  createdAt: string;
  updatedAt: string;
}
