import './App.css';
import Contador from './Components/Contador';
import ContadorMejorado from './Components/ContadorMejorado';
import ShoppingCart from './Components/ShoppingCart';
import CrudApi from './Components/CrudApi';

function App() {
  return (
    <div>
      <h1> React Reducers </h1>
      <hr/>
      <CrudApi/>
      <hr />
      <ShoppingCart/>
      <hr />
      <ContadorMejorado />
      <hr />
      <Contador />
    </div>
  );
}

export default App;
