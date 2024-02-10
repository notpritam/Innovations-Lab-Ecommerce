"use client";
import { getCategoriesDB } from "@/lib/actions/db.action";
import React, { useEffect, useState } from "react";
import { toast } from "../ui/use-toast";
import { ICategory } from "@/lib/models/Category_Modal";
import Image from "next/image";

export interface ICategoryResponse {
  _id: string;
  name: string;
  description: string;
  image: string;
}

const CategoryList = () => {
  const [categories, setCategories] = useState<ICategoryResponse[]>([]);
  const getCategories = async () => {
    const res = await getCategoriesDB();
    if (res) {
      console.log("Categories", res);
      setCategories(res);
    } else {
      toast({
        title: "Error",
        description: "No Categories Found.",
      });
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="flex gap-4 mt-8">
      {categories?.map((category) => (
        <div
          key={category._id}
          className="flex gap-2 p-4 bg-secondary shadow-md border-[2px] rounded-md border-secondary flex-col "
        >
          <Image
            src={category.image}
            alt={category.name}
            width={100}
            height={100}
            className="rounded-full h-[100px] w-[100px] object-cover"
          />
          <div className="flex justify-start flex-col">
            <h4 className="font-semibold text-[1.25rem]">{category.name}</h4>
            <p className="text-white opacity-40">{category.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
