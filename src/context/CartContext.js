import { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    /* Agrega un elemento al Cart */
    const addItem = (product, qtty) => {
        if( isInCart(product.id) ) {
            const cartUpdated = cart.map( (item) => {
                if(item.id === product.id)
                    item.quantity = qtty
                return item
            })
            setCart(cartUpdated)
        }
        else {
            const productToAdd = {
                ...product,
                quantity:qtty
            }
            setCart([...cart,productToAdd])
        }
    }

    const removeItem = (id) => {
        if( isInCart(id) ) {
            const newCart = cart.filter( (item) => !(item.id === id) )
            setCart(newCart)
        }
    }

    const clear = () => {
        setCart([]);      
    }

    const isInCart = (id) => {
        return cart.some( (item)=> item.id === id )
    }

    const getProductQuantity = (id) => {
        const productInCart = cart.find( (item)=> item.id === id )
        if(productInCart)
            return productInCart.quantity
        else
            return 0
    }

    const getQuantity = () => {
        let sum = 0;
        cart.map( item => sum += item.quantity );
        return sum
    }

    const getTotal = () => {
        let totalPrice = 0;
        cart.map( item => totalPrice += (item.quantity * item.price) );
        return totalPrice
    }

    return (
        <Context.Provider value={
            {
                cart,
                addItem,
                removeItem,
                clear,
                isInCart,
                getProductQuantity,
                getQuantity,
                getTotal
            }
        } >
            {children}
        </Context.Provider>
    );
}

export default Context;