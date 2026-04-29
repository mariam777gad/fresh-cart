import { Truck, ShieldCheck, RotateCcw, Headset } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "On orders over 500 EGP",
    color: "text-blue-500",
    bg: "bg-blue-100",
    fill: "blue",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    desc: "100% secure transactions",
    color: "text-green-500",
    bg: "bg-green-100",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    desc: "14-day return policy",
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    desc: "Dedicated support team",
    color: "text-purple-500",
    bg: "bg-purple-100",
  },
];

export default function FeatureBar() {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="container  mx-auto grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 px-8 py-10">
        {features.map((item, i) => (
          <div
            key={i}
            className="flex rounded-xl bg-white items-center gap-4 p-4  shadow-sm"
          >
            <div className="flex items-center gap-4 ">
              <div className={`p-3 rounded-full ${item.bg}`}>
                <item.icon className={`${item.color}`} size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold ">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
