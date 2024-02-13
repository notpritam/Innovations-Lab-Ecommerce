"use client";
import { ShoppingBagIcon, AlignJustify, Search } from "lucide-react";
import React, { useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import useUserStore from "@/lib/store/store";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { usePathname, useSearchParams } from "next/navigation";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const { status, data: session } = useSession();

  const pathname = usePathname();

  // console.log(pathname, "this is my path");

  const { cart, setUser } = useUserStore();

  useEffect(() => {
    setUser({
      id: "123",
      name: session?.user?.name || "",
      email: session?.user?.email || "",
      image: session?.user?.image || "",
    });
  }, [session, setUser]);

  return (
    <header
      className={cn(
        "flex top-0 fixed h-[60px] bg-white z-[10] w-full justify-between p-4 border-b-[1px] border-black",
        className
      )}
    >
      <Link
        href="/"
        className=" font-medium relative tracking-wide text-[1.1rem] "
      >
        Innovations Lab
      </Link>
      <div className="flex h-full items-center relative gap-8">
        {pathname != "/product" && (
          <Link href={"/product"}>
            <Search strokeWidth={0.75} />
          </Link>
        )}
        <Sidebar>
          <div className="relative h-[24px] w-[24px] ">
            <Image
              alt="Cart Image"
              className="h-[24px] w-[24px]"
              height={16}
              width={24}
              src="/icons/cart.svg"
            />{" "}
            <span className="absolute top-1/2 left-1/2 text-opacity-25 text-[12px] translate-x-[-50%] translate-y-[-50%]">
              {cart.length > 0 ? `(${cart.length})` : "0"}
            </span>
          </div>
        </Sidebar>

        <Menubar className="border-none h-[24px] w-[24px] flex items-center pr-8 ">
          <MenubarMenu>
            <MenubarTrigger className="shadow-none border-none">
              <AlignJustify color="#000000" strokeWidth={0.75} />
            </MenubarTrigger>
            <MenubarContent className="w-screen bg-white z-[1] items-center flex justify-between flex-col p-0">
              {status === "authenticated" ? (
                <>
                  <Link
                    href={"/profile"}
                    className="p-4 border-b-[1px]  border-black w-full justify-between flex items-center"
                  >
                    My Profile
                  </Link>
                </>
              ) : (
                <>
                  <div
                    onClick={() => signIn("google")}
                    className="p-4 border-b-[1px]  border-black w-full justify-between flex items-center"
                  >
                    Login
                  </div>
                </>
              )}
              <Link
                href={"/orders"}
                className="p-4 border-b-[1px]  border-black w-full justify-between flex items-center"
              >
                Orders
              </Link>
              {status === "authenticated" ? (
                <>
                  <div
                    onClick={() => signOut()}
                    className="p-4 border-b-[1px] border-black w-full justify-between flex items-center"
                  >
                    Logout
                  </div>
                </>
              ) : null}
              <div className="p-4 border-b-[1px] border-black w-full justify-between flex items-center">
                Contact Us
              </div>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
};

export default Header;
