import { Spinner } from 'reactstrap';

const CustomSpinner = () => {

    return (
        <div className='mt-5 mb-2'>
            <Spinner color="warning" className='mb-2'></Spinner>
            <h1 className='lead'>Estamos buscando la información que nos pediste...</h1>
        </div>
    );
} 

export default CustomSpinner;