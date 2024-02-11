"use client";
import { ShoppingBagIcon, AlignJustify } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useUserStore from "@/lib/store/store";

import Image from "next/image";

const Header = () => {
  const { status, data: session } = useSession();

  const { cart } = useUserStore();

  return (
    <header className="flex relative w-full justify-between p-4 border-b-[1px] border-black">
      <h1 className=" relative tracking-wide text-[1.1rem] font-medium">
        Innovations Lab
      </h1>
      <div className="flex h-full items-center relative gap-8">
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

        <div className="h-[24px] text-black w-[16px]">
          <AlignJustify color="#000000" strokeWidth={0.75} />
        </div>

        {/* {status === "authenticated" ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <Button onClick={() => signIn("google")}>Login</Button>
        )} */}
      </div>
    </header>
  );
};

export default Header;
