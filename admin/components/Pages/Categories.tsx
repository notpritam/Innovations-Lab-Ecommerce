"use client";
import { useState } from "react";
import Header from "../Header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { UploadButton } from "@/utils/uploadthing";

interface Category {
  name: string;
  description: string;
  image: string;
}

const Categories = () => {
  const [addCategory, setAddCategory] = useState(false);
  const handleAddCategory = () => {
    console.log("Add new product");
  };
  return (
    <div>
      <Header title="Categories" subtile="List of all available categories">
        <Button onClick={() => setAddCategory(!addCategory)}>
          Add new category
        </Button>
      </Header>

      {addCategory && (
        <div className="flex gap-4 flex-col mt-[4rem]">
          <Input placeholder="Category Name" />
          <Input placeholder="Description" />
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
          <UploadButton
            endpoint="categoryImageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />

          <Button onClick={() => handleAddCategory()}>Add Category</Button>
        </div>
      )}
    </div>
  );
};

export default Categories;
