import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/FirebaseService';
import CustomSpinner from './CustomSpinner';
import ItemDetail from './ItemDetail';
import CustomAlert from './CustomAlert';

function ItemDetailContainer() {

    const [ product, setProduct ] = useState({}); /* corrección */
    const [ loading, setLoading ] = useState(true);
    const { productId } = useParams();

    useEffect( () => {
        getProduct(productId, (data) => {
            setProduct(data)
            setLoading(false)
        })

        return( () => {
            setProduct({});
            setLoading(true);
        })

    }, []);

    return (
        <section name={'item-detail'} className='container p-5 text-center'>
            { 
                loading 
                    ? <CustomSpinner />
                    : product.title
                        ? <ItemDetail product={product} />
                        : <CustomAlert label={"El producto no existe"} />
            }
        </section>
    );
}

export default ItemDetailContainer;