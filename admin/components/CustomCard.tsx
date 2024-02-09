import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CustomCardProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  description: string;
}

const CustomCard = ({
  title,
  description,
  className,
  children,
}: CustomCardProps) => {
  return (
    <div className={cn("w-full flex-grow", className)}>
      <Card className="w-full flex-grow">
        <CardHeader>
          <CardTitle className="text-[3rem]">{title}</CardTitle>
          <CardDescription className="text-[1.5rem]">
            {description}
          </CardDescription>
        </CardHeader>
        {children}
      </Card>
    </div>
  );
};

export default CustomCard;
