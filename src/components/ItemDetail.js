import { Col, Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle, Button, CardHeader, Row, Badge } from 'reactstrap';
import ItemCount from './ItemCount';

function Item ( {product}) {
  
    return (
        <Card className='border-warning text-start'>
            <CardHeader className='bg-warning text-center'>
                <CardTitle tag="h5">{product.title}</CardTitle>
            </CardHeader>

            <CardBody>
                <Row>
                    <Col className='col-md-6' md>
                        <img className='img-fluid p-2' src={product.pictureUrl} />
                    </Col>
                    <Col className='col-md-6' md>
                        <p className='lead'>{product.description}</p>
                        <p>{product.descriptionLong}</p>
                        <p className='text-danger my-3 lead'>U$S {product.price}</p>
                    </Col>
                </Row>
                <hr className='bg-warning mb-3 mt-0' />
                <Row>
                    <Col className='col-md-3' md >
                        <p>
                            Fabricación:
                            <br/>
                            <Badge color='primary' className='me-1'>
                                {product.modelYear}
                            </Badge>
                        </p>
                    </Col>
                    <Col className='col-md-3' md >
                        <p>
                            Horas de Vuelo:
                            <br/>
                            <Badge color='primary' className='me-1'>
                                {product.use}
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
                                            <Badge color='primary' className='me-2' key={item}>
                                                {item}
                                            </Badge>
                                        )})
                             }
                        </p>
                    </Col>
                </Row>

                <Button className='mt-3' block color='warning' onClick={() => { alert("No hace nada!") }} >Comprar</Button>

            </CardBody>
        </Card>
    )
}

export default Item;