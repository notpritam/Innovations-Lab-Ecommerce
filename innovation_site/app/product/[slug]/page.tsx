import Header from "@/components/Header";
import LoadingFallback from "@/components/LoadingFallback";
import ProductAction from "@/components/ProductAction";
import { ThreeJS } from "@/components/ThreeJs";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  console.log(slug, "this is slug");
  return (
    <div className="flex flex-col">
      <Header className="" />
      <div className="breadcrumbs text-[12px] p-4 mt-[60px] flex w-full gap-4">
        <Link href="/" className="opacity-35">
          Home
        </Link>{" "}
        <span className="opacity-35">/</span>
        <span className="opacity-55">Product</span>
        <span className="opacity-35">/</span>
        <span> {slug}</span>
      </div>
      <Suspense fallback={<LoadingFallback className="h-[400px]" />}>
        <div className="h-[400px] border border-black w-full">
          <ThreeJS />
        </div>
      </Suspense>

      <div className="flex flex-nowrap border-y-[1px] overflow-hidden overflow-x-scroll">
        {[1, 2, 3, 4, 5].map((item) => (
          <>
            <div className="min-h-[100px] min-w-[100px] object-cover object-center">
              <Image
                src={"/images/logan.jpeg"}
                className="h-[100px] w-[100px] object-cover object-center"
                height={100}
                width={100}
                alt="Image"
              />
            </div>
          </>
        ))}
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-2xl">Product title here</h1>
        <span className="text-4xl font-medium">{`₹ 1,000`}</span>
        <p className="text-gray-500 font-hind">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum
          nisi quo temporibus alias autem quibusdam, in repellendus consequatur
          facere assumenda nostrum quidem fuga accusantium aliquid harum non
          maiores quas! <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          voluptatum quia asperiores quasi eius ratione voluptatem nostrum
          porro! Magni consequatur beatae error quisquam amet iste sint placeat
          dignissimos consectetur impedit?
        </p>
      </div>

      <ProductAction slug={slug} />

      <div className="border-y-[1px] border-black">
        <span className="">
          <h2 className="text-2xl p-4 font-medium">Similar Products</h2>
        </span>
      </div>

      <div className="flex flex-nowrap overflow-hidden overflow-x-scroll">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <>
            <Link href={`/product/title-${item}`}>
              <div className="flex min-w-[250px] flex-col border-t-[1px] border-black ">
                <div className="min-h-[300px] w-full border-r-[1px] border-black ">
                  <Image
                    alt="Product Image"
                    className="h-[300px] w-full object-cover object-center"
                    height={300}
                    width={300}
                    src="/images/logan.jpeg"
                  />
                </div>
                <div className="flex flex-col gap-1 p-2 border-r-[1px] border-black">
                  <span className="text-[1.25rem]">Product Name</span>
                  <span className="text-sm font-poppins ">₹ 1,234</span>
                </div>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Page;
