import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/FirebaseService';
import ItemList from './ItemList';
import CustomSpinner from './CustomSpinner';
import CustomAlert from './CustomAlert';

function ItemListContainer() {

    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const { categoryName } = useParams();

    useEffect( () => {
        getProducts( categoryName, (data) => {
            setProducts(data)
            setLoading(false)
        })
    
        return( () => {
            setProducts([])
            setLoading(true)
        })

    }, [categoryName]);

    return (
        <section name={'item-list'} className='container p-5 text-center'>
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