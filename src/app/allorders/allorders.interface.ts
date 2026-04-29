export type AllOrdersType = AllOrders[];

export interface AllOrders {
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  _id: string;
  user: User;
  cartItems: CartItem[];
  paidAt: string;
  createdAt: string;
  updatedAt: string;
  id: number;
  __v: number;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

export interface CartItem {
  count: number;
  _id: string;
  product: Product;
  price: number;
}

export interface Product {
  subcategory: Subcategory;
  ratingsQuantity: number;
  _id: string;
  title: string;
  imageCover: string;
  category: Category;
  brand: Brand;
  ratingsAverage: number;
  id: string;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
/* orders for Admines ///////////////////////*/
export interface Orders {
  id: number
  orderId: string
  totalOrderPrice: number
  taxPrice: number
  shippingPrice: number
  paymentMethodType: string
  isPaid: boolean
  isDelivered: boolean
  paidAt: string
  createdAt: string
  updatedAt: string
  user: User
  shippingAddress: ShippingAddress
  cartItems: OrdersCartItem[]
}

export interface User {
  _id: string
  name: string
  email: string
  phone: string
}

export interface ShippingAddress {
  details: string
  phone: string
  city: string
}

export interface OrdersCartItem {
  _id: string
  count: number
  price: number
  product: OrdersProduct
}

export interface OrdersProduct {
  _id: string
  title: string
  imageCover: string
  ratingsAverage: number
  ratingsQuantity: number
  category: OrdersCategory
  subcategory: OrdersSubcategory[]
  brand: Brand
}

export interface OrdersCategory {
  _id: string
  name: string
  slug: string
  image: string
}

export interface OrdersSubcategory {
  _id: string
  name: string
  slug: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
}
