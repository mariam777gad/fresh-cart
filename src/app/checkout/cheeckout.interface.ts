export type ShippingAddressType = {
  ShippingAddress: UserShippingAddress;
};
export type UserShippingAddress = {
  city: string;
  details: string;
  phone: string;
  postalCode?: string;
};
/*  cash Payment */

export interface OrderResponse {
  status: string;
  message: string;
  user: UserSummary;
  pricing: Pricing;
  data: OrderData;
}

interface UserSummary {
  id: string;
  name: string;
  email: string;
}

interface Pricing {
  cartPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
}

interface OrderData {
  taxPrice: number;
  shippingPrice: number;
  totalOrderPrice: number;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  _id: string;
  user: DetailedUser;
  cartItems: CartItem[];
  createdAt: string;
  updatedAt: string;
  id: number;
  __v: number;
}

interface DetailedUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
}

interface CartItem {
  count: number;
  _id: string;
  product: Product;
  price: number;
}

interface Product {
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  imageCover: string;
  category: Category[];
  brand: Brand[];
  ratingsAverage: number;
  id: string;
}

interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

interface Brand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

/*  online payment */

export interface OnlinePaymentResponse {
  status: string
  session: Session
}

export interface Session {
  url: string
  success_url: string
  cancel_url: string
}
