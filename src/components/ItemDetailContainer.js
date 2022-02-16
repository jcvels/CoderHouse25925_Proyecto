import CustomSpinner from './CustomSpinner';
import ItemDetail from './ItemDetail';
import { getProduct } from '../data/AsyncMock';
import { useEffect, useState } from 'react';

function ItemDetailContainer({title, comment}) {

    const [ product, setProduct ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect( () => {
        getProduct(2)
            .then( (data) => {
                setProduct(data);
                console.log('Product data loaded.');
            })
            .catch( (error) => console.error(error) )
            .finally( () => setLoading(false) )

    }, [product]);

    const handlerOnAdd = (itemCounter) => {
        console.log("Se agregaron " + itemCounter + " items al carrito de compras.");
    };

    return (
        <section className='container p-5 text-center' style={{marginTop:100}}>
            <h1 className='display-4'>{title}</h1>
            <p className='lead mt-3'>{comment}</p>

            { loading && <CustomSpinner /> }

            <ItemDetail product={product} />

        </section>
    );
}

export default ItemDetailContainer;