"use client";

import { allCategoryData } from "@/app/category/category.interface";
import getAllCategories from "@/app/category/category.services";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FooterLinks() {
  const { data } = useSession();

  const [categories, setCategories] = useState<allCategoryData[]>([]);
  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getAllCategories();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }

    fetchCategories();
  }, []);
  return (
    <>
      <div>
        <h3 className="font-bold text-lg mb-6">Shop</h3>
        <ul className="space-y-4 text-sm text-gray-400">
          <li>
            <Link
              href={`${data ? "/shop" : "/"}`}
              className="hover:text-main-color transition"
            >
              All Products
            </Link>
          </li>
          <li>
            <Link
              href={`${data ? "/category" : "/"}`}
              className="hover:text-main-color transition"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href={`${data ? "/brands" : "/"}`}
              className="hover:text-main-color transition"
            >
              Brands
            </Link>
          </li>

          {categories.length > 0 ? (
            categories.slice(1, 4).map((cat) => (
              <li key={cat._id}>
                <Link
                  href={`/categoryProducts/${cat._id}`}
                  className="hover:text-main-color transition"
                >
                  {cat.name}
                </Link>
              </li>
            ))
          ) : (
            <li className="p-2 text-xs text-gray-400">Loading...</li>
          )}
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-6">Account</h3>
        <ul className="space-y-4 text-sm text-gray-400">
          <li>
            <Link
              href={`${data ? "/profile/address" : "/"}`}
              className="hover:text-main-color "
            >
              My Account
            </Link>
          </li>
          <li>
            <Link
              href={`${data ? "/allorders" : "/"}`}
              className="hover:text-main-color "
            >
              Order History
            </Link>
          </li>
          <li>
            <Link
              href={`${data ? "/wishlist" : "/"}`}
              className="hover:text-main-color "
            >
              Wishlist
            </Link>
          </li>
          <li>
            <Link
              href={`${data ? "/cart" : "/"}`}
              className="hover:text-main-color "
            >
              Shopping Cart
            </Link>
          </li>
          <li>
            <Link
              href={`${data ? "/" : "/login"}`}
              className="hover:text-main-color "
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              href={`${data ? "/" : "/register"}`}
              className="hover:text-main-color "
            >
              Create Account
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-6">Support</h3>
        <ul className="space-y-4 text-sm text-gray-400">
          <li>
            <Link
              href={`${data ? "/contactus" : "/"}`}
              className="hover:text-main-color transition"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link href="/help" className="hover:text-main-color transition">
              Help Center
            </Link>
          </li>
          <li>
            <Link href="shipping" className="hover:text-main-color transition">
              Shipping Info
            </Link>
          </li>
          <li>
            <Link href="/returns" className="hover:text-main-color transition">
              Returns & Refunds
            </Link>
          </li>
          <li>
            <Link
              href="/track-order"
              className="hover:text-main-color transition"
            >
              Track Order
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
