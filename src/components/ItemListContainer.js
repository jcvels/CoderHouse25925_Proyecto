import { Container } from 'reactstrap';
import ItemCount from './ItemCount';
import { getProducts } from '../data/AsyncMock';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';

function ItemListContainer({title, comment}) {

    const [ products, setProducts ] = useState([]);

    useEffect( () => {
        getProducts().then( (data) => {
            setProducts(data);
            console.log('Products data loaded.');
        })
    }, [products]);

    const handlerOnAdd = (itemCounter) => {
        console.log("Se agregaron " + itemCounter + " items al carrito de compras.");
    };

    return (
        <Container className='mt-5 pt-5'>
            <Container fluid className='mt-5 p-5 rounded border border-warning text-center'>
                <h1 className='display-4'>{title}</h1>
                <p className='lead mt-3'>{comment}</p>

                <ItemList products={products} />

                <ItemCount
                    itemCounterStart={1}
                    itemStock={10}
                    itemOnAdd={handlerOnAdd}
                />

            </Container>
        </Container>
    );
}

export default ItemListContainer; 