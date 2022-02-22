import CustomSpinner from './CustomSpinner';
import ItemDetail from './ItemDetail';
import { getProduct } from '../data/AsyncMock';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomAlert from './CustomAlert';

function ItemDetailContainer() {

    const [ product, setProduct ] = useState({}); /* corrección */
    const [ loading, setLoading ] = useState(true);

    const { productId } = useParams();

    useEffect( () => {
        getProduct(productId)
            .then( (data) => setProduct(data) )
            .catch( (error) => console.error(error) )
            .finally( () => setLoading(false) )

        return( () => {
            setProduct();
            setLoading(true);
        })

    }, [productId]);

    return (
        <section name={'item-detail'} className='container p-5 text-center'>
            { 
                loading 
                    ? <CustomSpinner />
                    : product
                        ? <ItemDetail product={product} />
                        : <CustomAlert label={"El producto no existe"} />
            }
        </section>
    );
}

export default ItemDetailContainer;