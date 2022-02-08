import { Container, Row } from 'reactstrap';
import ItemCount from './ItemCount';

function ItemListContainer({title, comment}) {

    const handlerOnAdd = (itemCounter) => {
        console.log("Se agregaron " + itemCounter + " items al carrito de compras.");
        alert("Se agregaron " + itemCounter + " items al carrito de compras.");
    };

    return (
        <Container className='mt-5 pt-5'>
            <Container fluid className='mt-5 p-5 rounded border border-warning text-center'>
                <h1 className='display-4'>{title}</h1>
                <p className='lead mt-3'>{comment}</p>
                <Row>
                    <ItemCount
                        itemName={"Producto #1"}
                        itemDescription={"Producto de prueba 1"}
                        itemPrice={124.54}
                        itemPictureSrc={""} 
                        itemCounterStart={1}
                        itemStock={0}
                        itemOnAdd={handlerOnAdd}
                    />
                    <ItemCount
                        itemName={"Producto #2"}
                        itemDescription={"Producto de prueba 2"}
                        itemPrice={875.90}
                        itemPictureSrc={""} 
                        itemCounterStart={1}
                        itemStock={10}
                        itemOnAdd={handlerOnAdd}

                    />
                    <ItemCount
                        itemName={"Producto #3"}
                        itemDescription={"Producto de prueba 3"}
                        itemPrice={261.9}
                        itemPictureSrc={""} 
                        itemCounterStart={1}
                        itemStock={54}
                        itemOnAdd={handlerOnAdd}
                    />
                    <ItemCount
                        itemName={"Producto #4"}
                        itemDescription={"Producto de prueba 4"}
                        itemPrice={767.89}
                        itemPictureSrc={""} 
                        itemCounterStart={1}
                        itemStock={32}
                        itemOnAdd={handlerOnAdd}
                    />
                </Row>
            </Container>
        </Container>
    );
}

export default ItemListContainer;