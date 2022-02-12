import { Spinner } from 'reactstrap';

const CustomSpinner = () => {

    return (
        <>
            <Spinner color="warning" className='mt-5 mb-2' ></Spinner>
            <h1 className='lead mb-5'>Loading...</h1>
        </>
    );
} 

export default CustomSpinner;