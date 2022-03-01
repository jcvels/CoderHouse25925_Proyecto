import { Col, Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle, Button, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                    <CardSubtitle className='mb-2 text-muted'>U$S {price}</CardSubtitle>
                    <p className='lead'>{description}</p>
                    <Link to={"/product/" + product.id} className='btn btn-warning w-100 mt-auto mb-1' >Detalles del Producto</Link>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Item;