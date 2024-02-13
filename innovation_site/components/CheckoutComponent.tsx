"use client";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import React from "react";
interface CheckoutComponentProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
}

function CheckoutComponent({
  title,
  className,
  children,
}: CheckoutComponentProps) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <div className="p-4 border-b-[1px] flex justify-between items-center border-black">
        <h1 className="text-xl font-medium">{title}</h1>
        <ChevronDown
          onClick={() => setOpen(!open)}
          className={cn(
            open ? "transform rotate-180" : "",
            "animate transition-transform duration-300 ease-in-out cursor-pointer"
          )}
          strokeWidth={0.75}
        />
      </div>
      {open && <div className={className}>{children}</div>}
    </>
  );
}

export default CheckoutComponent;
