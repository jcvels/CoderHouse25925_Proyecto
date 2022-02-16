import AppNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const hightlitherCategories = ["Jets","Propellers","Anphibian","Sprayer"];

function App() {
  return (
    <>
      <AppNavbar title='Best-Planes-On-Sale' categories={hightlitherCategories} />
      <ItemListContainer title={'Desafio Clase VI'} comment={'Catálogo con MAPS y Promises'}/>
      <ItemDetailContainer title={'Desafio Clase VII'} comment={'Detalle de Producto'} />
    </>
  );
}

export default App;