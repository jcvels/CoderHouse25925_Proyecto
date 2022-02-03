import AppNavbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const hightlitherCategories = ["Jets","Propellers","Anphibian","Sprayer"];

function App() {
  return (
    <>
      <AppNavbar title='Best-Planes-On-Sale' color='red' categories={hightlitherCategories} />
      <ItemListContainer title={'Desafio Clase IV: Componentes I'} comment={'Yes, I liked yellow :)'}/>
    </>
  );
}

export default App;