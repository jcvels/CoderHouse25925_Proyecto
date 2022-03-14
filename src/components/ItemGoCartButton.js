import { Link } from 'react-router-dom';

function ItemGoCartButton() {

    return (
        <Link to={'/cart'} className='btn btn-success w-100 my-1 fade show'>TERMINAR MI COMPRA</Link>
    )
}

export default ItemGoCartButton;