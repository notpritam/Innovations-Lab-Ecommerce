import Header from "@/components/Header";
import { ThreeJS } from "@/components/ThreeJs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink } from "lucide-react";
// importing necessary functions
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header className="fixed shadow-lg z-[2] bg-white" />
      <div className="h-[300px] border border-black w-full">
        <ThreeJS />
      </div>
      <div className="p-4 flex flex-col gap-8 items-start border-b-[1px] border-black">
        <div className=" flex flex-col">
          <span className="text-[2.4em] leading-[120%] font-medium">
            Discover endless possibilities at our Innovation Lab Ecommerce
          </span>
          <span className="text-[1.5rem] font-thin font-hind">
            Print your ideas or shop our curated 3D models today!
          </span>
        </div>

        <Button className="bg-transparent flex rounded-none border-black items-center font-hind gap-2 text-black border-[1px] shadow-none">
          Browse Models
        </Button>
      </div>

      <div className="">
        <div className=" px-4 py-4 border-b-[1px] border-black">
          <span className="text-2xl font-medium">Featured Products</span>
        </div>

        <div className="grid grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <>
              <Link key={index} href={`/product/title-${index}`}>
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
                    <span className="text-[1.15rem] font-medium">
                      Product Name
                    </span>
                    <span className="text-sm font-poppins">₹ 1,234</span>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 uppercase w-full">
        <div className="border-t-[1px] border-black border-r-[1px] items-center justify-center flex p-4">
          <span className="text-[1rem]">Instagram</span>
        </div>
        <div className="border-t-[1px] border-black  items-center justify-center flex p-4 ">
          <span className="text-[1rem]">Contact</span>
        </div>

        <div className="border-[1px] border-black col-span-2 p-4">
          <Input
            placeholder="Email"
            className="border-none text-[1.25rem] p-0 focus:border-none rounded-none"
          />
        </div>
        <div className="border-[1px] border-black border-t-0 items-center justify-center flex p-4 col-span-2">
          <span className="text-[1rem]">Subscribe</span>
        </div>
        <div className="border-[1px] border-black border-t-0 items-center justify-center text-[10px] flex p-4 py-8 col-span-2">
          <span className="text-[12px]">&copy; Innovation Lab 2024</span>
        </div>
      </div>
    </>
  );
}
