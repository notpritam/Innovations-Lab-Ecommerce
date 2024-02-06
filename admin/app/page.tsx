import { getUserSession } from "@/lib/session";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Home() {
  const user = await getUserSession();

  if (user === null) {
    redirect("/api/auth/signin");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(user)}
    </main>
  );
}
