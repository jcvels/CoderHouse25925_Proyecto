const CustomAlert = ({label}) => {

    return (
        <div className='mt-5 mb-2'>
            <img src='/alert-fill.svg' alt='Ícono de Alerta' className="mb-2" width={40} />
            <h1 className='lead'>{label}</h1>
        </div>
    );
} 

export default CustomAlert;