import { useState } from 'react';
import { Badge, Button, ButtonGroup } from 'reactstrap';

function ItemCount({ itemCounterStart=0, itemStock=0, itemOnAdd }) {
    
    const [itemCounter, setItemCounter] = useState(itemCounterStart); 

    const incrementItemCounter = () => {
        itemCounter < itemStock && setItemCounter( itemCounter + 1 )
    }

    const decrementItemCounter = () => {
        itemCounter > 1 && setItemCounter( itemCounter - 1 )
    }

    const addToCart = () => {
        itemOnAdd(itemCounter);
    }
    
    return (
        <ButtonGroup className='w-100 my-1'>

            <Button 
                style={{width:60}}
                color='primary'
                onClick={decrementItemCounter}
                disabled={ itemStock > 0 ? false : true }
                children={'-'}
            />
            
            <Button
                color='warning'
                disabled={ itemStock > 0 ? false : true }
                onClick={addToCart}
                block
            >
                { itemStock > 0 && "ADD TO CART" } 
                <Badge className='ms-2' color='primary'>{ itemStock > 0 ? itemCounter : "OUT OF STOCK" }</Badge>
            </Button>

            <Button
                style={{width:60}}
                color='primary'
                onClick={incrementItemCounter}
                disabled={ itemStock > 0 ? false : true }
                children={'+'}
            />

        </ButtonGroup>
    );
}

export default ItemCount;