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
    <div>
      {categories?.map((category) => (
        <div key={category._id} className="flex gap-4 items-center">
          <Image
            src={category.image}
            alt={category.name}
            width={100}
            height={100}
          />
          <div>
            <h4>{category.name}</h4>
            <p>{category.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
