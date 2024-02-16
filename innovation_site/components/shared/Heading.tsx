import { cn } from "@/lib/utils";
import React from "react";

interface HeadingProps {
  className?: string;
  title: string;
}

function HeadingTitle({ className, title }: HeadingProps) {
  return (
    <div
      className={cn(
        " px-4 py-4 lg:py-8  border-black border-b-[1px]",
        className
      )}
    >
      <span className="text-2xl lg:text-6xl font-medium">{title}</span>
    </div>
  );
}

export default HeadingTitle;
