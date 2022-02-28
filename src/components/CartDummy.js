import CustomAlert from './CustomAlert';
import { useContext } from 'react';
import CartContext from '../context/CartContext';

function CartDummy() {

    const { 
        cart = [],
        removeItem,
        clear
    } = useContext(CartContext);

    return (
        <section name={'cart-dummy'} className='container p-5 text-center'>
            <CustomAlert label={"CART DUMMY COMPONENT"} />
            <article className='text-start p-2 my-5 border'>
                <ul>
                    {
                        cart.length > 0 
                        ? cart.map( (item) => { return (
                            <li key={item.id} >
                                <span className='badge bg-success'>{item.quantity}</span>
                                <span className='badge bg-primary ms-1'>{item.title}</span>
                                <span className='btn badge btn-danger ms-1' onClick={()=> removeItem(item.id)}>Eliminar</span>
                            </li>
                        )})
                        : <p>NO HAY PRODUCTOS EN EL CARRITO</p>
                    }
                </ul>
            </article>
            <button className='btn btn-danger' onClick={clear}>Limpiar Carrito de Comparas</button>
        </section>
    );
}

export default CartDummy;