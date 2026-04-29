"use client";

import { Lock, Mail, MoveLeft, ShieldCheck } from "lucide-react";
import ForgetPasswordForm from "./ForgetPasswordForm";
import Link from "next/link";
import { useState } from "react";
import VerifyResetCodeForm from "./VerifyResetCodeForm";
import ResetPasswordForm from "./ResetPasswordForm";

export default function PasswordWrapper() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  
  return (
    <div className="w-full max-w-4xl">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="text-3xl font-bold text-[#1E2939]">
          <span className="text-[#16A34A]">Fresh</span>
          Cart
        </span>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold text-[#1E2939]">Forgot Password?</h1>
        <p className="text-[#4A5565] font-medium text-base mt-3">
          No worries, we'll send you a reset code
        </p>
      </div>

      <div className="flex items-center justify-center w-full mb-10">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${step >= 1 ? "bg-[#16A34A] text-white" : "bg-[#F3F4F6] text-gray-300"}`}
        >
          <Mail className="w-4 h-4 text-white" />
        </div>
        <div
          className={`h-0.5 w-16 mx-2 ${step >= 2 ? "bg-[#16A34A]" : "bg-[#E5E7EB]"}`}
        ></div>
        <div
          className={`w-10 h-10 rounded-full border flex items-center justify-center ${step >= 2 ? "bg-[#16A34A] text-white" : "bg-[#F3F4F6] text-gray-300"}`}
        >
          <Lock className="w-4 h-4 text-gray-300" />
        </div>
        <div className={`h-0.5 w-16 mx-2 ${step >= 3 ? 'bg-[#16A34A]' : 'bg-[#E5E7EB]'}`}></div>
        <div className={`w-10 h-10 rounded-full border flex items-center justify-center ${step >= 3 ? 'bg-[#16A34A] text-white' : 'bg-[#F3F4F6] text-gray-300'}`}>
          <ShieldCheck className="w-4 h-4 text-gray-300" />
        </div>
      </div>

      <div className="space-y-5">
   
        {step === 1 && (
          <ForgetPasswordForm
            onNext={(enteredEmail) => {
              setEmail(enteredEmail); 
              setStep(2); 
            }}
          />
        )}

        {step === 2 && (
          <VerifyResetCodeForm
            email={email} 
            onNext={() => setStep(3)}
          />
        )}

        {step === 3 && (
          <ResetPasswordForm
            email={email} 
          />
        )}

        <div className="flex flex-col items-center text-center gap-4 pt-2">
          <Link
            href="/login"
            className="flex items-center gap-1 mb-6 text-sm font-medium text-[#16A34A] hover:text-[#15803D]"
          >
            <MoveLeft className="w-4 h-4" /> Back to Sign In
          </Link>
          <p className="text-base text-[#4A5565] font-medium w-full border-t border-gray-100 pt-6">
            Remember your password?{" "}
            <Link
              href="/login"
              className="text-[#16A34A] hover:text-[#15803D] font-bold"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
