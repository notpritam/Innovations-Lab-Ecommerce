"use client";
import { useState } from "react";
import Header from "../Header";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { UploadDropzone } from "@/utils/uploadthing";

export interface AddProductProps {
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  tags: string[];
  createdBy: string;
}

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState<AddProductProps>({
    title: "",
    description: "",
    price: 0,
    images: [],
    category: "",
    tags: [],
    createdBy: "",
  });
  return (
    <div>
      <Header title="Add New Product" subtile="Add a new Product " />

      <div className="flex gap-4 flex-col mt-8">
        <Input
          placeholder="Enter the title of the product"
          value={addProduct.title}
          onChange={(e) =>
            setAddProduct({ ...addProduct, title: e.target.value })
          }
        />
        <Textarea
          value={addProduct.description}
          onChange={(e) =>
            setAddProduct({ ...addProduct, description: e.target.value })
          }
          placeholder="Enter product description here."
        />

        <div className="flex flex-col gap-2">
          <Label>Upload Images</Label>
          <UploadDropzone
            endpoint="productImageUploader"
            onClientUploadComplete={(res) => {
              // Do something with the response
              const data = res;
              console.log("Files: ", res);
              // se({ ...category, image: data.url });
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
