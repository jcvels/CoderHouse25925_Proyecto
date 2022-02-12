import { Container } from 'reactstrap';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import CustomSpinner from './CustomSpinner';
import { getProducts } from '../data/AsyncMock';
import { useEffect, useState } from 'react';

function ItemListContainer({title, comment}) {

    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect( () => {
        getProducts()
            .then( (data) => {
                setProducts(data);
                console.log('Products data loaded.');
            })
            .catch( (error) => console.error(error) )
            .finally( () => setLoading(false) )

    }, [products]);

    const handlerOnAdd = (itemCounter) => {
        console.log("Se agregaron " + itemCounter + " items al carrito de compras.");
    };

    return (
        <Container fluid className='my-5 p-2'>
            <Container className='mt-5 p-5 rounded border border-warning text-center'>
                <h1 className='display-4'>{title}</h1>
                <p className='lead mt-3'>{comment}</p>

                { loading && <CustomSpinner /> }

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