import CustomSpinner from './CustomSpinner';
import ItemDetail from './ItemDetail';
import { getProduct } from '../data/AsyncMock';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {

    const [ product, setProduct ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const { productId } = useParams();

    useEffect( () => {
        getProduct(productId)
            .then( (data) => setProduct(data) )
            .catch( (error) => console.error(error) )
            .finally( () => setLoading(false) )

    }, [productId]);

    return (
        <section name={'item-detail'} className='container p-5 text-center'>
            { 
                loading ? <CustomSpinner />
                        : <ItemDetail product={product} />
            }
        </section>
    );
}

export default ItemDetailContainer;