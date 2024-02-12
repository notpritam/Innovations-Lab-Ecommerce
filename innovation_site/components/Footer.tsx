import React from "react";
import { Input } from "./ui/input";

function Footer() {
  return (
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
  );
}

export default Footer;
