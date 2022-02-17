import AppNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <AppNavbar title='Best-Planes-On-Sale' />
      <Routes>
        <Route path='/' element={ <ItemListContainer /> } />
        <Route path='/category/:categoryName' element={ <ItemListContainer /> } />
        <Route path='/product/:productId' element={ <ItemDetailContainer /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;