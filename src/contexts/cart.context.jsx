import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
    removeItemFromCart: ()=>{},
    cartCount: 0,
});

const addToCart = (cartItems, productToAdd)=>{
    const existingItem = cartItems.find(
        (item) => item.id === productToAdd.id);
    if(existingItem){
        return cartItems.map((item)=> item.id === productToAdd.id ? {...item, quantity: item.quantity+1} : item);
    }
    return [...cartItems, {...productToAdd, quantity: 1}];
}
const removeFromCart = (cartItems, cartItemToRemove) =>{
    const existingItem = cartItems.find(
        (item) => item.id === cartItemToRemove.id);

    if(existingItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
    return cartItems.map((item)=> item.id === cartItemToRemove.id ? {...item, quantity: item.quantity-1} : item);
}

export const CartContextProvider = ({children})=>{

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(()=>{
        const cartItemCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0)
        setCartCount(cartItemCount);
    },[cartItems]);

    const addItemToCart = (productToAdd)=>{
        setCartItems(addToCart(cartItems, productToAdd));
    }
    const removeItemFromCart = (cartItemToRemove)=>{
        setCartItems(removeFromCart(cartItems, cartItemToRemove));
    }
    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, cartItems, cartCount};

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
}