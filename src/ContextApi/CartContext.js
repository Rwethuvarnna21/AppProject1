import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const CartContext = createContext();
export const initialstate={quality:0}

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const AddCart = (item) => {
        setCart([...cart, item])
    }
    const removeCart = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);

    }
    const increaseQuantity=(itemId)=>{
        const updatedCart=cart.map((item)=>{
       if  (item.id!==itemId){

       
        return{...item,quality:item.quality+1}
       }
        return item;
    })
        
        setCart(updatedCart)
    }
    const decreaseQuantity=(itemId)=>{
        const updatedCart=cart.map((item)=>{
            if(item.id!==itemId && item.quality>1){
                return{...item,quality:item.quality-1}
            }
                return item;
            
        })
        setCart(updatedCart)
    }


return (
    <CartContext.Provider value={{cart,AddCart,removeCart,increaseQuantity,decreaseQuantity}}>
        {children}
        
    </CartContext.Provider>
)
}



const styles = StyleSheet.create({})