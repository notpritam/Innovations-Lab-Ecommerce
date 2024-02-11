import Link from "next/link";
import React from "react";

import {
  ShoppingBag,
  Users,
  Settings,
  LogOut,
  BarChart4,
  ShoppingBasket,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface NavItemProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

function Sidebar({ activeTab }: { activeTab: string }) {
  console.log("Active Tab: ", activeTab);
  const navList: NavItemProps[] = [
    {
      label: "Dashboard",
      value: "dashboard",
      icon: <BarChart4 />,
    },
    {
      label: "Products",
      value: "products",
      icon: <ShoppingBasket />,
    },
    {
      label: "Add Product",
      value: "add-product",
      icon: <ShoppingBasket />,
    },
    {
      label: "Orders",
      value: "orders",
      icon: <ShoppingBag />,
    },
    {
      label: "Categories",
      value: "categories",
      icon: <Users />,
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
  ];
  return (
    <div className=" h-screen min-w-[200px] border-r-[2px]  p-[0] rounded-[0px] flex items-start justify-start flex-col">
      <div className="flex items-center h-[100px] w-full justify-center">
        <Image src="/innovation.png" alt="logo" width={64} height={64} />
      </div>{" "}
      {navList.map((item) => (
        <Link
          href={`/${item.value}`}
          key={item.label}
          className={cn(
            "px-4 pl-8 items-center w-full py-4 font-thin rounded-[0px] flex justify-start gap-2",
            activeTab === item.value
              ? "text-opacity-[1] border-r-[2px] bg-opacity-25 bg-purple-600 font-medium"
              : "opacity-60"
          )}
        >
          {item.icon}
          <span className="whitespace-nowrap">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
