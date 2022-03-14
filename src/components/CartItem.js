import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'

function CartItem({item, onRemove }) {

    return (
        <Row className='text-start'>
            <Col className='col-2' >{item.quantity}</Col>
            <Col className='col-4'>{item.title}</Col>
            <Col className='col-2'>${item.price}</Col>
            <Col className='col-2'>${item.price * item.quantity}</Col>
            <Col className='col-2 text-end'>
                <Link to={`/product/${item.id}`} className='btn badge btn-secondary ms-1'>
                    <img src={'/svg/edit.svg'} width={'100%'} alt='Editar' />
                </Link>
                <span className='btn badge btn-danger ms-1' onClick={onRemove}>
                    <img src={'/svg/delete.svg'} width={'100%'} alt='Eliminar' />
                </span>
            </Col>
        </Row>
    )
}

export default CartItem