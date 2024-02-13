"use client";
import {
  Sheet,
  SheetClose,
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
import { Frown, Trash } from "lucide-react";
import useUserStore from "@/lib/store/store";
import Link from "next/link";

function Sidebar({ children }: { children: React.ReactNode }) {
  const { cart, addInCart, removeItemFromCart } = useUserStore();
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className=" flex p-0 flex-col justify-between w-full">
        <SheetHeader className="items-start px-4 pt-4 ">
          <SheetTitle className="uppercase">Cart</SheetTitle>
          <SheetDescription className="text-left">
            {cart.length} items in your cart
          </SheetDescription>
        </SheetHeader>

        <div className="h-full p-4 overflow-hidden overflow-y-scroll gap-2 flex flex-col">
          {cart.length == 0 && (
            <div className="h-full p-4 gap-4 w-full border-dashed border-black border-[1px]  flex flex-col items-center justify-center">
              <Frown strokeWidth={0.35} size={124} />
              <span className="text-xl font-medium">Empty Cart</span>
              <div className="w-full border-[1px] border-black p-4 flex items-center justify-center">
                Continue Shopping
              </div>
            </div>
          )}
          {cart?.map((item) => (
            <>
              <div className="flex gap-2 border border-black">
                <Image
                  alt="Product Image"
                  className="h-[100px] w-[100px]   object-cover object-center"
                  height={100}
                  width={100}
                  src={item.image}
                />
                <div className="flex flex-col">
                  <span className="text-[1.15rem] font-medium">
                    {item.name}
                  </span>
                  <span className="font-poppins">₹ {item.price}</span>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center text-[1.5rem]">
                      <span
                        onClick={() => {
                          removeItemFromCart(item.id, false);
                        }}
                      >
                        -
                      </span>
                      <span className="text-[1.25rem]">{item.count}</span>
                      <span
                        onClick={() => {
                          addInCart({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            count: 1,
                            image: item.image,
                          });
                        }}
                      >
                        +
                      </span>
                    </div>
                    <Trash
                      onClick={() => {
                        removeItemFromCart(item.id, true);
                      }}
                      size={16}
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        {cart.length > 0 && (
          <SheetFooter className="p-4">
            <SheetClose asChild>
              <Link
                href="/checkout"
                className="w-full uppercase flex items-center justify-center bg-white border border-black p-4"
              >
                Checkout
              </Link>
            </SheetClose>

            <span className="text-xl font-medium">Total: ₹ {total}</span>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default Sidebar;
