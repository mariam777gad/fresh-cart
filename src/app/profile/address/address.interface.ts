export interface AddressInputs {
  name: string;
  details: string;
  phone: string;
  city: string;
}
/* add address */
export interface AddressResponse {
  status: "success" | "error";
  message: string;
  data: Address[];
}
export interface Address {
  _id: string;
  name: string;
  details: string;
  phone: string;
  city: string;
}

/* get user address */
export interface GetAddressesResponse {
  status: "success" | "error";
  results: number;
  data: Address[];
}

export interface AddAddressResponse {
  status: "success" | "error";
  message: string;
  data: Address[];
}

/* remove address */
export interface DeleteAddressResponse {
  status: 'success' | 'error';
  message: string;
  data: Address[];
}

/* update */
export interface UpdateAddressResponse {
  status: 'success' | 'error';
  message?: string;
  data: Address[]; 
}

export interface SingleAddressResponse {
  status: 'success';
  data: Address;
}