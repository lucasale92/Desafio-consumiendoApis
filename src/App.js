import './App.css'
import ItemListContainer from './components/containers/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <div className="App">
        <h1> Pastas Lau Estilo Casero</h1>
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer greeting={'Hola! Bienvenido a mi página'} />
    </div>
  );
}

export default App;
