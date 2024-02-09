import { useState } from "react";
import Header from "../Header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { UploadButton } from "@/utils/uploadthing";
import Image from "next/image";
import { connect } from "@/lib/db/mongodb";
import { toast } from "../ui/use-toast";
import { ICategory } from "@/lib/models/Category_Modal";
import connectDB from "@/lib/db/connect-db";

const Categories = () => {
  const [addCategory, setAddCategory] = useState(false);

  const [category, setCategory] = useState<ICategory>({
    name: "",
    description: "",
    image: "",
  });

  const handleAddCategory = async () => {
    try {
      const db = await connect();
    } catch (e) {
      console.log(e);
      toast({
        title: "Error",
        description: "Something went wrong.",
      });
    }
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

          <Button onClick={() => handleAddCategory()}>Add Category</Button>
        </div>
      )}
    </div>
  );
};

export default Categories;
