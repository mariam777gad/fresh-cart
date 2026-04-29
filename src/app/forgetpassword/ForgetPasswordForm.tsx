"use client";
import { Button } from "@/components/ui/button";
import { FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { ForgetPasswordSchema } from "./Forgetpassword.schema";
import { ForgetPasswordData } from "./ForgetPassword.interface";
import { handelForgetPasswordEmail } from "./ForgetPassword.action";
import { toast } from "sonner";
interface Props {
  onNext: (email: string) => void;
}

export default function ForgetPasswordForm({ onNext }: Props) {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "all",
    resolver: zodResolver(ForgetPasswordSchema),
  });

  async function handelForgetPassword(data: ForgetPasswordData) {
    //console.log(data);
    // const res=await handelForgetPasswordEmail(data)
    // console.log(res)

    toast.promise(handelForgetPasswordEmail(data), {
      loading: "Loading...",
      success: ({ message }) => {
        onNext(data.email);
        return message;
      },
      error: "There was an error process sending email. Please try again.",
    });

    // if (res?.statusMsg === "success") {
    //    onNext(data.email);
    // }
  }

  return (
    <form onSubmit={handleSubmit(handelForgetPassword)}>
      <div className="space-y-2">
        <div className="relative">
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <FieldContent data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="flex justify-between items-center font-semibold text-gray-700"
                >
                  Email Address
                </FieldLabel>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 " />
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email address"
                    autoComplete="off"
                    type="email"
                    className="px-10 py-6 border-2 border-gray-200 rounded-xl focus-visible:ring-main-color"
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

      <Button
        type="submit"
        className="w-full h-12 mt-5 bg-[#16A34A] hover:bg-[#15803D] text-white text-lg font-semibold py-6 rounded-lg transition-all"
      >
        Send Reset Code
      </Button>
    </form>
  );
}
