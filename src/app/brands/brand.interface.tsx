export interface allBrandResponse {
  results: number;
  metadata: Metadata;
  data: allBrandsData[];
}

export interface Metadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number;
}

export interface allBrandsData {
  _id: string;
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}


export interface specificBrandResponse {
  data: Data
}

export interface Data {
  _id: string
  name: string
  slug: string
  image: string
  createdAt: string
  updatedAt: string
  __v: number
}