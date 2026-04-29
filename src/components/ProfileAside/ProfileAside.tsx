"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MapPin, Settings, ChevronRight } from "lucide-react";

export default function ProfileAside() {
  const pathname = usePathname();

  const isAddressActive = pathname === "/profile/address";
  const isSettingsActive = pathname === "/profile/settings";

  return (
    <aside className="lg:col-span-3">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
        <div className="p-4 border-b border-gray-100 font-bold text-[#101828] text-base">
          My Account
        </div>

        <nav className="flex flex-col">
          <Link
            href="/profile/address"
            className={`flex items-center justify-between p-4 transition-all border-s-4 ${
              isAddressActive
                ? "bg-green-50 text-[#10b981] border-[#10b981] font-medium"
                : "text-gray-600 border-transparent hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={` p-2 ${isAddressActive && "bg-[#22C55E] rounded-lg"}`}
              >
                <MapPin
                  size={18}
                  className={`${isAddressActive && "text-white"}`}
                />
              </div>

              <span>My Addresses</span>
            </div>
            <ChevronRight
              size={16}
              className={isAddressActive ? "text-[#10b981]" : "text-gray-300"}
            />
          </Link>

          <Link
            href="/profile/settings"
            className={`flex items-center justify-between p-4 transition-all border-l-4 ${
              isSettingsActive
                ? "bg-green-50 text-[#10b981] border-[#10b981] font-medium"
                : "text-gray-600 border-transparent hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={` p-2  rounded-lg ${isSettingsActive && "bg-[#22C55E] "}`}
              >
                <Settings
                  size={18}
                  className={`${isSettingsActive && "text-white"}`}
                />
              </div>

              <span className="font-medium">Settings</span>
            </div>
            <ChevronRight
              size={16}
              className={isSettingsActive ? "text-[#10b981]" : "text-gray-300"}
            />
          </Link>
        </nav>
      </div>
    </aside>
  );
}
