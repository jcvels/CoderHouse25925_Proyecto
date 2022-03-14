import { initializeApp } from "firebase/app";
import { doc, getFirestore, query, where, getDoc, getDocs, collection, addDoc, writeBatch } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCtAtWHq5l-ipAkfalIIEMERkwFi_xX6JE",
  authDomain: "tienda-demo-v1.firebaseapp.com",
  projectId: "tienda-demo-v1",
  storageBucket: "tienda-demo-v1.appspot.com",
  messagingSenderId: "3346198368",
  appId: "1:3346198368:web:4fe8762d88762f216a3805"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* get categories */
export const getCategories = (onDataGotten) => {
  getDocs(collection(db,'categories'))
    .then( (res) => { 
      const data = res.docs.map( doc => { return { id:doc.id, ...doc.data() } })
      onDataGotten(data)
    })
}

/* get products */
export const getProducts = (category, onDataGotten) => {
  
  const getDocsParams = category
    ? query( collection(db,'products'), where('category', '==', category) )
    : collection(db,'products')
  
  getDocs(getDocsParams)
    .then( (res) => { 
      const data = res.docs.map( doc => { return { id:doc.id, ...doc.data() } })
      onDataGotten(data)
    })
}

/* get product */
export const getProduct = (id, onDataGotten) => {
  
  const getDocParams = doc(db,'products',id)
  
  getDoc(getDocParams)
    .then( (res) => { 
      const data = { id:res.id, ...res.data() }
      onDataGotten(data)
    })
}

/* setOrder / carga la orden en Firestore */
export const setOrder = (order, onSuccess, onError) => {

  const batch = writeBatch(db)
  const outOfStock = []
  let count = 0

  /* validación de stock para cada item del carrito */
  order.items.forEach( item => {
    getDoc( doc(db, 'products', item.id) )
      .then( res => {

        count++ /* sumo por cada item en el carrito */

        res.data().stock >= item.quantity
          ? batch.update( doc(db, 'products', item.id), { stock: res.data().stock - item.quantity } )
          : outOfStock.push(item.id)

        /* se ejecuta solo despues de procesar el ultimo item del carrito */ 
        if( count === order.items.length) {
          /* se ejecuta si todos los productos estan en stock */ 
          if(outOfStock.length === 0) { 
            addDoc(collection(db,'orders'), order)
              .then( ({id}) => { batch.commit()
                  .then( () => onSuccess(id) )
              })
          }
          /* se ejecuta si algún producto no tiene stock */
          else
            onError(outOfStock)
        }
      })
  })
}