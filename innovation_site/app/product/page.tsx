import Header from "@/components/Header";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="mt-[60px] p-4 border border-black border-t-0">
        <span className="text-[1.25rem]">Choose Category</span>
      </div>

      <div className="flex border-b-[1px] border-black flex-nowrap overflow-hidden overflow-x-scroll p-4 gap-2">
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
    </div>
  );
};

export default Page;
