import { Col, Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle, Button } from 'reactstrap';
import ItemCount from './ItemCount';

function Item ( {product}) {

    const { description, title, price, pictureUrl } = product
    
    return (
        <Col className='col-md-4 mb-4' >
            <Card className='border-warning'>
                <div style={{height:150, overflow:'hidden', alignItems:'center'}}>
                    <img className='img-fluid' src={pictureUrl} />
                </div>
                <CardBody className='bg-white'>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardSubtitle>{description}</CardSubtitle>
                    <CardText className='text-muted'>$ {price}</CardText>
                    <Button block color='warning' onClick={() => { alert("No hace nada!") }} >Detalles del Producto</Button>
                    <ItemCount />
                </CardBody>
            </Card>
        </Col>
    )
}

export default Item;