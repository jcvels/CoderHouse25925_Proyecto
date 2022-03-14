import { Col, Row } from 'reactstrap'
import CartItem from "./CartItem"

function CartList({cart, onRemove}) {
    return (
        <div>
            <Row className='text-start'>
                <Col className='col-2 text-muted' >Cant.</Col>
                <Col className='col-4 text-muted'>Descripción</Col>
                <Col className='col-2 text-muted'>Precio Unitario</Col>
                <Col className='col-2 text-muted'>Subtotal</Col>
                <Col className='col-2 text-muted'></Col>
            </Row>

            {
                cart.map( (item) => { return ( <CartItem key={item.id} item={item} onRemove={() => onRemove(item.id)} /> )})
            }

        </div>
    )
}

export default CartList