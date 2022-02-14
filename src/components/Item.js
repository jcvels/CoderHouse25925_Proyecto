import { Col, Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle, Button, CardHeader } from 'reactstrap';
import ItemCount from './ItemCount';

function Item ( {product}) {

    const { description, title, price, pictureUrl } = product
    
    return (
        <Col className='col-md-4 mb-4' >
            <Card className='border-warning text-start'>
                <CardHeader className='bg-warning text-center'>
                    <CardTitle tag="h5">{title}</CardTitle>
                </CardHeader>
                <div style={{height:200, overflow:'hidden', alignItems:'center'}}>
                    <img className='img-fluid' src={pictureUrl} />
                </div>
                <CardBody>
                    <CardSubtitle className='mb-2 text-muted'>${price}</CardSubtitle>
                    <p className='lead'>{description}</p>
                    <Button className='mt-auto mb-1' block color='warning' onClick={() => { alert("No hace nada!") }} >Detalles del Producto</Button>
                    <ItemCount />
                </CardBody>
            </Card>
        </Col>
    )
}

export default Item;