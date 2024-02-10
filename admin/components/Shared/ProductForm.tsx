"use client";
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { ICategoryResponse } from "./CategoryList";
import { getCategoriesDB } from "@/lib/actions/db.action";

import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import { UploadDropzone } from "@/utils/uploadthing";
import { arrayMove } from "@dnd-kit/sortable";
import ImageItem from "./ImageItem";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { addProductDB } from "@/lib/actions/db/Product.action";
import { toast } from "../ui/use-toast";
import { useSession } from "next-auth/react";

export interface AddProductProps {
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  tags: string[];
}

export interface ImageItemProps {
  src: string;
  alt: string;
  id: string;
}

const ProductForm = () => {
  const [addProduct, setAddProduct] = useState<AddProductProps>({
    title: "",
    description: "",
    price: 0,
    images: [],
    category: "",
    tags: [],
  });
  const [imageList, setImageList] = useState<ImageItemProps[]>([]);

  const [categoryList, setCategoryList] = useState<ICategoryResponse[]>([]);

  const getCategories = async () => {
    const response = await getCategoriesDB();
    const data = response?.map((category) => {
      return {
        name: category.name,
        description: category.description,
        image: category.image,
        _id: category._id.toString(),
      };
    });

    if (!data) return;
    setCategoryList(data);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id === over.id) {
      return;
    }

    const getTaskPosition = (id: string) => {
      return imageList.findIndex((image) => image.id === id);
    };

    setImageList((items) => {
      const oldIndex = getTaskPosition(active.id);
      const newIndex = getTaskPosition(over.id);

      return arrayMove(items, oldIndex, newIndex);
    });
  };

  const handleAddProduct = async () => {
    try {
      const product = {
        ...addProduct,
        images: imageList.map((image) => image.src),
      };

      addProductDB(product)
        .then((res) => {
          if (res) {
            toast({
              title: "Success",
              description: "Product added successfully.",
            });
          } else {
            toast({
              title: "Error",
              description: "Something went wrong.",
            });
          }
        })
        .catch((error) => {
          throw new Error(error);
        });
    } catch (e) {
      console.log(e);
      toast({
        title: "Error",
        description: "Something went wrong.",
      });
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="flex gap-4 flex-col mt-8">
      <div className="flex items-end gap-8 w-full">
        <div className="flex flex-col gap-2 w-full">
          <Label>Title</Label>
          <Input
            placeholder="Enter the title of the product"
            value={addProduct.title}
            onChange={(e) =>
              setAddProduct({ ...addProduct, title: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label>Price</Label>
          <Input
            placeholder="Enter the title of the product"
            value={addProduct.price}
            type="number"
            onChange={(e) =>
              setAddProduct({
                ...addProduct,
                price: parseInt(e.target.value),
              })
            }
          />
        </div>

        <div className="flex flex-col w-full gap-2">
          <Label>Category</Label>
          <Select
            onValueChange={(e) => {
              console.log("changed", e);
              setAddProduct({
                ...addProduct,
                category: e,
              });
            }}
          >
            <SelectTrigger className="">
              <SelectValue className="flex" placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categoryList.map((category, index) => {
                return (
                  <SelectItem value={category._id} key={index}>
                    <div className="flex items-center gap-2">
                      <Image
                        alt={category.name}
                        className="rounded-full object-cover object-center min-h-[20px] min-w-[20px]"
                        src={category.image}
                        height={20}
                        width={20}
                      />
                      <span>{category.name}</span>
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label>Description</Label>
        <Textarea
          value={addProduct.description}
          onChange={(e) =>
            setAddProduct({ ...addProduct, description: e.target.value })
          }
          placeholder="Enter product description here."
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label>Tags</Label>
        <Input
          // value={}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setAddProduct({
                ...addProduct,
                tags: [...addProduct.tags, e.currentTarget.value],
              });
              e.currentTarget.value = "";
            }
          }}
          placeholder="Enter tags separated by comma"
        />

        <div className="w-full flex gap-4 flex-wrap mt-6">
          {addProduct.tags.map((tag, index) => (
            <>
              <div
                key={index}
                className="rounded-full flex items-center gap-2 bg-secondary px-4 py-2 "
              >
                {tag}{" "}
                <X
                  className="cursor-pointer "
                  onClick={() => {
                    const newTags = addProduct.tags.filter(
                      (t, i) => i !== index
                    );
                    setAddProduct({ ...addProduct, tags: newTags });
                  }}
                  size={20}
                />
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label>Upload Images</Label>
        <UploadDropzone
          className="border-2 border-dashed border-gray-800 cursor-pointer rounded-md p-4 w-full h-40"
          endpoint="productImageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            const data = res;
            console.log("Files: ", res);
            const images = data.map((file, index) => {
              return {
                src: file.url,
                alt: file.name,
                id: index.toString() + file.name,
              };
            });

            setImageList([...imageList, ...images]);

            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>

      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <div className="flex gap-4">
          {imageList.length > 0 ? <Label>Images</Label> : null}{" "}
          <SortableContext
            items={imageList}
            strategy={horizontalListSortingStrategy}
          >
            {imageList.map((image, index) => {
              return (
                <ImageItem
                  key={index}
                  alt={image.id}
                  src={image.src}
                  id={image.id}
                />
              );
            })}
          </SortableContext>
        </div>
      </DndContext>

      <Button onClick={() => handleAddProduct()}>Submit</Button>
    </div>
  );
};

export default ProductForm;
