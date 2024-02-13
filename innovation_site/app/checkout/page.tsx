import CheckoutComponent from "@/components/CheckoutComponent";
import { Check, ChevronDown } from "lucide-react";
import React from "react";

function Page() {
  return (
    <div className="mt-[60px]">
      <div className="p-4 border-b-[1px] border-black">
        <h1 className="text-xl font-medium">Checkout</h1>
      </div>

      <div>
        <CheckoutComponent
          title="Order Summary"
          className="p-4 border-b-[1px] border-black"
        ></CheckoutComponent>

        <CheckoutComponent
          title="Shipping Address"
          className="p-4 border-b-[1px] border-black"
        ></CheckoutComponent>

        <CheckoutComponent
          title="Payment"
          className="p-4 border-b-[1px] border-black"
        ></CheckoutComponent>
      </div>
    </div>
  );
}

export default Page;
