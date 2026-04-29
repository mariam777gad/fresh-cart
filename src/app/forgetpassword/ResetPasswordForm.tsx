"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Eye, EyeOff } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { handelResetPassword } from "./ForgetPassword.action";
import { ForgetPasswordData } from "./ForgetPassword.interface";
import { FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ResetPasswordSchema } from "./Forgetpassword.schema";
import { toast } from "sonner";

export default function ResetPasswordForm({ email }: ForgetPasswordData) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { handleSubmit, register, control } = useForm({
    defaultValues: { email: email, newPassword: "", confirmPassword: "" },
    resolver: zodResolver(ResetPasswordSchema),
  });

  async function onSubmit(data: any) {
    const finalData = { ...data, email: email };
    // const res = await handelResetPassword(finalData);
    // if (res.token) {
    //   localStorage.setItem("userToken", res.token);

    //   router.push("/login");
    // } else {
    //   console.error("Error resetting password:", res.message);
    // }
    // console.log("Response:", res);

    toast.promise(handelResetPassword(finalData), {
      loading: "Loading...",
      success: ({ token }) => {
        if (token) {
          localStorage.setItem("userToken", token);

          router.push("/login");
          return 'success you can login now';
        } else {
          return "somthing went wrong , try again later";
        }
        // return token;
      },
      error:
        "There was an error processing reset your password. Please try again.",
    });
  }

  return (
    <div className="w-full space-y-6">
      <div className="text-center">
        <h1 className="text-[22px] font-bold text-[#212529]">
          Set New Password
        </h1>
        <p className="text-[#6c757d] text-sm mt-2">
          Your new password must be different from previous ones.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <div className="relative">
            {/* <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" /> */}
            <Controller
              name="newPassword"
              control={control}
              render={({ field, fieldState }) => (
                <FieldContent data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="flex justify-between items-center font-semibold text-gray-700"
                  >
                    Confirm Password
                  </FieldLabel>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 " />
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="••••••••"
                      autoComplete="off"
                      type={showPassword ? "text" : "password"}
                      className="px-10 py-6 border-2 border-gray-200 rounded-xl focus-visible:ring-main-color"
                    />
                  </div>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </FieldContent>
              )}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field, fieldState }) => (
              <FieldContent data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="flex justify-between items-center font-semibold text-gray-700"
                >
                  Confirm Password
                </FieldLabel>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 " />
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="••••••••"
                    autoComplete="off"
                    type={showPassword ? "text" : "password"}
                    className="px-10 py-6 border-2 border-gray-200 rounded-xl focus-visible:ring-main-color"
                  />
                </div>

                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </FieldContent>
            )}
          />
          {/* <label className="text-[13px] font-medium text-gray-700">
            Confirm Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="password"
              className="pl-10 h-12 bg-gray-50/50 border-2 border-gray-200 rounded-xl focus-visible:ring-[#16A34A]"
              placeholder="••••••••"
            />
          </div> */}
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-[#16A34A] hover:bg-[#15803D] text-white font-medium rounded-xl mt-4"
        >
          Update Password
        </Button>
      </form>
    </div>
  );
}
