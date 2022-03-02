import { createContext, useState } from "react";

const Context = createContext();

export const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    /* Agrega un elemento al Cart */
    const addItem = (product, qtty) => {
        
        /* Se ejecuta cuando `product` es un producto que ya estaba en el carrito */
        if( isInCart(product.id) ) {
            const cartUpdated = cart.map( (item) => {
                if(item.id === product.id)
                    item.quantity = qtty
                return item
            })
            setCart(cartUpdated)
        }

        /* Se ejecuta cuando `product` es un producto que no está en el carrito */
        else {
            const productToAdd = {
                ...product,
                quantity:qtty
            }
            setCart([...cart,productToAdd])
        }
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

    /* Indica la cantidad de un elemento (id) que encuentra en el Cart */
    const getProductQuantity = (id) => {
        const productInCart = cart.find( (item)=> item.id === id )
        if(productInCart)
            return productInCart.quantity
        else
            return 0
    }

    /* calcula y devuelve la cantidad de elementos total del carrito */
    const getQuantity = () => {
        let sum = 0;
        cart.map( item => sum += item.quantity );
        return sum
    }

    /* calcula y devuelve la suma del precio de los productos en el carrito */
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