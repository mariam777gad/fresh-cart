"use client";
import AppButton from "@/components/shared/AppButton/AppButton";
import { FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./register.schema";
import { useRouter } from "next/navigation";
import { sendUserData } from "./register.action";
import { toast } from "sonner";
import { UserRoundPlus } from "lucide-react";

export default function RegisterForm() {
  const router = useRouter();
  const { handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    mode: "all",
    resolver: zodResolver(registerSchema),
  });
  async function UserRegister(data) {
    const response = await sendUserData(data);
    // console.log(response);
    if (response === "success") {
      toast.success("User Registered Successfully", {
        position: "top-center",
        duration: 3000,
      });
      router.push("/login");
    } else {
      toast.error(response, {
        position: "top-right",
        duration: 3000,
      });
    }
  }
  return (
    <form onSubmit={handleSubmit(UserRegister)}>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <FieldContent data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor={field.name}
              className="text-base text-[#364153]"
            >
              Name*
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="Ali"
              autoComplete="off"
              type="text"
              className="mb-3 mt-1 rounded-sm bg-white py-5 focus-visible:ring-main-color focus-visible:border-1-green-700 "
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <FieldContent data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor={field.name}
              className="text-base text-[#364153] mt-4"
            >
              Email*
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="ali@example.com"
              autoComplete="off"
              type="email"
              className="mb-1.5mb-3 mt-1 rounded-sm bg-white py-5 focus-visible:ring-main-color"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <FieldContent data-invalid={fieldState.invalid} className="mb-4">
            <FieldLabel
              htmlFor={field.name}
              className="text-base text-[#364153] mt-4"
            >
              Password*
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="create a strong password"
              autoComplete="off"
              type="password"
              className="mb-1.5mb-3 mt-1 rounded-sm bg-white py-5 focus-visible:ring-main-color"
            />
            <div className="flex items-center gap-2">
              <div className="h-1 flex-grow bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-red-400"></div>
              </div>
              <span className="text-[10px] text-gray-400 font-bold uppercase">
                Weak
              </span>
            </div>
            <p className="text-[11px] text-gray-400">
              Must be at least 8 characters with numbers and symbols
            </p>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
        )}
      />

      <Controller
        name="rePassword"
        control={control}
        render={({ field, fieldState }) => (
          <FieldContent data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor={field.name}
              className="text-base text-[#364153] mt-4"
            >
              Confirm Password*
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="confirm your password"
              autoComplete="off"
              type="password"
              className="mb-1.5mb-3 mt-1 rounded-sm bg-white py-5 focus-visible:ring-main-color"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field, fieldState }) => (
          <FieldContent data-invalid={fieldState.invalid}>
            <FieldLabel
              htmlFor={field.name}
              className="text-base text-[#364153] mt-4"
            >
              Phone Number*
            </FieldLabel>
            <Input
              {...field}
              id={field.name}
              aria-invalid={fieldState.invalid}
              placeholder="+1234 567 8900"
              autoComplete="off"
              type="tel"
              className="mb-1.5mb-3 mt-1 rounded-sm bg-white py-5 focus-visible:ring-main-color"
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </FieldContent>
        )}
      />
      <div className="flex items-center gap-4 pt-5 pb-2 ">
        <input
          required
          type="checkbox"
          id="terms"
          className="mt-1 w-4 h-5 rounded border-gray-300 text-[#2bb673] focus:ring-[#2bb673] cursor-pointer"
        />
        <label
          htmlFor="terms"
          className="text-base font-medium text-gray-600  cursor-pointer"
        >
          I agree to the{" "}
          <span className="text-[#2bb673] font-medium hover:underline">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-[#2bb673] font-medium hover:underline">
            Privacy Policy
          </span>{" "}
          *
        </label>
      </div>
      <AppButton
        type="submit"
        className="bg-main-color text-white rounded-lg w-full mt-5 mb-4 py-5 font-semibold text-base "
      >
        <span>
          <UserRoundPlus className="fill-white" />
        </span>
        Create My Account
      </AppButton>
    </form>
  );
}
