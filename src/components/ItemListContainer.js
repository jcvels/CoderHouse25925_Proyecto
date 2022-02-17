import ItemList from './ItemList';
import CustomSpinner from './CustomSpinner';
import { getProducts } from '../data/AsyncMock';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemListContainer() {

    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const { categoryName } = useParams();

    useEffect( () => {
        getProducts(categoryName)
            .then( (data) => setProducts(data) )
            .catch( (error) => console.error(error) )
            .finally( () => setLoading(false) )
        return setLoading(true);

    }, [categoryName]);

    return (
        <section name={'item-list'} className='container p-5 text-center'>
            { 
                loading ? <CustomSpinner />
                        : <ItemList products={products} />
            }
        </section>
    );
}

export default ItemListContainer;