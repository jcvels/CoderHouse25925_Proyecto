import { useContext, useState } from 'react';
import { Col, Card, CardBody, CardTitle, CardHeader, Row, Badge } from 'reactstrap';
import ItemCount from './ItemCount';
import ItemGoCartButton from './ItemGoCartButton';
import CartContext from '../context/CartContext';

function ItemDetail ( {product}) {

    const [confirm, setConfirm] = useState(false);

    const { addItem } = useContext(CartContext);

    const onAddToCart = (qttyToAdd) => {

        if (qttyToAdd > 0 & qttyToAdd <= product.stock) {
            setConfirm( addItem(product,qttyToAdd) );
        }
        else
            console.error('Se informó un valor menor a 1 o superior al stock disponible');
    };

    return (
        <Card className='border-warning text-start'>
            <CardHeader className='bg-warning text-center'>
                <CardTitle tag="h5">{product.title} - {product.label}</CardTitle>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col className='col-md-6' md>
                        <img className='img-fluid p-2' src={product.pictureUrl} />
                    </Col>
                    <Col className='col-md-6' md>
                        <p className='lead'>{product.description}</p>
                        <p>{product.descriptionLong}</p>
                        <div className='h-100'>
                            <p className='text-muted lead'>U$S {product.price}</p>

                            {
                                confirm
                                    ? <ItemGoCartButton />
                                    : <ItemCount itemCounterStart={1} itemStock={product.stock} itemOnAdd={onAddToCart}/>
                            }

                        </div>
                    </Col>
                </Row>
                <hr className='bg-warning mb-3 mt-3' />
                <Row>
                    <Col className='col-md-2' md >
                        <p>Fabricación:</p>
                        <Badge color='primary' >{product.modelYear}</Badge>
                    </Col>
                    <Col className='col-md-2' md >
                        <p>Horas de Vuelo:</p>
                        <Badge color='primary'>{product.use}</Badge>
                    </Col>
                    <Col className='col-md-2' md >
                        <p>Categoría:</p>
                        <Badge color='success text-uppercase'>{product.category}</Badge>
                    </Col>
                    <Col className='col-md-6' md >
                        <p>Equipamiento:</p>
                            {
                                product.equipment 
                                    && product.equipment.map( (item) => {
                                        return <Badge color='info' className='me-2' key={item}>{item}</Badge>
                                    })
                            }
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default ItemDetail;