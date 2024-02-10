import TabsPage from "@/components/Tabs";
import React from "react";

function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  return (
    <main className="flex h-screen w-screen ">
      <TabsPage currentTab={params.slug} />
    </main>
  );
}

export default Page;
