'use server'
import { getUserToken } from "@/app/utils";
import { Address, AddressInputs, AddressResponse, DeleteAddressResponse, GetAddressesResponse, SingleAddressResponse } from "./address.interface";

export async function handelAddAddress(data:AddressInputs) {
  const { token, userId } = await getUserToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/addresses`,
    {
      method: "POST",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  const resdata:AddressResponse = await response.json();
  //console.log(resdata);
  return resdata
  
}
export async function handelGetLoggedUserAddresses(): Promise<Address[]> {
  const { token, userId } = await getUserToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/addresses`,
    {
      method: "Get",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
    },
  );
  const data:GetAddressesResponse = await response.json();
  //console.log(data);
  return data.data
}

export async function handelRemoveAddress(id:string):Promise<DeleteAddressResponse>  {
  const { token, userId } = await getUserToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/addresses/${id}`,
    {
      method: "DELETE",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
    },
  );
  const data:DeleteAddressResponse = await response.json();
  //console.log(data);
  return data
}


export async function handelSpacificAddress(id:string):Promise<SingleAddressResponse>  {
  const { token, userId } = await getUserToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/addresses/${id}`,
    {
      method: "Get",
      headers: {
        token: token as string,
        "Content-Type": "application/json",
      },
    },
  );
  const data = await response.json();
  //console.log(data);
  return data
}


