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

interface HeaderProps {
  title: string;
  subtile: string;
  children?: React.ReactNode;
}

const Header = ({ title, subtile, children }: HeaderProps) => {
  const { status, data: session } = useSession();

  if (status === "unauthenticated") {
    redirect("/auth");
  }

  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-white text-[2rem] font-bold tracking-wider">
          {title}
        </h1>
        <p className="text-white opacity-25">{subtile}</p>
      </div>
      {children}
    </header>
  );
};

export default Header;
