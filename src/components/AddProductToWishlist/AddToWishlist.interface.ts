export type productWishlistId = {
  productId: string;
};

export interface AddWishlistResponse {
  status: string;
  message: string;
  data: string[];
}

/* get user wishlist */
export interface GetWishlistResponse {
  status: string;
  count: number;
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

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface Product {
  _id: string;
  id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  priceAfterDiscount?: number;
  imageCover: string;
  images: string[];
  category: Category;
  brand: Brand;
  subcategory: Subcategory[];
  ratingsAverage: number;
  ratingsQuantity: number;
  sold: number;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}
/* remove products response */
export interface WishlistDeletedProduct {
  status: string
  message: string
  data: string[]
}