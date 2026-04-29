import { Mail, Lock, ShieldCheck } from "lucide-react";

import PasswordWrapper from "./PasswordWrapper";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] flex items-center justify-center p-4 font-sans">
      <div className="max-w-7xl mt-30 w-full  rounded-[20px]  flex flex-col gap-5 md:flex-row  ">
        <div className="w-full md:w-1/2  p-12 flex flex-col items-center justify-center text-center">
          <div className="bg-white p-8 rounded-3xl shadow-sm mb-8">
            <Lock className="w-20 h-20 text-[#2b772b]" strokeWidth={1.5} />
          </div>

          <h2 className="text-[28px] font-bold text-[#212529] mb-4">
            Reset Your Password
          </h2>
          <p className="text-[#6c757d] text-[15px] leading-relaxed max-w-[320px] mb-8">
            Don't worry, it happens to the best of us. We'll help you get back
            into your account in no time.
          </p>

          <div className="flex gap-6 text-[#495057] text-[13px]">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#2b772b]" /> Email Verification
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#2b772b]" /> Secure Reset
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2  p-8 rounded-xl shadow-lg flex flex-col items-center justify-center">
          <PasswordWrapper />
        </div>
      </div>
    </div>
  );
}
