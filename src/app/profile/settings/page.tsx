import { User, Lock,} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PasswordForm from "./PasswordForm";
import InformationForm from "./InformationForm";

export default function page() {
  return (
    <>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-800">Account Settings</h3>
        <p className="text-sm text-[#6A7282]">
          Update your profile information and change your password
        </p>
      </div>

      <Card className="border-none shadow-sm p-6">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-green-100 p-3 rounded-xl text-[#10b981]">
            <User size={24} />
          </div>
          <div>
            <h4 className="font-bold text-[#101828] text-base">
              Profile Information
            </h4>
            <p className="text-sm text-[#6A7292] font-medium mt-1">
              Update your personal details
            </p>
          </div>
        </div>

        <div className="space-y-5 max-w-2xl">
          <InformationForm />
        </div>

        <div className="mt-3 pt-8 border-t border-gray-100">
          <h5 className="text-sm font-bold text-gray-800 mb-4">
            Account Information
          </h5>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">User ID</span>
              <span className="text-gray-400 font-mono text-xs">
                69d2fdcaabaceafff65365d4
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Role</span>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100 shadow-none border-none">
                User
              </Badge>
            </div>
          </div>
        </div>
      </Card>

      <Card className="border-none shadow-sm p-6">
        <div className="flex items-center gap-4 mb-2">
          <div className="bg-yellow-100 p-3 rounded-xl text-yellow-600">
            <Lock size={24} />
          </div>
          <div>
            <h4 className="font-bold text-base text-[#101828] ">
              Change Password
            </h4>
            <p className="text-sm text-[#6A7282] font-medium mt-1">
              Update your account password
            </p>
          </div>
        </div>

        <div className="space-y-4 max-w-2xl">
          <PasswordForm />
        </div>
      </Card>
    </>
  );
}
