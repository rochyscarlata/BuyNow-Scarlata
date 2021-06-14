import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
   
        <Navbar/>
        <br/>
        <ItemListContainer greetings="Catalogo aca"/>
       
    </>
  );
}

export default App;
