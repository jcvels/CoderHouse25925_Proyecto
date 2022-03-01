import { Col, Row } from 'reactstrap'

function CartItem({item, onRemove }) {

    return (
        <Row className='text-start'>
            <Col className='col-1' >{item.quantity}</Col>
            <Col className='col-6'>{item.title}</Col>
            <Col className='col-2'>${item.price}</Col>
            <Col className='col-2'>${item.price * item.quantity}</Col>
            <Col className='col-1 text-end'>
                <span className='btn badge btn-danger ms-1' onClick={onRemove}>Eliminar</span>
            </Col>
        </Row>
    )
}

export default CartItem