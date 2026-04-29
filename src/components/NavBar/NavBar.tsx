"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import logo from "@images/freshcart-logo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  CircleUser,
  Headset,
  Heart,
  LogOut,
  MapPin,
  Package,
  Search,
  Settings,
  ShoppingCart,
  User,
} from "lucide-react";
import { Field } from "../ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CartContext } from "@/Context/CartContext/CartContext";
import { getUserCart } from "../AddProductToCart/AddToCard.Action";
import CategoryDropdown from "./CategoryDropdown";
import { WishlistContext } from "@/Context/WishlistContext/WishlistContext";
import { getUserWishlist } from "../AddProductToWishlist/AddToWishlist.action";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function NavBar() {
  const { data } = useSession();
  const router = useRouter();
  const { cartCount, setCartCount } = useContext(CartContext);
  const { wishlistCount, setWishlistCount } = useContext(WishlistContext);
  async function handelLogOut() {
    await signOut({
      redirect: false,
    });
    router.push("/login");
  }
  React.useEffect(() => {

getUserCart().then(({ numOfCartItems }) => {
  setCartCount(numOfCartItems)
})


getUserWishlist().then(({count})=>{
  setWishlistCount(count)
})

    
    // setCartCount(
    //   getUserCart().then(({ numOfCartItems }) => {
    //     return numOfCartItems;
    //   }),
    // );

    // setWishlistCount(
    //   getUserWishlist().then((count)=>{
    //     return count 
    //   })
    // )
  }, []);
  return (
    <nav className=" py-2  h-18  bg-white shadow fixed left-0 right-0  z-100 ">
      <NavigationMenu
        viewport={false}
        className=" max-w-none justify-between py-2 px-40 "
      >
        {/* logo */}
        <div>
          <Image src={logo} alt="logo" />
        </div>

        <Field className="w-xs ">
          <InputGroup>
            <InputGroupInput
              id="input-group-url"
              placeholder="Search for products, brands and more...
"
            />
            <InputGroupAddon
              align="inline-end"
              className="bg-main-color  text-white text-center rounded-full mx-1.5 flex justify-center items-center p-2 h-auto text-2xl"
            >
              <Search className="w-4 h-4 " />
            </InputGroupAddon>
          </InputGroup>
        </Field>

        <NavigationMenuList className="">
          <NavigationMenuItem className="flex md:hidden">
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* right side links */}
          <NavigationMenuList>
            {/* list of links */}
            <NavigationMenuList>
              <NavigationMenuItem className="hidden md:flex">
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} hover:bg-transparent hover:text-main-color`}
                >
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem className="hidden md:flex">
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} hover:bg-transparent hover:text-main-color`}
                >
                  <Link href="/shop">shop</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* <NavigationMenuItem>
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
                    <li>
                      <NavigationMenuLink
                        asChild
                        className={`${navigationMenuTriggerStyle()} hover:bg-transparent hover:text-main-color`}
                      >
                        <Link href="/">Electronics</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        asChild
                        className={`${navigationMenuTriggerStyle()} hover:bg-transparent hover:text-main-color`}
                      >
                        <Link href="/">Womens Fashion</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        asChild
                        className={`${navigationMenuTriggerStyle()} hover:bg-transparent hover:text-main-color`}
                      >
                        <Link href="/">Mens Fashion</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        asChild
                        className={`${navigationMenuTriggerStyle()} hover:bg-transparent hover:text-main-color`}
                      >
                        <Link href="/">Beauty & Health</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}
              <CategoryDropdown />

              <NavigationMenuItem className="hidden md:flex">
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} hover:bg-transparent hover:text-main-color`}
                >
                  <Link href="/brands">Brands</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} hover:bg-transparent hover:text-main-color`}
                >
                  <Link href={"/contactus"}>
                    <div className="flex gap-2.5 items-center">
                      <div className="bg-green-100 rounded-full  p-2">
                        <Headset size={15} className="text-main-color" />
                      </div>
                      <div className="text-xs">
                        <p className="text-gray-500 font-medium">Support</p>
                        <p>24/7Help</p>
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} hover:bg-gray-50  hover:text-main-color`}
              >
                <Link href="/wishlist" className="relative">
                  <Heart />
                  <span className="absolute top-0 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-white">
                    {wishlistCount}
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} hover:bg-gray-50  rounded-full hover:text-main-color`}
              >
                <Link href="/cart" className="relative">
                  <ShoppingCart className="text-gray-400 fill-gray-400" />
                  <span className="absolute top-0 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-main-color text-xs font-semibold text-white">
                    {cartCount}
                  </span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            {data ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <CircleUser className="h-5 w-5 text-gray-600" />
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-64" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-row items-center gap-3 p-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <CircleUser className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-bold leading-none">
                          {data?.user?.name}
                        </p>
                      </div>
                    </div>
                  </DropdownMenuLabel>

                  <DropdownMenuSeparator />

                  <DropdownMenuGroup>
                    <DropdownMenuItem className="cursor-pointer py-3">
                      <User className="mr-3 h-4 w-4 text-gray-500" />
                      <Link href="/profile/address">My Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer py-3">
                      <Package className="mr-3 h-4 w-4 text-gray-500" />
                      <Link href="/allorders">My Orders</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer py-3">
                      <Heart className="mr-3 h-4 w-4 text-gray-500" />
                      <Link href="/wishlist">My Wishlist</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer py-3">
                      <MapPin className="mr-3 h-4 w-4 text-gray-500" />
                      <Link href={"/profile/address"}>Addresses</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer py-3">
                      <Settings className="mr-3 h-4 w-4 text-gray-500" />
                      <Link href={"/profile/settings"}>Settings</Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem className="cursor-pointer py-3 text-red-600 focus:text-red-600">
                    <LogOut className="mr-3 h-4 w-4" />
                    <span
                      onClick={function () {
                        handelLogOut();
                      }}
                    >
                      Sign Out
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <NavigationMenuItem className="hidden md:flex">
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} bg-main-color text-white text-md hover:bg-green-700 focus:bg-main-color   `}
                >
                  <Link href="/register">
                    <User /> sign in
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            )}
          </NavigationMenuList>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
