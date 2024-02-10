"use client";
import { UploadButton } from "@/utils/uploadthing";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Image from "next/image";
import { ICategory } from "@/lib/models/Category_Modal";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import { addCategoryDB } from "@/lib/actions/db.action";
interface CategoryFormProps {
  handleAddCategory: (category: ICategory) => void;
}

function CategoryForm() {
  const [category, setCategory] = useState<ICategory>({
    name: "",
    description: "",
    image: "",
  });

  const handleAddCategory = async (category: ICategory) => {
    try {
      const res = await addCategoryDB(category);

      if (res) {
        console.log("Category Added", res);
      }
    } catch (e) {
      console.log(e);
      toast({
        title: "Error",
        description: "Something went wrong.",
      });
    }
  };

  return (
    <div className="flex gap-4 flex-col mt-[4rem]">
      <Input
        value={category.name}
        placeholder="Category Name"
        onChange={(e) => setCategory({ ...category, name: e.target.value })}
      />
      <Input
        value={category.description}
        placeholder="Description"
        onChange={(e) =>
          setCategory({ ...category, description: e.target.value })
        }
      />

      <UploadButton
        endpoint="categoryImageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          const data = res[0];
          console.log("Files: ", res[0]);
          setCategory({ ...category, image: data.url });
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

      {category.image && (
        <div className="flex flex-col gap-2">
          <Label>Category Image</Label>
          <Image
            width={400}
            height={400}
            src={category.image}
            alt={category.name}
          />
        </div>
      )}

      <Button onClick={async () => handleAddCategory(category)}>
        Add Category
      </Button>
    </div>
  );
}

export default CategoryForm;
