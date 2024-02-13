import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThreeJS } from "@/components/ThreeJs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Heading } from "lucide-react";
// importing necessary functions
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "./loading";
import LoadingFallback from "@/components/LoadingFallback";
import HeadingTitle from "@/components/shared/Heading";

export default function Home() {
  return (
    <>
      <div className="flex flex-col lg:flex-row-reverse lg:h-[90vh] lg:items-center w-full mt-[60px]">
        <Suspense
          fallback={
            <LoadingFallback className="h-[300px] lg:h-[90vh] w-[40%] lg:border-t-0" />
          }
        >
          <div className="h-[300px] lg:h-[90vh] border border-black w-full lg:w-[40%] lg:border-t-0">
            <ThreeJS />
          </div>
        </Suspense>
        <div className="p-4 flex flex-col gap-8 items-start border-b-[1px] lg:justify-center lg:w-full lg:h-[90vh] border-black">
          <div className=" flex flex-col  lg:gap-4 justify-center items-start  lg:w-[80%]">
            <span className="text-4xl lg:text-7xl leading-[120%] font-medium">
              Discover endless possibilities at our Innovation Lab Ecommerce
            </span>
            <span className="text-[1.5rem] lg:text-[2.5rem] font-thin font-hind">
              Print your ideas or shop our curated 3D models today!
            </span>
          </div>

          <Link
            href={"/product"}
            className="bg-transparent px-4 py-2 flex rounded-none border-black items-center font-hind gap-2 text-black border-[1px] shadow-none"
          >
            Browse Models
          </Link>
        </div>
      </div>

      <div className="">
        <HeadingTitle title="Featured Products" />
        <div className="grid grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <>
              <Link key={index} href={`/product/title-${index}`}>
                <div className="flex flex-col border-t-[1px] border-black ">
                  <div className="min-h-[300px] w-full border-r-[1px] border-black ">
                    <Image
                      alt="Product Image"
                      className="h-[300px] w-full object-cover object-center"
                      height={300}
                      width={300}
                      src={`/images/${index + 1}.jpg`}
                    />
                  </div>
                  <div className="flex flex-col gap-1 p-2 border-r-[1px] border-black">
                    <span className="text-[1.15rem] font-medium">
                      Product Name {index + 1}
                    </span>
                    <span className="text-sm font-poppins">₹ 1,234</span>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
