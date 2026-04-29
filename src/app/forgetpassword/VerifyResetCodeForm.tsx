
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KeyRound, ChevronLeft } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { handelVerifyResetCode } from "./ForgetPassword.action";
import { FieldContent, FieldError, FieldLabel } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { VerifyResetCodeSchema } from "./Forgetpassword.schema";
import { toast } from "sonner";

interface Props {
  email: string;
  onNext: () => void;
}

export default function VerifyResetCodeForm({ email, onNext }: Props) {
  const { handleSubmit, control } = useForm({
    defaultValues: { resetCode: "" },
    resolver:zodResolver(VerifyResetCodeSchema)
  });

  async function onSubmit(data: { resetCode: string }) {

    // const res = await handelVerifyResetCode(data);
    // console.log(res);
//{ statusMsg: 'fail', message: 'Reset code is invalid or has expired' }
        toast.promise(handelVerifyResetCode(data), {
      loading: "Loading...",
      success: ({status ,message}) => {
        if(status){
          onNext();
        return status;
        }else{
          return message
        }
        
      },
      error: "Not your Code. Please try again.",
    });

    
  }

  return (
    <div className="w-full space-y-6">
      <div className="text-center">
        <h1 className="text-[22px] font-bold text-[#212529]">
          Check Your Email
        </h1>
        <p className="text-[#6c757d] text-sm mt-2 leading-relaxed">
          We've sent a 6-digit verification code to <br />
          <span className="font-bold text-gray-800">{email}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <div className="relative">
            {/* <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 z-10" /> */}
            <Controller
              name="resetCode"
              control={control}
              render={({ field, fieldState }) => (
                <FieldContent data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="flex justify-between items-center font-semibold text-gray-700"
                  >
                    Verification Code
                  </FieldLabel>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 " />
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter 6-digit code"
                      autoComplete="off"
                      type="password"
                      maxLength={6}
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
          className="w-full h-12 bg-[#16A34A] hover:bg-[#15803D] text-white font-medium rounded-xl"
        >
          Verify Code
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Didn't receive the code?{" "}
            <button
              type="button"
              className="text-[#16A34A] font-bold hover:underline"
            >
              Resend
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
