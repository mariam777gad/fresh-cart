"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, Lock } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { changePasswordSchema } from "./PasswordForm.schema";
import { FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import { ChangePassword } from "./PasswordForm.interface";
import { UpdateLoggedUserPassword } from "./PasswordForm.action";
import { useState } from "react";

export default function PasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const { handleSubmit, control } = useForm({
    defaultValues: {
      currentPassword: "",
      password: "",
      rePassword: "",
    },
    mode: "all",
    resolver: zodResolver(changePasswordSchema),
  });
  async function userNsewPassword(data: ChangePassword) {
    //console.log(data);
    const res = await UpdateLoggedUserPassword(data);
    // console.log(res);
    if (res) {
      setNewPassword(res);
    }
  }

  return (
    <form onSubmit={handleSubmit(userNsewPassword)}>
      {newPassword ===
        "User recently changed password! Please login again." && (
        <div className="bg-[#FEF2F2] text-[#C31B1D] font-medium capitalize w-220 rounded-lg mb-5 py-3 px-4">
          {newPassword}
        </div>
      )}
      {newPassword === "Invalid Token. please login again" && (
        <div className="bg-[#FEF2F2] text-[#C31B1D] font-medium capitalize w-220 rounded-lg mb-5 py-3 px-4">
          {newPassword}
        </div>
      )}
      {newPassword === "success" && (
        <div className="bg-[#F0FDF4] text-[#278236] font-medium capitalize w-220 rounded-lg mb-5 py-3 px-4">
          Password changed successfully
        </div>
      )}

      <div className="space-y-2 relative w-4xl">
        <div className="relative">
          <Controller
            name="currentPassword"
            control={control}
            render={({ field, fieldState }) => (
              <FieldContent data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="flex justify-between items-center font-medium text-gray-700 mb-2"
                >
                  Current Password
                </FieldLabel>
                <div>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your current password"
                    autoComplete="off"
                    type="password"
                    className="px-4 py-6 w-220 bg-white border border-gray-200 rounded-xl focus-visible:ring-main-color"
                  />
                </div>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </FieldContent>
            )}
          />
          <Eye className="absolute right-10 top-12 text-gray-300" size={18} />
        </div>
      </div>

      <div className="space-y-2 relative w-4xl">
        <div className="relative ">
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <FieldContent data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="flex justify-between items-center font-medium text-gray-700 mb-2  mt-5"
                >
                  New Password
                </FieldLabel>
                <div>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your new password"
                    autoComplete="off"
                    type="password"
                    className="px-4 py-6 w-220 bg-white border border-gray-200 rounded-xl focus-visible:ring-main-color"
                  />
                </div>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </FieldContent>
            )}
          />

          <Eye className="absolute right-10 top-16 text-gray-300" size={18} />
          <p className="text-xs mb-6 text-gray-400">
            Must be at least 6 characters
          </p>
        </div>
      </div>

      <div className="space-y-2 relative w-4xl">
        <div className="relative">
          <Controller
            name="rePassword"
            control={control}
            render={({ field, fieldState }) => (
              <FieldContent data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="flex justify-between items-center font-medium text-gray-700 mb-2"
                >
                  Confirm New Password
                </FieldLabel>
                <div>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Confirm your new password"
                    autoComplete="off"
                    type="password"
                    className="px-4 py-6 w-220 bg-white border border-gray-200 rounded-xl focus-visible:ring-main-color"
                  />
                </div>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </FieldContent>
            )}
          />

          <Eye className="absolute right-10 top-12 text-gray-300" size={18} />
        </div>
      </div>

      <Button
        type="submit"
        className="bg-[#E17100] hover:bg-[#BB4D00] text-base font-semibold rounded-xl h-12 px-8 gap-2 mt-6 "
      >
        <Lock />
        Change Password
      </Button>
    </form>
  );
}
