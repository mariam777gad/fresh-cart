import Link from "next/link";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { allCategoryData } from "@/app/category/category.interface";
import { useEffect, useState } from "react";
import getAllCategories from "@/app/category/category.services";

export default function CategoryDropdown() {
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
    <NavigationMenuItem>
      <NavigationMenuTrigger className="hover:bg-transparent hover:text-main-color">
        Category
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="">
          <li>
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} hover:bg-transparent hover:text-main-color`}
            >
              <Link href="/category">All Categories</Link>
            </NavigationMenuLink>
          </li>

          {categories.length > 0 ? (
            categories.slice(1, 5).map((cat) => (
              <li key={cat._id}>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} hover:bg-transparent hover:text-main-color`}
                >
                  <Link href={`/categoryProducts/${cat._id}`}>{cat.name}</Link>
                </NavigationMenuLink>
              </li>
            ))
          ) : (
            <li className="p-2 text-xs text-gray-400">Loading...</li>
          )}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
