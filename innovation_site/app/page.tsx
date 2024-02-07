"use client";

import Header from "@/components/Header";
// importing necessary functions
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Header />
    </>
  );
}
