"use client";
import { ShoppingBagIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const { status, data: session } = useSession();

  return (
    <header className="flex justify-between">
      <h1 className="text-blue-600 font-[2rem] tracking-wider">
        Innovations Lab
      </h1>
      <div className="flex gap-8">
        <Button>
          <ShoppingBagIcon /> 1
        </Button>

        {status === "authenticated" ? (
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ) : (
          <Button></Button>
        )}
      </div>
    </header>
  );
};

export default Header;
