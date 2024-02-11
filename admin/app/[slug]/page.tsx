import React from "react";

import {
  ShoppingBag,
  Users,
  Settings,
  LogOut,
  BarChart4,
  ShoppingBasket,
} from "lucide-react";
import AddProduct from "@/components/Tabs/Add_Product";
import Dashboard from "@/components/Tabs/Dashboard";
import Orders from "@/components/Tabs/Orders";
import Products from "@/components/Tabs/Products";
import Categories from "@/components/Tabs/Categories";
interface NavItemProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  content?: React.ReactNode;
}

function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  const page = params.slug;
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
    <>
      <main className="h-screen p-8 w-full overflow-hidden ">
        {navList.map((item) => {
          if (item.value === page) {
            return item.content;
          }
        })}
      </main>
    </>
  );
}

export default Page;
