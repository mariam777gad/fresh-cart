"use client";
import { Button } from "@/components/ui/button";
import { FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ShieldCheck } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { LoggedUserData } from "./InformationForm.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateUserDataSchema } from "./InformationForm.schema";
import { UpdateLoggedUserData } from "./InformationForm.action";
import { useState } from "react";

export default function InformationForm() {
  const [newUserData, setNewUserData] = useState("");
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
    mode: "all",
    resolver: zodResolver(UpdateUserDataSchema),
  });
  async function UpdateUserData(data: LoggedUserData) {
    //console.log(data);
    const res = await UpdateLoggedUserData(data);
    setNewUserData(res.message);
  }
  return (
    <form onSubmit={handleSubmit(UpdateUserData)}>
      {newUserData === "Failed to update profile" && (
        <div className="bg-[#FEF2F2] text-[#C31B1D] font-medium capitalize w-220 rounded-lg mb-5 py-3 px-4">
          {newUserData}
        </div>
      )}
      {newUserData === "success" && (
        <div className="bg-[#F0FDF4] text-[#278236] font-medium capitalize w-220 rounded-lg mb-5 py-3 px-4">
          Profile updated successfully
        </div>
      )}
      <div className="space-y-2">
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <FieldContent data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="flex justify-between items-center font-medium text-gray-700 mb-2"
              >
                Full Name
              </FieldLabel>
              <div>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Scott Hatfield"
                  autoComplete="off"
                  type="text"
                  className="px-4 py-6 mb-4 w-220 bg-white border border-gray-200 rounded-xl focus-visible:ring-main-color"
                />
              </div>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          )}
        />
      </div>

      <div className="space-y-2">
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <FieldContent data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="flex justify-between items-center font-medium text-gray-700 mb-2"
              >
                Email Address
              </FieldLabel>
              <div>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your email"
                  autoComplete="off"
                  type="email"
                  className="px-4 py-6 mb-4 w-220 bg-white border border-gray-200 rounded-xl focus-visible:ring-main-color"
                />
              </div>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          )}
        />
      </div>

      <div className="space-y-2">
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState }) => (
            <FieldContent data-invalid={fieldState.invalid}>
              <FieldLabel
                htmlFor={field.name}
                className="flex justify-between items-center font-medium text-gray-700 mb-2"
              >
                Phone Number
              </FieldLabel>
              <div>
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="01xxxxxxxxx"
                  autoComplete="off"
                  type="tel"
                  className="px-4 py-6 w-220 bg-white border border-gray-200 rounded-xl focus-visible:ring-main-color"
                />
              </div>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          )}
        />
      </div>

      <Button
        type="submit"
        className="bg-[#16A34A] hover:bg-[#15803D] text-base  mt-8 rounded-xl h-12 px-8 font-bold gap-2"
      >
        <ShieldCheck size={18} /> Save Changes
      </Button>
    </form>
  );
}
