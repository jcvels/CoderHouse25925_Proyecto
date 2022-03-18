import { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

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
        <ButtonGroup className='w-100 my-1' disabled={ itemStock > 0 ? false : true }>
            <Button 
                style={{width:60}}
                color='outline-warning'
                onClick={decrementItemCounter}
                children={'-'}
            />
            <Button
                style = {{width:120}}
                color = 'secondary'
                disabled = { itemStock > 0 ? false : true }
                children = { itemCounter } 
            />
            <Button
                style={{width:60}}
                color='outline-warning'
                onClick={incrementItemCounter}
                //disabled={ itemStock > 0 ? false : true }
                children={'+'}
            />
            <Button
                color='success'
                disabled={ itemCounter > 0 ? false : true }
                onClick={addToCart}
                block
                children = { itemStock > 0 ? "AGREGAR AL CARRITO" : "SIN STOCK" } 
            />
        </ButtonGroup>
    );
}

export default ItemCount;