"use client";
import useUserStore from "@/lib/store/store";
import React, { use } from "react";

interface ProductActionProps {
  slug: string;
  children?: React.ReactNode;
}

function ProductAction({ children, slug }: ProductActionProps) {
  const { addInCart } = useUserStore();
  return (
    <div className="border w-full flex h-[60px] sticky bottom-0">
      <button
        onClick={() => {
          addInCart({
            id: slug,
            name: "Product Name",
            price: 1234,
            count: 1,
            image: "/images/logan.jpeg",
          });
        }}
        className=" w-full cursor-pointer bg-white border border-black p-4"
      >
        Add to cart
      </button>
      <button className="w-full text-white bg-black p-4">Buy now</button>
    </div>
  );
}

export default ProductAction;
