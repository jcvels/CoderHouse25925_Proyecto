import { Link } from 'react-router-dom';

const CustomAlert = ({label}) => {

    return (
        <div className='mt-5 mb-2'>
            <img src='/svg/alert-fill.svg' alt='Ícono de Alerta' className="mb-2" width={40} />
            <h1 className='lead'>{label}</h1>
            <Link to={'/'} >Ir al catalogo de productos</Link>
        </div>
    );
} 

export default CustomAlert;