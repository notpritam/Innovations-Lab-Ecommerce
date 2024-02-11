import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

//ICons
import {
  ShoppingBag,
  Users,
  Settings,
  LogOut,
  BarChart4,
  ShoppingBasket,
} from "lucide-react";
import AddProduct from "./Tabs/Add_Product";
import Dashboard from "./Tabs/Dashboard";
import Orders from "./Tabs/Orders";
import Products from "./Tabs/Products";
import Categories from "./Tabs/Categories";
import { getProductsDB } from "@/lib/actions/db/Product.action";

//Interface
interface NavItemProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  content?: React.ReactNode;
}

const TabsPage = async ({ currentTab }: { currentTab: string }) => {
  const navList: NavItemProps[] = [
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
      label: "Products",
      value: "products",
      content: <Products />,
      icon: <ShoppingBasket />,
    },
    {
      label: "Categories",
      value: "categories",
      content: <Categories />,
      icon: <Users />,
    },
    {
      label: "Logout",
      value: "logout",
      content: <>{/* <Button onClick={() => signOut()}>Logout</Button> */}</>,
      icon: <LogOut />,
    },
  ];
  return (
    <Tabs defaultValue={currentTab} className="w-full flex">
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
  );
};

export default TabsPage;
