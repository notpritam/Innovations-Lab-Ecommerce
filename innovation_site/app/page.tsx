import Header from "@/components/Header";
import { ThreeJS } from "@/components/ThreeJs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink } from "lucide-react";
// importing necessary functions
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header className="fixed shadow-lg z-[2] bg-white" />
      <div className="h-[300px] border border-black w-full">
        <ThreeJS />
      </div>
      <div className="p-4 flex flex-col gap-8 items-start border-b-[1px] border-black">
        <div className=" flex flex-col">
          <span className="text-[3em] leading-[130%] font-light">
            Discover endless possibilities at our Innovation Lab Ecommerce
          </span>
          <span className="text-[1.5rem] font-thin">
            Print your ideas or shop our curated 3D models today!
          </span>
        </div>

        <Button className="bg-transparent flex items-center gap-4 border-opacity-15 text-black border-[1px] border-black">
          Browse Models
          <ExternalLink color="#000000" strokeWidth={0.75} />
        </Button>
      </div>

      <div className="">
        <div className=" px-4 py-4 border-b-[1px] border-black">
          <span className="text-2xl">Featured Products</span>
        </div>

        <div className="grid grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <>
              <div className="flex flex-col border-t-[1px] border-black ">
                <div className="min-h-[300px] w-full border-r-[1px] border-black ">
                  <Image
                    alt="Product Image"
                    className="h-[300px] w-full"
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
            </>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 uppercase w-full">
        <div className="border-t-[1px] border-black border-r-[1px] items-center justify-center flex p-4">
          <span className="text-[1.25rem]">Instagram</span>
        </div>
        <div className="border-t-[1px] border-black  items-center justify-center flex p-4 ">
          <span className="text-[1.25rem]">Contact</span>
        </div>

        <div className="border-[1px] border-black col-span-2 p-4">
          <Input
            placeholder="Email"
            className="border-none text-[1.25rem] p-0 focus:border-none rounded-none"
          />
        </div>
        <div className="border-[1px] border-black border-t-0 items-center justify-center flex p-4 col-span-2">
          <span className="text-[1.25rem]">Subscribe</span>
        </div>
      </div>
    </>
  );
}
