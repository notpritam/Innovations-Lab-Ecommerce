import Header from "../Header";

import ProductForm from "../Shared/ProductForm";

const AddProduct = async () => {
  return (
    <div>
      <Header title="Add New Product" subtile="Add a new Product " />

      <ProductForm />
    </div>
  );
};

export default AddProduct;
