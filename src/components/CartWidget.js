import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext'

function CartWidget() {

    const { getQuantity } = useContext(CartContext)

    const itemsOnCart = getQuantity()

    if(itemsOnCart < 1)
        return null

    return (
        <Link to={'/cart'} className='btn ms-2 me-2 position-relative bg-success'>
            <img src={'/svg/cart.svg'} width={'100%'} alt='Ícono carrito de compras' />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                { 
                    itemsOnCart < 10 
                        ? itemsOnCart
                        : '+9'
                }
            </span>
        </Link>
    );
}

export default CartWidget;