import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar'
import ItemListContainer from './components/Item/ItemListContainer';

function App() {
  return (
    <div className="App">
   
        <Navbar/>
        <br/>
        <ItemListContainer alert="Catalogo aca"/>
       
    </div>
  );
}

export default App;
