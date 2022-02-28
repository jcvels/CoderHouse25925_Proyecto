import { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    /* Agrega un elemento al Cart */
    const addItem = (product, qtty) => {
        
        /* Se ejecuta cuando es un producto que ya estaba en el carrito */
        if( isInCart(product.id) ) {
            const cartUpdated = cart.map( (item) => {
                if(item.id === product.id)
                    item.quantity = item.quantity + qtty
                    return item
            } )
            setCart( cartUpdated )
        }

        /* Se ejecuta cuando es un producto que no está en el carrito */
        else {
            const productToAdd = {
                ...product,
                quantity:qtty
            }
            setCart([...cart,productToAdd])
        }

        return true
    }

    /* Elimina un elemento del Cart */
    const removeItem = (id) => {
        if( isInCart(id) ) {
            const newCart = cart.filter( (item) => !(item.id === id) )
            setCart(newCart)
        }
    }

    /* Elimina todos los elementos del Cart */
    const clear = () => {
        setCart([]);      
    }

    /* Indica si un elemento (id) se encuentra en el Cart */
    const isInCart = (id) => {
        return cart.some( (item)=> item.id === id )
    }

    return (
        <Context.Provider value={
            {
                cart,
                addItem,
                removeItem,
                clear,
                isInCart
            }
        } >
            {children}
        </Context.Provider>
    );
}

export default Context;