import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  user: User | null;
  bears: number;
  setUser: (user: User) => void;
  cart: CartProduct[];
  removeItemFromCart: (id: string, remove?: boolean) => void;
  addInCart: (product: CartProduct) => void;
  decreaseCount: (id: string) => void; // Added decreaseCount function
}

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
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
      user: null,
      bears: 0,
      setUser: (user: User) => {
        set((state) => {
          return {
            user: user,
          };
        });
      },
      cart: [] as any,
      removeItemFromCart: (id: string, remove?: boolean) => {
        set((state) => {
          const product = state.cart.findIndex((p) => p.id === id);
          const newCart = [...state.cart];
          if (remove || state.cart[product].count === 1) {
            newCart.splice(product, 1);
          } else {
            newCart[product].count--;
          }
          return {
            cart: [...newCart],
          };
        });
      },
      addInCart: (product: CartProduct) => {
        set((state) => {
          const newCart = [...state.cart];
          const index = newCart.findIndex((p) => p.id === product.id);
          if (index === -1) {
            newCart.push(product);
          } else {
            newCart[index].count += product.count;
          }

          return {
            cart: [...newCart],
          };
        });
      },
      decreaseCount: (id: string) => {
        // Implementation of decreaseCount function
        set((state) => {
          const product = state.cart.findIndex((p) => p.id === id);
          const newCart = [...state.cart];
          if (state.cart[product].count > 1) {
            newCart[product].count--; // Decrease the count
          }

          return {
            cart: [...newCart],
          };
        });
      },
    }),
    { name: "user-storage" }
  )
);

export default useUserStore;
