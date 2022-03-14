import AppNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext'
import { NotificationServicesProvider } from './services/NotificationService';
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <NotificationServicesProvider>
        <CartContextProvider>
          <AppNavbar title='Best-Planes-On-Sale' />
          <Routes>
            <Route path='/' element={ <ItemListContainer /> } />
            <Route path='/category/:categoryName' element={ <ItemListContainer /> } />
            <Route path='/product/:productId' element={ <ItemDetailContainer /> } />
            <Route path='/cart/' element={ <Cart /> } />
          </Routes>
        </CartContextProvider>
      </NotificationServicesProvider>
    </BrowserRouter>
  );
}

export default App;