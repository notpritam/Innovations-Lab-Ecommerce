import React from "react";

interface HeadingProps {
  className?: string;
  title: string;
}

function HeadingTitle({ className, title }: HeadingProps) {
  return (
    <div className=" px-4 py-4 lg:py-8  border-black">
      <span className="text-2xl lg:text-6xl font-medium">
        Featured Products
      </span>
    </div>
  );
}

export default HeadingTitle;
