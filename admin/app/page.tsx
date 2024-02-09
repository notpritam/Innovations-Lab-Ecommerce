"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import {
  ShoppingBag,
  Users,
  Settings,
  LogOut,
  BarChart4,
  ShoppingBasket,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import Dashboard from "@/components/Pages/Dashboard";
import Orders from "@/components/Pages/Orders";
import AddProduct from "@/components/Pages/Add_Product";
import Categories from "@/components/Pages/Categories";

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
      label: "Add Product",
      value: "add-product",
      icon: <ShoppingBasket />,
      content: <AddProduct />,
    },
    {
      label: "Dashboard",
      value: "dashboard",
      icon: <BarChart4 />,
      content: <Dashboard />,
    },
    {
      label: "Orders",
      value: "orders",
      content: <Orders />,
      icon: <ShoppingBag />,
    },
    {
      label: "Users",
      value: "users",
      content: <Dashboard />,
      icon: <Users />,
    },
    {
      label: "Settings",
      value: "settings",
      content: <Dashboard />,
      icon: <Settings />,
    },
    {
      label: "Logout",
      value: "logout",
      content: <Button onClick={() => signOut()}>Logout</Button>,
      icon: <LogOut />,
    },
    {
      label: "Products",
      value: "products",
      content: <Dashboard />,
      icon: <ShoppingBasket />,
    },
    {
      label: "Categories",
      value: "categories",
      content: <Categories />,
      icon: <Users />,
    },
  ];

  if (status === "loading") return <div>Loading</div>;

  return (
    <main className="flex h-screen w-screen ">
      <Tabs defaultValue={seletectTab} className="w-full flex">
        <TabsList className="px-4 h-full p-[0] rounded-[0px] flex items-start justify-start flex-col">
          <div className="flex items-center h-[100px] w-full justify-center">
            <Image src="/innovation.png" alt="logo" width={64} height={64} />
          </div>{" "}
          {navList.map((item) => (
            <TabsTrigger
              key={item.label}
              className="w-full font-thin rounded-[0px] flex justify-start gap-2 pr-8"
              value={item.value}
            >
              {item.icon}
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="p-8 w-full flex-grow">
          {navList.map((item) => (
            <TabsContent key={item.label} className="w-full" value={item.value}>
              {item.content}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </main>
  );
}
