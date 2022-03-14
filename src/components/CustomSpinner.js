import { Spinner } from 'reactstrap';

const CustomSpinner = ({label='Estamos buscando lo que nos pediste...'}) => {

    return (
        <div className='mt-5 mb-2'>
            <Spinner color="warning" className='mb-2'></Spinner>
            <h1 className='lead'>{label}</h1>
        </div>
    );
} 

export default CustomSpinner;