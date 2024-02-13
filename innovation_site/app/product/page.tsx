import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <Drawer>
      <div className="flex flex-col pt-[60px]">
        <div
          className="flex items-center sticky top-[60px] h-[60px] border-[1px] border-t-[0px] p-4 py-2 border-black px-3 bg-white"
          cmdk-input-wrapper=""
        >
          <Search className="mr-2 h-6 w-6 shrink-0 opacity-50" />
          <Input
            placeholder="Search"
            className="flex h-11 text-[1.25rem] bg-transparent w-full rounded-md border-none focus-visible:ring-0 focus:border-none py-3 text-sm outline-[0] placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50"
          />
          <DrawerTrigger>
            <SlidersHorizontal strokeWidth={0.75} />
          </DrawerTrigger>
        </div>

        <DrawerContent>
          <DrawerHeader className="flex items-start">
            <DrawerTitle>Filters</DrawerTitle>
          </DrawerHeader>
          <div className="flex  sticky top-[120px] bg-white border-black flex-nowrap overflow-hidden overflow-x-scroll pb-2 px-4 gap-2">
            {[
              "Category 1",
              "Category 2",
              "Category 3",
              "Category 4",
              "Category 5",
            ].map((item) => (
              <>
                <div className="rounded-full bg-secondary px-3 py-2">
                  <span className="whitespace-nowrap text-[.85rem]">
                    {item}
                  </span>
                </div>
              </>
            ))}
          </div>
          <DrawerFooter className="flex flex-row">
            <Button className="w-full">Filter</Button>
            <DrawerClose className="w-full">
              <Button className="w-full" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>

        <div className="p-4 border-b-[1px] border-black">
          <span className="text-[1.25rem] font-medium">Products</span>
        </div>

        <div className="grid grid-cols-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <>
              <Link href={`/product/title-${item}`}>
                <div className="flex  flex-col border-t-[1px] border-black ">
                  <div className="min-h-[300px] w-full border-r-[1px] border-black ">
                    <Image
                      alt="Product Image"
                      className="h-[300px] w-full object-cover object-center"
                      height={300}
                      width={300}
                      src={`/images/${(index % 4) + 1}.jpg`}
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
    </Drawer>
  );
};

export default Page;
