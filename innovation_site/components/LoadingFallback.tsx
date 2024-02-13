import { cn } from "@/lib/utils";
import React from "react";

function LoadingFallback({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center h-full", className)}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}

export default LoadingFallback;
