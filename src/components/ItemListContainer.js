import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/FirebaseService';
import ItemList from './ItemList';
import CustomSpinner from './CustomSpinner';
import CustomAlert from './CustomAlert';
import { useNotificationServices } from '../services/NotificationService';

function ItemListContainer() {

    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { categoryName } = useParams();
    const setToast = useNotificationServices()

    useEffect( () => {
        getProducts(categoryName)
            .then( data => setProducts(data) )
            .catch( error => setToast('error',error) )
            .finally( () => setLoading(false) )               
        
        return( () => {
            setProducts([])
            setLoading(true)
        })
    }, [categoryName]);

    return (
        <section name={'item-list'} className={'container p-5 text-center'}>
            { 
                loading
                    ? <CustomSpinner />
                    : products.length > 0 
                        ? <ItemList products={products} />
                        : <CustomAlert label={"No hay productos disponibles"} />
            }
        </section>
    );
}

export default ItemListContainer;