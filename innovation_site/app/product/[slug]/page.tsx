import Header from "@/components/Header";
import { ThreeJS } from "@/components/ThreeJs";
import Link from "next/link";
import React from "react";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  console.log(slug, "this is slug");
  return (
    <>
      <Header className="bg-white" />
      <div className="breadcrumbs p-4 mt-[60px] flex w-full gap-4">
        <Link href="/" className="opacity-35">
          Home
        </Link>{" "}
        <span className="opacity-35">/</span>
        <span className="opacity-55">Product</span>
        <span className="opacity-35">/</span>
        <span> {slug}</span>
      </div>
      <div className="border-[1px] h-[400px]">
        <ThreeJS />
      </div>

      <div></div>
    </>
  );
};

export default Page;
