export interface allCategoryResponse {
  results: number;
  metadata: Metadata;
  data: allCategoryData[];
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
}

export interface allCategoryData {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
