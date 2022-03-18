import { initializeApp } from "firebase/app";
import { doc, getFirestore, query, where, getDoc, getDocs, collection, addDoc, writeBatch } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appIdXXX
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* get categories */
export const getCategories = () => {
  return new Promise( (resolve, reject) => {
    getDocs(collection(db,'categories'))
      .then( (res) => { 
        const data = res.docs.map( doc => { return { id:doc.id, ...doc.data() } })
        resolve(data)
      })
      .catch( (error) => {
        reject('Error al obtener las categorias:', error)
      })
  })
}

/* get products */
export const getProducts = (category) => {
  return new Promise( (resolve, reject) => {
    const getDocsParams = category
      ? query( collection(db,'products'), where('category', '==', category) )
      : collection(db,'products')

    getDocs(getDocsParams)
      .then( (res) => { 
        const data = res.docs.map( doc => { return { id:doc.id, ...doc.data() } })
        resolve(data)
      })
      .catch( (error) => {
        reject('Error al obtener los datos:', error)   
      })
  })
}

/* get product */
export const getProduct = (id) => {
  return new Promise( (resolve, reject) => {
    const getDocParams = doc(db,'products',id)
    getDoc(getDocParams)
      .then( (res) => { 
        const data = { id:res.id, ...res.data() }
        resolve(data)
      })
      .catch( error => {
        reject('Error al obtener los datos:', error)
      })
  })
}

/* setOrder / carga la orden en Firestore */
export const setOrder = (order) => {
  return new Promise( (resolve, reject) => {
    const batch = writeBatch(db)
    const outOfStock = []
    const id = 0
    let count = 0
  
    order.items.forEach( item => {
      getDoc( doc(db, 'products', item.id) )
        .then( res => {
          count++
          res.data().stock >= item.quantity
            ? batch.update( doc(db, 'products', item.id), { stock: res.data().stock - item.quantity } )
            : outOfStock.push(item.id)
          
          if( count === order.items.length) {
            if(outOfStock.length === 0) { 
              addDoc(collection(db,'orders'), order)
                .then( ({id}) => { batch.commit()
                    .then( () => resolve( {id,outOfStock} ) )
                })
            }
            else
              resolve({id, outOfStock})
          }
        })
        .catch( (error) => {
          reject('Error al procesar la orden:', error)
        })
    })
  })
}