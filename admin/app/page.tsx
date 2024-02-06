"use client";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => redirect("/product?action=add")}>
        Add Product
      </Button>
      <Button onClick={() => redirect("/orders")}>Orders</Button>
      {session ? (
        <Button onClick={() => signOut()}>Logout</Button>
      ) : (
        <Button>Login</Button>
      )}
    </main>
  );
}
