import { useContext, useState} from 'react';
import { Button } from 'reactstrap';
import CustomAlert from './CustomAlert';
import CustomSpinner from './CustomSpinner';
import CartContext from '../context/CartContext';
import CartList from './CartList';
import { setOrder } from '../services/FirebaseService'
import { useNotificationServices } from '../services/NotificationService';
import { Timestamp } from 'firebase/firestore'
import CartForm from './CartForm';

function Cart() {

    const { cart, removeItem, clear, getTotal } = useContext(CartContext);
    const [ processing, setProcessing ] = useState(false)
    const [ buyer, setBuyer ] = useState( {
        name:'',
        phone:'',
        email:'',
        remarks:''
    })
    const setToast = useNotificationServices()
    const processOrder = () => {

        if(buyer.name && buyer.phone && buyer.email) {
            setProcessing(true)

            const newOrder = {
                buyer: buyer,
                items: cart,
                total: getTotal(),
                date: Timestamp.fromDate(new Date())
            }

            setOrder(
                newOrder, 
                (id) => {
                    setToast('success', `Se cargó la orden correctamente. ID = ${id}`)
                    clear()
                    setProcessing(false)
                },
                (outOfStock) => {
                    outOfStock.forEach( id => removeItem(id))
                    setToast('error', `Algunos items no contaban con stock suficiente para procesar la orden. Los eliminamos del carrito, deberas volver a confirmar para continuar.`)
                    setProcessing(false)
                }
            )
        }
        else
            setToast('error', 'Debe completar la información de contacto para continuar')       
    }
    
    /* se muestra mientras se procesa la orden */
    if(processing)
        return(
            <section name={'cart'} className='container p-5 text-center'>
                <CustomSpinner label='Estamos procesando tu orden...' />
            </section> 
        )

    /* se muestra si no hay item en el carrito */
    if(cart.length < 1)
        return (
            <section name={'cart'} className='container p-5 text-center'>
                <CustomAlert label={"No hay productos en el Carrito"} />
            </section>            
        )

    return (
        <section name={'cart'} className='container p-5 text-center'>

            <CartList cart={cart} onRemove={removeItem} total={getTotal()} />
            <CartForm setBuyer={setBuyer} />
            
            <article className='mt-5'>
                <Button color='danger' className='me-2' onClick={clear}>LIMPIAR CARRITO</Button>
                <Button color='success' onClick={processOrder}>FINALIZAR LA COMPRA</Button>
            </article>

        </section>
    );
}

export default Cart;