import { Col, Card, CardBody, CardTitle, CardText, CardImg, CardSubtitle, Button } from 'reactstrap';

function Item ( {product}) {

    const { description, title, price, pictureUrl } = product
    
    return (
        <Col className='col-md-4 mb-4' >
            <Card className='border-warning'>
                <CardImg
                    alt={title}
                    src={pictureUrl}
                    top
                />
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardSubtitle>{description}</CardSubtitle>
                    <CardText>$ {price}</CardText>
                    <Button block color='warning' onClick={() => { alert("No hace nada!")}} >Detalles del Producto</Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default Item;