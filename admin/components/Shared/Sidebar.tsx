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

interface NavItemProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

function Sidebar() {
  const navList: NavItemProps[] = [
    {
      label: "Add Product",
      value: "add-product",
      icon: <ShoppingBasket />,
    },
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
      label: "Products",
      value: "products",
      icon: <ShoppingBasket />,
    },
    {
      label: "Categories",
      value: "categories",
      icon: <Users />,
    },
    {
      label: "Logout",
      value: "logout",
      icon: <LogOut />,
    },
  ];
  return (
    <div className="px-4 h-full p-[0] rounded-[0px] flex items-start justify-start flex-col">
      <div className="flex items-center h-[100px] w-full justify-center">
        <Image src="/innovation.png" alt="logo" width={64} height={64} />
      </div>{" "}
      {navList.map((item) => (
        <Link
          href={`/${item.value}`}
          key={item.label}
          className="w-full font-thin rounded-[0px] flex justify-start gap-2 pr-8"
        >
          {item.icon}
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
