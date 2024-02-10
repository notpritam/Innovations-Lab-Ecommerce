import Header from "../Header";

import { toast } from "../ui/use-toast";
import { addProductDB } from "@/lib/actions/db/Product.action";
import ProductForm, { AddProductProps } from "../Shared/ProductForm";

const AddProduct = async () => {
  return (
    <div>
      <Header title="Add New Product" subtile="Add a new Product " />

      <ProductForm />
    </div>
  );
};

export default AddProduct;
