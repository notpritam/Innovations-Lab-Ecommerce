import { ThreeJS } from "@/components/ThreeJs";
import React from "react";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  console.log(slug, "this is slug");
  return (
    <div>
      <ThreeJS />
    </div>
  );
};

export default Page;
