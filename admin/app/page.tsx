import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSession, signOut, getSession } from "next-auth/react";

import { useSearchParams } from "next/navigation";
import Dashboard from "@/components/Tabs/Dashboard";
import Orders from "@/components/Tabs/Orders";
import AddProduct from "@/components/Tabs/Add_Product";
import Categories from "@/components/Tabs/Categories";
import { getServerSession } from "next-auth";
import Product from "@/lib/models/Product_Modal";
import Products from "@/components/Tabs/Products";
import TabsPage from "@/components/Tabs";

export default async function Home() {
  return (
    <main className="flex h-screen w-screen ">
      <TabsPage currentTab="dashboard" />
    </main>
  );
}
