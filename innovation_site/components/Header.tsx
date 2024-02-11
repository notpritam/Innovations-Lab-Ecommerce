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
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const { status, data: session } = useSession();

  const { cart } = useUserStore();

  return (
    <header
      className={cn(
        "flex relative w-full justify-between p-4 border-b-[1px] border-black",
        className
      )}
    >
      <h1 className=" relative tracking-wide text-[1.1rem] ">
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

        <Menubar className="border-none h-[24px] w-[24px] flex items-center pr-8 ">
          <MenubarMenu>
            <MenubarTrigger className="shadow-none border-none">
              <AlignJustify color="#000000" strokeWidth={0.75} />
            </MenubarTrigger>
            <MenubarContent className="w-screen bg-white z-[1]">
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

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
