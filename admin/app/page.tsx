"use client";
import { redirect } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import Header from "@/components/Header";

export default function Home() {
  const { status } = useSession();

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between ">
      <Header />
    </main>
  );
}
