import { Row, Col, Card, CardBody, CardTitle, CardHeader } from 'reactstrap'
import CartItem from "./CartItem"

function CartList({cart, onRemove, total}) {
    return (
        <Card className='border-warning text-center'>
            <CardHeader className='bg-warning text-center'>
                <CardTitle tag="h5">Detalle de productos</CardTitle>
            </CardHeader>

            <CardBody>
                <Row className='text-start'>
                    <Col className='col-2 text-muted'>Cantidad</Col>
                    <Col className='col-4 text-muted'>Descripción</Col>
                    <Col className='col-2 text-muted'>Precio Unitario</Col>
                    <Col className='col-4 text-muted'>Subtotal</Col>
                </Row>

                {
                    cart.map( (item) => { return ( <CartItem key={item.id} item={item} onRemove={() => onRemove(item.id)} /> )})
                }

                <Row className='text-start mt-3'>
                    <Col className='col-6'></Col>
                    <Col className='col-2 text-muted'>Total:</Col>
                    <Col className='col-4 text-danger'>${total}</Col>
                </Row>

            </CardBody>
        </Card>
    )
}

export default CartList