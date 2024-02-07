import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  bears: number;
  cart: CartProduct[];
  addInCart: (product: CartProduct) => void;
}

interface CartProduct {
  id: string;
  name: string;
  price: number;
  count: number;
  image: string;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      bears: 0,
      cart: [] as any,
      addInCart: (product: CartProduct) =>
        set((state) => ({ cart: [...state.cart, product] })),
    }),
    { name: "user-storage" }
  )
);

export default useUserStore;
