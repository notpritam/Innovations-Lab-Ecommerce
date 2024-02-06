"use client";
import { Button } from "@/components/ui/button";

//Auth Imports
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

function Page() {
  // const { data: session } = useSession();

  // if (session) {
  //   redirect("/dashboard");
  // }
  return (
    <div className="w-screen h-screen items-center flex justify-center">
      <Button>Login with Google</Button>
    </div>
  );
}

export default Page;
