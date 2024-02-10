"use client";
import Header from "../Header";
import { Button } from "../ui/button";
import CategoryForm from "../Shared/CategoryForm";
import { useState } from "react";
import CategoryList from "../Shared/CategoryList";

const Categories = () => {
  const [addCategory, setAddCategory] = useState(false);
  return (
    <div>
      <Header title="Categories" subtile="List of all available categories">
        <Button onClick={() => setAddCategory(!addCategory)}>
          Add new category
        </Button>
      </Header>

      {!addCategory && <CategoryList />}

      {addCategory && <CategoryForm />}
    </div>
  );
};

export default Categories;
