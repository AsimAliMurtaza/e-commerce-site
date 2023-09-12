import { createContext, useState } from "react";

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
});

const addToCart = (cartItems, productToAdd)=>{
    const existingItem = cartItems.find(
        (item) => item.id === productToAdd.id);
    if(existingItem){
        return cartItems.map((item)=> item.id === productToAdd.id ? {...item, quantity: item.quantity+1} : item);
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
}

export const CartContextProvider = ({children})=>{

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd)=>{
        setCartItems(addToCart(cartItems, productToAdd));
    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}