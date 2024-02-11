import Header from "@/components/Header";
import { ThreeJS } from "@/components/ThreeJs";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
// importing necessary functions
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-[300px] w-full">
        <ThreeJS />
      </div>
      <div className="p-4 flex flex-col gap-8 items-start">
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
    </>
  );
}
