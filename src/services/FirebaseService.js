import { initializeApp } from "firebase/app";
import { doc, getFirestore, query, where } from 'firebase/firestore';
import { getDoc, getDocs, collection } from 'firebase/firestore'

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