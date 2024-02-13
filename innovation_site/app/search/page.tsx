import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";

function Page() {
  return (
    <div className="mt-[60px]">
      <div
        className="flex items-center border-[1px] p-4 py-2 border-black px-3 bg-white"
        cmdk-input-wrapper=""
      >
        <Search className="mr-2 h-6 w-6 shrink-0 opacity-50" />
        <Input
          placeholder="Search"
          className="flex h-11 text-[1.25rem] bg-transparent w-full rounded-md border-none focus-visible:ring-0 focus:border-none py-3 text-sm outline-[0] placeholder:text-muted-foreground  disabled:cursor-not-allowed disabled:opacity-50"
        />
      </div>
    </div>
  );
}

export default Page;
