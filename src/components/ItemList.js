import { Row } from 'reactstrap';
import Item from './Item';

function ItemList ( {products=[]} ) {

    return (
        <Row >
            {
                products.map( (product) => {
                    return (
                        <Item
                            key={product.id}
                            product={product}
                        />
                    )
                })
            }
        </Row>
    );
}

export default ItemList;