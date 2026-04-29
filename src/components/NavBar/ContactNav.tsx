import { Gift, Mail, Phone, User, UserPlus, Van } from "lucide-react";

export default function ContactNav() {
  return (
    <div className="bg-white">
      <div className=" container mx-auto  px-10 flex justify-between">
        <div className="flex gap-5 text-sm text-gray-500 font-medium py-2">
          <div className="flex items-center gap-1.5">
            <Van size={15} className="text-main-color" />
            <p>Free Shipping on Orders 500 EGP</p>
          </div>

          <div className="flex items-center gap-1.5">
            <Gift size={15} className="text-main-color" />
            <p>New Arrivals Daily</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-500 font-medium py-2">
          <div className="flex items-center gap-1.5">
            <Phone size={12} fill="gray" />
            <p>+1 (800) 123-4567</p>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail size={12} />
            <p>support@freshcart.com</p>
          </div>

          <div className="bg-[#E5E7EB] h-4 w-0.5"></div>
          <div className="flex items-center gap-1.5">
            <User size={15} />
            <p>Sing In </p>
          </div>

          <div className="flex items-center gap-1.5">
            <UserPlus size={15} fill="gray" />
            <p>Sing Up</p>
          </div>
        </div>
      </div>
    </div>
  );
}
