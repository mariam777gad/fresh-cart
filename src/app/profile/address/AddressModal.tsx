"use client";
import { FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { handelAddAddress, handelRemoveAddress } from "./address.action";
import { Address, AddressInputs, AddressResponse } from "./address.interface";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddressSchema } from "./address.schema";

export default function AddAddressModal({
  onClose,
  onSuccess,
  addressToEdit,
}: {
  onClose: () => void;
  onSuccess: (response: AddressResponse) => void;
  addressToEdit: Address | null;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      details: "",
      phone: "",
      city: "",
    },
    mode: "all",
    resolver: zodResolver(AddressSchema),
  });

  useEffect(() => {
    if (addressToEdit) reset(addressToEdit);
  }, [addressToEdit, reset]);

  async function onSubmit(data: AddressInputs) {
    setIsSubmitting(true);
    try {
      if (addressToEdit) {
        await handelRemoveAddress(addressToEdit._id);
      }

      const response = await handelAddAddress(data);

      if (response.status === "success") {
        onSuccess(response);
        onClose();
      }
    } catch (error) {
      console.error("Operation failed", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 p-2 bg-[#F3F4F6] hover:bg-[#E5E7EB] rounded-sm text-gray-400 transition-colors"
        >
          <X size={20} />
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-8">
            Add New Address
          </h2>

          <div className="space-y-5">
            <div className="space-y-2">
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <FieldContent data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className="flex justify-between items-center font-medium text-gray-700"
                    >
                      Address Name
                    </FieldLabel>
                    <div>
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="e.g.Home,Office"
                        autoComplete="off"
                        type="text"
                        className="px-4 py-6 bg-white border border-gray-200 rounded-xl focus-visible:ring-main-color"
                      />
                    </div>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </FieldContent>
                )}
              />
            </div>

            <div className="space-y-2">
              <Controller
                name="details"
                control={control}
                render={({ field, fieldState }) => (
                  <FieldContent data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className="flex justify-between items-center font-medium text-gray-700"
                    >
                      Full Address
                    </FieldLabel>
                    <div>
                      <textarea
                        {...register("details", {
                          required: "Details are required",
                        })}
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Street,building,apartment"
                        className="w-full h-20 px-4 py-3 bg-white border border-gray-200   rounded-xl focus:ring-2 focus:ring-[#10b981] outline-none resize-none"
                      />
                    </div>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </FieldContent>
                )}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Controller
                  name="phone"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FieldContent data-invalid={fieldState.invalid}>
                      <FieldLabel
                        htmlFor={field.name}
                        className="flex justify-between items-center font-medium text-gray-700"
                      >
                        Phone Number
                      </FieldLabel>
                      <div>
                        <Input
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="01xxxxxxxxxx"
                          autoComplete="off"
                          type="tel"
                          className="px-4 py-6 bg-white border border-gray-200 rounded-xl focus-visible:ring-main-color"
                        />
                      </div>

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldContent>
                  )}
                />
              </div>

              <div className="space-y-2">
                <Controller
                  name="city"
                  control={control}
                  render={({ field, fieldState }) => (
                    <FieldContent data-invalid={fieldState.invalid}>
                      <FieldLabel
                        htmlFor={field.name}
                        className="flex justify-between items-center font-medium text-gray-700"
                      >
                        City
                      </FieldLabel>
                      <div>
                        <Input
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Cairo"
                          autoComplete="off"
                          type="text"
                          className="px-4 py-6 bg-white border border-gray-200 rounded-xl focus-visible:ring-main-color"
                        />
                      </div>

                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </FieldContent>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-10">
            <button
              onClick={onClose}
              className="bg-[#F3F4F6] hover:bg-[#E5E7EB] flex-1 py-3.5  rounded-xl font-bold text-gray-500 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3.5 bg-[#16A34A] hover:bg-[#15803D] rounded-xl font-bold text-white shadow-lg shadow-green-100 transition-all active:scale-95"
            >
              Add Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
