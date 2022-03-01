import { useContext } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardHeader, CardFooter } from 'reactstrap';
import CustomAlert from './CustomAlert';
import CartContext from '../context/CartContext';
import CartList from './CartList';

function Cart() {

    const { cart, removeItem, clear, getTotal } = useContext(CartContext);

    if(cart.length < 1)
        return (
            <section name={'cart'} className='container p-5 text-center'>
                <CustomAlert label={"No hay productos en el Carrito"} />
            </section>            
        )

    return (
        <section name={'cart'} className='container p-5 text-center'>
            
            <Card className='border-warning text-center'>

                <CardHeader className='bg-warning text-center'>
                    <CardTitle tag="h5">Detalle de productos</CardTitle>
                </CardHeader>

                <CardBody>
                    <CartList cart={cart} onRemove={removeItem} />
                </CardBody>

                <CardFooter className='text-start bg-white'>
                    <Row className='text-start'>
                        <Col className='col-3 text-muted' ></Col>
                        <Col className='col-4 text-muted'></Col>
                        <Col className='col-2 text-muted'>Total:</Col>
                        <Col className='col-2 text-danger'>${getTotal()}</Col>
                        <Col className='col-1 text-end'>
                            <span className='btn badge btn-danger' onClick={clear}>Limpiar</span>
                        </Col>
                    </Row>
                </CardFooter>

            </Card>

        </section>
    );
}

export default Cart;