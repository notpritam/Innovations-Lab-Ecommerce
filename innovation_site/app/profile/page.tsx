import { Mail, Map, Package2, Pencil, Phone, User } from "lucide-react";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="mt-[60px]">
      <div className="p-4 border-b-[1px] border-black">
        <h1 className="text-xl font-medium">Profile</h1>
      </div>
      <div className="p-4 border-b-[1px] border-black">
        <div className="h-[100px] w-[100px] rounded-full border-black border-[1px] overflow-clip ">
          <Image
            alt="Profile Image"
            className="h-[100px] w-[100px] rounded-full object-cover object-center"
            height={100}
            width={100}
            src="/images/nature.jpeg"
          />
        </div>
      </div>

      <div className="p-4 border-black border-b-[1px] flex gap-4">
        <User strokeWidth={0.75} />
        <span className="opacity-75">Pritam Sharma</span>
      </div>
      <div className="p-4 border-black border-b-[1px] flex gap-4">
        <Mail strokeWidth={0.75} />
        <span className="opacity-75">notpritamsharma@gmail.com</span>
      </div>
      <div className="p-4 border-black border-b-[1px] flex gap-4">
        <Phone strokeWidth={0.75} />
        <span className="opacity-75">+91 - 6201560096</span>
      </div>
      <div className="p-4 border-black border-b-[1px] flex gap-4">
        <Map strokeWidth={0.75} />

        <span className="opacity-75">
          Stanza Living Lisbon House, E City, 560100
        </span>
      </div>
      <div className="p-4 border-black border-b-[1px] justify-center flex gap-4">
        <Pencil strokeWidth={0.75} />

        <span>Edit Details</span>
      </div>
      <div className="p-4 border-black border-b-[1px] justify-center flex gap-4">
        <Package2 strokeWidth={0.75} />

        <span>View Past Orders</span>
      </div>
    </div>
  );
}

export default Page;
