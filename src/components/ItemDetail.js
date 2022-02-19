import { Col, Card, CardBody, CardTitle, Button, CardHeader, Row, Badge } from 'reactstrap';
import ItemCount from './ItemCount';

function ItemDetail ( {product}) {
  
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
                            <ItemCount itemCounterStart={1} itemStock={product.stock} itemOnAdd={()=>alert("to-do")}/>
                        </div>
                    </Col>
                </Row>
                <hr className='bg-warning mb-3 mt-3' />
                <Row>
                    <Col className='col-md-2' md >
                        <p>
                            Fabricación:
                            <br/>
                            <Badge color='primary' className='me-1'>
                                {product.modelYear}
                            </Badge>
                        </p>
                    </Col>
                    <Col className='col-md-2' md >
                        <p>
                            Horas de Vuelo:
                            <br/>
                            <Badge color='primary' className='me-1'>
                                {product.use}
                            </Badge>
                        </p>
                    </Col>
                    <Col className='col-md-2' md >
                        <p>
                            Categoría:
                            <br/>
                            <Badge color='success text-uppercase' className='me-1'>
                                {product.category}
                            </Badge>
                        </p>
                    </Col>
                    <Col className='col-md-6' md >
                        <p>
                            Equipamiento:
                            <br/>
                            {
                                product.equipment 
                                    &&
                                    product.equipment.map( (item) => {
                                        return ( 
                                            <Badge color='info' className='me-2' key={item}>
                                                {item}
                                            </Badge>
                                        )
                                    })
                             }
                        </p>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default ItemDetail;