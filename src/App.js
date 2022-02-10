import AppNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const hightlitherCategories = ["Jets","Propellers","Anphibian","Sprayer"];

function App() {
  return (
    <>
      <AppNavbar title='Best-Planes-On-Sale' categories={hightlitherCategories} />
      <ItemListContainer title={'Desafio Clase VI'} comment={'Catálogo con MAPS y Promises'}/>
    </>
  );
}

export default App;