"use client";
import { ShoppingBagIcon } from "lucide-react";
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
import { redirect } from "next/navigation";

const Header = () => {
  const { status, data: session } = useSession();

  if (status === "unauthenticated") {
    redirect("/auth");
  }

  const { cart } = useUserStore();

  return (
    <header className="flex justify-between w-full p-4">
      <h1 className="text-blue-600 font-[2rem] tracking-wider">
        Innovations Lab
      </h1>
      <div className="flex gap-8">
        <Button>
          <ShoppingBagIcon /> {cart.length > 0 ? `(${cart.length})` : "0"}
        </Button>

        {status === "authenticated" ? (
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
        )}
      </div>
    </header>
  );
};

export default Header;
