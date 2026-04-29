import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
  Truck,
  RotateCcw,
  ShieldCheck,
  Headset,
} from "lucide-react";

import logo from "@images/freshcart-logo.svg";
import FooterLinks from "./FooterLinks";

const features = [
  {
    icon: <Truck className="text-main-color" size={25} />,
    title: "Free Shipping",
    description: "On orders over 500 EGP",
  },
  {
    icon: <RotateCcw className="text-main-color" size={25} />,
    title: "Easy Returns",
    description: "14-day return policy",
  },
  {
    icon: <ShieldCheck className="text-main-color" size={25} />,
    title: "Secure Payment",
    description: "100% secure checkout",
  },
  {
    icon: <Headset className="text-main-color" size={25} />,
    title: "24/7 Support",
    description: "Contact us anytime",
  },
];

export default function Footer() {
  return (
    <>
      {" "}
      <section className="bg-green-50 px-4 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 ">
              <div className="p-3 rounded-xl bg-green-100 shadow-sm">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm md:text-base">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white w-40 p-2 rounded-md">
              <Image src={logo} alt="FreshCart Logo" width={140} height={40} />
            </div>
            <p className="text-gray-300 text-sm w-sm">
              FreshCart is your one-stop destination for quality products. From
              fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone size={18} className="text-green-500" />
                <span className="hover:text-main-color transition-colors cursor-pointer">
                  +1 (800) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail size={18} className="text-green-500" />
                <span className="hover:text-main-color transition-colors cursor-pointer">
                  support@freshcart.com
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin size={18} className="text-green-500" />
                <span>123 Commerce Street, New York, NY 10001</span>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <div className="flex gap-4 pt-2">
                <Link
                  href="https://web.facebook.com/"
                  target="_blank"
                  className="bg-gray-700/50 p-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  <Facebook size={20} />
                </Link>
              </div>
              <div className="flex gap-4 pt-2">
                <Link
                  href="https://x.com/"
                  target="_blank"
                  className="bg-gray-700/50 p-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  <Twitter size={18} />
                </Link>
              </div>
              <div className="flex gap-4 pt-2">
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="bg-gray-700/50 p-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  <Instagram size={18} />
                </Link>
              </div>
              <div className="flex gap-4 pt-2">
                <Link
                  href="https://www.youtube.com/"
                  target="_blank"
                  className="bg-gray-700/50 p-2 rounded-full hover:bg-green-600 transition-colors"
                >
                  <Youtube size={18} />
                </Link>
              </div>
            </div>
          </div>

          <FooterLinks />
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © 2026 FreshCart. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline">
              Cookie Policy
            </Link>
          </div>
          <div className="flex gap-4 items-center opacity-70">
            <span className="text-xs uppercase  text-gray-400">Visa</span>
            <span className="text-xs uppercase  text-gray-400">Mastercard</span>
            <span className="text-xs uppercase  text-gray-400">PayPal</span>
          </div>
        </div>
      </footer>
    </>
  );
}
