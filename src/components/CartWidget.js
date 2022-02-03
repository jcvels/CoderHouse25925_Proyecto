import { Nav, NavItem, Button, Badge } from 'reactstrap';

const handleClickDefault = () => { console.log('not-function-defined') }

function CartWidget({itemOnCart, handleClick=handleClickDefault}) {
    return (
        <Nav navbar className='ms-2 me-2'>
            <NavItem>
                <Button color="success" className='ms-1 me-2 position-relative' onClick={handleClick}>
                    <img src={'./cart.svg'} width={'100%'} alt='Ícono carrito de compras' className="light" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        { itemOnCart < 10 ? itemOnCart : '+9' }
                    </span>
                </Button>
            </NavItem>
        </Nav>
    );
}

export default CartWidget;