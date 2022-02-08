import { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Col, ButtonGroup } from 'reactstrap';

function ItemCount({itemName="Nombre del Producto", itemDescription="Descripción del producto.", itemPrice=10, itemCounterStart=0, itemStock=0, itemOnAdd }) {
    
    const [itemCounter, setItemCounter] = useState(itemCounterStart); 

    const incrementItemCounter = () => {
        itemCounter < itemStock ? setItemCounter( itemCounter + 1 ) : alert('No puede solicitar mas unidades que las disponibles en stock.')
    }

    const decrementItemCounter = () => {
        itemCounter > 1 ? setItemCounter( itemCounter - 1 ) : alert('No puede solicitar menos de una unidad.')
    }

    const addToCart = () => {
        itemOnAdd(itemCounter);
    }
    
    return (
        <Col className='col-md-4 mb-4'>
            <Card className='border-warning'>
                <CardBody>

                    <CardTitle tag="h3">{itemName}</CardTitle>
                    <CardText>{itemDescription}</CardText>
                    <CardText className='text-muted'>STOCK = {itemStock}</CardText>
                    <CardText>
                        <strong>${itemPrice}</strong>
                    </CardText>

                    <ButtonGroup>

                        <Button 
                            style={{width:40}}
                            onClick={decrementItemCounter}
                            disabled={ itemStock > 0 ? false : true }
                            children={'-'}
                         />
                        
                        <Button
                            className='btn-warning'
                            disabled={ itemStock > 0 ? false : true }
                            onClick={addToCart}
                            children={itemStock > 0 ? "ADD " + itemCounter + " TO CART" : "OUT OF STOCK" }
                        />

                        <Button
                            style={{width:40}}
                            onClick={incrementItemCounter}
                            disabled={ itemStock > 0 ? false : true }
                            children={'+'}
                        />

                    </ButtonGroup>

                </CardBody>
            </Card>
        </Col>
    );
}

export default ItemCount;