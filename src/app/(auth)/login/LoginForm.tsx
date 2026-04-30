"use client";
import AppButton from "@/components/shared/AppButton/AppButton";
import { FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { loginSchema } from "./login.schema";
import handelUserLogin from "./login.services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Eye, Facebook, Lock, Mail } from "lucide-react";
import { LoginDataType } from "./login.interface";

export default function LoginForm() {
  const router = useRouter();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
    resolver: zodResolver(loginSchema),
  });

  async function hamadaLogin(data: LoginDataType) {
    const res = await signIn("credentials", { redirect: false, ...data });

    if (res?.ok) {
      toast.promise(handelUserLogin(data), {
        loading: "Loading....",
        position: "top-center",
        success: (x) => {
          //router.push("/");
          window.location.href = "/";
          return x;
        },
      });
    } else {
      toast.error("email or password is error", {
        duration: 3000,
        position: "top-center",
      });
    }
  }
  return (
    <>
      <div className="space-y-4">
        <Button
          onClick={(_) => signIn("google", { callbackUrl: "/" })}
          variant="outline"
          className="w-full mb-1.5mb-3 mt-1 rounded-lg text-base bg-white text-[#364153] py-6 flex items-center justify-center gap-3  font-medium border-2 border-gray-200"
        >
          <span className="text-xl text-[#E7000B] font-bold">G</span>
          Continue with Google
        </Button>
        <Button
          onClick={() => signIn("facebook", { callbackUrl: "/" })}
          variant="outline"
          className="w-full mb-1.5mb-3 mt-1 rounded-lg text-base bg-white text-[#364153] py-6  flex items-center justify-center gap-3  font-medium border-2 border-gray-200"
        >
          <Facebook className="w-5 h-5 text-[#1877F2]" fill="currentColor" />
          Continue with Facebook
        </Button>
      </div>
      <div className="relative flex items-center">
        <div className="grow border-t border-gray-200"></div>
        <span className="px-4 text-[#6A7282] text-xs font-semibold uppercase ">
          or continue with email
        </span>
        <div className="grow border-t border-gray-200"></div>
      </div>
      <form className="text-center" onSubmit={handleSubmit(hamadaLogin)}>
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
                  placeholder="Enter your email"
                  autoComplete="off"
                  type="email"
                  className="px-10 py-6 border-2 border-gray-200 rounded-xl focus-visible:ring-main-color"
                />
              </div>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <FieldContent data-invalid={fieldState.invalid} className="mt-4">
              <div className="flex items-center justify-between">
                <FieldLabel
                  htmlFor={field.name}
                  className="flex justify-between items-center font-semibold text-gray-700"
                >
                  Password
                </FieldLabel>
                <Link
                  href="/forgetpassword"
                  className="text-sm font-medium text-[#2CA95B] hover:text-[#15803D] transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your password"
                  autoComplete="off"
                  type="password"
                  className="px-10 py-6 border-2 border-gray-200 rounded-xl focus-visible:ring-main-color"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <Eye size={18} />
                </button>
              </div>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </FieldContent>
          )}
        />

        <div className="flex items-center gap-3 pt-5 pb-2 mt-2">
          <input
            required
            type="checkbox"
            id="terms"
            className=" w-4 h-5 rounded border-gray-300 text-[#2bb673] focus:ring-[#2bb673] cursor-pointer"
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium text-gray-600  cursor-pointer"
          >
            Keep me signed in
          </label>
        </div>

        <AppButton
          type="submit"
          className="bg-main-color text-white w-full mt-4 px-10 py-6 text-lg font-bold border-gray-200 rounded-xl "
        >
          Sign In
        </AppButton>
      </form>
    </>
  );
}
