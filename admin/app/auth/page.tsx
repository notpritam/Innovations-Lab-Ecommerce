"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams, redirect } from "next/navigation";

function Page() {
  const { status } = useSession();

  if (status === "authenticated") {
    redirect("/");
  }

  const handleSignIn = async () => {
    const result = await signIn("google");

    if (!result.error) {
      router.push("/");
    } else {
      toast({
        title: "Login Failed",
        description: result?.error,
      });
    }
  };

  return (
    <div className="min-h-screen min-w-screen">
      {/* <Header /> */}
      <main className="flex flex-col items-center justify-center min-h-screen">
        <Button onClick={handleSignIn}>Sign in with Google</Button>
      </main>
    </div>
  );
}

export default Page;
