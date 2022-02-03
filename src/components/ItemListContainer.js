import { Container } from 'reactstrap';

function ItemListContainer({title, comment}) {
    return (
        <Container className='mt-5 pt-5'>
            <Container fluid className='mt-5 p-5 rounded bg-warning text-center'>
                <h1 className='display-4'>{title}</h1>
                <p className='lead mt-3'>{comment}</p>
            </Container>
        </Container>
    );
}

export default ItemListContainer;