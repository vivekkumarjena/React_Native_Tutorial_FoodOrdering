import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CartItem, Product } from "../types";
import { randomUUID } from "expo-crypto";

type CartType = {
    items: CartItem[];
    addItem: (product: Product, size: CartItem["size"]) => void;
    updateQuantity: (itemId: string, amount: 1 | -1) => void;
}

export const CartContext = createContext<CartType>({
    items: [],            //Default empty
    addItem: () => { },     //     "
    updateQuantity: () => { },
});



const CartProvider = ({ children }: PropsWithChildren) => {

    const [items, setitems] = useState<CartItem[]>([])

    const addItem = (product: Product, size: CartItem["size"]) => {
        //if the item is already present then increase its quantity.

        const existingItem = items.find(
            (item) => item.product == product && item.size == size
        );

        if(existingItem){
            updateQuantity(existingItem.id , 1);
            return;
        }

        const newcartItem: CartItem = {
            id: randomUUID(),   //generates a random id every time
            product,
            product_id: product.id,
            size,
            quantity: 1,
        }

        setitems([newcartItem, ...items])
    }

    const updateQuantity = (itemId: string, amount: 1 | -1) => {

        setitems(items.map((item) =>
            item.id != itemId ? item : { ...item , quantity: item.quantity + amount }
        ).filter((item) => item.quantity > 0)
        )
    }

    return (
        <CartContext.Provider value={{ items, addItem, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

export const useCart = () => useContext(CartContext);