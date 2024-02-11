import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="mt-[60px] p-4 border border-black border-t-0">
        <span className="text-[1.25rem]">Choose Category</span>
      </div>

      <div className="flex border-b-[1px] sticky top-[60px] bg-white border-black flex-nowrap overflow-hidden overflow-x-scroll p-4 gap-2">
        {[
          "Category 1",
          "Category 2",
          "Category 3",
          "Category 4",
          "Category 5",
        ].map((item) => (
          <>
            <div className="rounded-full bg-secondary px-3 py-2">
              <span className="whitespace-nowrap text-[.85rem]">{item}</span>
            </div>
          </>
        ))}
      </div>

      <div className="p-4 border-b-[1px] border-black">
        <span className="text-[1.25rem]">Category 1</span>
      </div>

      <div className="grid grid-cols-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <>
            <Link href={`/product/title-${item}`}>
              <div className="flex  flex-col border-t-[1px] border-black ">
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
                  <span className="text-sm">₹ 1,234</span>
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
