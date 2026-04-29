"use client";
import { useState, useEffect } from "react";
import {
  MapPin,
  Plus,
  Phone,
  Pencil,
  Trash2,
  BuildingIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AddAddressModal from "./AddressModal";
import {
  handelGetLoggedUserAddresses,
  handelRemoveAddress,
} from "./address.action";
import { Address } from "./address.interface";

export default function AddressPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null);

  useEffect(() => {
    async function loadAddresses() {
      const res = await handelGetLoggedUserAddresses();

      setAddresses(res);
    }
    loadAddresses();
  }, []);

  const handleUpdateSuccess = (response: any) => {
    if (response.status === "success") {
      setAddresses(response.data);
    }
  };

  async function removeAddress(id: string) {
    const res = await handelRemoveAddress(id);
    if (res.status === "success") {
      setAddresses(res.data);
    }
  }

  function editModal(address: Address) {
    setSelectedAddress(address);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedAddress(null);
  }

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800">My Addresses</h3>
          <p className="text-sm font-medium text-[#7D7282]">
            Manage your saved delivery addresses
          </p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#16A34A] hover:bg-[#15803D] text-base py-6 px-5 rounded-xl font-semibold"
        >
          <Plus size={18} /> Add Address
        </Button>
      </div>

      {addresses.length > 0 ? (
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
          {addresses.map((address) => (
            <div
              key={address._id}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex justify-between items-start"
            >
              <div className="flex gap-4">
                <div className="bg-green-50 p-3 rounded-xl h-fit">
                  <MapPin className="text-[#10b981] w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-bold text-gray-800 text-base">
                    {address.name}
                  </h3>
                  <p className="text-[#4A5565] font-medium text-sm">
                    {address.details}
                  </p>
                  <div className="flex flex-col gap-3 text-gray-500 text-sm pt-1">
                    <span className="flex items-center gap-1 font-medium">
                      <Phone
                        size={14}
                        className="text-[#6A7282] fill-[#6A7282]"
                      />{" "}
                      {address.phone}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <BuildingIcon size={14} className="text-[#6A7282]" />{" "}
                      {address.city}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => editModal(address)}
                  className="p-2 bg-[#F3F4F6] hover:bg-[#DCFCE7] hover:text-[#16A34A] rounded-lg text-gray-400"
                >
                  <Pencil size={18} className="text-[#4A5565] " />
                </button>
                <button
                  onClick={() => removeAddress(address._id)}
                  className="p-2 bg-[#F3F4F6] hover:bg-red-50 rounded-lg hover:text-red-400"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="min-h-100 bg-white rounded-2xl flex flex-col items-center justify-center p-8 text-center border border-gray-50 shadow-sm">
          <div className="bg-[#F3F4F6] p-4 rounded-full">
            <MapPin size={48} className="text-[#99A1AF] " />
          </div>

          <p className=" my-3 text-lg font-bold text-[#101828]">
            No Addresses Yet.
          </p>
          <p className="w-100 font-medium text-[#6A7292] text-base">
            Add your first delivery address to make checkout faster and easier.
          </p>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#16A34A] hover:bg-[#15803D] mt-4 py-6 px-8 text-base font-semibold h-12 rounded-xl"
          >
            <Plus size={18} />
            Add Your First Address
          </Button>
        </div>
      )}

      {isModalOpen && (
        <AddAddressModal
          addressToEdit={selectedAddress}
          onClose={closeModal}
          onSuccess={handleUpdateSuccess}
        />
      )}
    </>
  );
}
