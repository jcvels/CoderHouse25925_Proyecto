import { Nav, NavItem, Button, Badge } from 'reactstrap';

const handleClickDefault = () => { console.log('not-function-defined') }

function CartWidget({itemOnCart, handleClick=handleClickDefault}) {
    return (
        <Button color="success" className='ms-2 me-2 position-relative' onClick={handleClick}>
            <img src={'/cart.svg'} width={'100%'} alt='Ícono carrito de compras' />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                { itemOnCart < 10 ? itemOnCart : '+9' }
            </span>
        </Button>
    );
}

export default CartWidget;