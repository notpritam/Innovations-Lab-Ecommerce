import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

import React from "react";
import { Input } from "./ui/input";
import { Trash } from "lucide-react";

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="p-4 flex flex-col justify-between w-full">
        <SheetHeader className="items-start ">
          <SheetTitle className="uppercase">Cart</SheetTitle>
          <SheetDescription className="text-left">
            0 items in your cart
          </SheetDescription>
        </SheetHeader>

        <div className="h-full overflow-hidden overflow-y-scroll gap-2 flex flex-col">
          {[1, 2, 3, 4, 5].map((item) => (
            <>
              <div className="flex gap-2">
                <Image
                  alt="Product Image"
                  className="h-[100px] w-[100px]   object-cover object-center"
                  height={100}
                  width={100}
                  src="/images/logan.jpeg"
                />
                <div className="flex flex-col">
                  <span className="text-[1.15rem] font-medium">
                    Product Name
                  </span>
                  <span className="font-poppins">₹ 1,234</span>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center text-[1.5rem]">
                      <span>-</span>
                      <span className="text-[1.25rem]">4</span>
                      <span>+</span>
                    </div>
                    <Trash size={16} />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        <SheetFooter>
          <button className="w-full uppercase bg-white border border-black p-4">
            Checkout
          </button>
          <span className="text-xl font-medium">Total: ₹ 4,000</span>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
