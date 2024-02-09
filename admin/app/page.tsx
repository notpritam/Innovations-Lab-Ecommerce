"use client";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import Header from "@/components/Header";
import {
  ShoppingBag,
  Users,
  LayoutDashboard,
  Settings,
  LogOut,
  BarChart4,
  ShoppingBasket,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";

interface NavItem {
  label: string;
  value: string;
  icon: React.ReactNode;
  content?: React.ReactNode;
}

export default function Home() {
  const { status } = useSession();

  const searchParmas = useSearchParams();

  const seletectTab = searchParmas.get("tab") || "dashboard";

  const navList: NavItem[] = [
    {
      label: "Dashboard",
      value: "dashboard",
      icon: <BarChart4 />,
    },
    {
      label: "Orders",
      value: "orders",
      icon: <ShoppingBag />,
    },
    {
      label: "Users",
      value: "users",
      icon: <Users />,
    },
    {
      label: "Settings",
      value: "settings",
      icon: <Settings />,
    },
    {
      label: "Logout",
      value: "logout",
      icon: <LogOut />,
    },
    {
      label: "Products",
      value: "products",
      icon: <ShoppingBasket />,
    },
    {
      label: "Categories",
      value: "categories",
      icon: <Users />,
    },
  ];

  return (
    <main className="flex h-screen w-screen ">
      <Tabs defaultValue={seletectTab} className="w-full flex">
        <TabsList className="px-4 h-full p-[0] rounded-[0px] flex items-start justify-start flex-col">
          <div className="flex items-center justify-center">
            <Image src="/logo.svg" alt="logo" width={80} height={80} />
          </div>{" "}
          {navList.map((item) => (
            <TabsTrigger
              key={item.label}
              className="w-full font-thin rounded-[0px] flex justify-start gap-2"
              value={item.value}
            >
              {item.icon}
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="p-8">
          {navList.map((item) => (
            <TabsContent key={item.label} value={item.value}>
              Make changes to your account here.
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </main>
  );
}
